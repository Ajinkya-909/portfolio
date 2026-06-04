export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-zinc-950 text-zinc-50 selection:bg-teal-500/30">
      <div className="max-w-2xl w-full text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
          Portfolio V2
        </h1>
        <p className="text-lg text-zinc-400">
          Clean. Fast. Responsive. Built with React 19, Vite, and Tailwind CSS v4.
        </p>
        <div className="flex items-center justify-center gap-4">
          <div className="px-3 py-1 text-xs font-medium rounded-full bg-teal-500/10 text-teal-400 border border-teal-500/20">
            React 19
          </div>
          <div className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            Tailwind v4
          </div>
          <div className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            Framer Motion
          </div>
        </div>
      </div>
    </div>
  )
}
