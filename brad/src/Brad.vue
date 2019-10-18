<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/"><img class="logo" src="@/assets/logo/B-Monogram.png" alt="Brad Blackburn" /></router-link>
      <Burger></Burger>
    </nav>
    <Sidebar>
        <ul class="sidebar-panel-nav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </Sidebar>
    <div class="panels">
      <router-view></router-view>
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