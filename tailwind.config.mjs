// tailwind.config.js
module.exports = {
	content: [
	  './src/**/*.{html,js,astro,jsx,tsx}',
	],
	theme: {
	  extend: {
		colors: {
		  primario: '#5679F0', 
		  secundario: '#0B2F9F',
		  secundario2: '#0F1035',
		  negro: '#070F2B',
		  blanco: '#F5F5F5',
		},
		animation: {
			'slide-down': 'slideDown 0.3s ease-out forwards',
		  },
		  keyframes: {
			slideDown: {
			  '0%': { opacity: 0, transform: 'translateY(-10px)' },
			  '100%': { opacity: 1, transform: 'translateY(0)' },
			},
	  },
	},
	plugins: [
	
	],
  }
}
  