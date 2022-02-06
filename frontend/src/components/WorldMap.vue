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
  data() {
    let map = null;
    let polyline = LeaFlet.polyline([])
    return { map, polyline }
  },
  computed: {
    points () {
      return this.$store.state.points
    }
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

    this.polyline.addTo(this.map)
  },
  watch: {
    points: {
      handler(value) {
        
        //if (this.polyline) {
        //  this.polyline.removeFrom(this.map)
        //}

        let point_list = []

        for (let point of value) {
          point_list.push([point.longitude, point.latitude])
        }

        //this.polyline = LeaFlet.polyline(point_list)
        //this.polyline.addTo(this.map)
        this.polyline.setLatLngs(point_list)
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
