<template>
  <div class="wrapper">
    <div class="logo">
      <div class="first-view">
        <h1>バグ。。。時々涙目</h1>
      </div>
      <!-- <img src="/logo_transparent.png" alt="Tatsuya_Ichikawa"/> -->
      <div class="admin-profile">
        <transition name="fade">
          <nuxt-link to="/users/shofukuda" class="profile">shofukuda</nuxt-link>
        </transition>
        <transition name="fade">
          <nuxt-link to="/users/tatsuyaichikawa" class="profile">tatsuyaichikawa</nuxt-link>
        </transition>
      </div>
    </div>
    <div class="cards-wrapper">
      <PostCard :post="post" v-for="post in posts" :key=post.id class="post-card"/>
    </div>
  </div>
</template>

<script>
  import PostCard from "~/components/postCard.vue";

  export default {
    components: {
      PostCard,
    },
    data () {
      return {
        posts: []
      }
    },
    methods: {
      async updateBlogs() {
        this.posts = await this.$axios.$get(`${process.env.apiBaseUrl}/v1/blogs`)
      }
    },
    mounted () {
      this.updateBlogs()
    },
  }
</script>

<style scoped>
  .wrapper {
    position: relative;
    text-align: center;
    background-color: #F9F9F9;
    padding-bottom: 50px;
  }

  .logo {
    height: 500px;
    margin: 0 auto 50px;
  }

  .first-view {
    position: relative;
    margin: 0 auto;
    width: 100%;
    background-image: url('/bug2.png');
    background-size: contain;
    background-position: center;
    height: 100%;
  }

  h1 {
    position: absolute;
    top: 320px;
    text-align: left;
    font-size: 0;
    margin-left: 50px;
    width: 100%;
    padding-left: 20px;
  }

  .admin-profile {
    display: flex;
    justify-content: center;
  }

  .profile {
    display: block;
    border: 4px solid #0E8787;
    background-color: #ffffff;
    font-size: 24px;
    width: 300px;
    margin: 50px 50px;
    padding: 10px;
    letter-spacing: 1px;
    font-weight: 600;
    text-align: center;
    color: #0E8787;
    transition: .4s;
  }

  .profile:hover {
    background: #0E8787;
    color: white;
  }

  .profile:hover {
    opacity: .8;
  }

  .cards-wrapper {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 200px;
  }

  img {
    width: 100%;
    max-width: 650px;
    height: auto;
  }

  .post-card {
    /* width: 25%; */
    min-width: 300px;
  }

  @media screen and (max-width:1048px) {
    .admin-profile {
      margin-top: -50px;
    }
  }

  @media screen and (max-width:680px) {
    .logo {
      height: 300px;
    }
    img {
      width: 100%;
    }
    .admin-profile {
      display: block;
      margin: 0 auto;
    }
    .profile {
      margin: 0 auto 20px;
    }
  }

    .page-enter-active, .page-leave-active {
  transition: opacity .5s;
  }

  .page-enter, .page-leave-to {
    opacity: 0;
  }

  .slide-left-enter {
    transform: translateX(2000px);
    opacity: 0;
  }

  .slide-left-enter-active {
    transition: all .3s linear;
  }

  .slide-left-leave-to {
    transform: translateX(-2000px);
    opacity: 0;
  }
  
  .slide-left-leave-active {
    transition: all .3s linear;
  }

</style>
