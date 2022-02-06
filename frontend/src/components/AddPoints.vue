<template>
    <div class="container">
      <h1>Add Points To The Map</h1>
      <br>
      <div id="inputs">
        <div>
            <p>Longitude</p>
            <input type="text" placeholder="longitude" v-model="longitude">
        </div>
        <div>
            <p>Latitude</p>
            <input type="text" placeholder="latitude" v-model="latitude">
        </div>
        <div>
            <button v-if="points.length > 0" @click="deletePoints">Delete All</button>
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
                <td>{{ point['longitude'] }}</td>
                <td>{{ point['latitude'] }}</td>
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
  data() {
      return { longitude: 0, latitude: 0 }
  },
  computed: {
      points() {
          return this.$store.state.points
      }
  },
  methods: {
      addPoint() {
        let isNumber = (value) => !isNaN(parseFloat(value))

        if (isNumber(this.longitude) && isNumber(this.latitude)) {
            let point = {
                longitude: parseFloat(this.longitude),
                latitude: parseFloat(this.latitude)
            }
            this.$store.commit('addPoint', point)    
        }
      },
      deletePoint(index) {
        this.$store.commit('deletePoint', index)   
      },
      deletePoints() {
        this.$store.commit('deletePoints')
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
