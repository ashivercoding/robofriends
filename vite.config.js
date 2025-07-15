import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: 'Robofriends',
        short_name: 'VitePWA',
        description: 'A searchable database of robots',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: '/public/favicon.ico',
            sizes: '192x192',
            type: 'image/x-icon',
          },
          {
            src: '/public/favicon-96x96.png',
            sizes: '96x96',
            type: 'image/png',
          },
          {
            src: '/public/apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png'
          }
        ],
        screenshots: [
          {
            src: '',
            sizes: '1280x512',
            type: 'image/png',
            form_factor: 'wide',
          },
        ],
      },
    }),
  ],
  base: '/robofriends/'
})
