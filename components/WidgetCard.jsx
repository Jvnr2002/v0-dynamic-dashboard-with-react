"use client"
import { X } from "lucide-react"

const WidgetCard = ({ widget, onRemove }) => {
  const renderWidgetContent = () => {
    if (widget.name === "Cloud Accounts") {
      return (
        <div className="flex items-center justify-center h-32">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#3b82f6"
                strokeWidth="3"
                strokeDasharray="50, 100"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-xl font-bold text-gray-900">2</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
          <div className="ml-6 space-y-2">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Connected (2)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Not Connected (2)</span>
            </div>
          </div>
        </div>
      )
    }

    if (widget.name === "Cloud Account Risk Assessment") {
      return (
        <div className="flex items-center justify-center h-32">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="3"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#dc2626"
                strokeWidth="3"
                strokeDasharray="30, 100"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="3"
                strokeDasharray="20, 100"
                strokeDashoffset="-30"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="50, 100"
                strokeDashoffset="-50"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-lg font-bold text-gray-900">9659</div>
              <div className="text-xs text-gray-500">Total</div>
            </div>
          </div>
          <div className="ml-6 space-y-1">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Failed (1689)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Warning (681)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-gray-300 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Not available (36)</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Passed (7253)</span>
            </div>
          </div>
        </div>
      )
    }

    if (widget.name.includes("No Graph data available")) {
      return (
        <div className="flex flex-col items-center justify-center h-32 text-gray-400">
          <svg className="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          <span className="text-sm">No Graph data available!</span>
        </div>
      )
    }

    if (widget.name === "Image Risk Assessment") {
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">1470</span>
            <span className="text-sm text-gray-500">Total Vulnerabilities</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-red-500 via-yellow-500 to-gray-400 h-2 rounded-full"></div>
          </div>
          <div className="flex justify-between text-xs">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              Critical (9)
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
              High (150)
            </span>
          </div>
        </div>
      )
    }

    if (widget.name === "Image Security Issues") {
      return (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold">2</span>
            <span className="text-sm text-gray-500">Total Images</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-red-500 to-red-400 h-2 rounded-full w-full"></div>
          </div>
          <div className="flex justify-between text-xs">
            <span className="flex items-center">
              <div className="w-2 h-2 bg-red-500 rounded-full mr-1"></div>
              Critical (2)
            </span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-red-400 rounded-full mr-1"></div>
              High (2)
            </span>
          </div>
        </div>
      )
    }

    return <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">{widget.text}</div>
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm relative group hover:shadow-md transition-shadow">
      <button
        onClick={onRemove}
        className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100"
        title="Remove widget"
        aria-label={`Remove ${widget.name} widget`}
      >
        <X className="h-4 w-4 text-gray-400 hover:text-gray-600" />
      </button>

      <div className="pr-8">
        <h3 className="text-sm font-medium text-gray-900 mb-4">{widget.name}</h3>
        {renderWidgetContent()}
      </div>
    </div>
  )
}

export default WidgetCard
