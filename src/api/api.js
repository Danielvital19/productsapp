import axios from 'axios';


export const ApiFetch = {
    getItemDetails : async (id) => {
        const res = await axios.get(`https://api.mercadolibre.com/items/${id}`);
        return res.data;
    },
    getItemDescription : async (id) => {
        const res = await axios.get(`https://api.mercadolibre.com/items/${id}/description`);
        return res.data.plain_text;
    }
}
