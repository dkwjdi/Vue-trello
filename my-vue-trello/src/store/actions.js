import * as api from '../api'
const actions = {
    ADD_BOARD(_, { title }) {
        return api.board.create(title).then(data=>data.item)
    },
    
    ADD_CARD({ dispatch, state }, { title, listId, pos }) {
        return api.card.create(title, listId, pos)
            .then(() => dispatch('FETCH_BOARD', {id:state.board.id}))
    },

    FETCH_BOARDS({ commit }) {
        console.log("패치보드 실행")
        return api.board.fetch()
            .then(data => {
                commit('SET_BOARDS', data.list)
            })
    },
    LOGIN({ commit }, { email, password }) {
        return api.auth.login(email, password)
            .then(({accessToken})=>commit('LOGIN',accessToken))
    },
    FETCH_BOARD({ commit }, { id }) {
        return api.board.fetch(id).then(data => {
            commit('SET_BOARD', data.item)
        })
    }
}

export default actions