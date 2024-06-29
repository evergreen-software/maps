import {libService} from "./libService.js";

const serverBus = new Vue();

export const userService = {

    login_otb_fn(){
        window.location.href = '../login/index.html';
    },
    webLogin_otb_fn(){
        window.location.href = 'https://stocktech.org?list=Alets';
    },
    logout_otb_fn(context){
        context.user = null;
        context.JWT = null;


        /* COMMON BROWSER LOGOUT START */
        let srv = localStorage.getItem("srv");
        if(srv == "null"){
            srv =  window.location.hostname;
        }
        let storageAgreements = localStorage.getItem("StorageAgreements");
        // this.$parent.currentUser = {};
        // this.delete_cookie(".AspNetCore.Cookies", "/", "localhost"); // Not working for this type of cookie
        localStorage.removeItem("env");
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("code");
        localStorage.removeItem("email");
        localStorage.removeItem("account");
        let selectedApiProfileString = localStorage.getItem("selectedApiProfile");
        let adminApiProfile = localStorage.getItem("adminApiProfile");
        let admin = localStorage.getItem("admin");
        let envString = localStorage.getItem("env");
        localStorage.clear();
        localStorage.setItem("srv", srv);
        if(selectedApiProfileString) {
            localStorage.setItem("selectedApiProfile", selectedApiProfileString);
        }
        else{
            localStorage.removeItem("selectedApiProfile");
        }
        if(adminApiProfile) {
            localStorage.setItem("adminApiProfile", adminApiProfile);
        }
        if(admin) {
            localStorage.setItem("admin", admin);
        }
        // localStorage.setItem("env", envString);
        if(storageAgreements){
            localStorage.setItem("StorageAgreements", storageAgreements);
        }
        /* COMMON BROWSER LOGOUT END */

        // localStorage.setItem("user", null);
        window.location.href = "../logout/index.html";
    },
    updateSubInfo_otb_fn(context){
        // var context = this;
        var resolvedEndpoint = "https://" + context.domain + "/api/subscription/" + context.env + "/" + context.user.token + "/subInfo";
        $.ajax({
            headers: {
                "Authorization": "Bearer "  + context.user.jwt,
            },
            url: resolvedEndpoint,
            dataType: "json",
            type: "GET",
            contentType: "application/json",
            success: function(json){
                if(json) {
                    context.user.features = json.features;
                }
            }
        });
    },
    restoreUser_otb_fn(context, userObject, env) {
        // var context = this;
        let envString = localStorage.getItem("env");
        {
            let envObject = JSON.parse(envString);
            if (envObject && !context.env) {
                context.env = envObject.name;
            }
            context.debugMessages.push("User from LocalStorage ENV: " + envString);
        }
        if (!userObject) {
            let userString = localStorage.getItem("user");
            if (userString) {
                userObject = JSON.parse(userString);
            }
            context.debugMessages.push("User from LocalStorage: " + userString);
        }
        if (!userObject) {
            userObject = window.windowUser;
            if (window.windowEnv) {
                context.env = window.windowEnv;
                libService.setBackground_otb_fn(context, context.env, "!userObject");
            }
            context.debugMessages.push("User from WindowUser: " + window.windowUser);
            context.debugMessages.push(window.debugMessage);
        }
        
        if (userObject) {
            context.debugMessages.push("setUser userObject env: " + env + ", userId: " + userObject.userId);
            if (env && !context.env) {
                context.env = env;
            }
            context.user = { features: [] };
            context.user.userId = userObject.userId;
            context.user.email = userObject.email;
            context.user.token = userObject.token;
            context.user.jwt = userObject.jwt;
            context.user.features = userObject.features ? userObject.features : [];
            context.JWT = userObject.jwt;
            context.showScriptEditor = false;
            clearInterval(context.setUserIntervalHandler);
            userService.updateSubInfo_otb_fn(context);
            context.appStarted_otb_fn();

            // SymbolId
            if (!context.symbol) {
                context.symbol = window.windowSymbol;
                context.item = context.symbol;
                if(context.symbol) {
                    context.symbolPrice = [context.symbol.symbolId, 0, context.symbol.price, 0];
                }
            }
            if (!context.selectedSymbol) {
                context.selectedSymbol = window.windowSymbol;
            }
            
            return "User restored to userId: " + context.user.userId;
        }

        if(!context.isVisitorPage) {
            // window.location.href = "../login/index.html";
        }
        return "unable to restore user.";
    },

}

export default {
    userService,
    serverBus
}