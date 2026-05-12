'use client'

import dynamic from 'next/dynamic'

const ProPhotoBookingContent = dynamic(
  () => import('./content'),
  { ssr: false }
)

export default function ProPhotoBooking() {
  return <ProPhotoBookingContent />
}
