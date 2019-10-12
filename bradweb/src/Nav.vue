<template>
  <div id="nav">
    <nav class="main-nav">
      <div class="logo"><img src="./assets/IABB.png" alt="I am Brad Blackburn" /></div>
      <Burger></Burger>
    </nav>
    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#about">Projects</a></li>
        <li><a href="#contact">Connect</a></li>
      </ul>
    </Sidebar>
  </div>
</template>

<script>
import Burger from './components/Menu/Burger.vue';
import Sidebar from './components/Menu/Sidebar.vue';
//import HelloWorld from './components/HelloWorld.vue'

export default {
 name: 'Nav',
 components: {
   Burger,
   Sidebar
 }
}
</script>