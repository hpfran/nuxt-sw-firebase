<template>
  <character-list :characters="characters" />
</template>
<script>
import characterList from '@/components/character-list';
import { mapState, mapGetters } from 'vuex';
export default {
  data: () => ({ characters: [] }),
  components: {
    characterList
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      if (this.isLoggedIn) {
        const characterCollection = this.$fireStore.collection('characters');
        let userFavourites = characterCollection.where(
          'favourite',
          'array-contains',
          this.authUser.uid
        );
        userFavourites.onSnapshot(favouritesRef => {
          favouritesRef.forEach(doc => {
            this.$data.characters.push(doc.data())
          });
        });
      }
    }
  },
  computed: {
    ...mapState({
      authUser: state => state.authUser,
    }),
    ...mapGetters({
      isLoggedIn: 'isLoggedIn',
    }),
  }
}
</script>