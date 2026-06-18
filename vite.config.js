import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

function inlineCss() {
  return {
    name: 'inline-css',
    enforce: 'post',
    apply: 'build',
    generateBundle(_, bundle) {
      const htmlAsset = Object.values(bundle).find(
        (file) => file.type === 'asset' && file.fileName.endsWith('.html'),
      )

      if (!htmlAsset) return

      htmlAsset.source = String(htmlAsset.source).replace(
        /<link rel="stylesheet" crossorigin href="\/([^"]+\.css)">/,
        (tag, cssFileName) => {
          const cssAsset = bundle[cssFileName]

          if (!cssAsset || cssAsset.type !== 'asset') return tag

          delete bundle[cssFileName]
          return `<style>${cssAsset.source}</style>`
        },
      )
    },
  }
}

export default defineConfig({
  plugins: [vue(), tailwindcss(), inlineCss()],
})
