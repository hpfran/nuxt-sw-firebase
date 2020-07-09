<template>
  <b-navbar sticky toggleable="md" type="dark" variant="dark">
    <b-navbar-brand to="/"
      >Star Wars
      <font-awesome-icon :icon="['fab', 'empire']" :style="{ color: 'white' }"
    /></b-navbar-brand>

    <b-navbar-toggle target="nav_collapse" />

    <b-collapse is-nav id="nav_collapse" v-if="isLoggedIn">
      <b-navbar-nav>
        <b-nav-item to="/" active-class="active" exact>Home</b-nav-item>
        <b-nav-item
          to="/characters"
          active-class="active"
          v-bind:active="
            this.$route.matched.some(record =>
              record.path.includes('/characters')
            )
          "
          exact
          >Characters</b-nav-item
        >
        <b-nav-item active-class="active" to="/my-favourites"
          >My favourites</b-nav-item
        >
        <b-nav-item active-class="active" to="/all-favourites" exact
          >All favourites</b-nav-item
        >
      </b-navbar-nav>
      <login-form />
    </b-collapse>
    <b-collapse is-nav id="nav_collapse" v-else>
      <b-navbar-nav>
        <b-nav-item to="/" active-class="active" exact>Home</b-nav-item>
        <b-nav-item
          to="/characters"
          active-class="active"
          v-bind:active="
            this.$route.matched.some(record =>
              record.path.includes('/characters')
            )
          "
          exact
          >Characters</b-nav-item
        >
        <b-nav-item active-class="active" to="/all-favourites" exact
          >All favourites</b-nav-item
        >
        <b-nav-item
          active-class="active"
          to="/register"
          exact
          >Register</b-nav-item
        >
      </b-navbar-nav>
      <login-form />
    </b-collapse>
  </b-navbar>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import loginForm from '@/components/login-form';
export default {
  components: {
    loginForm
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn'
    })
  }
}
</script>