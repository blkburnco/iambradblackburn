<template>
  <div class="about">
    <h1 class="vanity">Vanity</h1><hr>
    <div class="intro">
      <p>When I began working in the creative field, there were no rules and the only limit was the horizon of the imagination. These days, the industry has matured enough for our vantage to grow a little wider & more sophisticated. For over 20 years, I have been a visual artist & craftsman, providing skilled leadership to the creative services industry. Creativity & Inspiration are my trade. I have lead teams & supported a diverse range of clientele. Thank you for visiting my site. I hope you learn more about me & my work. I look forward to hearing from you.</p>
      <!-- <img id="bigHead" src="../assets/vanity/BG-Headshot.jpg" alt="Another Vain Headshot" /> -->
    </div>
    <div id="bigHead" alt="Another Vain Headshot"></div>
  </div>
</template>

<style lang="scss" scoped>

.about {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

h1.vanity {
  margin-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  font-family: 'Bright', serif;
  letter-spacing: 10px;
  text-transform: uppercase;
  transform: scale(1.1, 0.6);
  color: white;
  font-size: 8em;
  background: -webkit-repeating-linear-gradient(0deg, gold 5%,  rgba(212,194,162,0.2) 100%,);
  background: -webkit-radial-gradient(center, ellipse cover, gold 0%, #d4c2a2 77%, #937b5d 100%);
  text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: nowrap;
}

hr {
  width: 100%;
    max-width: 360px;
  text-align: left;
  margin: 0 auto;
    margin-left: -50px;
    margin-top: -25px;
  height: 5px;
  color: white;
  background: -webkit-linear-gradient(0deg, gold 5%,  rgba(212,194,162,0.2) 100%,);
  //background: -webkit-radial-gradient(center, ellipse cover, gold 0%, #d4c2a2 77%, #937b5d 100%);
  text-shadow: 3px 4px 4px rgba(0, 0, 0, 0.3);
  filter: grayscale(80%) brightness(50%);
}

  .intro {
    filter: grayscale(100%) brightness(70%);
    grid-template-columns: 50% 1fr;
    padding: 10px;

    p {
      width:45%;
      max-width:600px;
      text-align: left;
      color: white;
      font-size: 2em;
      font-family: 'Raleway', sans-serif;
      padding-right: 2vw;
    }
  }

  #bigHead {
      width: 60%;
      max-width: 500px;
      transform: scale(0.9);
      //padding: 2vw;
      border: 22px double gold;
      margin-top: 4vw;
      background-image: url('../assets/vanity/BG-Headshot.jpg');
      float: left;
      margin-left: 60%;
      margin-top: -20vw;
      height: 100%;
    }
}
</style>