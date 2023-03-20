<template>
    <div class="item-col2">
        <div v-if='this.nota.done === false'>
            <span v-on:click="changeStatus(nota.id)" class="status ativa">{{ showStatus(nota.done) }}</span>
        </div>
        <div v-else>
            <span v-on:click="changeStatus(nota.id)" class="status concluida">{{ showStatus(nota.done) }}</span>
        </div>
    </div>
</template>
<script>

export default {
    props: ['nota'],

    data() {
        return {

        }
    },

    methods: {
        changeStatus(id) {
            this.$store.dispatch('changeStatus', { id, done: !this.nota.done })
        },

        showStatus(data) {
            if (data == false) {
                return "Ativa"
            } else {
                return "Concluída"
            }
        }
    }
}
</script>

<style>
@import './MeuStatus.scss'
</style>