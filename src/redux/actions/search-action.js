import axios from 'axios';

import { API_URL } from '../../helpers/url';

const setFoundItem = (data) => {
    return {
        type: 'FOUND_ITEM',
        payload: data
    };
}

export const searchItem = (search) => async (dispatch) => {
    console.log(search)
    const foundItem = await axios.get(`${API_URL}/contacts`, {
        params: {
            q: search
        }
    });
    if (!foundItem.data.length) return alert('Ничего не найдено!');
    dispatch(setFoundItem(foundItem.data))
};

export const closeSearchModal = () => {
    return {
        type: 'CLOSE_SEARCH_MODAL',
        payload: []
    }
};