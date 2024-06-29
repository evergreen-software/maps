

import {priceService} from "../services/priceService.js";
import {userService} from "../services/userService.js";
import {libService} from "../services/libService.js";
import {timeService} from "../services/timeService.js";
import * as OtbMenuComponent from "../components/menu.component.js";

document.vue = new Vue({
    el: "#adminApp",
    props: [],
    data() {
        return {
            userService:userService,
            libService:libService,
            timeService:timeService,

            // Debug
            showDebugMessages: false,
            isDebug: false,
            debugMessages: [],
            
            // Options
            emailOptions: [],
            emailTypes: [
                {
                    id: 12,
                    type: "Top Triggers",
                    info: "Hourly opportunities top list",
                },
                {
                    id: 13,
                    type: "Order Completed",
                    info: "More on order confirmations",
                },
                {
                    id: 14,
                    type: "Price Alert",
                    info: "Price alerts. Including yours",
                },
                {
                    id: 15,
                    type: "Suggestions",
                    info: "Daily triggers analysis",
                },
                {
                    id: 16,
                    type: "Triggers Reporting",
                    info: "MicroTriggers easy info",
                },
                {
                    id: 17,
                    type: "Low Balance Alert",
                    info: "Your balance was not sufficient",
                },
                {
                    id: 18,
                    type: "Buy Completed",
                    info: "Your order to buy completed",
                },
                {
                    id: 19,
                    type: "Sell Completed",
                    info: "Your order to sell completed",
                },
                {
                    id: 20,
                    type: "New Targets",
                    info: "After comparing and applying actions",
                },
            ],

            // Navigation
            orderId: null,
            positionId: null,
            balanceId: null,
            backTo: null,
            goToBalanceLink: null,
            hrefBack: null,
            href: null,
            url: null,
            i:0,
            //
            symbolIdsDictionary: [],
            backgroundColor: "rgb(255, 255, 255)",
            info1: true,
            orderStatusLookupItems: [
                //{ id: 0, name: 
                        "undefined",
                //{ id: 1, name: 
                        "New",
                //{ id: 2, name: 
                        "Accepted",
                //{ id: 3, name: 
                        "Filled",
                //{ id: 4, name: 
                        "Canceled" ,
                //{ id: 5, name: 
                        "Rejected" ,
                //{ id: 6, name: 
                        "Missing" ,
                //{ id: 7, name: 
                        "InsufficientBalance"
            ],
            // Common
            env: 'Prod',
            user: null,
            symbol: null,
            progressBar_intervalHandler: null,
            timeAgoHandler: null,
            isLocalhost: window.location.host.indexOf("localhost") >= 0,
            // Balance
            balanceExists: false,
            lastEquityValue: 0,
            cash: 0,
            lastPercentValue: 0,
            balanceHistory: [],
            balanceHistorySeries: null,
            balanceChart: null,
            // Progress
            progressBar_secods: 60,
            progressBar_timeOut: 60,
            progressBar_percent: 100,
            progressBar_blinkCount: 0,
            myVote: null,

            // Orders
            positions: [],
            selectedPosition: null,
            loadingOrders: true,
            // Navigation
            page: 'voting-help',
            lastPage: null,
            replaceAt: 0,

            positionStateLookupItems: [
                { id: 0, name: "Any", info: "All statuses" } ,
                { id: 1, name: "Waiting", info: "Generated by an instrument" } ,
                { id: 2, name: "Created", info: "Created by hand or triggered by algorithm" } ,
                { id: 3, name: "BuySuggested", info: "Waiting for user confirmation" } ,
                { id: 4, name: "BuyAccepted", info: "Order was accepted" } ,
                { id: 5, name: "BuyCompleted", info: "Waiting for user confirmation" } ,
                { id: 6, name: "BuyRejected", info: "User accepted" } ,
                { id: 7, name: "Expired", info: "Waiting expired, default action taken (e.g. Execute, Wait again or cancel)" } ,
                { id: 8, name: "Retracted", info: "Evaluaued to be retracted by the system as no more relevant" } ,
                { id: 9, name: "SellSuggested", info: "Once executed, the user will later decide to sell" } ,
                { id: 10, name: "SellAccepted", info: "Once executed, the user will later decide to sell" } ,
                { id: 11, name: "SellCompleted", info: "Once executed, the user will later decide to sell" } ,
                { id: 12, name: "SellRejected", info: "Once executed, the user will later decide to sell" } ,
                { id: 13, name: "SoldByUser", info: "Position closed by user" } ,
                { id: 14, name: "SoldBySystem", info: "Position closed by algorithms" },
                { id: 15, name: "Disabled", info: "Stop monitoring" } ,
                { id: 16, name: "Deleted", info: "Stop monitoring and hide" } ,
                { id: 17, name: "ResetRequested", info: "Request the server to clear it's view" } ,
                { id: 18, name: "BuyTransmitted", info: "BuyTransmitted" } ,
                { id: 19, name: "BuyCreated", info: "BuyCreated" } ,
                { id: 20, name: "SellTransmitted", info: "SellTransmitted" } ,
                { id: 21, name: "SellCreated", info: "SellCreated" } ,
                { id: 22, name: "Tolerance", info: "???" } ,
                { id: 23, name: "LowAnchor", info: "???" } ,
                { id: 24, name: "CancelTransmitted", info: "???" } ,
                { id: 25, name: "Canceled", info: "???" } ,
            ],
            // Others
            testPrice: 0,
            testSymbol: {
                code: "UAA",
                symbolId: 8053,
                trigger: [0, 8053, 0, 0, 0],
            },
            // Alerts
            lastTimestamp: 0,
            alerts: [],
            // 
            domain: window.location.host.indexOf("localhost") >= 0 ? "localhost:3061" : "stocktech.org:5000",
            qr: {
                value: null,
                size: 160,
                level: 'L',
                background: '#ffffff',
                foreground: '#000000',
                renderAs: 'svg',
            },
            triggers: // [0:SID,1:TID,2:UID,3:ENV,4:BUY,5:SELL,6:PBuy]
                [
                ],
            // Login 
            closingLogin: 0,
            closingClocking: 1,
            showLoginPlaceholder: true,
            showPasswordPlaceholder: true,
            email: null,
            privacyAgreement: false,
            host: (window.location.host.indexOf("localhost") >= 0 ? "local": null),
            isLocal: true || window.location.host.indexOf("localhost") >= 0,
            timeout: 10,
            confirmationChecks: 900,
            loginIntervalHandler: null,
            response: {userMessages:[]},
            userMessage: 'Enter your email',
            userMessageColor: 'orange',
            userConfirmed: false,
            highlightLogin: false,
            qrTimestamp: 0,
            timeLeft: 0,
            showPassword: false,
            password: null,
            setUserIntervalHandler: null,

            // Script Editor
            showScriptEditor: true,
            showLoginForm: true,
            scriptCode: "plot(percent(1.5))",
            // Basic
            width: 1000,
            userWarning: null,
            JWT: null,
            chart: null,
        }
    },
    mounted(){
        var context = this;

        // URL
        const urlParams = new URLSearchParams(window.location.search);
        this.url = window.location.search;
        
        // window.setSymbol({ symbolId: 10, code: "CCL", price: 10.5 });

        var symbolId = urlParams.get("symbolId");
        if(symbolId){
            var code = urlParams.get("code");
            var price = urlParams.get("price");
            this.symbol = { symbolId: parseInt(symbolId), code: code, price: parseFloat(price) };
        }
        
        var userId = urlParams.get("userId");
        if(userId){
            var token = urlParams.get("token");
            var jwt = urlParams.get("jwt");
            this.user = { userId: parseInt(userId), token: token, jwt: jwt, features: [] };
        }

        var orderId = urlParams.get("orderId");
        if(orderId){
            this.orderId = parseInt(orderId);
        }

        var balanceId = urlParams.get("balanceId");
        if(balanceId){
            this.balanceId = parseInt(balanceId);
        }

        var backTo = urlParams.get("backTo");
        if(backTo){
            this.backTo = backTo;
        }

        var env = urlParams.get("env");
        if(env){
            this.env = env;
            libService.setBackground_otb_fn(this, env, "urlParams");
            this.appStarted_otb_fn();
        }
        userService.restoreUser_otb_fn(context);
        this.setUserIntervalHandler = setInterval(userService.restoreUser_otb_fn, 400, context);
    },
    computed:{
    },
    methods: {
        setDummyData_otb_fn(dummyData){
            Object.keys(dummyData).forEach((key)=>{
                if(key === 'triggers'){ 
                    dummyData[key].forEach(p=>{                       
                    p.code = symbolIdsDictionary[p.symbolId];
                    });
                }
                this[key] = dummyData[key];
            });
        },
        suspendMailsByType_otb_fn(optionType){
            optionType.actionInProgress = true;
            var context = this;
            var resolvedEndpoint = "https://" + context.domain + "/api/email/Prod/token/communication/option/suspend";
            $.ajax({
                headers: {
                    "Authorization": "Bearer "  + this.user.jwt,
                },
                url: resolvedEndpoint,
                dataType: "json",
                type: "POST",
                data: JSON.stringify(optionType),
                contentType: "application/json",
                success: function(json) {
                    var option = context.emailOptions.find(eo => eo.type === json.type);
                    if (option) {
                        option.suspendedAt = json.suspendedAt;
                        option.actionInProgress = false;
                    }
                }
            });
        },
        resumeMailsByType_otb_fn(optionType){
            optionType.actionInProgress = true;
            var context = this;
            var resolvedEndpoint = "https://" + context.domain + "/api/email/Prod/token/communication/option/resume";
            $.ajax({
                headers: {
                    "Authorization": "Bearer "  + this.user.jwt,
                },
                url: resolvedEndpoint,
                dataType: "json",
                type: "POST",
                data: JSON.stringify(optionType),
                contentType: "application/json",
                success: function(json) {
                    var option = context.emailOptions.find(eo => eo.type === json.type);
                    if (option) {
                        option.resumedAt = json.resumedAt;
                        option.actionInProgress = false;
                    }
                }
            });
        },
        getUserCommunicationOptions_otb_fn(){
            var context = this;
            var resolvedEndpoint = "https://" + this.domain + "/api/EmailOptions/Prod/Flo/communication/options";
            $.ajax({
                headers: {
                    "Authorization": "Bearer "  + this.user.jwt,
                },
                url: resolvedEndpoint,
                dataType: "json",
                contentType: "application/json",
                success: function(json) {
                    context.emailOptions = [];
                    context.emailTypes.forEach(p => {
                        var option = json.find(eo => eo.type === p.id);
                        if (!option) {
                            option = {};
                            option.userId = context.user.userId;
                            option.type = p.id;
                            option.env = context.env;
                            option.perMinuteLimit = 100;
                            option.perHourLimit = 100;
                            option.perDayLimit = 100;
                            option.perWeekLimit = 100;
                            option.perMonthLimit = 100;


                            option.perMinuteSoFar = 0;
                            option.perHourSoFar = 0;
                            option.perDaySoFar = 0;
                            option.perMonthSoFar = 0;
                            if(!option.suspendedAt) {
                                option.suspendedAt = 0;
                            }
                            if(!option.resumedAt) {
                                option.resumedAt = 0;
                            }
                            option.actionInProgress = false;
                        }
                        option.info = p.info;
                        context.emailOptions.push(option);
                    });
                    context.loadingOrders = false;
                }
            });
        },
        selectPosition_otb_fn(position){
            var context = this;
            this.selectedPosition = position;
            if(position) {
                context.orderId = position.positionId;
                context.goToBalanceLink = "../balance?env=" + context.env + "&userId=" + context.user.userId + "&token=" + context.user.token + "&symbolId=" + context.selectedPosition.symbolId + "&code=" + context.selectedPosition.code + "&price=" + context.selectedPosition.price + "&orderId=" + context.selectedPosition.orderId + "&balanceId=" + context.selectedPosition.balanceId + "&backTo=orders&jwt=" + context.user.jwt;
                context.href = "../symbol?env=" + context.env + "&userId=" + context.user.userId + "&token=" + context.user.token + "&symbolId=" + context.selectedPosition.symbolId + "&code=" + context.selectedPosition.code + "&price=" + context.selectedPosition.price + "&orderId=" + context.selectedPosition.orderId + "&backTo=orders&jwt=" + context.user.jwt;
                priceService.fetchRealTimePrice_otb_fn(this.selectedPosition);
            }
            else{
                context.positionId = null;
            }
        },
        appStarted_otb_fn(){
            clearInterval(this.setUserIntervalHandler);
            var context = this;
            Vue.nextTick(function () {
                if (context.$refs.appMenu) {
                    context.$refs.appMenu.updateMenu_otb_fn(context);
                }
            });
            if(this.env === "Dev"){
                // this.symbols.push(this.testSymbol);
            }

            this.getBalance_otb_fn();
            this.getUserCommunicationOptions_otb_fn();
            setInterval(() => this.getBalance_otb_fn(), 5000);
            this.hrefBack = "../"+this.backTo+"?env="+this.env+'&userId='+this.user.userId+'&token='+this.user.token+'&symbolId='+(this.symbol ? this.symbol.symbolId : 0)+'&code='+(this.symbol ? this.symbol.code : null)+'&price='+(this.symbol ? this.symbol.price : 0)+'&orderId='+this.orderId+'&balanceId='+this.balanceId+'&backTo=orders&jwt='+this.user.jwt;

            // this.progressBar_intervalHandler = setInterval(() => this.updateProgressBar(), 1000);
            this.timeAgoHandler = setInterval(() => {
                timeService.updateTimeAgo_otb_fn(context);
            }, 500, context);
        },
        getBalance_otb_fn(){
            var context = this;
            this.info1 = !this.info1;
            return;
            var model = {};
            var resolvedEndpoint = "https://" + this.domain + "/api/balance/" + this.env + "/" + this.user.token + "/alpaca/AccountInfo";
            $.ajax({
                headers: {
                    "Authorization": "Bearer "  + this.user.jwt,
                },
                url: resolvedEndpoint,
                dataType: "json",
                type: "POST",
                data: JSON.stringify(model),
                contentType: "application/json",
                success: function(json){
                    if(json) {
                        context.balanceExists = true;
                        context.lastEquityValue = json.equity;
                        context.cash = json.cash;
                        context.lastPercentValue = Math.round(1000 - ((json.last_equity / json.equity) * 1000)) / 10;
                    }
                }
            });
        },
        getEmailOptions_otb_fn(){
            var context = this;
            this.i=13;
            var resolvedEndpoint = "https://" + this.domain + "/api/positions/" + this.env + "/" + this.user.token + "/user/positions";
            context.debugMessages.push("getEmailOptions: " + this.env + " " + (this.user ? this.user.token : -1) + " " + (this.user ? this.user.jwt != 'undefined' : -1) + " " + resolvedEndpoint);
            $.ajax({
                headers: {
                    "Authorization": "Bearer "  + this.user.jwt,
                },
                url: resolvedEndpoint,
                dataType: "json",
                type: "POST",
                contentType: "application/json",
                success: function(json) {
                    // context.debugMessages.push(JSON.stringify(json));
                    context.i = 14;
                    if (json) {
                        json.forEach(p=>{
                            // p.code = symbolIdsDictionary[p.symbolId];
                        })
                        context.positions = json;
                        context.debugMessages.push("getEmailOptions: " + (json.length) + " ");
                    }
                    else{
                        context.debugMessages.push("getEmailOptions: is empty");
                    }
                    context.loadingOrders = false;
                    if (context.positionId) {
                        context.i = 15;
                        var selectedPosition = context.positions.find(p => p.positionId === context.positionId);
                        if (selectedPosition) {
                            context.i = 16;
                            context.selectOrder_otb_fn(selectedPosition);
                        }
                    }
                }
            }).fail(function(xhr, status, error) {
                var errorMessage = xhr.status + ': ' + xhr.statusText;
                context.debugMessages.push("(getEmailOptions) error: " + errorMessage + " ");
            });
        },

        // Login
    }
});