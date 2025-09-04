# website

This repository contains the landing page for TerraHarbor, a secure platform for storing and managing Terraform State Files with high availability, AES-256 encryption, and complete governance for your cloud infrastructures.

## Stack

- [React](https://reactjs.org/) - Modern JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling for fast development
- [Material-UI (MUI)](https://mui.com/) - React UI components library

## Local Development

Make sure to install the dependencies:

```bash
npm install
```

Start the development server on `http://localhost:5173`:

```bash
npm run dev
```

## Continuous Delivery

This page is published to GitHub Pages using the `deploy-gh-pages.yaml` workflow. The publication is automated through GitHub Actions, ensuring that the latest changes on `main` are always reflected on the live site.
