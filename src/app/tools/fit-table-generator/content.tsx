'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function FitTableGeneratorContent() {
  const searchParams = useSearchParams()
  const sku_id = searchParams.get('sku') || 'unknown'

  const [baseSize, setBaseSize] = useState('M')
  const [length, setLength] = useState('102')
  const [waist, setWaist] = useState('38')
  const [generatedTable, setGeneratedTable] = useState<string | null>(null)

  const generateTable = () => {
    const lengths = {
      XS: parseInt(length) - 4,
      S: parseInt(length) - 2,
      M: parseInt(length),
      L: parseInt(length) + 2,
      XL: parseInt(length) + 4,
    }

    const waists = {
      XS: parseInt(waist) - 4,
      S: parseInt(waist) - 2,
      M: parseInt(waist),
      L: parseInt(waist) + 2,
      XL: parseInt(waist) + 4,
    }

    const table = `Size | Length (cm) | Waist (cm)
-----|-------------|------------
XS   | ${lengths.XS}        | ${waists.XS}
S    | ${lengths.S}        | ${waists.S}
M    | ${lengths.M}        | ${waists.M}
L    | ${lengths.L}        | ${waists.L}
XL   | ${lengths.XL}        | ${waists.XL}`

    setGeneratedTable(table)
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
          <h1 className="text-3xl font-bold text-slate-900">Generate Size Chart</h1>
          <p className="text-slate-600 mt-2">SKU: {sku_id}</p>
        </div>

        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-lg font-semibold text-slate-900 mb-6">
              Enter Measurements for Size M
            </h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Length (cm)
                </label>
                <input
                  type="number"
                  value={length}
                  onChange={(e) => setLength(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Waist (cm)
                </label>
                <input
                  type="number"
                  value={waist}
                  onChange={(e) => setWaist(e.target.value)}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <Button onClick={generateTable} className="w-full mt-6">
                Generate Size Chart
              </Button>
            </div>
          </Card>

          {generatedTable && (
            <Card className="p-6 bg-slate-100">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">Your Size Chart</h3>
              <pre className="bg-white p-4 rounded border border-slate-200 overflow-x-auto">
                <code className="text-sm font-mono text-slate-700">{generatedTable}</code>
              </pre>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <p className="text-sm text-slate-700">
                  📋 Copy this table and add it to your product description.
                </p>
              </div>

              <Button
                onClick={() => {
                  navigator.clipboard.writeText(generatedTable)
                  alert('Copied to clipboard!')
                }}
                variant="outline"
                className="w-full mt-4"
              >
                Copy to Clipboard
              </Button>
            </Card>
          )}

          <Card className="p-6 bg-amber-50 border-amber-200">
            <h3 className="font-semibold text-slate-900 mb-2">💡 Pro Tip</h3>
            <p className="text-sm text-slate-700">
              Sellers who add size charts reduce returns from fit issues by up to 18%.
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}
