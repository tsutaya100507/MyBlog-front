<template>
  <header>
    <nav>
      <nuxt-link to="/users/tatsuyaichikawa" class="menu">
        profile
      </nuxt-link>
      <nuxt-link to="#" class="menu">
        contact
      </nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style scope>
  header {
    width: 100%;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .menu {
    display: block;
    border: 1px solid #FFFFFF;
    background-color: #FFFFFF;
    font-size: 15px;
    width: 160px;
    margin: 10px;
    padding: 5px;
    letter-spacing: 1px;
    font-weight: 600;
    text-align: center;
    color: #FFFFFF;
    transition: .4s;
    opacity: 1;
    background: transparent;
  }

  .menu:hover {
    background: #0E8787;
    color: white;
  }

  .menu:hover {
    opacity: .8;
  }

</style>

