// 檔案路徑: app/client/booking/page.tsx
// (已修正版：補上了遺漏的右大括號)

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { ChevronLeft, User, Car, Coffee, Utensils, Pill, Calendar, Repeat } from "lucide-react"

export default function ClientBookingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-amber-50 font-sans">
      <header className="sticky top-0 z-10 flex items-center p-4 bg-white border-b border-amber-200">
        <a href="/"><Button variant="ghost" size="icon" className="text-stone-600"><ChevronLeft className="h-6 w-6" /></Button></a>
        <h1 className="mx-auto text-xl font-bold text-amber-900">預約新服務</h1>
        <div className="w-10"></div>
      </header>

      <main className="flex-1 p-4 md:p-6 space-y-6">
        <BookingSection icon={<User />} title="1. 請選擇服務對象">
            <div className="space-y-3">
                <SelectionCard title="王媽媽" description="高雄市鼓山區" selected={true} />
                <SelectionCard title="李伯伯" description="高雄市左營區" />
            </div>
        </BookingSection>

        <BookingSection icon={<Pill />} title="2. 請選擇服務項目">
          <div className="grid grid-cols-2 gap-3">
            <ServiceButton icon={<Car />} label="交通就醫" />
            <ServiceButton icon={<Coffee />} label="居家陪伴" selected={true} />
            <ServiceButton icon={<Utensils />} label="餐食準備" />
            <ServiceButton icon={<Pill />} label="代領藥物" />
          </div>
        </BookingSection>

        <BookingSection icon={<Calendar />} title="3. 請選擇服務時間">
           <input type="date" defaultValue="2025-10-21" className="w-full p-3 text-lg border-2 border-amber-200 rounded-lg focus:ring-teal-500 focus:border-teal-500" />
          <div className="grid grid-cols-3 gap-3 mt-4">
             <TimeSlotButton label="上午" time="09-12" />
             <TimeSlotButton label="下午" time="14-17" selected={true} />
             <TimeSlotButton label="晚間" time="18-20" />
          </div>
        </BookingSection>
        
        <BookingSection icon={<Repeat />} title="4. 特殊需求備註 (選填)">
             <Textarea placeholder="若有特殊事項請在此說明..." className="text-base min-h-[100px] bg-white" />
        </BookingSection>
      </main>
      
      <footer className="sticky bottom-0 z-10 p-4 bg-white/80 backdrop-blur-sm border-t border-amber-200">
         <Button className="w-full h-14 text-xl font-bold bg-teal-500 hover:bg-teal-600 text-white rounded-full">確認預約</Button>
      </footer>
    </div>
  )
}

// 可重用元件
function BookingSection({ icon, title, children }) {
  return (<Card className="w-full bg-white shadow-sm overflow-hidden"><CardHeader className="flex flex-row items-center gap-3 bg-amber-100/50 p-4"><div className="text-amber-700">{icon}</div><CardTitle className="text-amber-900 text-lg">{title}</CardTitle></CardHeader><CardContent className="p-4">{children}</CardContent></Card>)
}
function SelectionCard({ title, description, selected = false }) {
  const selectedClasses = "border-teal-500 ring-2 ring-teal-500 bg-teal-50";
  return (<div className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${selected ? selectedClasses : "border-stone-200 bg-white"}`}><p className="text-xl font-bold text-stone-800">{title}</p><p className="text-base text-stone-500">{description}</p></div>)
}
function ServiceButton({ icon, label, selected = false }) {
  const selectedClasses = "border-teal-500 ring-2 ring-teal-500 bg-teal-50 text-teal-700";
  return (<button className={`flex flex-col items-center justify-center p-4 h-28 border-2 rounded-lg cursor-pointer transition-all ${selected ? selectedClasses : "border-stone-200 bg-stone-50 text-stone-700"}`}><div className="h-8 w-8 mb-2">{icon}</div><p className="text-base font-bold">{label}</p></button>)
}
function TimeSlotButton({ label, time, selected = false }) {
    const selectedClasses = "bg-teal-500 text-white";
    return (<button className={`flex flex-col items-center justify-center p-3 rounded-lg cursor-pointer transition-all ${selected ? selectedClasses : "bg-stone-100 text-stone-700"}`}><p className="text-lg font-bold">{label}</p><p className="text-sm">{time}</p></button>)
}