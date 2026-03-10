# Vue 3 + TypeScript + Tailwind CSS Project

## Introduction

This project is a Vue 3 frontend assessment built with Vite and TypeScript.
It implements two exercises (Hero Banner + Card Grid, Tabs + Accordion) behind an
authenticated route, using a modern Atomic Design component hierarchy.

### Live Demo

Login: https://frontend-assessment-coral.vercel.app/login

```
Acc: user / password
```

Exercise 1: https://frontend-assessment-coral.vercel.app/
or https://frontend-assessment-coral.vercel.app/exercise-1

Exercise 2: https://frontend-assessment-coral.vercel.app/exercise-2

### System Requirements

- Node: >= 18.16.0
- npm or Yarn

### Core Technology Versions

| Package      | Version |
| ------------ | ------- |
| Vue          | v3.5.13 |
| Vite         | v6.0.5  |
| TypeScript   | ~5.6.2  |
| Tailwind CSS | v4.1.11 |
| Pinia        | v3.0.3  |
| Vue Router   | v4.5.0  |

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
# Build for production - outputs to dist/
npm run build
```

### Previewing the Production Build

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

- **Vue 3** — Composition API, `<script setup>`, improved TypeScript support
- **Vite** — Fast, efficient build tool designed for modern web development.
- **TypeScript** — Static type support, helping to detect errors early and improve development experience.

### State Management

- **[Pinia](https://pinia.vuejs.org/)** — stores for auth state

### API Requests

- **[Axios](https://axios-http.com/)** — promise-based HTTP client

### Routing & Auth

- **[Vue Router](https://router.vuejs.org/)** — history-mode routing with a route-level `AuthGuard`

### Forms and Validation

- **[VeeValidate](https://vee-validate.logaretm.com/v4/)** — reactive form validation
- **[Yup](https://github.com/jquense/yup)** — schema validation integrated with VeeValidate

### Styling & Animation

- **[TailwindCSS v4](https://tailwindcss.com/)** — utility-first CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** — safely merge Tailwind class strings
- **[tw-animate-css](https://github.com/Wombosvideo/tw-animate-css)** — pre-built animation utilities

### Development Tools

- **[ESLint](https://eslint.org/)**: Linting tool to detect and fix errors in JavaScript/TypeScript code.
- **[Prettier](https://prettier.io/)**: Automatic code formatter, ensuring consistent code style.
- **[Husky](https://typicode.github.io/husky/)**: Git hooks manager, automatically running scripts before commit/push.
- **[Commitlint](https://commitlint.js.org/#/)**: Checks commit messages format according to conventions.

### Deployment

- **[Vercel](https://vercel.com/)**: A cloud platform for deploying and hosting modern web applications.

## Project Structure

```
src/
├── apis/                   # HTTP service layer
│   ├── auth.api.ts         # Authentication endpoints
│   └── sections.api.ts     # Section/content endpoints
├── assets/                 # Static assets
│   ├── styles/main.css     # Global CSS entry point
│   └── *.svg               # Image assets
├── components/             # Atomic Design component hierarchy
│   ├── atoms/              # Smallest reusable units
│   │   ├── BaseButton.vue
│   │   ├── BaseInput.vue
│   │   └── LoadingSpinner.vue
│   ├── molecules/          # Composed from atoms
│   │   ├── AccordionPanel.vue
│   │   ├── CardItem.vue
│   │   └── TabsPanel.vue
│   └── organisms/          # Feature-level sections
│       ├── CardGrid.vue
│       └── HeroBanner.vue
├── constants/
│   └── route-name.ts       # Typed route name enum
├── guards/
│   └── AuthGuard.vue       # Route-level auth guard component
├── layouts/
│   ├── Default.vue         # Authenticated layout (header/footer)
│   ├── UnAuth.vue          # Unauthenticated layout (login)
│   └── index.vue           # Layout switcher
├── pages/
│   ├── exercise-1/         # Hero Banner + Card Grid
│   ├── exercise-2/         # Tabs + Accordion
│   └── login/              # Login form
├── routers/
│   └── index.ts            # Route definitions
├── schemas/
│   └── auth.schema.ts      # Yup validation schema for login
├── stores/
│   └── auth.store.ts       # Pinia auth store
├── types/                  # TypeScript type definitions
│   ├── auth.type.ts
│   ├── tab.type.ts
│   └── utils.type.ts
└── utils/
    ├── http.ts             # Axios instance factory
    └── localStorage.ts     # Token persistence helpers
