import react from '@vitejs/plugin-react';
import { glob } from 'glob';
import path, { extname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';

// https://vite.dev/config/
export default defineConfig({
	build: {
		copyPublicDir: false,
		lib: {
			entry: resolve(__dirname, 'lib/main.ts'),
			formats: ['es'],
		},
		rollupOptions: {
			external: ['react', 'react/jsx-runtime'],
			input: Object.fromEntries(
				glob
					.sync('lib/**/*.{ts,tsx}', {
						ignore: ['lib/**/*.d.ts'],
					})
					.map((file) => [
						relative('lib', file.slice(0, file.length - extname(file).length)),
						fileURLToPath(new URL(file, import.meta.url)),
					])
			),
			output: {
				assetFileNames: (info) => {
					if (info.originalFileNames) {
						const desiredOutputPath = info.originalFileNames[0]
							.replace(/^lib\//, '')
							.replace(/index.tsx$/, '');
						console.log(desiredOutputPath);
						return path.join(desiredOutputPath, 'styles[extname]');
					}

					return 'assets/[name][extname]';
				},
				entryFileNames: '[name].js',
			},
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
			},
		},
	},
	plugins: [
		dts({
			include: ['lib'],
			tsconfigPath: resolve(__dirname, 'tsconfig.lib.json'),
		}),
		libInjectCss(),
		react(),
	],
});
