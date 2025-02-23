import Tov from './presets'
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
	resolve: {
		alias: {
			'~/': `${resolve(__dirname, 'src')}/`,
		},
	},
	define: {
		__VUE_OPTIONS_API__: false, // 明确不使用 options api
	},
	plugins: [Tov()],
})
