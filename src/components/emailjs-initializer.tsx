"use client"

import emailjs from '@emailjs/browser'
import { useEffect } from 'react'

export function EmailJsInitializer() {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID!)
  }, [])

  return null
}