
import {userService} from "../services/userService.js";
import {libService, constants} from "../services/libService.js";
import {timeService} from "../services/timeService.js";

document.vue = new Vue({
    el: "#adminApp",
    props: [],
    data() {
        return {
            userService:userService,
            libService: libService,
            timeService: timeService,
            
            // Parent
            connectionLost: false,

            // Debug
            showDebugMessages: false,
            isDebug: false,
            debugMessages: [],
            backgroundColor: "rgb(255, 255, 255)",
            showFullMenu: false,
            
            // Common
            env: 'Prod',
            user: null,
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
            // Campains
            showCampains: false,
            votingCampains: [],
            currentCampain: {
                winnerId: null,
                votingSessionId: null,
            },
            savingCampain: false,

            // Navigation
            page: 'voting-help',
            lastPage: null,
            newSession: {
                symbols: [
                    {symbolId: null, code: "?"},
                    {symbolId: null, code: "?"},
                    {symbolId: null, code: "?"},
                    {symbolId: null, code: "?"},
                    {symbolId: null, code: "?"},
                    {symbolId: null, code: "?"},
                ]
            },
            replaceAt: 0,
            allSymbols: [
                {symbolId: 1, code: "AAA"},
                {symbolId: 2, code: "BBB"},
                {symbolId: 3, code: "CCC"},
                {symbolId: 4, code: "DDD"},
                {symbolId: 5, code: "EEE"},
                {symbolId: 6, code: "FFF"},
                {symbolId: 7, code: "GGG"},
                {symbolId: 8, code: "HHH"},
                {symbolId: 9, code: "III"},
            ],
            startVotingOptions: [
                {title: "Start voting now", delay: 0},
                {title: "Start voting in 5 min", delay: 5},
                {title: "Start voting in 10 min", delay: 10},
                {title: "Start voting in 30 min", delay: 30},
            ],
            startVotingOption: null,

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
                [],
            // Login 
            closingLogin: 0,
            closingClocking: 1,
            showLoginPlaceholder: true,
            showPasswordPlaceholder: true,
            email: null,
            privacyAgreement: false,
            host: (window.location.host.indexOf("localhost") >= 0 ? "local" : null),
            isLocal: true || window.location.host.indexOf("localhost") >= 0,
            timeout: 10,
            confirmationChecks: 900,
            loginIntervalHandler: null,
            response: {userMessages: []},
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
            selectedSymbol: {},
            data: {
                "17": [[1670339293980, [9.513333333333334]], [1670339364480, [9.498333333333333]], [1670339369640, [9.49]], [1670340999120, [9.468333333333334]], [1670342185620, [9.44]], [1670342465220, [9.406666666666666]], [1670343378300, [9.385]], [1670343443760, [9.373333333333335]], [1670344467540, [9.386666666666668]], [1670345765880, [9.361666666666666]], [1670346292980, [9.346666666666666]], [1670346961260, [9.30666]], [1670346985080, [9.303333333333333]], [1670347138260, [9.28666]], [1670348080680, [9.283333333333333]], [1670348156460, [9.278333333333334]], [1670348493000, [9.274999999999999]], [1670348864520, [9.263333333333334]], [1670349819780, [9.23166]], [1670350145820, [9.205]], [1670350581420, [9.198333333333332]], [1670351265240, [9.209999999999999]], [1670352214080, [9.225]], [1670353129320, [9.214999999999998]], [1670353577400, [9.208333333333334]], [1670353632120, [9.191666666666666]], [1670353882680, [9.19]], [1670355607080, [9.208333333333334]], [1670356333620, [9.25]], [1670356544100, [9.283333333333333]], [1670356566120, [9.298333333333334]], [1670357044980, [9.308333333333332]], [1670357167800, [9.32166]], [1670358265500, [9.313333333333334]], [1670358347640, [9.295]], [1670358595080, [9.26666]], [1670358873180, [9.263333333333334]], [1670359073220, [9.26]], [1670359241580, [9.266666666666666]], [1670359342140, [9.273333333333333]], [1670359557600, [9.281666666666666]], [1670359860540, [9.293333333333335]], [1670360164920, [9.29666]], [1670418130320, [9.263333333333334]], [1670423368200, [9.243333333333332]], [1670423521740, [9.196666666666665]], [1670423603640, [9.186666666666666]], [1670423756400, [9.17]], [1670423779560, [9.193333333333333]], [1670424036180, [9.235000000000001]], [1670424142140, [9.285000000000002]], [1670424332340, [9.325]], [1670424391260, [9.33]], [1670424494760, [9.305]], [1670424755400, [9.278333333333334]], [1670424802320, [9.25]], [1670424966600, [9.22]], [1670425050000, [9.195]], [1670425179060, [9.17166]], [1670425582980, [9.12666]], [1670425783080, [9.088333333333333]], [1670425870860, [9.06]], [1670425887060, [9.066666666666668]], [1670425957440, [9.06166]], [1670425976160, [9.063333333333333]], [1670426061060, [9.075]], [1670426535420, [9.078333333333333]], [1670426619240, [9.053333333333335]], [1670426947920, [9.01166]], [1670427334440, [9.01]], [1670428652700, [9.028333333333334]], [1670428839720, [9.065]], [1670429165400, [9.098333333333333]], [1670429447040, [9.123333333333333]], [1670429834700, [9.13]], [1670430569100, [9.079999999999998]], [1670432040540, [9.043333333333331]], [1670432821140, [8.995]], [1670433587940, [8.988333333333335]], [1670433791580, [8.975]], [1670434140120, [8.96]], [1670434152360, [8.938333333333334]], [1670434723800, [8.909999999999998]], [1670434888440, [8.906666666666668]], [1670435987400, [8.928333333333335]], [1670437269960, [8.969999999999999]], [1670438472960, [9.00166]], [1670438617380, [9.005]], [1670438936580, [8.99166]], [1670439590460, [8.963333333333333]], [1670440860720, [8.94666]], [1670441293500, [8.94]], [1670442090360, [8.953333333333333]], [1670445065100, [8.948333333333332]], [1670445710100, [8.950000000000001]], [1670445946320, [8.93666]], [1670446524780, [8.918333333333335]], [1670446548120, [8.895000000000001]], [1670446583580, [8.885]], [1670446691640, [8.885]]]
            },
            symbols: [
                {
                    code: "BA",
                    symbolId: 1,
                    trigger: null,
                    votes: 0,
                    isMouseOver: false,
                },
                {
                    code: "TESLA",
                    symbolId: 3,
                    trigger: null,
                    votes: 0,
                    isMouseOver: false,
                },
                {
                    code: "KO",
                    symbolId: 5,
                    trigger: null,
                    votes: 0,
                    isMouseOver: false,
                },
                {
                    code: "AMD",
                    symbolId: 7,
                    trigger: null,
                    votes: 0,
                    isMouseOver: false,
                },
                {
                    code: "MSFT",
                    symbolId: 16,
                    trigger: null,
                    votes: 0,
                    isMouseOver: false,
                },
                {
                    code: "CCL",
                    symbolId: 17,
                    trigger: null,
                    votes: 0,
                    isMouseOver: false,
                },
            ],
            menuItems: [
                {
                    title: "Notifications",
                    link: "Notifications",
                    page: "NotificationsView",
                    info: "Recent notifications.",
                    icon: "social",
                    visible: true
                },
                {
                    title: "Schedule",
                    link: "Schedule",
                    page: "ScheduleView",
                    info: "Create a new trip",
                    icon: "social",
                    visible: true
                },
                {
                    title: "Calendar",
                    link: "Calendar",
                    page: "CalendarView",
                    info: "Your schedule",
                    icon: "social",
                    visible: true
                },
                {
                    title: "Connections",
                    link: "Connections",
                    page: "ConnectionsView",
                    info: "Your connections",
                    icon: "social",
                    visible: true
                },
                {
                    title: "Profile",
                    link: "Profile",
                    page: "ProfileView",
                    info: "Your profile",
                    icon: "social",
                    visible: true
                },
                {
                    title: "Settings",
                    link: "Settings",
                    page: "SettingsView",
                    info: "Privacy settings",
                    icon: "social",
                    visible: true
                },
            ],
        }
    },
    mounted(){
        var context = this;
        
        // getPageStatus
        window.getPageStatus_otb_fn = this.getPageStatus_otb_fn;

        // URL
        const urlParams = new URLSearchParams(window.location.search);
        this.url = window.location.search;
        context.debugMessages.push("URL: " + window.location + " ");

        var symbolId = urlParams.get("symbolId");
        if(symbolId) {
            symbolId = parseInt(symbolId);
        }
        if(symbolId){
            var code = urlParams.get("code");
            var price = urlParams.get("price");
            this.symbol = { symbolId: parseInt(symbolId), code: code, price: parseFloat(price) };
        }

        var userId = urlParams.get("userId");
        if(userId) {
            userId = parseInt(userId);
        }
        if(userId){
            var token = urlParams.get("token");
            var jwt = urlParams.get("jwt");
            this.user = { userId: parseInt(userId), token: token, jwt: jwt, features: [] };
        }

        var orderId = urlParams.get("orderId");
        if(orderId) {
            orderId = parseInt(orderId);
        }
        if(orderId){
            this.orderId = parseInt(orderId);
        }

        var balanceId = urlParams.get("balanceId");
        if(balanceId) {
            balanceId = parseInt(balanceId);
        }
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
            // this.appStarted_otb_fn();
        }
        
        userService.restoreUser_otb_fn(context);
        this.setUserIntervalHandler = setInterval(userService.restoreUser_otb_fn, 400, context);
    },
    computed:{
        filteredSymbols_otb_fn(){
            return this.allSymbols.filter(s=>this.newSession.symbols.map(p=>p.symbolId).indexOf(s.symbolId) < 0);
        }
    },
    methods: {
        
        // getPageStatus
        getPageStatus_otb_fn(params){
            this.connectionLost = !params.IsConnected;
            return { pageStatus: 2 };
        },
        
        goTo_otb_fn(menuItem){
            if(menuItem.link){
                window.location.href = this.$refs.appMenu['hrefTo_' + menuItem.link];
            }                    
        },
        appStarted_otb_fn(){
            var context = this;
            context.debugMessages.push("AppStarted!");
            clearInterval(this.setUserIntervalHandler);
            Vue.nextTick(function () {
                if (context.$refs.appMenu) {
                    context.$refs.appMenu.updateMenu_otb_fn(context);
                }
            });
            if(this.env === 'Dev'){
                // this.symbols.push(this.testSymbol);
            }
            

            // this.progressBar_intervalHandler = setInterval(() => this.updateProgressBar(), 1000);
            this.timeAgoHandler = setInterval(() => {
                timeService.updateTimeAgo_otb_fn(context);
            }, 500, context);
            
            this.updateLinks_otb_fn();
        },
        updateLinks_otb_fn(){
            var context = this;
            if(context.env && context.user) {
                context.goToBalanceLink = "../balance?env=" + context.env + "&userId=" + context.user.userId + "&token=" + context.user.token + 
                    (!context.selectedSymbol ? "" : "&symbolId=" + context.selectedSymbol.symbolId + "&code=" + context.selectedSymbol.code + "&price=" + context.selectedSymbol.price) + 
                    (!context.selectedTrigger ? "" : "&orderId=" + context.selectedTrigger.orderId + "&balanceId=" + context.selectedTrigger.balanceId) + 
                    "&backTo=orders&jwt=" + context.user.jwt;
            }
        },

    }
});