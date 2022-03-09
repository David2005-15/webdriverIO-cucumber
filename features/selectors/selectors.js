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

    applyButton(){
        return `[class*="js-open"]`
    }

    form(){
        return [`#save-btn`, `[name="name"]`, `#email`, `[name="phone"]`]
    }
}

module.exports = { Selectors }