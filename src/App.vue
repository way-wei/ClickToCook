<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>

  </div>
</template>

<script>
export default {
  name: 'app',

  provide(){    
    return {
      reload: this.reload      
    }
  },
  
  
  data() {
    return {
      isRouterAlive: true,
    }
  },

  methods: {
    reload () {
      console.log('reload occure')
      this.isRouterAlive = false;
      this.$nextTick( ()=> { this.isRouterAlive=true } ) ;
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Noto+Serif+TC:wght@200;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@1,600&family=Noto+Sans+TC&family=Noto+Serif+TC:wght@200;400&display=swap');


* {
 padding: 0; 
 margin: 0; 
 box-sizing: border-box;
 font-family:'EB Garamond','Noto Serif TC';
}
</style>
