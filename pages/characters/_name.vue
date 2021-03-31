<template>
  <b-card
    v-if="character.image"
    no-body
    class="overflow-hidden"
    style="max-width: 900px;"
  >
    <b-row no-gutters>
      <b-col md="6">
        <cld-image
          :publicId="`jam/${character.image}`"
          width="300"
          crop="fill"
          fetchFormat="auto"
          quality="auto"
        />
      </b-col>
      <b-col md="6">
        <b-card-body :title="character.name">
          <b-card-sub-title class="mb-2">{{
            character.weapon
          }}</b-card-sub-title>
          <b-card-text>
            {{ character.bio }}
          </b-card-text>
        </b-card-body>
        <b-card-footer v-if="isLoggedIn" footer-class="text-center white">
          <b-button
            size="lg"
            @click="toggleFavourite"
            :variant="
              character.favourite.includes(authUser.uid) ? 'danger' : 'info'
            "
            >{{
              character.favourite.includes(authUser.uid)
                ? 'Unfavourite'
                : 'Favourite'
            }}</b-button
          >
        </b-card-footer>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
export default {
  data: () => ({ character: {} }),
  created() {
    const accessUrl = `${this.$route.params.name}.json`;
    const charactersCollection = this.$fireStore.collection('characters');
    charactersCollection.doc(accessUrl).onSnapshot(document => {
      const character = document.data();
      this.$data.character = character;
    });
  },
  methods: {
    async toggleFavourite() {
      const sanitisedNamed = `${this.$data.character.name.replace(/-|\s/g, '').toLowerCase()}`;
      const accessUrl = `${sanitisedNamed}.json`;
      const charactersCollection = this.$fireStore.collection('characters');
      if (!this.$data.character.favourite.includes(this.authUser.uid)) {
        await charactersCollection.doc(accessUrl).update({
          favourite: this.$fireStoreObj.FieldValue.arrayUnion(
            this.authUser.uid
          ),
          favouriteCount: this.$fireStoreObj.FieldValue ? this.$fireStoreObj.FieldValue.increment(1) : 1
        });
      } else {
        await charactersCollection.doc(accessUrl).update({
          favourite: this.$fireStoreObj.FieldValue.arrayRemove(
            this.authUser.uid
          ),
          favouriteCount: this.$fireStoreObj.FieldValue ? this.$fireStoreObj.FieldValue.increment(-1) : 0
        });
      }
    }
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