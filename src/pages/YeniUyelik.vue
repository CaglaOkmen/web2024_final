<template>
  <q-page class="q-pa-lg">
    <div>
      <component v-for="(component, index) in components" :key="index" :is="component"></component>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import ThePage1Ö from 'src/components/ThePage1-ö.vue'
import ThePage2Ö from 'src/components/ThePage2-ö.vue'
import ThePage3O from 'src/components/ThePage3-o.vue';

export default defineComponent({
  name: 'YeniUyelik', // Added comma here
  components: {
    ThePage1Ö,
    ThePage2Ö,
    ThePage3O
  },
  data() {
    return {
      components: ['ThePage1Ö', 'ThePage2Ö', 'ThePage3O']
    }
  }
})
</script>




