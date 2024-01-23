<template>
  <q-page class="q-pa-lg">
    <div>
      <component v-for="(component, index) in components" :key="index" :is="component"></component>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ThePage5 from 'src/components/ThePage5.vue';

export default defineComponent({
  name: 'YeniUyelik', // Added comma here
  components: {
    ThePage5
  },
  data() {
    return {
      components: ['ThePage5']
    }
  }
})
</script>




