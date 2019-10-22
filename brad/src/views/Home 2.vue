<template>
  <div class="home">
    <Artist></Artist>
    <img alt="Vue logo" class="superVue" src="../assets/logo.png" />
    <!-- <p class="bnavXT">Next Page</p> -->
  </div>
</template>

<script>
import Artist from '@/components/Artist/Main.vue'

export default {
  name: 'home',
  components: {
    Artist
  }
}
</script>

<style scoped lang="scss">

// .bnavXT {
//       font-size: 0.8em;
//       font-family: 'Raleway', sans-serif;
//       margin: 0 auto;
//       color: white;
//       opacity: 0;
//       text-transform: uppercase;
//       margin: 0 auto;
//       text-align: center;
//       position: relative;
//       left: -5vw;
//       top: -7.3vh;
//       display:block;

//       &:hover {
//         opacity: 0.7;
//         cursor: pointer;
//       }
//   }

  .superVue {
    text-align: center;
    margin: 0 auto;
    padding: 15px;
    width: 100%;
    max-width: 72px;
    display:block;
    //background: -webkit-repeating-linear-gradient(0deg, gold 5%,  rgba(212,194,162,0.2) 100%,);
    //background: -webkit-radial-gradient(center, ellipse cover, gold 0%, #d4c2a2 77%, #937b5d 100%);
    //-webkit-background-clip: text;
    //-webkit-text-fill-color: transparent;
    transform: rotate(-90deg);
    transition: transform 2s;
    transition: ease-in-out;
    //opacity: 0.3;
    filter: opacity(30%) grayscale(100%);

    &:hover {
        opacity: 0.8;
        cursor: pointer;
        transform: rotate(-90deg) scale(1.2);
        //text-shadow: 2px 2px 2px gold;
        filter: saturate(100%) opacity(100%) grayscale(0%);
    }
}
</style>