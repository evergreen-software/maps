
const serverBus = new Vue();

export const libService = {

    colors: [
        'orange', 'green', 'gray',
        '#3366cc', 
        '#dc3912', 
        '#ff9900', 
        '#109618', 
        '#66aa00',
        '#dd4477', 
        '#0099c6', 
        '#990099'
    ],
    debugMessages: [],
    setBackground_otb_fn(context, env, from) {
        window.scrollTo(0, 0);
        context.debugMessages.push("setBackground: " + env + " " + from);
        switch (env) {
            case "Prod":
                context.backgroundColor = "rgb(255, 255, 255)";
                document.body.style.backgroundColor = this.backgroundColor;
                break;
            case 'Dev':
                context.backgroundColor = "rgb(250, 250, 230)";
                document.body.style.backgroundColor = this.backgroundColor;
                break;
            case 'Test':
                context.backgroundColor = "rgb(230, 250, 250)";
                document.body.style.backgroundColor = this.backgroundColor;
                break;
            case 'Back':
                context.backgroundColor = "rgb(250, 230, 250)";
                document.body.style.backgroundColor = this.backgroundColor;
                break;
            default:
                context.backgroundColor = "rgb(225, 225, 220)";
                document.body.style.backgroundColor = this.backgroundColor;
                break;
        }
    },
    
    mounted_otb_fn(context){
        window.setTimeout((context)=>{
            if(context.loading)
            {
                context.showDebugMessages = false; // This is it
            }
        }, 3, context);
    },
    
    goToPage_otb_fn(){
        window.location.href = 'https://stocktech.org?view=Login';
    },
}
export const constants = {

    subscriptions: {
        Visitor: 0,
        Basic: 1,
        Trading: 2,
        Admin: 3,
        Hide: 99,
    }

}

export default {
    constants,
    libService,
    serverBus
}