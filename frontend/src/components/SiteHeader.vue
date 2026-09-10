<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)
const closeMenu = () => { mobileMenuOpen.value = false }
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
    <div class="mx-auto max-w-7xl px-6">
      <div class="flex items-center justify-between py-4">
        <RouterLink to="/" class="text-lg font-bold" @click="closeMenu">
          FF<span class="text-cyan-400">NOC</span>
        </RouterLink>

        <nav class="hidden gap-6 text-sm text-slate-300 md:flex">
          <RouterLink to="/#services" class="hover:text-white">Services</RouterLink>
          <RouterLink to="/#projects" class="hover:text-white">Projects</RouterLink>
          <RouterLink to="/#about" class="hover:text-white">About</RouterLink>
          <RouterLink to="/#credentials" class="hover:text-white">Credentials</RouterLink>
          <RouterLink to="/#contact" class="hover:text-white">Contact</RouterLink>
        </nav>

        <div class="flex items-center gap-3">
          <RouterLink to="/#contact" class="hidden rounded-lg bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300 sm:block">
            Hire Me
          </RouterLink>
          <button
            type="button"
            class="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800 md:hidden"
            :aria-expanded="mobileMenuOpen"
            aria-label="Toggle navigation"
            @click="mobileMenuOpen = !mobileMenuOpen"
          >
            <svg v-if="!mobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <div v-if="mobileMenuOpen" class="border-t border-slate-800 py-4 md:hidden">
        <nav class="flex flex-col gap-2">
          <RouterLink v-for="item in [
            ['Services','/#services'],
            ['Projects','/#projects'],
            ['About','/#about'],
            ['Credentials','/#credentials'],
            ['Contact','/#contact']
          ]" :key="item[0]" :to="item[1]" class="rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-900 hover:text-white" @click="closeMenu">
            {{ item[0] }}
          </RouterLink>
          <RouterLink to="/#contact" class="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950 hover:bg-cyan-300" @click="closeMenu">
            Hire Me
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>
