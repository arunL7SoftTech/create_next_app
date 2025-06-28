"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

export default function Settings() {
  const router = useRouter();

  const back = () => {
    router.push('/');
  }
  return (
    <div>
        <h1>Settings Page</h1>
        <button onClick={back} className="bg-blue-500 px-3 py-1 rounded cursor-pointer">Back to home</button>
    </div>
  )
}
