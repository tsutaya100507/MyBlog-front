<template>
  <article>
    <div v-if="post">
      <!-- <img :src="post.heroImg.url" alt="あああ"> -->
    </div>
    <h1>{{ post.title }}</h1>
    <div class="time">投稿日時：{{ publishedDate }}</div>
    <BlogBody :post="post"/> 
  </article>
</template>

<script>
import BlogBody from '~/components/blogContent/body.vue'

export default {
  components: {
    BlogBody
  },
  data () {
    return {
      post: '',
    }
  },
  methods: {
    async updateBlog() {
      this.post = await this.$axios.$get(`${process.env.apiBaseUrl}/v1/blogs/${this.$route.params.slug}`)
      console.log(new Date(this.post.created_at))
    }
  },
  mounted () {
    this.updateBlog()
  },
  computed: {
    publishedDate() { return (new Date(this.post.created_at)).toLocaleDateString('ja-JP').replace(/\//g, '.')}
  }
}
</script>

<style scoped>
  article {
    padding: 50px;
  }

  img {
    width: auto;
    height: 400px;
  }

  h1 {
    margin-bottom: 10px;
    padding-bottom: .5em;
    border-bottom: 2px solid #7ED1E6;
    font-size: 30px;
  }

  h1:first-letter {
    margin-right: .1em;
    font-size: 1.5em;
  }
 
 .time {
   margin-left: auto;
   text-align: right;
   margin-bottom: 50px;
 }


</style>

