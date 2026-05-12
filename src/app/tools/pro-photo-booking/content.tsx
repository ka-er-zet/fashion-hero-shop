'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

interface BookingSlot {
  id: string
  date: string
  time: string
  available: boolean
}

export default function ProPhotoBookingContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const sku_id = searchParams.get('sku') || 'unknown'
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)

  const bookingSlots: BookingSlot[] = [
    { id: '1', date: 'May 20, 2026', time: '2:00 PM - 4:00 PM', available: true },
    { id: '2', date: 'May 22, 2026', time: '10:00 AM - 12:00 PM', available: true },
    { id: '3', date: 'May 24, 2026', time: '2:00 PM - 4:00 PM', available: true },
  ]

  const handleBook = () => {
    if (!selectedSlot) return
    alert('Booking confirmed! We will contact you shortly.')
    router.push('/seller-dashboard')
  }

  return (
    <div className="min-h-screen bg-slate-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Link
            href="/seller-dashboard"
            className="text-blue-600 hover:text-blue-700 text-sm font-medium mb-4 inline-block"
          >
            ← Back to Dashboard
          </Link>
          <h1 className="text-3xl font-bold text-slate-900">Book a Pro-Photo Session</h1>
          <p className="text-slate-600 mt-2">SKU: {sku_id}</p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Available Slots</h2>

            <div className="space-y-3">
              {bookingSlots.map((slot) => (
                <button
                  key={slot.id}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-colors ${
                    selectedSlot === slot.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  } ${!slot.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                  disabled={!slot.available}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-slate-900">{slot.date}</p>
                      <p className="text-sm text-slate-600">{slot.time}</p>
                    </div>
                    {slot.available && (
                      <div className="w-5 h-5 rounded-full border-2 border-slate-300" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="font-semibold text-slate-900 mb-3">What's Included</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li>✓ 2-hour professional photo session</li>
              <li>✓ 10 outfit shots + 30 detail shots</li>
              <li>✓ Delivery in RAW format</li>
              <li>✓ Dropbox link within 7 days</li>
              <li>✓ 30% discount for Growth subscribers</li>
            </ul>
            <p className="text-lg font-semibold text-slate-900 mt-4">
              Price: <span className="text-blue-600">200 PLN</span>
            </p>
          </Card>

          <Button
            onClick={handleBook}
            disabled={!selectedSlot}
            className="w-full h-12 text-base"
          >
            {selectedSlot ? 'Confirm Booking' : 'Select a Time Slot'}
          </Button>
        </div>
      </div>
    </div>
  )
}
