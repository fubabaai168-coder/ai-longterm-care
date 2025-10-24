// 檔案路徑: app/caregiver/login/page.tsx
// 照服員輸入帳號密碼的專屬頁面。

export default function CaregiverLoginPage() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-amber-50 font-sans p-4">
            <div className="w-full max-w-sm">
                <div className="text-center mb-6">
                    <div className="mx-auto mb-4 w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center">
                         <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    </div>
                    <h1 className="text-2xl font-bold text-stone-800">照服員登入</h1>
                    <p className="text-stone-500 mt-1">請輸入您的帳號密碼</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
                    <div>
                        <label className="text-sm font-medium text-stone-600">帳號</label>
                        <input type="text" defaultValue="caregiver101" className="w-full mt-1 p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                    </div>
                    <div>
                        <label className="text-sm font-medium text-stone-600">密碼</label>
                        <input type="password" defaultValue="password123" className="w-full mt-1 p-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none" />
                    </div>
                    {/* <div className="p-3 bg-red-50 text-red-700 rounded-lg text-sm">帳號或密碼錯誤，請重新輸入</div> */}
                    <button className="w-full py-3 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition-colors">登入</button>
                </div>
                <div className="text-center mt-6">
                    <a href="/" className="text-sm text-stone-500 hover:text-stone-800">返回首頁</a>
                </div>
            </div>
        </div>
    )
}