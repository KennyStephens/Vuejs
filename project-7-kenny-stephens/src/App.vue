<template>
  <div id="app">
    <v-app>
      <v-container>
        <app-header></app-header>
        <hr>
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
import appHeader from './components/Header.vue'
import appServers from './components/Servers.vue'
import appServerDetails from './components/ServerDetails'
import appFooter from './components/Footer.vue'

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
