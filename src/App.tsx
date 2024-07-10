import { MapPin, Calendar, ArrowRight} from 'lucide-react'

export default function App() {

  return (
    <div className=" h-screen flex items-center justify-center bg-pattern bg-center bg-no-repeat">  
      <div className="max-w-3xl px-6 text-center space-y-10">

      <div className='flex flex-col items-center gap-3'>
        <img src="/logo.svg" alt="" />
      </div>
      <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
        <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400' />
        <input type="text" placeholder="Para onde você vai?" className="bg-transparent text-lg placeholder-zinc-400 outline-none" />
        </div>
        <div className='flex items-center gap-2'>
        <Calendar className='size-5'/>
        <input type="text" placeholder="Quando?" className=" w-40 bg-transparent text-lg placeholder-zinc-400 outline-none" />
        </div>
        <div className='w-px h-6 bg-zinc-800 '/>
        <button className='bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400'>Continuar
          <ArrowRight className='size-5' />
        </button>
      </div>
      <p className="text-sm text-zinc-50 0">Ao planejar sua viagem pela plann.er você automaticamente concorda com nossos <a href='#' className="text-zinc-300 underline">termos de uso </a> e <a href='#' className="text-zinc-300 underline"> politicas de privacidade</a> </p>
    </div>
    </div>
  
  )
}

