/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1890ff', // Ant Design 主题色
      },
    },
  },
  plugins: [],
  // 确保 Ant Design 的样式不被 Tailwind 覆盖
  corePlugins: {
    preflight: false,
  },
} 