<template>
  <character-list :characters="characters" />
</template>
<script>
import characterList from '@/components/character-list';
export default {
  components: {
    characterList
  },
  async asyncData({ app, $fireStore }) {
    const characters = [];
    const charactersCollection = await $fireStore.collection('characters');
    const querySnapshot = await charactersCollection.get();
    querySnapshot.forEach(doc => {
      const character = doc.data();
      characters.push(character);
    });
    return { characters };
  }
}
</script>