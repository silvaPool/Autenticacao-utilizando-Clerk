import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SignInButton, SignOutButton, SignedIn, SignedOut } from '@clerk/clerk-react'

function App() {


  return (
    <>
     <div>
      <SignedOut>
        <SignInButton />
        <p>Este conteúdo é público. Somente usuários desconectados podem ver isso.</p>
      </SignedOut>
      <SignedIn>
        <SignOutButton afterSignOutUrl="/" />
        <p>Este conteúdo é privado. Somente usuários conectados podem ver isso.</p>
      </SignedIn>
    </div>
    </>
  )
}

export default App
