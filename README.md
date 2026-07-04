# Pipeline Practice

A simple Node.js project to practice CI/CD pipelines with GitHub Actions.

## Getting Started

### Prerequisites
- Node.js 18+

### Installation

```bash
npm install
```

### Running the Application

```bash
npm start
```

### Running Tests

```bash
npm test
```

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration. The workflow:

1. **Triggers** on push to `main` branch or pull requests targeting `main`
2. **Checks out** the code
3. **Sets up** Node.js 18
4. **Installs** dependencies
5. **Runs** tests

The workflow configuration is defined in `.github/workflows/ci.yml`.
