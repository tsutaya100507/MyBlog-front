<template>
  <section>
    <div v-if="post" class="markdown">
      <vue-markdown>{{ post.body }}</vue-markdown>
    </div>
  </section>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  transition: 'slide-left',

  components: {
    VueMarkdown,
  },
  props: [
    'post',
  ],
}
</script>

<style>
  .markdown > div > h2 {
    padding-left: .3em;
    margin-bottom: 30px;
    font-size: 24px;
    background: linear-gradient(transparent 70%, #7ED1E6 70%);
  }

  .markdown > div > h3 {
    padding: .5em;
    position: relative;
    font-size: 20px;
  }

  .markdown > div > h3:after {
    content: "";
    width:100%;
    height:4px;
    position: absolute;
    left: 0;
    bottom: 0;
    background: linear-gradient(to right, #7ED1E6, rgba(255,255,255,0) 100%);
  }


  .markdown > div > p {
    padding: 20px;
    font-size: 16px;
    margin-bottom: 30px;
    line-height: 2;
  }

  .markdown > div > ul {
    margin-bottom: 30px;
  }

.markdown > div > ul, .markdown > div > ol {
  background: rgb(211, 236, 245);
  /* border-radius :8px;角の丸み */
  box-shadow :0px 0px 5px silver;/*5px=影の広がり具合*/
  padding: 0.5em 0.5em 0.5em 2em;
  margin: 0 10px 30px;
}

.markdown > div > ul > li, .markdown > div > ol > li {
  font-size: 15px;
  font-weight: 600;
  line-height: 1.5;
  padding: 0.5em 0;
}

.markdown > div > p > strong {
  background-color: #fffacd;
}

</style>
