<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
import BackToTop from './components/BackToTop.vue'
</script>

<template>
  <div class="min-h-screen bg-slate-950 text-slate-100">
    <SiteHeader />
    <RouterView />
    <SiteFooter />
    <BackToTop />
  </div>
</template>
