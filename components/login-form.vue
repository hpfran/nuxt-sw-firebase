<template>
  <client-only>
    <b-navbar-nav class="ml-auto" v-if="!authUser">
      <b-nav-form >
        <b-form-input
          size="sm"
          class="mr-sm-2"
          type="text"
          placeholder="E-mail"
          v-model="emailInput"
        />
        <b-form-input
          size="sm"
          class="mr-sm-2"
          type="password"
          placeholder="Password"
          v-model="passwordInput"
        />
        <b-button
          @click="login"
          size="sm"
          class="my-2 my-sm-0"
          variant="success"
          type="button"
          >Login</b-button
        >
      </b-nav-form>
    </b-navbar-nav>
    <b-navbar-nav class="ml-auto" v-else>
      <b-nav-form>
        <b-button
          size="sm"
          class="my-2 my-sm-0"
          variant="danger"
          type="button"
          @click="logout"
          >Logout</b-button
        >
      </b-nav-form>
    </b-navbar-nav>
  </client-only>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data: () => ({ emailInput: '', passwordInput: '', error: '' }),
  methods: {
    async login() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.emailInput,
          this.passwordInput
        );
      } catch (error) {
        console.error(error);
      }
    },
    async logout() {
      try {
        await this.$fireAuth.signOut();
        this.$router.push('/');
      } catch (error) {
        console.error(error);
      }
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    })
  }
}
</script>