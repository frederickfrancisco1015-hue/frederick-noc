<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { getProject } from '../data/projects'
import ImageFallback from '../components/ImageFallback.vue'

const route = useRoute()
const project = computed(() => getProject(route.params.slug))
</script>

<template>
  <main v-if="project">
    <section class="border-b border-slate-800 bg-slate-900/40">
      <div class="mx-auto max-w-7xl px-6 py-16">
        <RouterLink to="/#projects" class="text-sm font-semibold text-cyan-400 hover:text-cyan-300">
          ← Back to projects
        </RouterLink>
        <p class="mt-8 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
          {{ project.category }}
        </p>
        <h1 class="mt-3 max-w-4xl text-4xl font-bold md:text-6xl">{{ project.title }}</h1>
        <p class="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{{ project.short }}</p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-6 py-16">
      <div class="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900">
        <div class="aspect-[16/7]">
          <ImageFallback :src="project.image" :alt="project.alt" label="Add hero project image" />
        </div>
      </div>

      <div class="mt-12 grid gap-8 lg:grid-cols-3">
        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">Challenge</p>
          <p class="mt-4 leading-7 text-slate-300">{{ project.challenge }}</p>
        </article>

        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">My Role</p>
          <p class="mt-4 leading-7 text-slate-300">{{ project.role }}</p>
        </article>

        <article class="card">
          <p class="text-sm font-semibold uppercase tracking-wider text-cyan-400">Result</p>
          <p class="mt-4 leading-7 text-slate-300">{{ project.result }}</p>
        </article>
      </div>

      <div class="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <article class="card">
          <h2 class="text-2xl font-bold">Work Performed</h2>
          <ul class="mt-6 space-y-4">
            <li v-for="item in project.work" :key="item" class="flex gap-3 text-slate-300">
              <span class="mt-2 h-2 w-2 flex-none rounded-full bg-cyan-400"></span>
              <span class="leading-7">{{ item }}</span>
            </li>
          </ul>
        </article>

        <article class="card">
          <h2 class="text-2xl font-bold">Technology</h2>
          <div class="mt-6 flex flex-wrap gap-2">
            <span
              v-for="technology in project.technologies"
              :key="technology"
              class="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300"
            >
              {{ technology }}
            </span>
          </div>
          <div class="mt-8 rounded-xl border border-slate-800 bg-slate-950 p-4 text-sm leading-6 text-slate-500">
            {{ project.note }}
          </div>
        </article>
      </div>
    </section>

    <section class="border-y border-slate-800 bg-slate-900/40">
      <div class="mx-auto max-w-7xl px-6 py-16">
        <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">Visual proof</p>
        <h2 class="mt-2 text-3xl font-bold">Project Gallery</h2>
        <p class="mt-4 max-w-3xl text-slate-400">
          Replace these placeholders with approved photos, sanitized screenshots, diagrams, or equipment images from this project.
        </p>

        <div class="mt-8 grid gap-6 md:grid-cols-3">
          <div
            v-for="(image, index) in project.gallery"
            :key="image"
            class="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900"
          >
            <div class="aspect-[4/3]">
              <ImageFallback
                :src="image"
                :alt="`${project.title} gallery image ${index + 1}`"
                :label="`Add gallery image ${index + 1}`"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-4xl px-6 py-20 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">Need similar support?</p>
      <h2 class="mt-3 text-3xl font-bold md:text-4xl">Let's discuss your environment.</h2>
      <p class="mx-auto mt-4 max-w-2xl text-slate-400">
        I’m available for remote NOC, network troubleshooting, infrastructure support, and MSP support opportunities.
      </p>
      <RouterLink to="/#contact" class="mt-8 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">
        Contact Me
      </RouterLink>
    </section>
  </main>

  <main v-else class="mx-auto max-w-4xl px-6 py-24 text-center">
    <h1 class="text-4xl font-bold">Project not found</h1>
    <RouterLink to="/#projects" class="mt-6 inline-block text-cyan-400">Return to projects</RouterLink>
  </main>
</template>
