import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    // 明確設定 alias
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "./"),        // 根目錄
      "@components": path.resolve(__dirname, "components"), // 新增 components 別名
    };
    return config;
  },
};

export default nextConfig;
