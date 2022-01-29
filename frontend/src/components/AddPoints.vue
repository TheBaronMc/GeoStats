<template>
    <div class="container">
      <h1>Add Points To The Map</h1>
      <br>
      <div id="inputs">
        <div>
            <p>Longitude</p>
            <input type="text" name="longitude" id="longitude" placeholder="long.">
        </div>
        <div>
            <p>Latitude</p>
            <input type="text" name="latitude" id="latitude" placeholder="lat.">
        </div>
        <div>
            <button v-if="points.length > 0" @click="deleteAll">Delete All</button>
            <button @click="addPoint">Add</button>
        </div>
      </div>
      <table id="pointsView">
          <thead>
            <tr>
                <th>Num</th>
                <th>Longitude</th>
                <th>Latitude</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for='(point, index) in points'>
                <td>n°{{ index + 1 }}</td>
                <td>{{ point['long'] }}</td>
                <td>{{ point['lat'] }}</td>
                <td><button @click="deletePoint(index)" >Delete</button></td>
            </tr>
        </tbody>
      </table>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AddPoints',
  props: {
      points: {
          type: Array,
          required: true
      }
  },
  data() {
      return { points: this.points }
  },
  mounted() {
  },
  methods: {
      addPoint() {
        let latField = document.getElementById('latitude');
        let longField = document.getElementById('longitude');

        let isNumber = (value) => {
            return !isNaN(parseFloat(value));
        }

        if (isNumber(longField.value) && isNumber(latField.value)) {
            this.points.push({long: parseFloat(longField.value), lat: parseFloat(latField.value)});            
        }
      },
      deletePoint(index) {
        this.points.splice(index, 1);
      },
      deleteAll() {
        while (this.points.length > 0) {
            this.points.pop();
        }
      }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">

#inputs {
    width: 80%;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

#pointsView {
    width: 80%;
}

</style>
