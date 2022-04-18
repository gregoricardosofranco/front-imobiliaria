<script setup>
import { RouterLink, RouterView } from "vue-router";
import Menu from "@/components/Menu.vue";
import Footer from "@/components/FooterSite.vue"
</script>

<template>

  <Menu v-bind="menu"/>

    <RouterView />

  <Footer />
</template>


