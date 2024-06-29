function setBackground(env){
    var context = this;
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
}