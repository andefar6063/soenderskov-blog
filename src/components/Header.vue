<script setup lang="ts">
import HeaderLink from "./HeaderLink.vue";
import { SITE_TITLE } from "../consts";
import { ref } from "vue";

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header class="sticky top-0 z-10 shadow-lg backdrop-blur-md">
    <nav class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <h2 class="text-2xl font-bold">
          <a
            href="/"
            class="text-textprimary hover:text-primary transition-colors duration-300"
            >{{ SITE_TITLE }}</a
          >
        </h2>
        <div class="hidden md:block">
          <HeaderLink
            v-for="item in ['Home', 'Blog', 'About']"
            :key="item"
            :href="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
            class="text-textprimary hover:text-primary transition-colors duration-300 font-medium ml-6"
          >
            {{ item }}
          </HeaderLink>
        </div>
        <button
          @click="toggleMenu"
          class="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6 text-textprimary"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
    <transition
      enter-to-class="opacity-100 translate-y-0 scale-100"
      leave-to-class="opacity-0 -translate-y-0 scale-100"
    >
      <div v-if="isMenuOpen" class="md:hidden shadow-lg overflow-hidden">
        <nav class="container mx-auto px-4 py-2">
          <HeaderLink
            v-for="item in ['Home', 'Blog', 'About']"
            :key="item"
            :href="item === 'Home' ? '/' : `/${item.toLowerCase()}`"
            class="block py-2 text-textprimary hover:text-primary transition-colors duration-300 font-medium"
            @click="isMenuOpen = false"
          >
            {{ item }}
          </HeaderLink>
        </nav>
      </div>
    </transition>
  </header>
</template>
