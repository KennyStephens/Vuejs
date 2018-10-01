<template>
    <v-list class="pa-3">
        <v-list-tile
            v-for="(index, i) in 5" :key="i">
            Server #{{ index }}
        </v-list-tile>
    </v-list>
</template>

<script>
</script>

<style scoped>

</style>
