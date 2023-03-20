<template>
    <nav class="abas">
        <router-link class="aba" to="/all" @click="$store.dispatch('updateFilter', 'all')">Todas</router-link>
        <router-link class="aba" to="/false" @click="$store.dispatch('updateFilter', 'false')">Ativas</router-link>
        <router-link class="aba" to="/true" @click="$store.dispatch('updateFilter', 'true')">Concluídas</router-link>
    </nav>
</template>

<script>
export default {
    props: {
        filtro: Boolean
    },

    data() {
        return {

        }
    }
}
</script>

<style>
@import './AbasTaks.scss';
</style>