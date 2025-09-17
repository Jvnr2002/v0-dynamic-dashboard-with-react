"use client"

import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addWidget, toggleWidget } from "../store/dashboardSlice"
import { X } from "lucide-react"

const AddWidgetModal = ({ onClose }) => {
  const dispatch = useDispatch()
  const { categories, availableWidgets } = useSelector((state) => state.dashboard)
  const [activeTab, setActiveTab] = useState("CSPM")

  const widgetTemplates = {
    CSPM: [
      { id: "cloud-accounts", name: "Cloud Accounts", text: "Monitor your cloud account connections and status" },
      {
        id: "cloud-risk-assessment",
        name: "Cloud Account Risk Assessment",
        text: "Assess security risks across your cloud infrastructure",
      },
      { id: "security-issues", name: "Security Issues", text: "Track and manage security vulnerabilities" },
      { id: "compliance-overview", name: "Compliance Overview", text: "Monitor compliance status across frameworks" },
    ],
    CWPP: [
      { id: "namespace-alerts", name: "Top 5 Namespace Specific Alerts", text: "Monitor critical alerts by namespace" },
      { id: "workload-alerts", name: "Workload Alerts", text: "Track workload security alerts and incidents" },
      { id: "runtime-security", name: "Runtime Security", text: "Monitor runtime security events" },
      { id: "policy-violations", name: "Policy Violations", text: "Track policy compliance violations" },
    ],
    Image: [
      { id: "image-risk-assessment", name: "Image Risk Assessment", text: "Assess security risks in container images" },
      { id: "image-security-issues", name: "Image Security Issues", text: "Monitor security issues in images" },
      { id: "vulnerability-scan", name: "Vulnerability Scan Results", text: "View image vulnerability scan results" },
    ],
    Ticket: [
      { id: "open-tickets", name: "Open Security Tickets", text: "Track open security-related tickets" },
      { id: "ticket-trends", name: "Ticket Trends", text: "Monitor ticket creation and resolution trends" },
      { id: "sla-compliance", name: "SLA Compliance", text: "Track SLA compliance for security tickets" },
    ],
  }

  const tabs = ["CSPM", "CWPP", "Image", "Ticket"]

  const isWidgetAdded = (widgetId) => {
    return categories.some((category) => category.widgets.some((widget) => widget.id === widgetId))
  }

  const handleWidgetToggle = (widget, isChecked) => {
    if (isChecked) {
      // Add to appropriate category based on active tab
      const targetCategoryId = activeTab.toLowerCase().replace(/\s+/g, "-")
      dispatch(
        addWidget({
          categoryId: targetCategoryId,
          widget: {
            id: widget.id,
            name: widget.name,
            text: widget.text,
          },
        }),
      )
    } else {
      // Remove from all categories
      categories.forEach((category) => {
        const existingWidget = category.widgets.find((w) => w.id === widget.id)
        if (existingWidget) {
          dispatch(
            toggleWidget({
              categoryId: category.id,
              widgetId: widget.id,
              enabled: false,
            }),
          )
        }
      })
    }
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50" onClick={onClose} />

      <div className="fixed right-0 top-0 h-full w-[600px] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-blue-600 text-white">
          <h2 className="text-lg font-semibold">Add Widget</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-blue-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6 border-b border-gray-200">
          <p className="text-gray-600">Personalise your dashboard by adding the following widget</p>
        </div>

        <div className="border-b border-gray-200">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === tab
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {widgetTemplates[activeTab]?.map((widget) => {
              const isChecked = isWidgetAdded(widget.id)
              return (
                <label
                  key={widget.id}
                  className="flex items-start space-x-3 cursor-pointer hover:bg-gray-50 p-3 rounded-lg transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => handleWidgetToggle(widget, e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">{widget.name}</div>
                    <div className="text-sm text-gray-500 mt-1">{widget.text}</div>
                  </div>
                </label>
              )
            })}
          </div>
        </div>

        <div className="border-t border-gray-200 p-6">
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddWidgetModal
