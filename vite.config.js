import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
	base: '/tailwind_master/',

	plugins: [
		tailwindcss({
			config: './src/css/tailwind.config.css'
		})
	],
	build: {
		outDir: './dist',
		cssCodeSplit: true,
		assetsDir: './assets',
		sourcemap: true,
		rollupOptions: {
			input: {
				main: './index.html'
			}
		}
	}
});
