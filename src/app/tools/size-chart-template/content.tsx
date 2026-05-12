'use client'

import { useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function SizeChartTemplateContent() {
  const searchParams = useSearchParams()
  const sku_id = searchParams.get('sku') || 'unknown'

  const downloadTemplate = () => {
    const csv = `Size,Length (cm),Waist (cm),Hip (cm)
XS,98,34,36
S,100,36,38
M,102,38,40
L,104,40,42
XL,106,42,44`

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    const url = URL.createObjectURL(blob)
    link.setAttribute('href', url)
    link.setAttribute('download', `size-chart-${sku_id}.csv`)
    link.click()
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
          <h1 className="text-3xl font-bold text-slate-900">Size Chart Template</h1>
          <p className="text-slate-600 mt-2">SKU: {sku_id}</p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6 border-2 border-dashed border-blue-300 bg-blue-50">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Download & Customize</h2>
            <p className="text-slate-700 mb-6">
              Get a pre-built size chart template. Edit it in Excel and add your exact measurements.
            </p>

            <Button onClick={downloadTemplate} className="w-full">
              📥 Download CSV Template
            </Button>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">How to Use</h3>

            <ol className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <span>Download the CSV file</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <span>Open in Excel or Google Sheets</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                <span>Update measurements to match your product</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  4
                </span>
                <span>Copy the table and add to your product description</span>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-semibold">
                  5
                </span>
                <span>Return to dashboard and track impact</span>
              </li>
            </ol>
          </Card>

          <Card className="p-6 bg-green-50 border-green-200">
            <h3 className="font-semibold text-slate-900 mb-2">📊 Expected Impact</h3>
            <p className="text-sm text-slate-700 mb-3">
              Products with clear size charts see a reduction in fit-related returns.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-white rounded border border-green-200">
                <p className="text-xs text-slate-600">Average Reduction</p>
                <p className="text-lg font-bold text-green-600">-18%</p>
              </div>
              <div className="p-3 bg-white rounded border border-green-200">
                <p className="text-xs text-slate-600">Time to Add</p>
                <p className="text-lg font-bold text-green-600">2 min</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
