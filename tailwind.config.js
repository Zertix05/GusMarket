module.exports = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'green-dark': '#2D5016',
        'green-main': '#4A7C23',
        'green-light': '#6B9B3C',
        'green-pale': '#E8F0E0',
        'beige-dark': '#C4A574',
        'beige-main': '#F5EBD7',
        'beige-light': '#FAF6EE',
        'text-dark': '#1A1A1A',
        'text-medium': '#4A4A4A',
        'text-light': '#7A7A7A',
      },
     fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
        serif: ['var(--font-cormorant)', 'serif'],
      },
      borderRadius: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '32px',
      },
      boxShadow: {
        soft: '0 4px 20px rgba(45, 80, 22, 0.08)',
        medium: '0 8px 40px rgba(45, 80, 22, 0.12)',
        strong: '0 16px 60px rgba(45, 80, 22, 0.16)',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
    },
  },
  plugins: [],
}
