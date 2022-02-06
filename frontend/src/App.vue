<template>
  <page-header class=header></page-header>
  <div class="content">
    <world-map></world-map>
    <add-points></add-points>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue';
import PageHeader from './components/PageHeader.vue';
import WorldMap from './components/WorldMap.vue';
import AddPoints from './components/AddPoints.vue';

export default defineComponent({
  name: 'App',
  components: {
    PageHeader,
    WorldMap,
    AddPoints
  },
  data() {
    return { points: ref([]) }
  }
});
</script>

<style lang="scss">
$font-color: #2c3e50;
$hover-button-color: #3b4b5e;
$hover-color: #516880;

* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%;
  width: 100%;
}

body {
  background: url('assets/background.jpg') no-repeat fixed;

  display: flex;
  justify-content: center;
}

table {
  th, td {
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: $font-color;
    color: white;
  }

  tr:hover {
    background-color: $hover-color;
  }
}

button {
  color: white;
  background-color: $font-color;
  padding: 1em;
  padding-top: 10px;
  padding-bottom: 10px;
  border-radius: 15px;
}

button:hover {
  background-color: $hover-button-color;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $font-color;

  height: 100%;
  margin-left: 20em;
  margin-right: 20em;

  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.container {
  background: gray;

  width: 100%;

  border-radius: 20px;
  box-shadow: 10px 5px 5px black;
  margin-top: 1em;
  margin-bottom: 1em;
  margin-left: 5em;
  margin-right: 5em;
  padding: 5em;
  padding-top: 2em;
  padding-bottom: 2em;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4em;
  }
}
</style>
