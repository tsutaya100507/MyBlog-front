<template>
  <div class="wrapper">
    <SideBar :links="links"/>
    <div class="content-wrapper">
      <AdminHeader />
      <div class="post-form">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field
            v-model="slug"
            :rules="slugRules"
            :counter="20"
            label="Slug"
            required
          ></v-text-field>
          <v-text-field
            v-model="title"
            :rules="titleRules"
            :counter="50"
            label="Title"
            required
          ></v-text-field>
          <v-text-field
            v-model="tags"
            :rules="titleRules"
            :counter="15"
            label="Tags"
            required
          ></v-text-field>

          <no-ssr>

				<v-flex xs12 class="text-xs-center text-sm-center text-md-center text-lg-center">
					<img :src="imageUrl" height="150" v-if="imageUrl"/>
					<v-text-field label="Select Image" @click='pickFile' v-model='imageName' prepend-icon='attach_file'></v-text-field>
					<input
						type="file"
						style="display: none"
						ref="image"
						accept="image/*"
						@change="onFilePicked"
					>
				</v-flex>
          </no-ssr>

          <no-ssr>
          <div id="editor">
            <mavon-editor style="height: 100%" language="en" v-model="value"></mavon-editor>
          </div>
          </no-ssr>
          <v-btn
            :disabled="!valid, processing"
            @click.prevent="submit"
          >submit</v-btn>
          <v-btn @click="clear">clear</v-btn>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script>
  import AdminHeader from "~/components/shared/layouts/adminHeader.vue";
  import SideBar from "~/components/shared/layouts/sideBar.vue";
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'

  export default {
    name: 'editor',
    components: {
      SideBar,
      AdminHeader,
      mavonEditor,
    },
    data() {
      return {
        links: [
          { name: "Dashbord", path: "/admin" },
          { name: "NewPost", path: "/admin/newpost" },
          { name: "AllPosts", path: "/admin/allposts" },
          { name: "Back To Top", path: "/" },
        ],
        valid: true,
        slug: '',
        slugRules: [
          v => !!v || 'slug is required',
          v => (v && v.length <= 20) || 'slug must be less than 10 characters'
        ],
        title: '',
        titleRules: [
          v => !!v || 'title is required',
          v => (v && v.length <= 50) || 'title must be less than 10 characters'
        ],
        imageName: '',
		    imageUrl: '',
		    imageFile: '',
        value: '',
        bodyRules: [
          v => !!v || 'body is required',
        ],
        tags: [],
        processing: false,
      }
    },
    methods: {
      async submit () {
        if (this.processing) return
        this.processing = true
        if (this.$refs.form.validate()) {
          await this.$axios.$post(`${process.env.apiBaseUrl}/v1/blogs`, {
            slug: this.slug,
            title: this.title,
            tags: this.tags,
            body: this.value,
            heroImg: this.imageName,
            heroImg: this.imageFile,
            heroImg: this.imageUrl,
          }).then((response) => {
          this.slug      = ""
          this.title     = ""
          this.value     = ""
          this.imageName = ""
          this.imageFile = ""
          this.imageUrl  = ""
          this.tags      = ""
        })
          window.location.href = '/admin/allposts'
        }
      },
      pickFile () {
        this.$refs.image.click ()
      },
      onFilePicked (e) {
        const files = e.target.files
        if(files[0] !== undefined) {
          this.imageName = files[0].name
          if(this.imageName.lastIndexOf('.') <= 0) {
            return
          }
          const fr = new FileReader ()
          fr.readAsDataURL(files[0])
          fr.addEventListener('load', () => {
            this.imageUrl = fr.result
            this.imageFile = files[0] // this is an image file that can be sent to server...
          })
        } else {
          this.imageName = ''
          this.imageFile = ''
          this.imageUrl = ''
        }
      },
      clear () {
        this.$refs.form.reset()
      }
    }
  }

</script>

<style scoped>
  .wrapper {
    display: flex;
  }

  .content-wrapper {
    width: 100%;
  }

  .post-form {
    margin-top: 50px;
    margin-left: 200px;
    padding: 20px;
  }

  #editor {
    margin: 40px auto;
    width: 100%;
    height: 580px;
    z-index: 0;
  }
</style>
