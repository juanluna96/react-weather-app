import { SHOW_HIDE_SEARCHBAR } from '../types';

export const showHideSearchBarAction = (status) => async (dispatch) => {
    dispatch(showHideSearchBar(status));
};

const showHideSearchBar = (status) => {
    return ({
        type: SHOW_HIDE_SEARCHBAR,
        payload: status
    })
}