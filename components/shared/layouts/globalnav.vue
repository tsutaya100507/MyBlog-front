<template>
  <nav>
    <ul>
      <li>
        <nuxt-link to="#">
          tips
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">
          tutorials
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">
          seedservices
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="#">
          others
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    width: 100%;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 70%;
    margin: 0 auto;
  }

  a {
    font-weight: 800;
    font-size: 18px;
    color: #FFFFFF;
  }

  a:hover {
    color: yellow;
  }

</style>

