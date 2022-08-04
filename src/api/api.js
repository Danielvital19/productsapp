import axios from 'axios';
import { ENDPOINTS } from '../components/utils/utils.js'


export const ApiFetch = {
    getItemDetails : async (id) => {
        console.log(ENDPOINTS.API.ITEM.url)
        const res = await axios.get(`${ENDPOINTS.API.ITEM.url}${id}`);
        return res.data;
    },
    getItemDescription : async (id) => {
        const res = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
        return res.data.plain_text;
    },
    getSearchByQuery: async (query) => {
        const res = await axios.get(`${ENDPOINTS.API.SEARCH.url}${query}`);
        return res.data.results;
    },
}
