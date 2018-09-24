<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <p>This is my new {{ component }}</p>
        <button @click="changeText">Change Text</button>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  data: function() {
    return {
      component: 'component'
    }
  },
  methods: {
    changeText() {
      if(this.component === 'component'){
        this.component = 'changed component';
        const buttonComp = document.querySelector('button');
        buttonComp.classList.add('big');
      } else {
        this.component = 'component';
      }
      
    }
  }
}
</script>

<style scoped>
  p {
    font-size: 1.2em;
    font-weight: bold;
  }

  button {
    color: red;
    border: 2px solid red;
    padding: 10px 20px;
    border-radius: 9px;
    transition: all .3s;
  }

  button:hover {
    background: red;
    color: white;
  }

  .big {
    font-size: 2em;
    background: blue;
    padding: 20px 50px;
    border-radius: 10px;
  }
</style>


