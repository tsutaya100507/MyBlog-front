<template>
  <article>
    <header>
      <nuxt-link :to="{ name: 'blogs-slug', params: {slug: post.slug} }">
        <div class="img-container">
          

          <figure class="cp_caption">

          <img :src="post.heroImg.url" alt="" class="hero-img">
        	<figcaption>
            <h2>Read more...</h2>
            <p>have fun!</p>
            <a href="#"></a>
	        </figcaption>
        </figure>



        </div>
      </nuxt-link>
      <div class="post-wrapper">
        <nuxt-link :to="{ name: 'blogs-slug', params: {slug: post.slug} }" class="post-title">
          <h1>{{ post.title }}</h1>
        </nuxt-link>
        <div class="post-createdate">{{ publishedDate }}</div>
      </div>
    </header>
  </article>
</template>

<script>
export default {
  transition: 'slide-left',
  props: [ 'post' ],
  computed: {
    publishedDate() {
      return (new Date(this.post.created_at)).toLocaleDateString('ja-JP').replace(/\//g, '.')
    }
  }
}
</script>

<style scoped>
  article {
    width: 290px;
    padding: 25px 20px 35px;
    border-bottom: 1px solid gray;
    margin: 0 10px 30px;
  }

  header {
    width: 100%;
  }

  .img-container {
    width: 100%;
    height: 180px;
    margin-bottom: 30px;
  }

  /* .hero-img {
    width: 250px;
    height: auto;
    max-height: 100%;
    margin-bottom: 25px;
    transition: .3s ease-in-out;
    filter: grayscale(0%);
  }

  .hero-img:hover {
    filter: grayscale(50%);
  } */

  .post-wrapper {
    width: 100%;
    padding: 0 3px;
  }

  a > h1 {
    margin-bottom: 30px;
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    color: #1C1C1C;
  }

  h1:hover {
    opacity: .6;
  }

  .post-body {
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    color: #1C1C1C;
    margin-bottom: 20px;
  }

  .post-createdate {
    text-align: right;
  }


figure.cp_caption {
	position: relative;
	overflow: hidden;
	width: 100%;
	min-width: 220px;
	max-width: 300px;
  max-height: 100%;
	margin: 10px 1%;
	text-align: left;
	color: #fff;
	background: rgba(27, 37, 56, 1);
}
figure.cp_caption * {
	-webkit-box-sizing: border-box;
	        box-sizing: border-box;
}
figure.cp_caption img {
  height: 180px;
	width: 260px;
	max-width: 100%;
	-webkit-transition: opacity 0.35s;
	        transition: opacity 0.35s;
  opacity: 1;
  object-fit: cover; /* この一行を追加するだけ！ */
}
figure.cp_caption figcaption {
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	padding: 30px 3em;
}
figure.cp_caption figcaption::before {
	position: absolute;
	top: 30px;
	right: 30px;
	bottom: 30px;
	left: 100%;
	content: '';
	-webkit-transition: all 0.4s;
	        transition: all 0.4s;
	-webkit-transition-delay: 0.2s;
	        transition-delay: 0.2s;
	opacity: 0;
	border-left: 4px solid rgba(255, 255, 255, 0.8);
	background-color: rgba(255, 255, 255, 0.5);
}
figure.cp_caption h2,
figure.cp_caption p {
	margin: 0 0 5px;
	-webkit-transition: opacity 0.3s, -webkit-transform 0.3s;
	        transition: opacity 0.3s, transform 0.3s;
	opacity: 0;
}
figure.cp_caption h2 {
	-webkit-transition-delay: 0s;
	        transition-delay: 0s;
	-webkit-transform: translate3d(30%, 0%, 0);
	        transform: translate3d(30%, 0%, 0);
}
figure.cp_caption p {
	-webkit-transition-delay: 0s;
	        transition-delay: 0s;
	-webkit-transform: translate3d(0%, 30%, 0);
	        transform: translate3d(0%, 30%, 0);
}
figure.cp_caption a {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	color: #fff;
}
figure.cp_caption:hover img {
	opacity: 0.3;
}
figure.cp_caption:hover figcaption h2 {
  margin-top: 40px;
  font-size: 28px;
	-webkit-transition-delay: 0.2s;
	        transition-delay: 0.2s;
	-webkit-transform: translate3d(0%, 0%, 0);
	        transform: translate3d(0%, 0%, 0);
	opacity: 1;
}
figure.cp_caption:hover figcaption p {
	-webkit-transition-delay: 0.2s;
	        transition-delay: 0.2s;
	-webkit-transform: translate3d(0%, 0%, 0);
	        transform: translate3d(0%, 0%, 0);
	opacity: 0.9;
}
figure.cp_caption:hover figcaption::before {
	left: 30px;
	-webkit-transition-delay: 0s;
	        transition-delay: 0s;
	opacity: 1;
	background: rgba(255, 255, 255, 0);
}

</style>
