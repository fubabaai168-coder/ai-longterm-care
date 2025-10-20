// 檔案路徑: app/page.tsx (首頁)
// 這是您網站的統一入口，採用對行動裝置友善的列表式設計。

export default function LandingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-amber-50 font-sans p-4">
      <div className="w-full max-w-md mx-auto">
        <header className="text-center mb-8">
            <div className="mx-auto mb-4 w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
            </div>
            <h1 className="text-3xl font-bold text-stone-800">智慧長照派遣系統</h1>
            <p className="text-stone-500 mt-2">專業、溫暖、科技</p>
        </header>

        <main className="space-y-4">
            <LoginLinkItem href="/caregiver/login" title="照服員" description="查看班表與任務" color="teal" />
            <LoginLinkItem href="/client/booking" title="案主 / 家屬" description="預約新服務" color="orange" />
            <LoginLinkItem href="/console/dashboard" title="管理層" description="進入派遣控制台" color="stone" />
        </main>
      </div>
    </div>
  );
}

function LoginLinkItem({ href, title, description, color }) {
    const colors = {
        teal: "bg-teal-50 text-teal-700",
        orange: "bg-orange-50 text-orange-700",
        stone: "bg-stone-100 text-stone-700"
    }
    return (
        <a href={href} className="flex items-center p-4 bg-white rounded-xl shadow-sm border border-stone-200 hover:bg-stone-50 transition-all">
            <div className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center ${colors[color]}`}>
                {/* Placeholder for icons */}
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </div>
            <div className="ml-4">
                <h2 className="font-bold text-lg text-stone-800">{title}</h2>
                <p className="text-sm text-stone-500">{description}</p>
            </div>
            <svg className="w-5 h-5 ml-auto text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </a>
    )
}