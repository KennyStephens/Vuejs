<template>
    <v-list class="pa-3">
        <v-list-tile
            v-for="(index, i) in 5" :key="i">
            <v-icon color="green" class="mr-1">star</v-icon>
            Server #{{ index }}
        </v-list-tile>
    </v-list>
</template>

<script>
</script>

<style scoped>

</style>
