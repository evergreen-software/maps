// import services, {time, util} from './index.js';

const serverBus = new Vue();

export const cacheService = {

    dbObjects: ["quick_price_history"],
    openDB: null,

    // Used to update the DB schema
    getDbVersion_otb_fn() {
        return 24;
    },

    // Save for symbol
    save_symbol_artefact_otb_fn(tableName, symbolId, item){
        if(cacheService.openDB){
            const txn = cacheService.openDB.transaction(tableName, 'readwrite');
            const store = txn.objectStore(tableName);
            let query = store.put({ id: symbolId, value: item, date: moment.utc().format('YYYY-MM-DD HH:MM') });
        }
    },
    
    getStoreIndexedDB_otb_fn (openDB, tableName, isReadonly) {
        var db = {};
        db.result = openDB.result;

        try {
            db.tx = db.result.transaction(tableName, isReadonly ? "readonly" : "readwrite");
        }
        catch(e) {
            if(e.message == "Failed to execute 'transaction' on 'IDBDatabase': One of the specified object stores was not found."){
                console.log("db.store = db.result.createObjectStore(\"" + tableName + "\", {keyPath: \"id\"});");
            }
            return;
        }
        return db;
    },

    load_otb_fn (endpoint) {
        return new Promise((resolve, reject) => {
            var db = {}

            var tableName = endpoint.substring(endpoint.lastIndexOf('/') + 1);
            var fileindex = null;
            var openDB = cacheService.openIndexedDB_otb_fn(fileindex);

            openDB.onsuccess = function() { 
                cacheService.openDB = openDB.result;
                db.result = openDB.result;
                var dbTable = cacheService.getStoreIndexedDB_otb_fn(openDB, tableName, true);
                if(!dbTable){ 
                    resolve(null);
                }
                dbTable.store = dbTable.tx.objectStore(tableName);

                var deepTables = ["year", "month"];

                var items = cacheService.getItems_otb_fn(dbTable)
                    .then(items => {
                        if(deepTables.indexOf(tableName) >= 0){
                            resolve({ data: items});
                        }
                        else{
                            resolve(items);
                        }
                    })
                    .catch(err => {
                        reject(err);
                        return;
                    });
            }
        });
    },

    openIndexedDB_otb_fn(fileindex) {
        // This works on all devices/browsers, and uses IndexedDBShim as a final fallback
        var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

        var openDB = indexedDB.open("AjuroDB", this.getDbVersion_otb_fn());
        openDB.onsuccess = function(event) {
            // db = DBOpenRequest.result;
            cacheService.openDB = event.target.result;
        };

        openDB.onerror = function(event) {
            console.error(event.currentTarget.error.message);
        };

        openDB.onupgradeneeded = function() {
            var db = {}
            db.result = openDB.result;

            cacheService.dbObjects.forEach(oname =>{
                try {
                    db.store = db.result.createObjectStore(oname, {keyPath: "id"});
                }
                catch(e) {}
            });
        };

        return openDB;
    },
    
    getItems_otb_fn(dbTable) {
        return new Promise((resolve, reject) => {
            /*
            var allRecords = dbTable.store.getAll().onsuccess = (event=>{
                resolve(allRecords.result);
            });
            */
            var items = [];

            dbTable.store.openCursor().onsuccess = (event=>{
                var cursor = event.target.result;

                // If the cursor is pointing at something, ask for the data
                if (cursor) {
                    items.push(cursor.value);
                    cursor.continue();
                }
                else{
                    resolve(items);
                }
            });
            dbTable.store.openCursor().onerror = (error=>{
                reject("Cannot divide by 0");
                return; // The function execution ends here 
            });
        });
    },
}

export default {
    cacheService,
    serverBus
}
