<template>
    <div class="container">
      <h1>World Map</h1>
      <br>
      <div id="map"></div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import * as LeaFlet from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default defineComponent({
  name: 'WorldMap',
  props: {
    points: {
      type: Array,
      required: true
    }
  },
  data() {
    let map = null;
    let previous_points = [];
    return { map, points: this.points, previous_points }
  },
  mounted() {
    this.map = LeaFlet.map('map').setView([43.604652, 1.444], 10);
    
    LeaFlet.tileLayer('https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="http://maps.stamen.com/#terrain/12/37.7706/-122.3782">Stamen</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
    }).addTo(this.map);
  },
  watch: {
    points: {
      handler() {
        if (this.previous_points.length != 0) {
          LeaFlet.polyline(this.previous_points).removeFrom(this.map);
        }
        
        let points = []
        for (let point of this.points) {
          points.push([point[0], point[1]]);
        }

        this.previous_points = points;

        //LeaFlet.polyline(previous_value).removeFrom(this.map);
        //LeaFlet.polyline(new_value).addTo(this.map);

      },
      deep: true
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">


#map { 
  height: 35em;
  width: 60em;
  border: solid 5px;
}

</style>
