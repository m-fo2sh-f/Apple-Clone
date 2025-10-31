import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    base: '/Apple-Clone/',  // تأكد من أن هذا يتطابق مع اسم المستودع الخاص بك
})