
export const utils = {
    redirectoToErrorPage : () => {
        document.location.href = '/Error'
     }    
}

export const ENDPOINTS = {
    API: {
        SEARCH:{
            url:'https://api.mercadolibre.com/sites/MLA/search?q=:'
        },
        ITEM:{
            url:'https://api.mercadolibre.com/items/'
        }
    }
}