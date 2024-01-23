<template>
  <div class="sayfa bg-black">
    <q-layout view="hHh lpR fFf"  style="max-width: 1260px;">
      <q-page-container class="bg-black-50 text-left" style="padding-right: 0%;">
        <q-scroll-area style="height: 100vh;" class="bg-grey-3 round-borders shadow-2">
          <q-page >
  <q-toolbar-title>
    <q-btn
      flat
      dense
      round
      icon="shopping_cart"
      @click="toggleDrawer = !toggleDrawer"
    >
      <q-badge
        color="transparent"
        :style="{
          backgroundColor: 'white',
          color: 'white',
          fontSize: '13px',
        }"
      >
      </q-badge>
    </q-btn>
  </q-toolbar-title>

  <q-drawer v-model="toggleDrawer" show-if-above side="right" bordered>
    <q-scroll-area class="fit">
      <div class="q-pa-sm">
        <!-- Alışveriş sepeti boş olduğunda gösterilecek içerik -->
        <div class="text-center q-py-xl">
          <div>
            <q-icon name="shopping_cart" size="52px" color="grey" />
          </div>
          <div class="text-h6 q-my-md">ALIŞVERİŞ SEPETİ</div>
          <div class="text-subtitle1 text-grey">Sepetiniz boş</div>
          <q-btn color="yellow" label="ALIŞVERİŞE BAŞLA" to="/anasayfa" class="q-mt-md" />
        </div>
      </div>
    </q-scroll-area>
  </q-drawer>
</q-page>
</q-scroll-area>
</q-page-container>
</q-layout>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { QDrawer, QScrollArea, QIcon, QBtn } from 'quasar';

const toggleDrawer = ref(false); // Çekmece bileşeninin durumunu kontrol eder. Başlangıçta kapalıdır (false).
</script>

<style scoped>
.sayfa {
  text-align: -webkit-center;
  display: block;
}
</style>