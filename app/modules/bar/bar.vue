<template>
  <div id="fullpage">
    <div class="section">
      <img class="full-screen" src="../../sources/img/bg1.jpg" />
    </div>
    <div class="section">
      <img class="full-screen" src="../../sources/img/bg2.jpg" />
    </div>
  </div>
</template>

<script>
import 'fullpage.js'

export default {
  data() {
    return {
    }
  },
  mounted() {
    $('#fullpage').fullpage();
  }
}
</script>

<style>
.full-screen {
  width: 100%;
  height: 100%;
}
</style>