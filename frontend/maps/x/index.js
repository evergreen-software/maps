
var recentPriceHistoryInitialized = false;
function InitializeRcentPriceHistory() {
    var symbols = loadSymbolsDictionary_otb_fn(sendAlerts_otb_fn);
}
function sendAlerts_otb_fn(symbols){
    var el = document.getElementById('alertsFrame');
    var alertsFrame = getIframeWindow(el);
    if (alertsFrame && alertsFrame.setRecentPriceHistory && !recentPriceHistoryInitialized) {
        clearInterval(initializeRecentPriceHistoryInterval);
        recentPriceHistoryInitialized = true;
        // alertsFrame.setRecentPriceHistory(symbols.map(symbol => { return {symbolId: symbol.symbolId, data: [[3, 20], [4, 12], [7, 30],]} } ));
        setTimeout(() => alertsFrame.setRecentPriceHistory(symbols.map(symbol => { return {symbolId: symbol.symbolId, data: [] } } ), true), 2000);


        setTimeout(() => alertsFrame.setProgressStackBars({AllCount: 300, OldCount: 20, EmptyCount: 10, MissingCount: 30 }), 2000);
        
        
    }
}

function symbolDictionaryToObjectsArray_otb_fn(symbolsDictionary){
    return Object.keys(symbolsDictionary).map((p, v)=> {
        return { symbolId: parseInt(symbolsDictionary[p]), data: v }
    });
}

function loadSymbolsDictionary_otb_fn(nextFunction) {
    var context = this;
    $.ajax({
        url: "symbols.json",
    }).done(function (data) {
        var symbols = symbolDictionaryToObjectsArray_otb_fn(data);
        nextFunction(symbols);
    }).fail(function(xhr, status, error) {
        console.log("error" + error);
    });
}

function getIframeWindow(iframe_object) {
    var doc;

    if (iframe_object.contentWindow) {
        return iframe_object.contentWindow;
    }

    if (iframe_object.window) {
        return iframe_object.window;
    }

    if (!doc && iframe_object.contentDocument) {
        doc = iframe_object.contentDocument;
    }

    if (!doc && iframe_object.document) {
        doc = iframe_object.document;
    }

    if (doc && doc.defaultView) {
        return doc.defaultView;
    }

    // if (doc && doc.parentWindow) 
    {
        // return doc.parentWindow;
    }

    return undefined;
}

var initializeRecentPriceHistoryInterval = setInterval(InitializeRcentPriceHistory, 1000);


let parent = new Vue({
    el: "#adminApp",
    props: [],
    data() {
        return {
            frames: [
                {
                    id: "symbolFrame",
                    cases: [
                        testing_symbol_msft,
                        testing_symbol_amd,
                        testing_symbols_all
                    ]
                },
                {
                    id: "ordersFrame",
                    cases: [
                        testing_orders_sample_01,
                        testing_orders_sample_02
                    ]
                },
                {
                    id: "triggersFrame",
                    cases: [
                        testing_triggers_sample_01,
                        testing_triggers_sample_02
                    ]
                },
                {
                    id: "optionsFrame",
                    cases: [
                        testing_options_sample_01,
                        testing_options_sample_02
                    ]
                },
                {
                    id: "balanceFrame",
                    cases: [
                        testing_balance_sample_01,
                        testing_balance_sample_02
                    ]
                },
                {
                    id: "positionsFrame",
                    cases: [
                        testing_positions_sample_01,
                        testing_positions_sample_02
                    ]
                },
                {
                    id: "transactFrame",
                    cases: [
                        testing_transact_buy_sample_01,
                        testing_transact_sell_sample_01
                    ]
                },
                {
                    id: "alertsFrame",
                    cases: [
                        testing_alerts_sample_01,
                        testing_alerts_sample_02
                    ]
                },
                {
                    id: "shiftsFrame",
                    cases: [
                        testing_shifts_sample_01,
                        testing_shifts_sample_02,
                        testing_shifts_completed_sample_01
                    ]
                },
            ],
            user: {
                userId: 1,
                token: "Flo",
            },
            symbol: {
                symbolId: 17,
                code: "CCL",
                price: 10.2
            },
            appStatus:{
                IsConnected: true
            }
        }
    },
    mounted(){
        var context = this;

        var el = document.getElementById('alertsFrame');
        var alertsFrame = getIframeWindow(el);
        if (alertsFrame) {
            setInterval(() => alertsFrame.getPageStatus_otb_fn(context.appStatus), 2000, context.appStatus);
        }

        var el_menuFrame = document.getElementById('menuFrame');
        var menuFrame = getIframeWindow(el_menuFrame);
        if (menuFrame) {
            setInterval(() => menuFrame.getPageStatus_otb_fn(context.appStatus), 2000, context.appStatus);
        }
    },
    methods: {
        getPageStatus_otb_fn(){
            var context = this;
            var el = document.getElementById('menuFrame');
            var menuFrame = getIframeWindow(el);
            if (menuFrame) {                    
                    menuFrame.getPageStatus_otb_fn(context.appStatus);
            }
        },
        setDummyDataForWindow_otb_fn(frame, useCase){                
            var iframe = document.getElementById(frame.id);                 
            var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
            iframeDoc.vue.setDummyData_otb_fn(useCase.dummyData);     
        }
    }
});