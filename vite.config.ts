import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');

    console.log('=======');
    console.log('API', env.VITE_API_URL);
    console.log('WS', env.VITE_WS_URL);
    console.log('=======');

    return {
        plugins: [ react(), tsconfigPaths() ],
        server:{
            proxy: {
                '/api': {
                    target: env.VITE_API_URL || 'http://localhost:8087/my_budget',
                    changeOrigin: true,
                    secure: false,
                    ws: true,
                    rewrite: (path): string => {
                        console.log(path);
                        return path.replace(/^\/api/, '');
                    }
                },
                '/ws': {
                    target: env.VITE_WS_URL || 'wss://localhost:8087/my_budget',
                    ws: true
                },
            }
        }
    };
});
