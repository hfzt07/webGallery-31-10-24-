import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/webGallery-31-10-24-/', // ganti dengan nama repo Anda
});
