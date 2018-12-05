<template>
  <div class="wrapper">
    <SideBar :links="links"/>
    <div class="content-wrapper">
      <AdminHeader />
      <div>aaaa</div>
      
<!-- // auth0チェック用 -->
      <div>
      <div v-if="loggedIn()" class="content">
        <h2>ログイン中です</h2>
        <nuxt-link class="button is-warning" to="/logout">
          <span class="icon"><i class="fa fa-sign-out"></i></span>
          <span>Logout</span>
        </nuxt-link>
      </div>

      <div v-if="!loggedIn()" class="content">
        <h2>ログインしてください</h2>
        <nuxt-link class="button is-primary" to="/login">
          <span class="icon"><i class="fa fa-sign-in"></i></span>
          <span>Login</span>
        </nuxt-link>
      </div>

</div>
    </div>
  </div>
</template>

<script>
  import AdminHeader from "~/components/shared/layouts/adminHeader.vue";
  import SideBar from "~/components/shared/layouts/sideBar.vue";

  export default {
    components: {
      SideBar,
      AdminHeader,
    },
    data() {
      return {
        links: [
          { name: "Dashbord", path: "/admin" },
          { name: "NewPost", path: "/admin/newpost" },
          { name: "AllPosts", path: "/admin/allposts" },
          { name: "Logout", path: "/logout" },
        ]
      }
    },
    methods: {
      loggedIn() {
        return this.$auth0.isAuthenticated();
      },
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
</style>
