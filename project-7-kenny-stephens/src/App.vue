<template>
  <div id="app">
    <v-app dark>
      <v-container>
        <app-header></app-header>
        <div>
          <v-layout>
            <v-flex xs6>
              <app-servers></app-servers>
            </v-flex>
            <v-flex xs6>
              <app-server-details></app-server-details>
            </v-flex>
          </v-layout>
        </div>
        <app-footer></app-footer>
      </v-container>
    </v-app>
  </div>
</template>

<script>
import appHeader from './components/AppHeader.vue'
import appServers from './components/AppServers.vue'
import appServerDetails from './components/AppServerDetails'
import appFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    appHeader,
    appServers,
    appServerDetails,
    appFooter
  }
}
</script>

<style>

</style>
