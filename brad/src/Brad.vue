<template>
  <div id="app">
    <nav class="main-nav">
      <a href="#home"><img class="logo" src="@/assets/logo/B-Monogram.png" alt="Brad Blackburn" /></a>
      <Burger></Burger>
    </nav>
    <Sidebar>
        <ul class="sidebar-panel-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </Sidebar>
    <div class="lead">
      <h1 class="name">Brad Blackburn</h1>
      <h2 class="title"> Creative Leader | Graphic Artist | Animator</h2>
    </div>
  </div>
</template>

<script>
  import Burger from '@/components/Menu/Burger';
  import Sidebar from '@/components/Menu/Sidebar';

  export default {
    name: 'app',
    components: {
      Burger,
      Sidebar
    }
  }
</script>