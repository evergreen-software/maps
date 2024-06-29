// import services, {time, util} from './index.js';

const serverBus = new Vue();

export const brokerService = {

    getBrokerPositions_otb_fn(context, handler) {
        var model = {};
        var resolvedEndpoint = "https://" + context.domain + "/api/broker/" + context.env + "/" + context.user.token + "/alpaca/positions";
        $.ajax({
            headers: {
                "Authorization": "Bearer "  + context.user.jwt,
            },
            url: resolvedEndpoint,
            dataType: "json",
            type: "POST",
            data: JSON.stringify(model),
            contentType: "application/json",
            success: function(json){
                if(json && handler) {
                    handler(json);
                }
            }
        });
    },
}

export default {
    brokerService,
    serverBus
}
