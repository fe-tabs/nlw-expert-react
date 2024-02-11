import logo from './assets/logo-nlw-expert.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

export function App() {
  return (
    <div className='max-w-6xl mx-auto my-12 space-y-6'>
      <img src={logo} alt='NLW Expert' />

      <form className="w-full">
        <input 
          className='w-full bg-transparent text-3xl font-semibold tracking-tight outline-none placeholder:text-slate-500'
          type="text" 
          placeholder='Busque suas notas...' 
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
        <NewNoteCard />

        <NoteCard note={{
          date: new Date(2024, 1, 10), 
          content: 'Olá, Mundo!'
        }}  
        />
      </div>
    </div>
  )
}
