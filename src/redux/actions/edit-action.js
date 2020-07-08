import axios from 'axios';

import { API_URL } from '../../helpers/url';
import { getContactData } from './app-action';

export const openModal = (currentContact) => {
    return {
        type: 'OPEN_MODAL',
        payload: currentContact
    }
};

export const closeModal = () => {
    return {
        type: 'CLOSE_MODAL',
        payload: null
    }
};

export const saveEdit = (contact) => async (dispatch) => {
    await axios.put(`${API_URL}/contacts/${contact.id}`, contact);
    dispatch(getContactData());
}