# Front Dash

This is the frontend for the dashboard application, developed with Next.js, ShadcnUI, TailwindCSS, React Hook Form, and Zod. The project is designed to be responsive, with versions for both desktop and mobile.

## Technologies Used

- **Next.js**: React framework for web application development.
- **ShadcnUI**: Reusable UI components.
- **TailwindCSS**: Fast and responsive styling.
- **React Hook Form + Zod**: Form management with validation.
- **TypeScript**: Main development language.
- **ESLint + Prettier**: Code linting and formatting.

## Installation

1. Clone this repository:

```bash
git clone https://github.com/joaonetogit/front-dash.git
```

2. Install the dependencies:

```bash
pnpm install
```

## Use

To start the development server, run the following command:

```bash
pnpm dev
```

## Available scripts

- `pnpm dev`: Starts the development server.
- `pnpm build`: Creates a production version of the application.
- `pnpm start`: Starts the production server.
- `pnpm lint`: Runs ESLint to check for linting problems.
- `pnpm prettier`: Runs Prettier to format the code.

## Project structure

- **src/**: Main source code directory.
  - **app/**: Application logic and configurations.
  - **components/**: Reusable components.
  - **constants/**: Constant values used throughout the application.
  - **context/**: Context providers for state management.
  - **hooks/**: Custom hooks.
  - **lib/**: Libraries and utilities.
  - **pages/**: Application pages.
  - **types/**: TypeScript types and interfaces.
  - **utils/**: Utility functions.
