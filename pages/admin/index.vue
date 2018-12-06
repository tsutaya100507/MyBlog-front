<template>
  <div class="wrapper">
    <SideBar :links="links"/>
    <div class="content-wrapper">
      <AdminHeader />
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
          { name: "Back To Top", path: "/" },
        ]
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
</style>
