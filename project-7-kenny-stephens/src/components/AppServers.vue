<template>
    <v-list class="pa-3">
        <v-list-tile
            v-for="(index, i) in 5" :key="i">
            <v-icon color="amber accent-2" class="mr-1">computer</v-icon>
            Server #{{ index }}
        </v-list-tile>
    </v-list>
</template>

<script>
</script>

<style scoped>

</style>
