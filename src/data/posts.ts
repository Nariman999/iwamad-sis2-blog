export interface Post {
  id: number;
  title: string;
  summary: string;
  content: string;
  author: string;
  date: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: 'Getting Started with React 19',
    summary: 'Discover the latest features and optimizations introduced in React 19.',
    content: 'React 19 brings exciting features like Server Components, updated hooks, and better build optimizations. Learning these features helps developer create highly responsive user interfaces effortlessly.',
    author: 'Nariman',
    date: '2026-10-15'
  },
  {
    id: 2,
    title: 'Mastering TypeScript Types',
    summary: 'A complete guide to strong typing in modern web applications.',
    content: 'TypeScript enhances Javascript by adding static types. This prevents common bugs during compile time and boosts overall developer productivity with robust IDE support.',
    author: 'Nariman',
    date: '2026-10-17'
  },
  {
    id: 3,
    title: 'Routing Patterns with React Router',
    summary: 'How to structure multi-page SPAs cleanly using layouts and dynamic routes.',
    content: 'React Router makes client-side navigation smooth. Using Layout components with <Outlet /> keeps headers and footers stable while switching views dynamically.',
    author: 'Nariman',
    date: '2026-10-19'
  },
  {
    id: 4,
    title: 'State Management in React',
    summary: 'Understanding local state vs global context for component reactivity.',
    content: 'Managing state effectively is key for interactive UIs. useState and useReducer provide local state handling, while Context API handles global application state seamlessly.',
    author: 'Nariman',
    date: '2026-10-20'
  },
  {
    id: 5,
    title: 'Unit Testing with Vitest and RTL',
    summary: 'Ensure application quality with modern testing frameworks.',
    content: 'Testing your React components with Vitest and React Testing Library ensures reliability. Simulating user interactions with userEvent guarantees high software stability.',
    author: 'Nariman',
    date: '2026-10-21'
  }
];