export const MOCK_TESTS = [
  {
    id: 'algebra-1',
    name: 'Advanced Algebra',
    description: 'Challenge your understanding of complex algebraic expressions, inequalities, and polynomials.',
    questions: [
      {
        question: 'Solve for $x$: $$3(x - 2) = 2(x + 5)$$',
        options: [
          { text: '$x = 16$', isCorrect: false },
          { text: '$x = 10$', isCorrect: false },
          { text: '$x = 11$', isCorrect: false },
          { text: '$x = 20$', isCorrect: true },
        ],
      },
      {
        question: 'Simplify: $$\\frac{2x^2 - 8}{4x}$$',
        options: [
          { text: '$$\\frac{x - 4}{2}$$', isCorrect: false },
          { text: '$$\\frac{x}{2} - 2$$', isCorrect: true },
          { text: '$$\\frac{x^2}{2} - 2$$', isCorrect: false },
          { text: '$$x - 2$$', isCorrect: false },
        ],
      },
      {
        question: 'If $x^2 - 5x + 6 = 0$, what are the roots?',
        options: [
          { text: '$x = 2, 3$', isCorrect: true },
          { text: '$x = -2, -3$', isCorrect: false },
          { text: '$x = 1, 6$', isCorrect: false },
          { text: '$x = 3, 5$', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 'calculus-1',
    name: 'Advanced Calculus',
    description: 'Test your skills in limits, derivatives, and definite integrals.',
    questions: [
      {
        question: 'Evaluate: $$\\int_{0}^{\\pi} \\sin(x) \\, dx$$',
        options: [
          { text: '$$2$$', isCorrect: false },
          { text: '$$0$$', isCorrect: true },
          { text: '$$1$$', isCorrect: false },
          { text: '$$\\pi$$', isCorrect: false },
        ],
      },
      {
        question: 'Find the derivative of $f(x) = x^x$.',
        options: [
          { text: '$$f\'(x) = x^x (\\ln(x) + 1)$$', isCorrect: true },
          { text: '$$f\'(x) = x^x \\ln(x)$$', isCorrect: false },
          { text: '$$f\'(x) = x^{x-1}$$', isCorrect: false },
          { text: '$$f\'(x) = x^{x} (1 - \\ln(x))$$', isCorrect: false },
        ],
      },
      {
        question: 'What is $$\\lim_{x \\to 0} \\frac{e^x - 1}{x}$$?',
        options: [
          { text: '$$1$$', isCorrect: true },
          { text: '$$0$$', isCorrect: false },
          { text: '$$\\infty$$', isCorrect: false },
          { text: '$$-1$$', isCorrect: false },
        ],
      },
    ],
  },
  {
    id: 'mixed-math',
    name: 'Advanced Mixed Math',
    description: 'A challenging blend of algebra, calculus, and higher math topics.',
    questions: [
      {
        question: 'Solve for $x$: $$\\log_{2}(x^2 - 4) = 3$$',
        options: [
          { text: '$$x = \\pm 4$$', isCorrect: false },
          { text: '$$x = \\pm 6$$', isCorrect: true },
          { text: '$$x = 2, 3$$', isCorrect: false },
          { text: '$$x = 8$$', isCorrect: false },
        ],
      },
      {
        question: 'Evaluate: $$\\sum_{k=1}^{4} k^2$$',
        options: [
          { text: '$$30$$', isCorrect: false },
          { text: '$$20$$', isCorrect: false },
          { text: '$$10$$', isCorrect: false },
          { text: '$$30$$', isCorrect: true },
        ],
      },
      {
        question: 'Which of the following best represents the definition of the derivative?',
        options: [
          { text: '$$f\'(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$$', isCorrect: true },
          { text: '$$f\'(x) = \\int_{0}^{x} f(t) \\, dt$$', isCorrect: false },
          { text: '$$f\'(x) = \\sum_{n=1}^{\\infty} \\frac{1}{n!}$$', isCorrect: false },
          { text: '$$f\'(x) = f(x) \\cdot f(x)$$', isCorrect: false },
        ],
      },
    ],
  },
];
