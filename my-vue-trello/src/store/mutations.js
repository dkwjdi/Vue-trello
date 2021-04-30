import * as api from '../api'

const mutations = {
    SET_IS_ADD_BOARD(state, toggle) {
        console.log(" SET_IS_ADD_BOARD");
        console.log(state.isAddBoard);
        state.isAddBoard = toggle;
        console.log("스테이트" + state.isAddBoard);
    },
    SET_BOARDS(state, boards) {
        console.log(boards)
        state.boards = boards;
    },
    LOGIN(state, token) {
        if (!token) return
        state.token = token;
        localStorage.setItem('token', token);
        api.setAuthInHeader(token);
    },
    LOGOUT(state) {
        state.token = null;
        delete localStorage.token
        api.setAuthInHeader(null)
    }
}

export default mutations