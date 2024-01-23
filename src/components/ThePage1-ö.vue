<template>
      <div style="max-width: 100%;" class="sayfa row bg-yellow text-black">
        
        <q-toolbar class="row text-left bg-yellow text-black" style="max-width: 1260px;">
          <q-toolbar-title class="text-left text-bold cursor-pointer" style="font-size: 12px;">Bizi Takip Edin
            <q-icon name="fa-brands fa-facebook" style="margin: 12px;" size="12px" />
            <q-icon name="fa-brands fa-twitter"  style="margin:8px" size="12px" />
            <q-icon name="fa-brands fa-youtube" style="margin: 8px" size="12px" />
            <q-icon name="fa-brands fa-instagram" style="margin:8px" size="12px" />
          </q-toolbar-title>

          <q-toolbar-title class="row justify-end text-bold cursor-pointer" style="font-size: 11px;">
            <div style="margin: 10px;">GEREKLİ ŞEYLER B2B (BAYİLİK)</div>
            <div style="margin: 10px;">HAFTANIN ÜRÜNÜ</div>
            <div style="margin: 10px;">GEREKLİ ŞEYLER</div>
            <div style="margin: 10px;">MARKALARIMIZ</div>
          <div style="margin: 10px;">BİZ KİMİZ</div>
          </q-toolbar-title>
        </q-toolbar>

        <div style="
        background-color: #1c1c1c;
        background-image:
        url(//ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/images/header-bg.svg?revision=1658931379);
        background-repeat: no-repeat;
        background-size: cover;
        padding-right: 15px;
        padding-left: 15px;">
        <q-toolbar class="row"
         style="max-width: 1260px;"
         >
          <q-toolbar-title style="flex: 1;">
            <q-input
              v-model="searchInput"
              class="bg-white text-black"
              borderless
              style="border: 3px solid yellow; height: 40px;"
              label="Aradığınız ürünü yazınız..."
              label-color="black"
            >
              <template v-slot:append>
                  <q-icon name="search"/>
              </template>
            </q-input>
          </q-toolbar-title>

          <q-toolbar-title class="cursor-pointer q-mr-md" style="flex: 2; margin: 2%;">
            <a href="/" aria-label="Logo">
                <img src="//ideacdn.net/shop/cd/03/themes/selftpl_5f290a69cb6bd/assets/uploads/logo.png?revision=1658931379"
                style="width: 45%; ">
              </a>
          </q-toolbar-title>
          <q-toolbar-title class="row text-white cursor-pointer" style="flex: 1;">
            <q-toolbar-title style="font-size: 13px;">SİPARİŞ TAKİBİ</q-toolbar-title>
            <q-separator />
            <router-link to="/GirisYap" style="text-decoration: none; flex: 1; color: white;">
              <q-toolbar-title style="font-size: 13px;">ÜYE GİRİŞİ</q-toolbar-title>
            </router-link>
            <q-separator />
              <q-btn
                flat
                dense
                round
                icon="shopping_cart"
                @click="toggleDrawer = !toggleDrawer"
                to="/SepetEkrani">
                <q-badge
                  color="black"
                  :style="{ backgroundColor: 'white', color: 'white', fontSize: '13px'}">
                  ({{ cartItemCount }})
                </q-badge>
              </q-btn>

          </q-toolbar-title>

        </q-toolbar>
      </div>
      </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const cartItemCount = ref(0);
const toggleDrawer = ref(false);
const searchInput = ref('');
</script>

<style scoped>
  .sayfa {
    text-align: -webkit-center;
    display: block;
  }
</style>