import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  categories: [
    {
      id: "cspm",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "cloud-accounts",
          name: "Cloud Accounts",
          text: "Connected (2)\nNot Connected (2)\nTotal: 2",
        },
        {
          id: "cloud-risk-assessment",
          name: "Cloud Account Risk Assessment",
          text: "Failed (1689)\nWarning (681)\nNot available (36)\nPassed (7253)\nTotal: 9659",
        },
      ],
    },
    {
      id: "cwpp",
      name: "CWPP Dashboard:",
      widgets: [
        {
          id: "namespace-alerts",
          name: "Top 5 Namespace Specific Alerts",
          text: "No Graph data available!",
        },
        {
          id: "workload-alerts",
          name: "Workload Alerts",
          text: "No Graph data available!",
        },
      ],
    },
    {
      id: "registry",
      name: "Registry Scan",
      widgets: [
        {
          id: "image-risk-assessment",
          name: "Image Risk Assessment",
          text: "Critical (9)\nHigh (150)\nMedium: 1470 Total Vulnerabilities",
        },
        {
          id: "image-security-issues",
          name: "Image Security Issues",
          text: "Critical (2)\nHigh (2)\nTotal Images: 2",
        },
      ],
    },
  ],
  searchTerm: "",
  availableWidgets: [
    { id: "cloud-accounts", name: "Cloud Accounts", categoryId: "cspm" },
    { id: "cloud-risk-assessment", name: "Cloud Account Risk Assessment", categoryId: "cspm" },
    { id: "security-issues", name: "Security Issues", categoryId: "cspm" },
    { id: "compliance-overview", name: "Compliance Overview", categoryId: "cspm" },
    { id: "namespace-alerts", name: "Top 5 Namespace Specific Alerts", categoryId: "cwpp" },
    { id: "workload-alerts", name: "Workload Alerts", categoryId: "cwpp" },
    { id: "runtime-security", name: "Runtime Security", categoryId: "cwpp" },
    { id: "policy-violations", name: "Policy Violations", categoryId: "cwpp" },
    { id: "image-risk-assessment", name: "Image Risk Assessment", categoryId: "registry" },
    { id: "image-security-issues", name: "Image Security Issues", categoryId: "registry" },
    { id: "vulnerability-scan", name: "Vulnerability Scan Results", categoryId: "registry" },
  ],
}

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      const { categoryId, widget } = action.payload
      const category = state.categories.find((cat) => cat.id === categoryId)
      if (category) {
        const existingWidget = category.widgets.find((w) => w.id === widget.id)
        if (!existingWidget) {
          const newWidget = {
            ...widget,
            id: widget.id || `widget-${Date.now()}`,
          }
          category.widgets.push(newWidget)
        }
      }
    },
    removeWidget: (state, action) => {
      const { categoryId, widgetId } = action.payload
      const category = state.categories.find((cat) => cat.id === categoryId)
      if (category) {
        category.widgets = category.widgets.filter((widget) => widget.id !== widgetId)
      }
    },
    toggleWidget: (state, action) => {
      const { categoryId, widgetId, enabled } = action.payload

      if (enabled === false) {
        // Remove widget from all categories
        state.categories.forEach((category) => {
          category.widgets = category.widgets.filter((widget) => widget.id !== widgetId)
        })
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload
    },
  },
})

export const { addWidget, removeWidget, toggleWidget, setSearchTerm } = dashboardSlice.actions
export default dashboardSlice.reducer
