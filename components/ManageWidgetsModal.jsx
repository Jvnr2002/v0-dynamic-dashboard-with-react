"use client"
import { useSelector, useDispatch } from "react-redux"
import { toggleWidget } from "../store/dashboardSlice"
import { X } from "lucide-react"

const ManageWidgetsModal = ({ onClose }) => {
  const dispatch = useDispatch()
  const { categories, availableWidgets } = useSelector((state) => state.dashboard)

  const handleToggleWidget = (categoryId, widgetId, isChecked) => {
    dispatch(toggleWidget({ categoryId, widgetId, isChecked }))
  }

  const isWidgetActive = (categoryId, widgetId) => {
    const category = categories.find((cat) => cat.id === categoryId)
    return category?.widgets.some((widget) => widget.id === widgetId) || false
  }

  const getWidgetsByCategory = (categoryId) => {
    return availableWidgets.filter((widget) => widget.categoryId === categoryId)
  }

  return (
    <div className="modal-overlay fixed inset-0 flex items-center justify-center p-4 z-50">
      <div className="modal-content max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-lg font-semibold text-popover-foreground">Manage Widgets</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close modal"
          >
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[60vh]">
          {categories.map((category) => (
            <div key={category.id} className="mb-8 last:mb-0">
              <h3 className="text-md font-semibold text-popover-foreground mb-4 pb-2 border-b border-border/50">
                {category.name}
              </h3>

              <div className="space-y-3">
                {getWidgetsByCategory(category.id).map((widget) => (
                  <div
                    key={widget.id}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border/50 hover:bg-muted transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground">{widget.name}</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={isWidgetActive(category.id, widget.id)}
                        onChange={(e) => handleToggleWidget(category.id, widget.id, e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-input peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/25 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end p-6 border-t border-border">
          <button onClick={onClose} className="add-widget-btn px-6 py-2 text-sm font-medium rounded-lg">
            Done
          </button>
        </div>
      </div>
    </div>
  )
}

export default ManageWidgetsModal
