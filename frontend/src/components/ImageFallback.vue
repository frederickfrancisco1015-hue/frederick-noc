<script setup>
defineProps({
  src: String,
  alt: String,
  label: { type: String, default: 'Add project image' }
})

function handleError(event) {
  event.target.classList.add('hidden')
  event.target.nextElementSibling?.classList.remove('hidden')
}
</script>

<template>
  <div class="relative h-full w-full overflow-hidden bg-slate-900">
    <img
      :src="src"
      :alt="alt"
      class="h-full w-full object-cover"
      @error="handleError"
    />
    <div class="absolute inset-0 hidden items-center justify-center bg-slate-900 p-6 text-center">
      <div>
        <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-dashed border-slate-600 text-2xl">+</div>
        <p class="mt-4 text-sm font-semibold text-slate-300">{{ label }}</p>
        <p class="mt-1 break-all text-xs text-slate-500">{{ src }}</p>
      </div>
    </div>
  </div>
</template>
