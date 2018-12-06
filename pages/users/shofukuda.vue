<template>
  <div class="page-wrapper">
    <header>
      <nuxt-link to="/">back to TOP</nuxt-link>
      <h1>profile</h1>
    </header>
    <div class="wrapper">
    <div class="intro-card">
      <div class="name">{{ user.name }}</div>
      <div class="job">{{ user.job }}</div>
      <div class="introduction">
        <p>CDTVをごらんのみなさん、はじめまして。</p>
        <p>ナンパ師の福田です。</p>
        <p>365日中100億時間はナンパしてます。</p>
        <p>それ以外の時間はプログラミングとかしてます。</p>
        </div>
    </div>
    <div class="slill-title">skills</div>
    <div class="skill-wrapper">
      <div class="skill-card card" v-for="skill in user.skills" :key=skill.name>
        <div class="skill-name">{{ skill.name }}</div>
        <div class="skill-term">{{ skill.term }}</div>
        <div class="skill-desc">{{ skill.description }}</div>        
      </div>
    </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/shared/layouts/footer.vue'

export default {
  components: {
    Footer,
  },
  data() {
    return {
      user: {
        name: "Sho Fkuda",
        job: "Engineer/Media Consultant",
        skills: [
          { name: "Ruby on Rails", term: "1 year", description: "最強"},
          { name: "jQuery", term: "1 year", description: "最強"},
          { name: "HTML・CSS", term: "1 year", description: "最強"},
          { name: "BlockChain", term: "3month", description: "最強"},
          { name: "React", term: "2month", description: "もうすぐ最強"},
          { name: "heroku", term: "1 year", description: "最強"},
        ]
      }
    }
  }
}
</script>

<style scoped>
  header {
    position: relative;
    padding: 20px;
    box-shadow: 0 0 15px rgba(0,0,0,.1);
  }

  header > a {
    font-size: 15px;
    color: black;
  }

  header > a {
  position: relative;
  display: inline-block;
  text-decoration: none;
  transition: color .5s;
}
  header > a:hover {
    color: #1F7392;

  }

  header > a::after {
    position: absolute;
    bottom: -4px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #1F7392;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform .3s;
    color: #1F7392;
  }
  header > a:hover::after {
    transform: scale(1, 1);
  }

  header > h1 {
    text-align: center;
    font-size: 40px;
  }

  .wrapper {
    padding: 0 25px;
  }

  .card {
    padding: 20px;
    box-shadow: 0 0 15px rgba(0,0,0,.3);
  }

  .intro-card {
    width: 80%;
    margin: 20px auto;
    text-align: center;
    line-height: 30px;
    padding: 50px 20px;
    margin-top: 50px;
  }

  .name {
    margin-bottom: 12px;
    font-size: 28px;
  }

  .job {
    margin-bottom: 22px;
    font-size: 18px;
  }

  .introduction > p {
    margin: 0 auto;
  }

  .skill-wrapper {
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
    flex-wrap: wrap;
  }

  .skill-card {
    width: 30%;
    min-width: 300px;
    margin: 20px;
    padding: 40px 30px;
  }

  .slill-title {
    position: relative;
    width: 100px;
    text-align: center;
    font-size: 40px;
    margin: 50px auto 30px;
  }

  .slill-title::before,
  .slill-title::after {
    position: absolute;
    top: 20px;
    content: '';
    width: 25px;
    height: 2px;
    background: black;
    border-radius: 10px;
  }
  
  .slill-title::before {
    left: -30px;
  }

  .slill-title::after {
    right: -30px;
  }

  .skill-name {
    font-size: 18px;
    margin-bottom: 15px;
    text-align: center;
  }

  .skill-term {
    text-align: center;
    margin-bottom: 20px;
  }

  .skill-desc {
    line-height: 25px;
  }

  @media screen and (max-width: 840px) {
    .skill-card {
      width: 40%;
    }
  }

  .page-enter-active, .page-leave-active {
  transition: opacity .5s;
  }

  .page-enter, .page-leave-to {
    opacity: 0;
  }

</style>
