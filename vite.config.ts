import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ react(), tsconfigPaths() ],
    server:{
        proxy: {
            '/api': {
                target: 'http://192.168.1.101:8087/my_budget',
                changeOrigin: true,
                secure: false,
                ws: true,
                rewrite: (path) => {
                    console.log(path);
                    return path.replace(/^\/api/, '');
                }
            },
            '/ws': {
                target: 'ws://192.168.1.101:8087/my_budget',
                ws: true
            },
        }
    },
});
