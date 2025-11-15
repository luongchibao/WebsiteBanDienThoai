import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],

    server: {
      // Port chạy frontend (Vite)
      port: Number(env.PORT) || 3000,

      // 🔥 Thêm proxy để chuyển /api → http://localhost:5000
      proxy: {
        "/api": {
          target: "http://localhost:5000", // backend Node.js
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
