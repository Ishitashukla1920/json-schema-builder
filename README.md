
# JSON Schema Builder - React Application

A dynamic JSON Schema Builder built with ReactJS that allows users to create, edit, and visualize JSON schemas through an intuitive interface with real-time preview capabilities.

## Project Overview

This application provides a comprehensive schema building experience where users can dynamically create JSON schemas by adding, editing, and nesting fields. The project features a clean interface built with modern React patterns and provides instant JSON preview functionality.

## Features

### Core Functionality
- Dynamic Field Management: Add, edit, and delete schema fields on the fly
- Field Type Support: Three primary field types - String, Number, and Nested
- Recursive Nesting: Create deeply nested schema structures with unlimited depth
- Real-time JSON Preview: Live preview of the generated JSON schema
- Field Key Editing: Modify field names/keys with inline editing capabilities

### Technical Features
- React Hook Forms: Robust form management and validation
- TypeScript Support: Optional TypeScript implementation for type safety
- Modern UI: Built with Ant Design or ShadCN for polished user experience
- Responsive Design: Works across different screen sizes and devices

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager
- Basic knowledge of JavaScript and React

### Installation

1. Clone the repository

git clone <repository-url>
cd json-schema-builder

2. Install dependencies

npm install
or
yarn install

3. Start the development server

npm start
or
yarn start

4. Open your browser
Navigate to http://localhost:3000 to view the application

### Building for Production

npm run build
or
yarn build

## Technology Stack

- Frontend Framework: ReactJS
- Form Management: React Hook Forms
- UI Library: Ant Design or ShadCN
- Language: JavaScript/TypeScript (optional)
- Styling: CSS with pre-styled components
- State Management: React hooks and context

## Usage Guide

### Creating a Schema

1. Add Fields: Click the "Add Field" button to create new schema fields
2. Edit Field Names: Click on field names to edit them inline
3. Select Field Types: Choose between String, Number, or Nested types
4. Create Nested Structures: Select "Nested" type to add child fields
5. Delete Fields: Use the delete button to remove unwanted fields
6. Preview JSON: Switch to the JSON tab to see real-time schema output

### Field Types

Type        | Description              | Default Value
String      | Text-based field         | "sample string"
Number      | Numeric field            | 42
Nested      | Object with child fields | {}

### Example Schema Structure


{
"name": "sample string",
"age": 42,
"address": {
"street": "sample string",
"city": "sample string",
"zipCode": 42
}
}


## Implementation Approach

### Development Phases

1. Phase 1: Basic component rendering with static data
2. Phase 2: Editable fields with input validation
3. Phase 3: Dynamic row addition and data updates
4. Phase 4: Row deletion with state management
5. Phase 5: Nested field support and recursion
6. Phase 6: JSON preview integration

### Key Components

- SchemaBuilder: Main container component managing overall state
- FieldRow: Individual field representation with editing capabilities
- NestedField: Recursive component for handling nested structures
- JsonPreview: Real-time JSON visualization component

## Configuration

### Environment Variables

Create a .env file in the root directory:

REACT_APP_NAME=JSON Schema Builder
REACT_APP_VERSION=1.0.0

### Package.json Scripts


{
"scripts": {
"start": "react-scripts start",
"build": "react-scripts build",
"test": "react-scripts test",
"eject": "react-scripts eject",
"lint": "eslint src/",
"format": "prettier --write src/"
}
}

## Deployment

### Vercel Deployment

1. Install Vercel CLI: npm i -g vercel
2. Run: vercel
3. Follow the prompts to deploy

### Netlify Deployment

1. Build the project: npm run build
2. Drag and drop the build folder to Netlify
3. Configure domain settings as needed

## Testing

### Running Tests

npm test
or
yarn test

### Test Coverage

npm run test:coverage
or
yarn test:coverage

## Development Guidelines

### Code Style

- Use functional components with hooks
- Follow React best practices for state management
- Implement proper error boundaries
- Use TypeScript when specified
- Maintain consistent code formatting

### Performance Considerations

- Implement React.memo for expensive components
- Use useCallback and useMemo where appropriate
- Optimize re-renders with proper dependency arrays
- Consider virtualization for large nested structures

## Contributing

### Repository Access

- Ensure repository is public or provide access to shreybatra for automated testing
- Follow the submission guidelines for application review

### Development Workflow

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created as part of a coding assessment and follows the specified requirements and guidelines.

## Support

For questions or issues related to the implementation:

1. Review the demonstration video for expected functionality
2. Check React Hook Forms documentation
3. Refer to Ant Design or ShadCN component libraries
4. Ensure all submission requirements are met

## Important Notes

- No AI Tools: This project must be developed without AI assistance
- Public Repository: Ensure repository visibility for automated testing
- Submission Requirements: Follow all specified guidelines to avoid rejection
- Functionality First: Prioritize functionality over design customization
- Testing: Verify all features work as demonstrated in the reference video

---

## Task Requirements Summary

### Core Features Required:
1. Edit the name/key of a field
2. Add more fields dynamically
3. Delete a field
4. Add nested fields for the 'Nested' type (recursively)
5. JSON tab with real-time preview
6. Support for String, Number, and Nested types

### Technical Requirements:
- ReactJS
- Ant Design or ShadCN
- React Hook Forms
- Optional TypeScript
- Default values for String ("sample string") and Number (42) types

### Submission Requirements:
- Host on Vercel or Netlify
- Public GitHub repository or provide access to shreybatra
- Submit via provided form
- No AI tools allowed
- Follow demonstration video functionality

### Development Approach:
1. Start with basic component rendering
2. Add editable input fields
3. Implement add/delete functionality
4. Build nested field support
5. Add JSON preview
6. Test all functionality thoroughly

