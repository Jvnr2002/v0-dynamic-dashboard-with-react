"use client"

import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { removeWidget, setSearchTerm } from "../store/dashboardSlice"
import WidgetCard from "./WidgetCard"
import AddWidgetModal from "./AddWidgetModal"
import ManageWidgetsModal from "./ManageWidgetsModal"
import { Search, Plus, MoreVertical, RefreshCw } from "lucide-react"

const Dashboard = () => {
  const dispatch = useDispatch()
  const { categories, searchTerm } = useSelector((state) => state.dashboard)
  const [showAddModal, setShowAddModal] = useState(false)
  const [showManageModal, setShowManageModal] = useState(false)

  const handleRemoveWidget = (categoryId, widgetId) => {
    dispatch(removeWidget({ categoryId, widgetId }))
  }

  const handleSearchChange = (e) => {
    dispatch(setSearchTerm(e.target.value))
  }

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter(
        (widget) =>
          widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          widget.text.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => searchTerm === "" || category.widgets.length > 0)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-500">
              <span>Home</span>
              <span className="mx-2">›</span>
              <span className="text-gray-900 font-medium">Dashboard V2</span>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search anything..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Add Widget Button */}
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <Plus className="h-4 w-4" />
                <span>Add Widget</span>
              </button>

              {/* Action buttons */}
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <RefreshCw className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <MoreVertical className="h-5 w-5" />
              </button>

              {/* Time filter */}
              <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                <option>Last 2 days</option>
                <option>Last 7 days</option>
                <option>Last 30 days</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8">CNAPP Dashboard</h1>

        {filteredCategories.map((category) => (
          <div key={category.id} className="mb-12">
            {/* Category Header */}
            <h2 className="text-lg font-semibold text-gray-900 mb-6">{category.name}</h2>

            {/* Widgets Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.widgets.map((widget) => (
                <WidgetCard
                  key={widget.id}
                  widget={widget}
                  onRemove={() => handleRemoveWidget(category.id, widget.id)}
                />
              ))}

              <div
                onClick={() => setShowAddModal(true)}
                className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center cursor-pointer hover:border-gray-400 hover:bg-gray-50 transition-all min-h-[200px] group"
              >
                <Plus className="h-8 w-8 text-gray-400 mb-2 group-hover:text-gray-600" />
                <p className="text-gray-500 font-medium group-hover:text-gray-700">Add Widget</p>
              </div>
            </div>
          </div>
        ))}

        {filteredCategories.length === 0 && searchTerm && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <Search className="w-full h-full" />
            </div>
            <h3 className="text-lg font-medium text-foreground mb-2">No widgets found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms or browse all widgets.</p>
          </div>
        )}
      </main>

      {/* Modals */}
      {showAddModal && <AddWidgetModal onClose={() => setShowAddModal(false)} />}
      {showManageModal && <ManageWidgetsModal onClose={() => setShowManageModal(false)} />}
    </div>
  )
}

export default Dashboard
