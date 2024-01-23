<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-mb-md">
        <div class="text-h3">Todo</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>
      <q-img
        src="https://cdn.pixabay.com/photo/2017/02/21/09/02/clouds-2085112__340.jpg"
        class="header-image absolute-top"/>
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item
            to="/UrunlerSayfası"
            clickable
            v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Urunler Sayfası
            </q-item-section>
          </q-item>

            <q-item
              to="/anasayfa"
              clickable
              v-ripple>
              <q-item-section avatar>
              </q-item-section>

              <q-item-section>
                Ana Sayfa
              </q-item-section>
            </q-item>

            <q-item
              to="/YeniUyelik"
              clickable
              v-ripple>
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                Yeni Üyelik
              </q-item-section>
            </q-item>

            <q-item
            to="/GirisYap"
            clickable
            v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              Giriş Yap
            </q-item-section>
          </q-item>
          
          <q-item
          to="/SepetEkrani"
          clickable
          v-ripple>
          <q-item-section avatar>
            <q-icon name="list" />
          </q-item-section>

          <q-item-section>
            Sepet Ekrani
          </q-item-section>
        </q-item>
          </q-list>
        </q-scroll-area>

          <div class="absolute-top" style="height: 30px">

            <div class="text-weight-bold">Çağla Ökmen</div>
            <div class="text-weight-bold">200101069</div>
            <div class="text-weight-bold">gerekli şeyler sitesi</div>
          </div>
        
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-drawer>


    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { date } from 'quasar'
const linksList = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now()
      return date.formatDate(timeStamp, 'dddd D MMMM')
    }
  }
})
</script>

<style lang="scss">
  .header-image {
    height: 100%;
    z-index: -1;
    opacity: 0.2;
    filter: grayscale(100%);
  }
</style>
