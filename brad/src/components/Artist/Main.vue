<template>
  <div class="main">
    <div class="lead">
      <h1 class="name"><span>B</span>rad <span>B</span>lackburn</h1>
      <h2 class="title"> Creative Leader | Graphic Artist | Animator</h2>
    </div><br><br>
  </div>
</template>

<script>

export default {
  name: 'Artist'
}
</script>

<style scoped lang="scss">
  .lead {
      width: 100%;
      text-align: center;
      margin: 0 auto;
      white-space: nowrap;
      color: white;
      //color: linear-gradient(gold, black);
      //text-align: center;
      //background: rgb(101,31,87);
      //background: linear-gradient(45deg, rgba(101,31,87,1) 0%, rgba(225,113,87,1) 48%, rgba(249,248,113,1) 100%);
      background: rgba(40,40,40,1);
      filter:grayscale(0.8);

      .name {
          font-size: 10em;
          font-family: 'Bright', serif;
          letter-spacing: 10px;
          text-transform: uppercase;
          transform: scale(1.1, 0.6);
          margin-bottom: 0px;
          color: white;
          //background: -webkit-linear-gradient(gold 30%, #D4C2A2 80%, #937B5D 90%); 
          //background: -webkit-linear-gradient(245deg, white 4%, gold 60%, rgba(212,194,162,0.2) 100%);
          background: -webkit-repeating-linear-gradient(0deg, gold 5%,  rgba(212,194,162,0.2) 100%,);
          background: -webkit-radial-gradient(center, ellipse cover, gold 0%, #d4c2a2 77%, #937b5d 100%);
          text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.3);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;

          span {
            font-size: 1.2em;
          }
      }

      .title {
          font-size: 1.8em;
          margin-top: -35px;
          font-family: 'Raleway', sans-serif;
          text-transform: uppercase;
          transform: scale(1.2, 1.2);
          color: rgba(212,194,162,0.3)
      }

  }
</style>