import { loadUsersByPage } from "../usecases/load-users";


const state = {
    currentPage: 0,
    users:[],
};


const loadNextPage = async() => {
   await loadUsersByPage(state.currentPage + 1)
};

const loadPreviousPage = async() => {
    console.log('Error');

}

const onUserChanged = () => {

    console.log('Error');

}

const reloadPage = async () => {
    console.log('Error');

}

export default {

    loadNextPage,
    loadPreviousPage,
    onUserChanged,
    reloadPage,

    getUser: () => [...state.users],
    getCurrentPage: () => state.currentPage

}