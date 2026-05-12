'use client'

import dynamic from 'next/dynamic'

const SizeChartTemplateContent = dynamic(
  () => import('./content'),
  { ssr: false }
)

export default function SizeChartTemplate() {
  return <SizeChartTemplateContent />
}
