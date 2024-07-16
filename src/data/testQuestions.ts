import { reactive } from "vue";

export interface Question {
  id: number;
  text: string;
  code: string | null;
  answers: string[];
  correctAnswer: string;
}

export const questions = reactive<Question[]>([
  {
    id: 1,
    text: "What will be the output of the following JavaScript code?",
    code: "console.log(typeof null)",
    answers: ["'object'", "'null'", "'undefined'", "'boolean'"],
    correctAnswer: "'object'",
  },
  {
    id: 2,
    text: "Which of the following is a correct way to define a function in JavaScript?",
    code: null,
    answers: [
      "function myFunction() {}",
      "def myFunction() {}",
      "function:myFunction() {}",
      "func myFunction() {}",
    ],
    correctAnswer: "function myFunction() {}",
  },
  {
    id: 3,
    text: "What will be the output of the following JavaScript code?",
    code: `let x = 10
let y = '10'
console.log(x == y)`,
    answers: ["true", "false", "undefined", "null"],
    correctAnswer: "true",
  },
  {
    id: 4,
    text: "How can you add a single-line comment in JavaScript?",
    code: null,
    answers: ["<!-- Comment -->", "// Comment", "/* Comment */", "## Comment"],
    correctAnswer: "// Comment",
  },
  {
    id: 5,
    text: "What will be the output of the following code snippet?",
    code: `const fruits = ['Apple', 'Banana', 'Mango'];
console.log(fruits[1]);`,
    answers: ["'Apple'", "'Banana'", "'Mango'", "undefined"],
    correctAnswer: "'Banana'",
  },
  {
    id: 6,
    text: "What is the result of the following expression?",
    code: "console.log(3 + 4 + '5')",
    answers: ["'345'", "'75'", "12", "Error"],
    correctAnswer: "'75'",
  },
  {
    id: 7,
    text: "Which method is used to remove the last element from an array in JavaScript?",
    code: null,
    answers: ["pop()", "push()", "shift()", "unshift()"],
    correctAnswer: "pop()",
  },
  {
    id: 8,
    text: "What will be the output of the following code?",
    code: `let x = 5;
console.log(x++);
console.log(x);`,
    answers: ["5, 6", "6, 6", "5, 5", "6, 5"],
    correctAnswer: "5, 6",
  },
  {
    id: 9,
    text: "Which of the following is used to declare a constant variable in JavaScript?",
    code: null,
    answers: ["var", "let", "const", "static"],
    correctAnswer: "const",
  },
  {
    id: 10,
    text: "What will be the output of the following code?",
    code: `console.log(2 + '2' - 1)`,
    answers: ["'21'", "3", "21", "NaN"],
    correctAnswer: "21",
  },
]);
