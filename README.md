# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Chuck Norris Facts

This is a web application that allows users to search for Chuck Norris facts using the Chuck Norris facts API. The application is built with React and TypeScript, utilizes `useContext` for state management, styled-components for styling, and Cypress for end-to-end testing. The project is hosted online and uses GitHub as the version control system.

## Features

- Dropdown for switching between English (en) and Arabic (ar) localizations using i18next.
- Customizable appearance with classes for theming.
- Search for Chuck Norris facts.
- Display Chuck Norris facts based on the search query that can be navigated using previous and next buttons.
- Context API for managing application state.
- End-to-end testing with Cypress.

## Technologies Used

- React
- TypeScript
- Context API (useContext)
- styled-components
- react-spinners
- Cypress
- Axios
- i18next for internationalization support

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (>=14.0.0)
- Yarn
- Git

## Installation

### 1. Clone the repository:

```
git clone https://github.com/Krishna12317/chuck-norris-facts.git
cd chuck-norris-facts
```

### 2. Install the dependencies:

```
yarn install
```

### 3. Running the App

To start the development server:

```bash
yarn dev
```

Open http://localhost:5173 to view it in the browser to see the application in action.

To build the project for production:

```bash
yarn build
```

To run Cypress end-to-end tests:

```bash
yarn test
```

To preview the built project locally:

```bash
yarn preview
```

To check and fix linting errors:

```bash
yarn lint
```

## Dependencies Justification

- **React**: A popular library for building user interfaces, allowing us to create a dynamic and responsive web application.

- **TypeScript**: Provides static typing to JavaScript, which helps catch errors early and improves code quality and maintainability.

- **Context API (useContext)**: It is a feature in React that allows components to access data from a global context without having to pass props through every level of the component tree. It's useful for managing state across multiple components that share common data, making it easier to handle application-wide data in small to medium-sized projects with straightforward data needs.

- **Styled-Components**: It is a library that enables writing CSS-in-JS. This approach is beneficial for creating modular and reusable styles directly scoped to specific components. Each styled-component can encapsulate its styles, making it easier to maintain and ensuring that styles do not leak out to other parts of the application. For readability and maintainability, I prefer writing styled-components in separate files dedicated to each component, which helps organize and manage styles efficiently.

- **React-Spinners**: Provides loading spinners to indicate activity, enhancing user experience during data fetching.

- **Cypress**: A powerful end-to-end testing framework that ensures our application works as expected by simulating real user interactions.

- **Axios**: A promise-based HTTP client for making API requests, which simplifies the process of fetching data from the Chuck Norris API.

- **i18next**: Facilitates internationalization support, allowing the application to be easily translated into multiple languages.
