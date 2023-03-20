<template>
  <div id="app">
    <div class="container">
      <h1 class="nome-app">Lista de tarefas</h1>

      <formulario />
      <abas />
      <router-view class="lista"></router-view>

    </div>
  </div>
</template>

<script>
import AbasTaks from './components/AbasTask/AbasTaks.vue';
import FormularioApp from './components/Formulario/FormularioApp.vue';

export default {

  components: {
    'formulario': FormularioApp,
    'abas': AbasTaks
  },

  data() {
    return {

    }
  },
}
</script>

<style>
@import './App.scss';
</style>
