// import services, {time, util} from './index.js';

const serverBus = new Vue();

export const priceService = {

    fetchRealTimePrice_otb_fn(context, selectedSymbol, handler) {
        if(!selectedSymbol || !selectedSymbol.symbolId){
            return;
        }
        var resolvedEndpoint = "https://" + context.domain + "/api/feed/" + context.env + "/" + context.user.token + "/last/price?symbols=" + selectedSymbol.code;

        $.ajax({
            headers: {
                "Authorization": "Bearer " + context.user.jwt,
            },
            url: resolvedEndpoint,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                if (data) {
                    data = data[0];
                    if (selectedSymbol) {
                        selectedSymbol.sellPrice = data.price;
                        selectedSymbol.buyPrice = data.price;
                        selectedSymbol.price = data.price;
                        selectedSymbol.time = data.time;
                        selectedSymbol.truestUpdated = data.time;
                        selectedSymbol.size = data.size;
                    }
                    if(handler) {
                        handler(data);
                    }
                }
            }
        });
    },

    fetchClosingPrice_otb_fn(context, handler) {
        var resolvedEndpoint = "https://" + context.domain + "/api/feed/Prod/closingPrice";

        $.ajax({
            headers: {
                "Authorization": "Bearer " + context.user.jwt,
            },
            url: resolvedEndpoint,
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                if (data) {
                    if(handler) {
                        handler(data);
                    }
                }
            }
        });
    },

    percentDifference_otb_fn(num1, num2) {
        if(!num1 || !num2){
            return 0;
        }
        // Calculate the absolute difference between the two numbers
        var difference = Math.abs(num1 - num2);
    
        // Calculate the average of the two numbers
        var average = (num1 + num2) / 2;
    
        // Calculate the percent difference
        var percentDiff = (difference / average) * 100;
    
        return (num1 < num2 ? 1:-1) * percentDiff;
    }
}

export default {
    priceService,
    serverBus
}
