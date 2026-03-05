# Vue 3 + TypeScript Project

## Introduction

This template provides a complete setup for Vue 3 to work in Vite with TypeScript. It's designed to help you quickly start a new Vue project with modern technologies and an optimized project structure.

### System Requirements

- Node: >= 18.16.0
- NPM or Yarn

### Core Technology Versions

- Vue: v3.5.13
- Vite: v6.0.5
- TypeScript: ~5.6.2
- Tailwind CSS: v4.1.11

## Installation and Running the Project

### Installing Dependencies

Use [npm](https://www.npmjs.com/) to install packages.

```bash
# Install dependencies
npm install

# Set up Husky for development environment
npm run prepare
```

### Running the Project in Development Mode

```bash
# Start development server
npm run dev
```

### Building the Project for Production

```bash
# Build for production
npm run build
```

Build results will be saved in the `dist/` directory.

### Running the Project in Production Mode (after building)

```bash
# Preview production build
npm run preview
```

### Checking and Fixing Coding Conventions

```bash
# Check and fix ESLint errors
npm run lint
```

## Technologies Used

### Core

- **Vue 3**: Modern UI library with Composition API, improved TypeScript support, and better performance.
- **Vite**: Fast, efficient build tool designed for modern web development.
- **TypeScript**: Static type support, helping to detect errors early and improve development experience.

### API Requests

- **[Axios](https://axios-http.com/)**: Promise-based HTTP client for making API requests.

### Routing

- **[Vue Router](https://router.vuejs.org/)**: Official router for Vue.js, supporting dynamic routing and nested routes.

### Forms and Validation

- **[VeeValidate](https://vee-validate.logaretm.com/v4/)**: Form validation library for Vue.js.
- **[Yup](https://github.com/jquense/yup)**: Schema validation library, integrates well with VeeValidate.

### Styling

- **[TailwindCSS](https://tailwindcss.com/)**: Utility-first CSS framework, helping to build UI quickly and consistently.
- **[PostCSS](https://postcss.org/)**: Tool for transforming CSS with JavaScript plugins.

### Development Tools

- **[ESLint](https://eslint.org/)**: Linting tool to detect and fix errors in JavaScript/TypeScript code.
- **[Prettier](https://prettier.io/)**: Automatic code formatter, ensuring consistent code style.
- **[Husky](https://typicode.github.io/husky/)**: Git hooks manager, automatically running scripts before commit/push.
- **[Commitlint](https://commitlint.js.org/#/)**: Checks commit messages format according to conventions.

## Project Structure

```
.
├── .husky/                 # Git hooks configuration
├── public/                 # Public static assets
├── src/
│   ├── apis/              # API integration services
│   │   ├── axiosClient.ts # Axios client configuration
│   │   └── endpoints/     # API endpoints by module
│   ├── assets/            # Project assets (images, styles, etc.)
│   ├── components/        # Reusable components
│   │   ├── utils/        # Common components (Button, Input, Modal...)
│   │   └── features/      # Feature-specific components
│   ├── layouts/           # Layout components
│   │   ├── Default.vue
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── Home/
│   │   ├── Auth/
│   │   └── ...
│   ├── routers/           # Vue router configuration
│   │  └── index.ts
│   ├── types/             # TypeScript type definitions
│   │   ├── auth.types.ts
│   │   └── ...
│   ├── utils/             # Utility functions
│   │   ├── http.ts
│   │   ├── localStorage.ts
│   │   └── ...
│   └── App.vue            # Root component
├── .eslintrc.js           # ESLint configuration
├── .prettierrc            # Prettier configuration
├── commitlint.config.js   # Commitlint configuration
├── index.html             # Entry HTML file
├── package.json           # Project dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Coding Conventions

### General Principles

- **Clean Code**: Write code that is easy to read, understand, and maintain
- **DRY (Don't Repeat Yourself)**: Avoid code duplication, prefer reusable components and functions
- **Single Responsibility**: Each function, component, or module should have one clear purpose
- **Consistency**: Follow established patterns and conventions throughout the project

#### Custom CSS

- Use `scoped` styles when possible
- Use CSS custom properties for theme values
- Follow BEM methodology for custom CSS classes

## 🔧 Git Hooks

The project uses Husky to manage Git hooks:

- `pre-commit`: Check linting and formatting before commit
- `commit-msg`: Check commit message format
- `pre-push`: Run checks before pushing code

## 📝 Commit Rules

This project follows [Conventional Commits](https://www.conventionalcommits.org/) specification. Each commit message must be structured as follows:

```
<type>(<scope>): <description>

[optional body]
[optional footer(s)]
```

Examples:

```
feat(auth): implement login functionality
fix(router): resolve navigation guard issue
chore(deps): update dependencies to latest version
docs(readme): update installation guide
```

### Commit Types

- `feat`: A new feature
- `fix`: A bug fix
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `docs`: Documentation only changes
- `perf`: A code change that improves performance
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `style`: Changes that do not affect the meaning of the code
- `test`: Adding missing tests or correcting existing tests
- `chore`: Other changes that don't modify src or test files
