'use client'

import dynamic from 'next/dynamic'

const FitTableGeneratorContent = dynamic(
  () => import('./content'),
  { ssr: false }
)

export default function FitTableGenerator() {
  return <FitTableGeneratorContent />
}
