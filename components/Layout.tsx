import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-500 p-4 text-white">
        <h1>My Portfolio</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-blue-500 p-4 text-white text-center">
        © 2023 My Portfolio
      </footer>
    </div>
  )
}

export default Layout
