<template>
  <div class="wrapper">
    <div class="logo">
      <div class="first-view">
        <div class="title-first"></div>
        <div class="title-second"></div>
        <h1>バグ。。。時々涙目</h1>
      </div>
      <!-- <img src="/logo_transparent.png" alt="Tatsuya_Ichikawa"/> -->
      <transition name="fade">
        <nuxt-link to="/profile" class="profile">profile</nuxt-link>
      </transition>
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
  }

  .logo {
    height: 500px;
    margin: 0 auto 50px;
  }

  .first-view {
    position: relative;
    margin: 0 auto;
    width: 1280px;
    height: 500px;
  }

  .title-first {

  }

  .title-first::after {
    position: absolute;
    top: 30px;
    left: 30px;
    /* padding-left: 60px; */
    text-align: left;
    font-size: 200px;
    font-weight: 900;
    color: #F2F2F2;
    content: 'バグ。。。';
    overflow: hidden;
    width: 100%;
    word-break: keep-all;
  }

  .title-second::after {
    position: absolute;
    top: 250px;
    /* left: 600px; */
    right: 30px;
    /* padding-right: 60px; */
    text-align: right;
    font-size: 200px;
    font-weight: 900;
    color: #F2F2F2;
    content: '時々涙目';
    word-break: keep-all;
  }

  h1 {
    position: absolute;
    top: 320px;
    text-align: left;
    font-size: 50px;
    margin-left: 50px;
    width: 100%;
    padding-left: 20px;
  }

  h1::after {
    position: absolute;
    width:100%;
    height:4px;
    left: 0;
    bottom: -10px;
    background: linear-gradient(to right, #7ED1E6, rgba(255,255,255,0) 100%);
    content: "";
  }

  .profile {
    display: block;
    border: 4px solid #1F7392;
    background-color: #ffffff;
    font-size: 24px;
    width: 200px;
    margin: 0 auto 50px;
    padding: 10px;
    letter-spacing: 1px;
    font-weight: 600;
    text-align: center;
    color: #1F7392;
    transition: .4s;
  }

  .profile:hover {
    background: #1F7392;
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
    margin-top: 110px;
  }

  img {
    width: 100%;
    max-width: 650px;
    height: auto;
  }

  .post-card {
    width: 25%;
    min-width: 300px;
  }

  @media screen and (max-width:680px) {
    img {
      width: 100%;
    }
  }

  @media screen and (max-width:899px) {
    .post-card {
      width: 50%;
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
