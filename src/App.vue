<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { getFirestore, collection, getDocs } from "firebase/firestore";

export default defineComponent({
  name: 'App',
  async created() {
    const db = getFirestore();
    const usersRef = collection(db, 'users');
    const snapshot = await getDocs(usersRef);
    snapshot.forEach((doc) => {
      console.log(doc.data());
    });
  },
});
</script>
