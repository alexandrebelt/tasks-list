<template>
  <ul class="lista" v-if="notas.length > 0">
    <li class="item" v-for="nota in filteredTasks.sort((a, b) => b.id - a.id)" v-bind:key="nota.id">
      <div class="item-col1">

        <p class="titulo">{{ nota.name }}</p>
        <p class="descricao">{{ nota.descricao }}</p>
      </div>
      <meu-status :nota="nota" />
      <div class="item-col3">
        <img class="trash" v-on:click="deleteTask(nota.id)" src="../assets/delete.png">
      </div>
    </li>
  </ul>

  <h5 v-else>
    Não há tarefas para mostrar
  </h5>
</template>

<script>

import MeuStatus from '../components/MeuStatus/MeuStatus.vue'

export default {
  name:'listView',

  props:{
    filtro: Boolean
  },

  components: {
    'meu-status': MeuStatus
  },

  data() {
    return {

    }
  },

  computed: {
    notas() {
      return this.$store.getters.notas
    },

    filteredTasks(){
      return this.$store.getters.filteredTasks
    }
   
  },

  methods: {
    showTasks() {
      this.$store.dispatch('showTasks')
    }, 
    deleteTask(id){
      this.$store.dispatch('deleteTask', id)

    },
    
  },

  mounted() {
    this.showTasks()
  },


}
</script>

<style>
@import './ListaView.scss'
</style>