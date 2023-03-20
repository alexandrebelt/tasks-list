import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    notas: [],
    filtro: 'all'
  },

  getters: {
    notas(state) {
      return state.notas
    },

    filteredTasks(state) {
      const filter = state.filtro
      if (filter === 'true') {
        return state.notas.filter(nota => nota.done === true)
      } else if (filter === 'false') {
        return state.notas.filter(nota => nota.done === false)
      } else {
        return state.notas
      }
    }
  },

  mutations: {
    setTasks(state, notas) {
      state.notas = notas;
    },

    CREATE_TASK: (state, payload) => {
      state.notas.push(payload)
    },

    UPDATE_TASK: (state, payload) => {
      const nota = state.notas.find(nota => nota.id === payload.id);
      nota.done = !nota.done
    },

    DELETE_TASK: (state, id) => {
      const i = state.notas.map(nota => nota.id).indexOf(id);
      state.notas.splice(i, 1)
    },

    UPDATE_FILTER: (state, filtro) => {
      state.filtro = filtro
    }

  },

  actions: {

    showTasks({ commit }) {
      axios.get('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks')
        .then(res => {
          commit('setTasks', res.data)
          console.log(res)
        }).catch(console.log)
    },

    submitTask({ commit }, payload) {
      axios.post('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks', payload)
        .then((response) => {
          commit('CREATE_TASK', response.data)
          console.log(response)
        })
        .catch(console.log)
    },

    deleteTask({ commit }, id) {
      axios.delete('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks/' + id)
        .then((response) => {
          commit('DELETE_TASK', id)
          console.log(response)
        })
        .catch(console.log)
    },

    changeStatus({ commit }, payload) {
      if (payload.done) {
        axios.put('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks/' + payload.id, {
          done: true
        })
          .then((response) => {
            commit('UPDATE_TASK', response.data)
            console.log(response)
          })
          .catch(console.log)
      } else {
        axios.put('https://6415ac7e351c4aed490c5c4f.mockapi.io/api/v1/tasks/' + payload.id, {
          done: false
        })
          .then((response) => {
            commit('UPDATE_TASK', response.data)
            console.log(response)
          })
          .catch(console.log)
      }

    },

    updateFilter({ commit }, filtro) {
      commit('UPDATE_FILTER', filtro)
    }
  },


  modules: {
  }

})
