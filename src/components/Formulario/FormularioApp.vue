<template>
  <form v-on:submit.prevent="submitTask" id="formulario" ref="formTarefa">

    <input id="nome" maxlength="50" class="caixa-texto" required type="text" placeholder="Nome" v-model="form.name">
    <textarea 
      id="desc" 
      class="caixa-texto" 
      maxlength="100"
      required 
      placeholder="Tarefa" 
      v-model="form.descricao"></textarea>
    <button class="botao">Enviar</button>

  </form>
</template>

<script>

export default {


  data() {
    return {
      form: {
        createdAt: new Date().toISOString(),
        descricao: '',
        done: false,
        name: '',
        id: null,
      }
    }
  },

  methods: {
    submitTask(){
      this.$store.dispatch('submitTask', this.form);
      this.form.name=''
      this.form.descricao=''
    }
  }
}

</script>

<style>
@import './Formulario.scss'
</style>