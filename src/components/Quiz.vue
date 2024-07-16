<script setup lang="ts">
import { ref, computed } from "vue";
import { questions } from "../data/testQuestions";
import type { Question } from "../data/testQuestions";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";

hljs.registerLanguage("javascript", javascript);

const currentQuestionIndex = ref(0);
const userAnswers = ref(0);
const showResult = ref(false);

const currentQuestion = computed<Question | undefined>(
  () => questions[currentQuestionIndex.value],
);

const highlightedCode = computed(() => {
  if (currentQuestion.value && currentQuestion.value.code) {
    return hljs.highlight(currentQuestion.value.code, {
      language: "javascript",
    }).value;
  }
  return "";
});

const handleAnswer = (answer: string) => {
  if (currentQuestion.value) {
    if (answer === currentQuestion.value.correctAnswer) {
      userAnswers.value++;
    }

    if (currentQuestionIndex.value < questions.length - 1) {
      currentQuestionIndex.value++;
    } else {
      showResult.value = true;
    }
  }
};

const resetQuiz = () => {
  currentQuestionIndex.value = 0;
  userAnswers.value = 0;
  showResult.value = false;
};
</script>

<template>
  <div class="max-w-3xl w-full space-y-8 text-center">
    <h1
      class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-textprimary"
    >
      Test Your Knowledge in JavaScript
    </h1>
    <div class="text-textprimary opacity-90">
      <div v-if="!showResult">
        <div v-if="currentQuestion" class="space-y-6">
          <p class="text-xl">{{ currentQuestion.text }}</p>
          <div
            v-if="currentQuestion.code"
            class="overflow-hidden rounded-lg bg-[#282c34] text-left shadow-lg"
          >
            <div
              class="flex items-center justify-between px-4 py-2 bg-[#21252b]"
            >
              <span class="text-sm text-gray-400">JavaScript</span>
              <div class="flex space-x-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
            </div>
            <pre class="p-4 text-sm">
              <code v-html="highlightedCode"></code>
            </pre>
          </div>
          <div class="space-y-4">
            <button
              v-for="answer in currentQuestion.answers"
              :key="answer"
              @click="handleAnswer(answer)"
              class="w-full rounded-md border border-primary/20 bg-primary/10 p-3 text-left transition-colors hover:bg-primary/20"
            >
              {{ answer }}
            </button>
          </div>
        </div>
      </div>
      <div v-else class="text-center">
        <h2 class="mb-4 text-3xl font-semibold text-textprimary">
          Quiz Results
        </h2>
        <p class="text-xl">
          You got {{ userAnswers }} out of {{ questions.length }} questions
          correct.
        </p>
        <div class="mt-8 flex justify-center">
          <button
            @click="resetQuiz"
            class="inline-flex items-center px-6 py-3 text-base rounded-md text-textprimary bg-primary"
          >
            Retake Quiz
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
