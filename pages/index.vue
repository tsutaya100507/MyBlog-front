<template>
  <div class="wrapper">
    <div class="first-view">
      <div class="first-view-img"></div>
      <Header class="header" />
      <h1>TatsuyaIchikawa<br>engeering blog</h1>
      <GlobalNav class="grobal-nav"/>

    </div>
    <section class="left-colomun">
      <div class="cards-wrapper">
        <PostCard :post="post" v-for="post in posts" :key=post.id class="post-card"/>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
  import PostCard from "~/components/postCard.vue";
  import Footer from '~/components/shared/layouts/footer.vue'
  import Header from '~/components/shared/layouts/header.vue'
  import GlobalNav from '~/components/shared/layouts/globalnav.vue'

  export default {
    components: {
      PostCard,
      Footer,
      Header,
      GlobalNav,
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
  }

  .first-view {
    position: relative;
    width: 100%;
    height: 500px;
    background-color:  rgba(0, 210, 210, .9);
  }

  .header {
    position: absolute;
  }

  .first-view-img {
    position: absolute;
    margin: 0 auto;
    width: 100%;
    background-image: url('/43624947930_bc5ede0e54_o.jpg');
    opacity: 0.3;
    background-size: cover;
    background-position: center;
    height: 100%;
  }

  h1 {
    position: absolute;
    top: 220px;
    width: 100%;
    text-align: center;
    line-height: 2;
    font-weight: 800;
    font-size: 35px;
    color: #FFFFFF;
  }

  .grobal-nav {
    position: absolute;
    bottom: 40px;
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
    /* margin-top: 200px; */
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
