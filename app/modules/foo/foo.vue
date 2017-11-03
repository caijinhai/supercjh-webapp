<template>
  <div>
    <div id="fooPage">
      <div class="section">
        <img class="full-screen" src="../../sources/img/bg1.jpg" />
      </div>
      <div class="section">
        <img class="full-screen" src="../../sources/img/bg2.jpg" />
      </div>
    </div>
    <music></music>
  </div>
</template>

<script>
import 'fullpage.js'
import music from  '../../components/music.vue'

export default {
  data() {
    return {
    }
  },
  mounted() {
    $('#fooPage').fullpage();
  },
  components: {
    music
  }
}
</script>

<style>
.full-screen {
  width: 100%;
  height: 100%;
}
</style>