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
import ThePage6Ö from 'src/components/ThePage6-ö.vue'
import ThePage1 from 'src/components/ThePage1.vue'
import ThePage2 from 'src/components/ThePage2.vue'
import ThePage3 from 'src/components/ThePage3.vue'

export default defineComponent({
  name: 'AnaSayfa', // Added comma here
  components: {
    ThePage1Ö,
    ThePage2Ö,
    ThePage6Ö,
    ThePage1,
    ThePage2,
    ThePage3
  },
  data() {
    return {
      components: ['ThePage1Ö', 'ThePage2Ö', 'ThePage6Ö', 'ThePage1', 'ThePage2', 'ThePage3']
    }
  }
})
</script>




