
import {userService} from "../services/userService.js";
import {libService, constants} from "../services/libService.js";
import {timeService} from "../services/timeService.js";
// import {moment} from "../../lib/moment/moment.min.js";

document.vue = new Vue({
    el: "#adminApp",
    props: [],
    data() {
        return {
            dateOption: 1,
            startDate: null,
            startTime: null,
            startDateTime: null,
            showHours: false,
            showMinutes: false,
            showDays: false,
            showMonths: false,
            startDateTimeText: null,
            showDateTimeControls: 0,
            startAfter: null,
            showTopicControls: false,
            topics:[
                {
                    name: "Politics", 
                    selected: false,
                    topicId: 0,
                },
                {
                    name: "Business", 
                    selected: false,
                    topicId: 1,
                },
                {
                    name: "Sports", 
                    selected: false,
                    topicId: 2,
                },
                {
                    name: "Technology", 
                    selected: false,
                    topicId: 3,
                },
                {
                    name: "Social", 
                    selected: false,
                    topicId: 4,
                },
                {
                    name: "Medicine", 
                    selected: false,
                    topicId: 5,
                },
                {
                    name: "Housing", 
                    selected: false,
                    topicId: 6,
                },
                {
                    name: "Family", 
                    selected: false,
                    topicId: 7,
                },
                {
                    name: "Pets", 
                    selected: false,
                    topicId: 8,
                },
                {
                    name: "Education", 
                    selected: false,
                    topicId: 9,
                },
                {
                    name: "Law", 
                    selected: false,
                    topicId: 10,
                },
                {
                    name: "Cars", 
                    selected: false,
                    topicId: 11,
                },
                {
                    name: "Art", 
                    selected: false,
                    topicId: 12,
                },
                {
                    name: "Economics", 
                    selected: false,
                    topicId: 13,
                },
                {
                    name: "Travel", 
                    selected: false,
                    topicId: 14,
                },
                {
                    name: "Media", 
                    selected: false,
                    topicId: 15,
                },
                {
                    name: "Biology", 
                    selected: false,
                    topicId: 16,
                },
                {
                    name: "History", 
                    selected: false,
                    topicId: 17,
                },
            ],
            commonLocations: [
                {
                   "description" : "49'ERS Liquors & Groceries, Mission Street, San Francisco, CA, USA",
                   "matched_substrings" : 
                   [
                      {
                         "length" : 3,
                         "offset" : 3
                      }
                   ],
                   "place_id" : "ChIJF5yO_11-j4AReIJTb0edGqk",
                   "reference" : "ChIJF5yO_11-j4AReIJTb0edGqk",
                   "structured_formatting" : 
                   {
                      "main_text" : "49'ERS Liquors & Groceries",
                      "main_text_matched_substrings" : 
                      [
                         {
                            "length" : 3,
                            "offset" : 3
                         }
                      ],
                      "secondary_text" : "Mission Street, San Francisco, CA, USA"
                   },
                   "terms" : 
                   [
                      {
                         "offset" : 0,
                         "value" : "49'ERS Liquors & Groceries"
                      },
                      {
                         "offset" : 28,
                         "value" : "Mission Street"
                      },
                      {
                         "offset" : 44,
                         "value" : "San Francisco"
                      },
                      {
                         "offset" : 59,
                         "value" : "CA"
                      },
                      {
                         "offset" : 63,
                         "value" : "USA"
                      }
                   ],
                   "types" : 
                   [
                      "liquor_store",
                      "grocery_or_supermarket",
                      "food",
                      "store",
                      "point_of_interest",
                      "establishment"
                   ]
                },
                {
                   "description" : "ERS Data System, Market Street, San Francisco, CA, USA",
                   "matched_substrings" : 
                   [
                      {
                         "length" : 3,
                         "offset" : 0
                      }
                   ],
                   "place_id" : "ChIJAajcYmKAhYARCGvIy2cpUuQ",
                   "reference" : "ChIJAajcYmKAhYARCGvIy2cpUuQ",
                   "structured_formatting" : 
                   {
                      "main_text" : "ERS Data System",
                      "main_text_matched_substrings" : 
                      [
                         {
                            "length" : 3,
                            "offset" : 0
                         }
                      ],
                      "secondary_text" : "Market Street, San Francisco, CA, USA"
                   },
                   "terms" : 
                   [
                      {
                         "offset" : 0,
                         "value" : "ERS Data System"
                      },
                      {
                         "offset" : 17,
                         "value" : "Market Street"
                      },
                      {
                         "offset" : 32,
                         "value" : "San Francisco"
                      },
                      {
                         "offset" : 47,
                         "value" : "CA"
                      },
                      {
                         "offset" : 51,
                         "value" : "USA"
                      }
                   ],
                   "types" : 
                   [
                      "point_of_interest",
                      "establishment"
                   ]
                },
                {
                   "description" : "Havas San Francisco, California Street, San Francisco, CA, USA",
                   "matched_substrings" : 
                   [
                      {
                         "length" : 19,
                         "offset" : 0
                      }
                   ],
                   "place_id" : "ChIJO2EuQo6AhYARibI_gFyPW1c",
                   "reference" : "ChIJO2EuQo6AhYARibI_gFyPW1c",
                   "structured_formatting" : 
                   {
                      "main_text" : "Havas San Francisco",
                      "main_text_matched_substrings" : 
                      [
                         {
                            "length" : 19,
                            "offset" : 0
                         }
                      ],
                      "secondary_text" : "California Street, San Francisco, CA, USA"
                   },
                   "terms" : 
                   [
                      {
                         "offset" : 0,
                         "value" : "Havas San Francisco"
                      },
                      {
                         "offset" : 21,
                         "value" : "California Street"
                      },
                      {
                         "offset" : 40,
                         "value" : "San Francisco"
                      },
                      {
                         "offset" : 55,
                         "value" : "CA"
                      },
                      {
                         "offset" : 59,
                         "value" : "USA"
                      }
                   ],
                   "types" : 
                   [
                      "point_of_interest",
                      "establishment"
                   ]
                },
                {
                   "description" : "Ernst & Young, Mission Street, San Francisco, CA, USA",
                   "matched_substrings" : 
                   [
                      {
                         "length" : 13,
                         "offset" : 0
                      }
                   ],
                   "place_id" : "ChIJc4W0xGKAhYARXDaphkbMki4",
                   "reference" : "ChIJc4W0xGKAhYARXDaphkbMki4",
                   "structured_formatting" : 
                   {
                      "main_text" : "Ernst & Young",
                      "main_text_matched_substrings" : 
                      [
                         {
                            "length" : 13,
                            "offset" : 0
                         }
                      ],
                      "secondary_text" : "Mission Street, San Francisco, CA, USA"
                   },
                   "terms" : 
                   [
                      {
                         "offset" : 0,
                         "value" : "Ernst & Young"
                      },
                      {
                         "offset" : 15,
                         "value" : "Mission Street"
                      },
                      {
                         "offset" : 31,
                         "value" : "San Francisco"
                      },
                      {
                         "offset" : 46,
                         "value" : "CA"
                      },
                      {
                         "offset" : 50,
                         "value" : "USA"
                      }
                   ],
                   "types" : 
                   [
                      "accounting",
                      "finance",
                      "point_of_interest",
                      "establishment"
                   ]
                },
                {
                   "description" : "Perspire Sauna Studio, Shattuck Avenue, Berkeley, CA, USA",
                   "matched_substrings" : 
                   [
                      {
                         "length" : 3,
                         "offset" : 1
                      }
                   ],
                   "place_id" : "ChIJH1Qi-p9_hYARockwbtya0yE",
                   "reference" : "ChIJH1Qi-p9_hYARockwbtya0yE",
                   "structured_formatting" : 
                   {
                      "main_text" : "Perspire Sauna Studio",
                      "main_text_matched_substrings" : 
                      [
                         {
                            "length" : 3,
                            "offset" : 1
                         }
                      ],
                      "secondary_text" : "Shattuck Avenue, Berkeley, CA, USA"
                   },
                   "terms" : 
                   [
                      {
                         "offset" : 0,
                         "value" : "Perspire Sauna Studio"
                      },
                      {
                         "offset" : 23,
                         "value" : "Shattuck Avenue"
                      },
                      {
                         "offset" : 40,
                         "value" : "Berkeley"
                      },
                      {
                         "offset" : 50,
                         "value" : "CA"
                      },
                      {
                         "offset" : 54,
                         "value" : "USA"
                      }
                   ],
                   "types" : 
                   [
                      "spa",
                      "health",
                      "point_of_interest",
                      "establishment"
                   ]
                }
             ],
            
            changeFromLocation: 0,
            changeToLocation: 0,

            fromLocation: {
                description: "Select your starting point",
            },
            toLocation: {
                description: "Select your destination",
            },

            searchDestinationQuery: null,
            searchFromLocationQuery: null,

            YOUR_API_KEY: 'AIzaSyB_2irFTnov23JpJtk2S-IcZ6fNKkPzrmI',
            fromLocationSuggestions: [],
            toLocationSuggestions: [],
            lastFrom: "",
            lastTo: "",



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
            fromMap: null,
            toMap: null,
            markerFrom: null,
            markerTo: null,

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
            ],
            menuItems_: [
                {
                    title: "Connection request",
                    name: "Blue Crocodile",
                    info: "sent you a connection request",
                    link: "request",
                    page: "NotificationsView",
                    icon: "connection",
                    location: "London",
                    time: "in 35 minutes, at 11:00 am",
                    visible: true
                },
                {
                    title: "Still alone on this",
                    name: "Blue Crocodile",
                    info: "is in your area",
                    link: "proximity",
                    page: "NotificationsView",
                    icon: "proximity",
                    location: "South Kensington",
                    time: "in 2 hours and 4 minutes, at 3:35 pm",
                    visible: true
                },
                {
                    title: "Published journey",
                    name: "Mike Lisy-Coco",
                    info: "is joining your journey",
                    link: "journey",
                    page: "NotificationsView",
                    icon: "journey",
                    location: "Liverpool",
                    time: "in 2 days, at 5:00 pm",
                    visible: true
                },
                {
                    title: "Connection request",
                    name: "Blue Crocodile",
                    info: "sent you a connection request",
                    link: "request",
                    page: "NotificationsView",
                    icon: "connection",
                    location: "Paris",
                    time: "in 5 days, at 7:45 am",
                    visible: true
                },
                {
                    title: "Still alone on this",
                    name: "Blue Crocodile",
                    info: "is in your area",
                    link: "proximity",
                    page: "NotificationsView",
                    icon: "proximity",
                    location: "Oxford street",
                    time: "on 15 may, at 8 pm",
                    visible: true
                },
                {
                    title: "Published journey",
                    name: "Mike Lisy-Coco",
                    info: "is joining your journey",
                    link: "journey",
                    page: "NotificationsView",
                    icon: "journey",
                    location: "Trafalgar Square",
                    time: "on 13 april, at 10 pm",
                    visible: true
                },
                {
                    title: "Connection request",
                    name: "Blue Crocodile",
                    info: "sent you a connection request",
                    link: "request",
                    page: "NotificationsView",
                    icon: "connection",
                    location: "River Island",
                    visible: true
                },
                {
                    title: "Still alone on this",
                    name: "Blue Crocodile",
                    info: "is in your area",
                    link: "proximity",
                    page: "NotificationsView",
                    icon: "proximity",
                    location: "Moon Terrace",
                    visible: true
                },
                {
                    title: "Published journey",
                    name: "Mike Lisy-Coco",
                    info: "is joining your journey",
                    link: "journey",
                    page: "NotificationsView",
                    icon: "journey",
                    location: "Milo upon Tames",
                    visible: true
                },
                {
                    title: "Connection request",
                    name: "Blue Crocodile",
                    info: "sent you a connection request",
                    link: "request",
                    page: "NotificationsView",
                    icon: "connection",
                    visible: true
                },
                {
                    title: "Still alone on this",
                    name: "Blue Crocodile",
                    info: "is in your area",
                    link: "proximity",
                    page: "NotificationsView",
                    icon: "proximity",
                    visible: true
                },
                {
                    title: "Published journey",
                    name: "Mike Lisy-Coco",
                    info: "is joining your journey",
                    link: "journey",
                    page: "NotificationsView",
                    icon: "journey",
                    visible: true
                },
            ],
        }
    },
    mounted(){
        // this.initFromMap();
        // this.initToMap();
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
        this.timer = setInterval(() => {
            this.updateTimeAgo();
          }, 1000);
          
        this.startDateTime = moment();
        this.startDate = this.startDateTime.format('MMM DD YYYY');
        this.startTime = this.startDateTime.format('HH:mm A');
    },
    computed:{
        timeAgo() {
          return moment(this.startDateTime).fromNow();
        },
        filteredSymbols_otb_fn(){
            return this.allSymbols.filter(s=>this.newSession.symbols.map(p=>p.symbolId).indexOf(s.symbolId) < 0);
        }
    },
    methods: {
        saveJourney(){
            var context = this;
            var payload ={
                fromLocation: this.fromLocation,
                toLocation: this.toLocation,
                startDateTime: this.startDateTime,
                topics: this.topics.filter(p=>p.selected).map(p=>p.topicId),
                visibility: []
            };
            const url = `https://localhost:5000/api/maps/journey/save`;
            $.ajax({
                url: url,
                type: "POST",
                data: JSON.stringify(payload),
                contentType: "application/json; charset=utf-8",
                dataType: "json",
            }).done(function (response) {
                if(isFrom){
                context.fromLocationSuggestions = response.predictions;
                }
                else{
                context.toLocationSuggestions = response.predictions;
                }
            });
        },
        getLastLocations(){
            var context = this;
            const url = `https://localhost:5000/api/maps/last/locations`;
            $.ajax({
                url: url,
            }).done(function (response) {
                context.commonLocations = response;
            });
        },
        switchTopic(topic){
            topic.selected = !topic.selected;
        },
        setFromLocation(location){
            this.fromLocation = location;
            // this.fromLocationSuggestions = [];
            this.changeFromLocation = 0;
        },
        setToLocation(location){
            this.toLocation = location;
            // this.toLocationSuggestions = [];
            this.changeToLocation = 0;
        },
        initFromMap() {
          this.fromMap = new google.maps.Map(document.getElementById('fromMap'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
          });
        },
        initToMap() {
          this.toMap = new google.maps.Map(document.getElementById('toMap'), {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8
          });
        },
        searchAutocomplete(text, isFrom){
            if(!text || text.length <= 2){
                return;
            }
            if(isFrom){
                if(this.lastFrom.indexOf(text) > 0){
                    return;
                }
                this.lastFrom = text;
            }
            else{
                if(this.lastTo.indexOf(text) > 0){
                    return;
                }
                this.lastTo = text;
            }

            var context = this;
            // const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=`+text+`&location=37.76999%2C-122.44696&radius=500&types=establishment&key=`+this.YOUR_API_KEY;
            const url = `https://localhost:5000/api/maps/suggestions?text=`+text+`&location=37.76999%2C-122.446961`;
            $.ajax({
                url: url,
           contentType: "application/json; charset=utf-8",
           dataType: "json",
            }).done(function (response) {
                if(isFrom){
                context.fromLocationSuggestions = response.predictions;
                }
                else{
                context.toLocationSuggestions = response.predictions;
                }
            });
        },
        searchFromLocation(){
            const apiKey = this.YOUR_API_KEY; // Replace with your Google Maps API key
            const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${this.searchQuery}&key=${apiKey}`;
   
            $.ajax({
                url: url,
           contentType: "application/json; charset=utf-8",
           dataType: "json",
            }).done(function (response) {
                const location = response.data.results[0].geometry.location;
                this.fromMap.setCenter(location);
                if (this.markerFrom) {
                  this.markerFrom.setMap(null);
                }
                this.markerFrom = new google.maps.Marker({
                  position: location,
                  map: this.fromMap
                });
              })
              .catch(error => {
                console.error(error);
              });
        },
        searchToLocation(){

        },
        changeStartingLocation(){

        },
        changeDestination(){

        },
        timeFromNow(minutes){
            this.startDateTime = moment().add(minutes, 'minutes');
            this.startDate = this.startDateTime.format('MMM DD YYYY');
            this.startTime = this.startDateTime.format('HH:mm A');

            this.showDateTimeControls = 0;
        },
        updateTimeAgo(){
            const elements = document.querySelectorAll('.timeAgo');
            // Loop through each element and update its text
            elements.forEach((element, index) => {
              element.textContent = this.startDateTime.fromNow();
            });
        },
        setStartDay(day){
            this.startDateTime = this.startDateTime.set({d: day});
            this.startDate = this.startDateTime.format('MMM DD');
            this.showDays = false;
        },
        setStartMonth(month){
            this.startDateTime = this.startDateTime.set({M: month});
            this.startDate = this.startDateTime.format('MMM DD');
            this.showMonths = false;
        },
        setStartHour(hour){
            this.startDateTime = this.startDateTime.set({h: hour});
            this.startTime = this.startDateTime.format('HH:mm A');
            this.showHours = false;
        },
        setStartMinute(minute){
            this.startDateTime = this.startDateTime.set({m: minute});
            this.startTime = this.startDateTime.format('HH:mm A');
            this.showMinutes = false;
        },
        setDateOption(option){
            this.dateOption = option;
            if(option > 1){
                this.startDateTime = moment();
                this.startDate = this.startDateTime.format('MMM DD YYYY');
                this.startTime = this.startDateTime.format('HH:mm A');
            }
            this.showDateTimeControls = 0;
        },

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