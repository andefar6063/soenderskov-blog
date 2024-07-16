<script setup lang="ts">
import { computed } from "vue";

interface Props {
  href: string;
  class?: string;
}

const props = defineProps<Props>();

const isActive = computed(() => {
  if (typeof window !== "undefined") {
    const pathname = window.location.pathname;
    const subpath = pathname.split("/")[1];
    return props.href === pathname || props.href === "/" + subpath;
  }
  return false;
});

const classes = computed(() => {
  return [props.class, { active: isActive.value }];
});
</script>

<template>
  <a :href="href" :class="classes">
    <slot />
  </a>
</template>
