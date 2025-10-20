// 檔案路徑: app/console/dashboard/page.tsx
// 這是管理層登入後看到的核心儀表板。

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Bell, Map, List, User, PlusCircle, Home } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 font-sans">
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-white border-b border-amber-200">
        <div className="flex items-center gap-3">
          <Avatar><AvatarImage src="/placeholder-user.jpg" /><AvatarFallback>督導</AvatarFallback></Avatar>
          <div><p className="text-lg font-semibold text-stone-800">王督導</p><p className="text-sm text-stone-500">早安，今天也要加油！</p></div>
        </div>
        <div className="relative">
            <Button variant="ghost" size="icon" className="text-stone-600"><Bell className="h-6 w-6" /></Button>
            <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
        </div>
      </header>

      <main className="flex-1 p-4 md:p-6 space-y-6">
        <section>
          <h1 className="text-xl font-bold text-amber-900 mb-3">今日總覽</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <KpiCard title="服務總時數" value="128" unit="小時" color="text-teal-600" />
            <KpiCard title="出勤照服員" value="60/100" unit="人" color="text-sky-600" />
            <KpiCard title="待派案件" value="3" unit="件" color="text-red-500" />
            <KpiCard title="交通佔比" value="22" unit="%" color="text-amber-700" />
          </div>
        </section>

        <section className="space-y-6">
          <Card className="w-full bg-white shadow-sm"><CardHeader><CardTitle className="text-amber-900">即時派案地圖</CardTitle></CardHeader><CardContent><div className="h-64 bg-amber-100 rounded-lg flex items-center justify-center text-amber-600">地圖顯示區域</div></CardContent></Card>
          <Card className="w-full bg-white shadow-sm">
            <CardHeader><CardTitle className="text-amber-900">緊急通知與待辦</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <AlertItem type="urgent" caregiver="陳美玲" message="臨時請病假，影響 3 位案主" />
              <AlertItem type="new" caregiver="新案件" message="案主：李伯伯，14:00 預約服務" />
            </CardContent>
          </Card>
        </section>
      </main>

      <footer className="sticky bottom-0 z-10 grid grid-cols-5 gap-1 p-2 bg-white border-t border-amber-200 md:hidden">
        <BottomNavItem icon={<Home />} label="首頁" active />
        <BottomNavItem icon={<Map />} label="地圖" />
        <div className="flex justify-center"><Button className="w-16 h-16 -mt-8 rounded-full bg-teal-500 hover:bg-teal-600 shadow-lg flex items-center justify-center"><PlusCircle className="h-8 w-8 text-white" /></Button></div>
        <BottomNavItem icon={<List />} label="排班" />
        <BottomNavItem icon={<User />} label="人員" />
      </footer>
    </div>
  )
}

function KpiCard({ title, value, unit, color }) {
  return (<Card className="bg-white"><CardHeader className="pb-2"><CardTitle className="text-base font-medium text-stone-600">{title}</CardTitle></CardHeader><CardContent><div className="flex items-baseline gap-1"><p className={`text-4xl font-bold ${color}`}>{value}</p><p className="text-lg text-stone-500">{unit}</p></div></CardContent></Card>)
}
function AlertItem({ type, caregiver, message }) {
  const styles = { urgent: 'bg-red-50 border-red-500', new: 'bg-sky-50 border-sky-500'};
  return (<div className={`flex items-start gap-4 p-4 rounded-lg border-l-4 ${styles[type] || 'bg-stone-50 border-stone-500'}`}><div className="flex-1"><p className="font-bold text-stone-800">{caregiver}</p><p className="text-stone-600">{message}</p></div><Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white text-base">處理</Button></div>)
}
function BottomNavItem({ icon, label, active = false }) {
    return (<div className="flex flex-col items-center justify-center gap-1"><div className={`h-8 w-8 ${active ? "text-teal-600" : "text-stone-500"}`}>{icon}</div><p className={`text-xs font-medium ${active ? "text-teal-600" : "text-stone-500"}`}>{label}</p></div>);
}