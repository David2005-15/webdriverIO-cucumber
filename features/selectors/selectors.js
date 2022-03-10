class Selectors {
    zadanie(count){
        return `[class*='list'] > div:nth-child(${count}) > a`
    }

    zadanie1Form(){
        return `[class*='col'] > form`
    }

    zadanie2Form(){
        return `.task > h1`
    }

    inputForm(){
        return `#in-name`
    }

    dropDown(){
        return [`.dropdown-toggle.menu-border`, `#menu1 > li:nth-child(1) > a`, `#start-edit`]
    }

    fileUpload(){
        return `[type="file"]`
    }

    textArea(){
        return `#in-notes`
    }

    submit(){
        return `#save-btn`
    }

    noteComplete(){
        return `div > div.notifyjs-container > div > span`
    }

    loginField(){
        return `#LoginForm__username`
    }

    passwordField(){
        return `#LoginForm__password`
    }

    submitLoginForm(){
        return `#LoginForm_save`
    }

    error(){
        return `.alert-danger`
    }

    zadanieTitle(){
        return `li:nth-child(2)`
    }

    firstItem(){
        return `div:nth-child(1) > div:nth-child(1) > div > div.draggable.ui-draggable.ui-draggable-handle`
    }

    target(){
        return `div.panel-body`
    }

    summary(){
        return `.summary-price`
    }
}

module.exports = { Selectors }