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
import ThePage4 from 'src/components/ThePage4.vue'

export default defineComponent({
  name: 'UrunlerSayfası', // Added comma here
  components: {
    ThePage1Ö,
    ThePage2Ö,
    ThePage4
  },
  data() {
    return {
      components: ['ThePage1Ö', 'ThePage2Ö' ,'ThePage4']
    }
  }
})
</script>




