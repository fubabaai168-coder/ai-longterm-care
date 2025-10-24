/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // 啟用 React 嚴格模式，防止潛在錯誤
  swcMinify: true,       // 使用 SWC 進行程式壓縮（效能更高）

  // 啟用圖片最佳化（Vercel 內建）
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'localhost',
      'your-domain.com' // ← 如果未來要用自訂網域，可在這裡加上
    ],
  },

  // 自動重新導向（例如：舊版網址或管理後台）
  async redirects() {
    return [
      {
        source: '/admin',
        destination: '/console',
        permanent: true,
      },
    ];
  },

  // 環境變數設定（僅供範例，實際可移至 Vercel 管理）
  env: {
    APP_NAME: '智慧長照派遣系統',
    APP_VERSION: '1.0.0',
  },

  // 部署時自動開啟效能分析
  experimental: {
    optimizeCss: true, // 壓縮與整合 CSS
  
  },
};

export default nextConfig;
