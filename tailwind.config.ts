/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prefer-const */
import { fontFamily } from 'tailwindcss/defaultTheme';
import flattenColorPalette from 'tailwindcss/lib/util/flattenColorPalette';
import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	safelist: ['dark'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				error: '#ff5996',
				warning: '#F4A261',
				border: '#cbd6e0',
				primary: {
					DEFAULT: '#906CD5',
					hover: '#6F40C8',
					shade: '#562EA1'
				},

				light_c: {
					DEFAULT: '#E9E8E9',
					secondary: '#f1f1f0'
				},

				dark_c: {
					DEFAULT: '#1A1B1A',
					secondary: '#303131'
				},

				ring: 'hsl(var(--ring) / <alpha-value>)',
				input: 'hsl(var(--input) / <alpha-value>)',
				foreground: 'hsl(var(--foreground) / <alpha-value>)',
				secondary: {
					DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
					foreground: 'hsl(var(--secondary-foreground) / <alpha-value>)'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
					foreground: 'hsl(var(--destructive-foreground) / <alpha-value>)'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
					foreground: 'hsl(var(--muted-foreground) / <alpha-value>)'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
					foreground: 'hsl(var(--accent-foreground) / <alpha-value>)'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover) / <alpha-value>)',
					foreground: 'hsl(var(--popover-foreground) / <alpha-value>)'
				},
				card: {
					DEFAULT: 'hsl(var(--card) / <alpha-value>)',
					foreground: 'hsl(var(--card-foreground) / <alpha-value>)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans],
				inter: ['Inter', ...fontFamily.sans],
				public: ['Public Sans', ...fontFamily.sans]
			},

			animation: {
				flip: 'flip 6s infinite steps(2, end)',
				kitrotate: 'kitrotate 3s linear infinite both',
				shine: 'shine 2s linear infinite',
				slide: 'slide 40s linear infinite',
				spotlight: 'spotlight 2s ease .75s 1 forwards',
				'border-width': 'border-width 3s infinite alternate',
				'text-gradient': 'text-gradient 2s linear infinite',
				'text-shake': 'text-shake 1s ease 1',
				'text-glitch-to': 'text-glitch-to 0.6s ease-in-out infinite',
				'text-glitch-from': 'text-glitch-from 0.6s ease-in-out infinite',
				'text-scale': 'text-scale 1s linear infinite forwards',
				spin: 'spin 2s linear infinite',
				'background-shine': 'background-shine 2s linear infinite',
				'pulse-slow': 'pulse 6s infinite cubic-bezier(0.4, 0, 0.6, 1)',
				rippling: 'rippling var(--duration) ease-out',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite'
			},

			keyframes: {
				spin: {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				flip: {
					to: {
						transform: 'rotate(360deg)'
					}
				},
				kitrotate: {
					to: {
						transform: 'rotate(90deg)'
					}
				},
				shine: {
					from: {
						backgroundPosition: '0 0'
					},
					to: {
						backgroundPosition: '-200% 0'
					}
				},
				'border-width': {
					from: {
						width: '10px',
						opacity: '0'
					},
					to: {
						width: '100px',
						opacity: '1'
					}
				},
				'text-gradient': {
					to: {
						backgroundPosition: '200% center'
					}
				},
				'text-shake': {
					'15%': { transform: 'translateX(5px)' },
					'30%': { transform: 'translateX(-5px)' },
					'50%': { transform: 'translateX(3px)' },
					'80%': { transform: 'translateX(2px)' },
					'100%': { transform: 'translateX(0)' }
				},
				'text-glitch-to': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(-100%)'
					}
				},
				'text-glitch-from': {
					from: {
						transform: 'translateY(100%)'
					},
					to: {
						transform: 'translateY(0)'
					}
				},
				'text-scale': {
					'0%': {
						transform: 'scaleX(0)',
						transformOrigin: 'bottom left'
					},
					'25%': {
						transform: 'scaleX(1)',
						transformOrigin: 'bottom left'
					},
					'75%': {
						transform: 'scaleX(1)',
						transformOrigin: 'bottom right'
					},
					'100%': {
						transform: 'scaleX(0)',
						transformOrigin: 'bottom right'
					}
				},
				slide: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				spotlight: {
					'0%': {
						opacity: '0',
						transform: 'translate(-72%, -62%) scale(0.5)'
					},
					'100%': {
						opacity: '1',
						transform: 'translate(-50%,-40%) scale(1)'
					}
				},
				// For Gradient Input, UI-Snippets : https://ui.ibelick.com
				'background-shine': {
					from: { backgroundPosition: '0 0' },
					to: { backgroundPosition: '-200% 0' }
				},
				rippling: {
					'0%': {
						opacity: '1'
					},
					'100%': {
						transform: 'scale(2)',
						opacity: '0'
					}
				},
				marquee: {
					from: { transform: 'translateX(0)' },
					to: { transform: 'translateX(calc(-100% - var(--gap)))' }
				},
				'marquee-vertical': {
					from: { transform: 'translateY(0)' },
					to: { transform: 'translateY(calc(-100% - var(--gap)))' }
				}
			}
		}
	},
	plugins: [addVariablesForColors]
};

function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme('colors'));
	let newVars = Object.fromEntries(
		Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);

	addBase({
		':root': newVars
	});
}

export default config;
