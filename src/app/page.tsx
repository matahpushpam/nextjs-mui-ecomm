"use client"

import { Metadata } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
 
// export const metadata: Metadata = {
//   title: 'Next.js',
// }
 
export default function Page() {
  // let a = 100;
  // return <Link href={`/dashboard/${a}`}>Dashboard</Link>
  const router = useRouter()
 
  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  )
}