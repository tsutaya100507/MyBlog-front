<template>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-text>
          <v-form @submit.prevent="login">
            <p class="error" v-if="formError">{{ formError }}</p>
            <v-text-field type="text" v-model="formUsername" name="username" label="username" />
            <v-text-field type="text" v-model="formPassword" name="password" label="password" />
            <v-card-actions>
              <v-btn type="submit">login</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      formError: null,
      formUsername: "admin",
      formPassword: "pass",
    }
  },
  methods: {
    async login() {
      try {
        await this.$store.dispatch('login', {
          username: this.formUsername,
          password: this.formPassword
        })
        this.$router.push('/admin')
      } catch(e) {
        this.formError = e.messae
      }
    },
  }
}
</script>