```

## Pages & Routes

| Path          | Name       | Layout  | Description                      |
| ------------- | ---------- | ------- | -------------------------------- |
| `/`           | default    | Default | Redirects to Exercise 1          |
| `/exercise-1` | exercise_1 | Default | Hero Banner + 3-column Card Grid |
| `/exercise-2` | exercise_2 | Default | Tabs panel + Accordion panel     |
| `/login`      | login      | UnAuth  | Login form (VeeValidate + Yup)   |

All routes under `Default` layout are protected by `AuthGuard.vue`.

## Coding Conventions

### General Principles

- **Clean Code** — readable, self-documenting code
- **DRY** — extract reusable components and composables
- **Single Responsibility** — one purpose per component/function
- **Consistency** — follow existing patterns

### Naming

- Components: PascalCase (`BaseButton.vue`)
- Composables: camelCase prefixed with `use` (`useAuth`)
- Constants: SCREAMING_SNAKE_CASE (`ROUTE_NAME.LOGIN`)
- Prefix function names handling events with `on`. Example: `onToggle`
- Prefix variable names returning true/false with `is`. Example: `isAuthenticated`
- Use the `Type` suffix for TypeScript type definitions. Example: `TabItemType`

### Styles

- Use `scoped` styles inside `.vue` files
- Use CSS custom properties for theme values
- Use BEM methodology for custom (non-Tailwind) class names

## Git Hooks

| Hook         | Action                               |
| ------------ | ------------------------------------ |
| `pre-commit` | ESLint + Prettier check              |
| `commit-msg` | Commitlint — validates commit format |
| `pre-push`   | Final checks before remote push      |

## Commit Rules

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <description>

[optional body]
[optional footer(s)]
```

### Examples

```
feat(auth): implement login functionality
fix(router): resolve navigation guard issue
chore(deps): update dependencies to latest version
docs(readme): update installation guide
```

### Commit Types

| Type       | When to use                                          |
| ---------- | ---------------------------------------------------- |
| `feat`     | A new feature                                        |
| `fix`      | A bug fix                                            |
| `build`    | Changes to the build system or external dependencies |
| `ci`       | Changes to CI configuration files and scripts        |
| `docs`     | Documentation-only changes                           |
| `perf`     | Performance improvements                             |
| `refactor` | Code change that is neither a fix nor a feature      |
| `style`    | Formatting changes with no functional impact         |
| `test`     | Adding or correcting tests                           |
| `chore`    | Maintenance changes outside src/test files           |

### Explain why the result of `('b' + 'a' + + 'a' + 'a').toLowerCase()` is `"banana"`?

#### 1. Spot the Unary Plus

```js
'b' + 'a' + + 'a' + 'a'
            ^
            This is a UNARY plus, not a binary concatenation operator.
```

```js
'b' + 'a' + +'a' + 'a'
```

#### 2. Unary `+` coerces the operand to `number`

```
+'a' // Number('a') → NaN
typeof +'a' // "number"  ← NaN is of type number!
```

`'a'` is a non-numeric string, so `Number('a')` returns `NaN`. Despite its name, `NaN` has **type `number`** in JavaScript.

#### 3. Apply `.toLowerCase()`

```
"baNaNa".toLowerCase() → "banana"
```

#### Full transformation chain

```
('b' + 'a' + + 'a' + 'a').toLowerCase()
→ ('b' + 'a' + NaN + 'a').toLowerCase()    // → NaN
→ ("ba" + NaN + 'a').toLowerCase()          // "b"+"a" = "ba"
→ ("baNaN" + 'a').toLowerCase()             // "ba"+NaN → "baNaN"
→ "baNaNa".toLowerCase()                    // "baNaN"+'a' = "baNaNa"
→ "banana"
```
