import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
export default defineConfig({
  plugins: [react()],
  // Base URL for assets in production
  base: '/',
  "rewrites": [{ "source": "/(.*)", "destination": "/" }]
  // Resolve paths configuration
  
});



// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
 
//   build: {
//     outDir: "dist",
//   },
// });

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3000,
//     // proxy: {
//     //   '/api': {
//     //     target: 'https://blog-mern-api-tck7.onrender.com',
//     //     changeOrigin: true,
//     //     secure: false,
//     //   },
//     // },
//   },
// });

