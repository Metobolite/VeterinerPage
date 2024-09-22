import { CheckCircle } from "lucide-react"

export default function VetCare() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-32">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-3xl overflow-hidden border-[18px] border-purple-100">
            <img
              src="/img/veteriner1.webp"
              alt="Veterinarian examining a Husky"
              width={400}
              height={400}
              className="w-full object-cover"
            />
          </div>
          <div className="absolute bottom-[-70px] right-[20px] md:right-[-40px] w-1/2 h-1/2 border-[12px] border-teal-100 rounded-3xl">
            <img
              src="/img/kopke.webp"
              alt="Veterinarian checking a Husky's eyes"
              width={200}
              height={200}
              className="imgVetCare w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 space-y-6 mt-16 md:mt-0">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-950">
            Profesyonel veteriner bakımı ve garantili kalite
          </h1>
          <p className="text-lg text-slate-600">
            Lorem ipsum dolor sit amet consectetur. Sed eros turpis et convallis
            egestas turpis. Id nibh amet consectetur enim integer accumsan cursus
            urna. Odio lacus aenean pellente.
          </p>
          <ul className="space-y-2">
            {["Günlük bir rutini koruyun", "Evcil hayvanınıza birebir ilgi gösterin", "Evcil hayvanlarınızı ve evinizi güvende tutun"].map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <CheckCircle className="text-orange-500" />
                <span className="text-blue-950">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}