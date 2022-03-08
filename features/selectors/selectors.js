class Selectors {
    zadanie(count){
        return `[class*='list'] > div:nth-child(${count}) > a`
    }

    zadanie1Form(){
        return `[class*='col'] > form`
    }
}

module.exports = { Selectors }