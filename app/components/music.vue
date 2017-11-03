<template>
  <div class="musicBox">
    <audio id="pic" src="./sources/music/music1.mp3" autoplay="autoplay" preload="preload"></audio>
    <img id="musicImg" src="../sources/img/music.png" width="44px" height="44px" v-on:click="translate" class="rotate"></img>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    translate() {
      let audio = document.getElementById('pic');
      if (audio.paused) {
        audio.play();
        $("#musicImg").addClass('rotate');
      } else {
        audio.pause();
        $("#musicImg").removeClass('rotate');
      }
    }
  }
}
</script>

<style lang="scss">
  .musicBox {
    position: absolute;
    top: 50px;
    right: 50px;
    width: 44px;
    height: 44px;
    border-radius: 50%;

    img {
      width: 100%;
      height: 100%;
      cursor: pointer;
    }

    .rotate{
        animation:pic 10s linear infinite;
        -webkit-animation:pic 10s linear infinite;
        -moz-animation:pic 10s linear infinite;
        -ms-animation:pic 10s linear infinite;
        -o-animation:pic 10s linear infinite;
    }@-webkit-keyframes pic{from{-webkit-transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);}}
    @-moz-keyframes pic{from{-moz-transform:rotate(0deg);}to{-moz-transform:rotate(360deg);}}
    @-ms-keyframes pic{from{-ms-transform:rotate(0deg);}to{-ms-transform:rotate(360deg);}}
    @-o-keyframes pic{from{-o-transform:rotate(0deg);}to{-o-transform:rotate(360deg);}}
    @keyframes pic{from{-webkit-transform:rotate(0deg);-moz-transform:rotate(0deg);-ms-transform:rotate(0deg);-o-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-moz-transform:rotate(360deg);-ms-transform:rotate(360deg);-o-transform:rotate(360deg);transform:rotate(360deg);}}

/*    .rotateRest {
      transition: All 0.4s ease-in-out;
      -webkit-transition: All 0.4s ease-in-out;
      -moz-transition: All 0.4s ease-in-out;
      -o-transition: All 0.4s ease-in-out;
    } */
  }
</style>