# Dynamic Dashboard Application

A React.js dashboard application with dynamic widget management, built with Redux Toolkit for state management.

## Features

- **Dynamic Widget Management**: Add and remove widgets from categories
- **Search Functionality**: Search through all widgets by name or content
- **Category Organization**: Widgets organized into categories (CSPM, CWPP, Registry Scan)
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with hover effects and animations

## Technology Stack

- **React.js** (without TypeScript)
- **Redux Toolkit** for state management
- **Next.js** for the framework
- **Tailwind CSS** for styling
- **Lucide React** for icons

## Project Structure

\`\`\`
dashboard-app/
├── app/
│   ├── globals.css
│   └── page.jsx
├── components/
│   ├── Dashboard.jsx
│   ├── WidgetCard.jsx
│   ├── AddWidgetModal.jsx
│   └── ManageWidgetsModal.jsx
├── store/
│   ├── store.js
│   └── dashboardSlice.js
├── package.json
└── README.md
\`\`\`

## Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Steps to Run Locally

1. **Clone or Download the Project**
   \`\`\`bash
   # If using git
   git clone <repository-url>
   cd dashboard-app
   
   # Or extract the ZIP file and navigate to the folder
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start the Development Server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open in Browser**
   - Navigate to `http://localhost:3000`
   - The dashboard should load with sample data

## Usage

### Adding Widgets
1. Click the "Add Widget" button in any category
2. Enter widget name and content
3. Click "Add Widget" to save

### Removing Widgets
1. Click the "X" icon on any widget card
2. The widget will be removed from the category

### Managing Widgets
1. Click "Manage Widgets" in the header
2. Toggle widgets on/off for each category
3. Click "Done" to save changes

### Searching Widgets
1. Use the search bar in the header
2. Search by widget name or content
3. Results filter in real-time

## JSON Data Structure

The dashboard uses a JSON structure stored in Redux state:

\`\`\`javascript
{
  categories: [
    {
      id: 'cspm',
      name: 'CSPM Executive Dashboard',
      widgets: [
        {
          id: 'widget-1',
          name: 'Cloud Accounts',
          text: 'Connected: 2\nNot Connected: 2\nTotal: 4 accounts'
        }
      ]
    }
  ]
}
\`\`\`

## Customization

### Adding New Categories
Edit `store/dashboardSlice.js` and add new categories to the `initialState.categories` array.

### Styling
Modify `app/globals.css` to change colors, fonts, and other design elements.

### Widget Templates
Add predefined widget templates in `initialState.availableWidgets` for quick widget creation.

## Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Common Issues

**Dashboard not loading:**
- Ensure all dependencies are installed: `npm install`
- Check that you're using Node.js version 16 or higher
- Try clearing npm cache: `npm cache clean --force`

**Styling issues:**
- The application uses Tailwind CSS v4 - ensure no conflicting CSS frameworks
- Check browser console for any CSS loading errors

**Widget functionality not working:**
- Verify Redux DevTools extension is not interfering
- Check browser console for JavaScript errors
- Ensure all component files are properly imported

### Performance Tips

- The dashboard is optimized for up to 50 widgets per category
- Search functionality is debounced for better performance
- Use the "Manage Widgets" feature to disable unused widgets

## License

This project is open source and available under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request
