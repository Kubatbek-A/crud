import axios from 'axios';

import store from '../store/index';
import { API_URL } from '../../helpers/url';

export const setContactData = (data, maxPage, quantity) => ({
    type: 'SET_DATA',
    payload: data,
    maxPage,
    quantity
});

export const getContactData = () => async (dispatch) => {
    const quantity = (await axios.get(`${API_URL}/contacts`)).data.length;
    const maxPage = Math.ceil(quantity/2);
    const currentPage = store.getState().AppReducer.currentPage;
    const { data } = await axios.get(`${API_URL}/contacts`, {
        params: {
            _sort: 'firstName',
            _page: currentPage,
            _limit: 2
        }
    });
    dispatch(setContactData(data, maxPage, quantity));
};

export const newPage = (page) => {
    return {
        type: 'NEW_PAGE',
        payload: page
    }
}

export const  deleteContact = (id) => async (dispatch) => {
    await axios.delete(`${API_URL}/contacts/${id}`)
    dispatch(getContactData());
};

export const addContact = (contact) => async (dispatch) => {
    await axios.post(`${API_URL}/contacts`, contact);
    dispatch(getContactData());
};