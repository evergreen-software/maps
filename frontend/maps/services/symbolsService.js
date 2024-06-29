// import services, {time, util} from './index.js';

const serverBus = new Vue();

export const symbolsService = {

    knownSymbolsArray: [],

    symbolIdsDictionaryToObjectsArray_otb_fn(symbolsDictionary){
        this.knownSymbolsArray = Object.keys(symbolsDictionary).map((p, v)=> {
            return { code: symbolsDictionary[p], symbolId: p }
        });
        return this.knownSymbolsArray;
    },
    symbolDictionaryToObjectsArray_otb_fn(symbolsDictionary){
        this.knownSymbolsArray = Object.keys(symbolsDictionary).map((p, v)=> {
            return { symbolId: symbolsDictionary[p], code: p }
        });
        return this.knownSymbolsArray;
    },
    symbolIdFromCode_otb_fn(code){
        var symbol = this.knownSymbolsArray.find(p=>p.code === code);
        return symbol ? symbol.symbolId : 0;
    },
}

export default {
    symbolsService,
    serverBus
}
