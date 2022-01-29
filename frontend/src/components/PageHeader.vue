<template>
    <div class="main-title">
        <img alt="Vue logo" src="../assets/logo.png">
        <h1>GeoStat</h1>
    </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageHeader',
});
</script>


<style lang="scss">
.main-title {
    img {
        width: 8em;
        height: 8em;
        margin-right: 2em;
    }

    h1 {
        font-size: 6em;
        -webkit-text-stroke: 1px black;
        color: white;
        text-shadow: black 1em 0 1em;
    }

    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1em;
    margin-bottom: 1em;
}
</style>
