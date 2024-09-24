# Escrow Application for Espees

## Project Overview

The Escrow Application is designed to facilitate safe and secure trading of goods and services using Espees as the currency. By acting as an intermediary, the platform ensures that transactions between buyers and sellers are fair, transparent, and secure. This application aims to promote the use of Espees in everyday transactions, thereby increasing its adoption and integration into daily life.

## Table of Contents

- [Tech Stack](#tech-stack)
- [Features](#features)
- [Getting Started](#getting-started)
- [Running the Project](#running-the-project)
- [API Endpoints](#api-endpoints)
- [Architecture](#architecture)
- [Contributing](#contributing)
- [License](#license)

## Tech Stack

### Frontend
- Next.js 14 with TypeScript
- React for UI components
- Tailwind CSS for styling
- React Query for state management and data fetching

### Backend
- API Routes in Next.js for serverless functions
- Prisma ORM for database interactions
- PostgreSQL for Database
- NextAuth.js for authentication

### Blockchain Integration
- Ethers.js for blockchain interactions

### DevOps
- Vercel for deployment
- GitHub Actions for CI/CD

## Features

- User Registration/Login
- Product and Service Listing
- Escrow Service
- Transaction Management
- Dispute Resolution
- Rating System

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Set up environment variables (create a `.env.local` file)
4. Set up the database:
   ```
   npm prisma migrate dev
   ```

## Running the Project

To run the Next.js project, follow these steps:

1. Start the development server:
   ```
   npm dev
   ```

2. For production, build and start the server:
   ```
   npm build
   npm start
   ```

3. Run tests:
   ```
   npm test
   ```

4. Check code linting:
   ```
   npm lint
   ```

5. Format code:
   ```
   npm format
   ```

Make sure you have the necessary environment variables set up before running the project.

## API Endpoints

### User Endpoints
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Authenticate a user
- `GET /api/user/profile`: Retrieve user profile information

### Product Endpoints
- `POST /api/products`: Create a new product listing
- `PUT /api/products/[id]`: Edit product listing
- `DELETE /api/products/[id]`: Delete product listing
- `GET /api/products`: Retrieve all product listings
- `GET /api/products/[id]`: Retrieve details of a specific product

### Transaction Endpoints
- `POST /api/transactions`: Initiate a new transaction
- `GET /api/transactions`: Retrieve all transactions for a user
- `GET /api/transactions/[id]`: Retrieve details of a specific transaction

### Escrow Endpoints
- `POST /api/escrow`: Create a new escrow contract
- `GET /api/escrow/[id]`: Retrieve details of a specific escrow contract
- `POST /api/escrow/[id]/release`: Release funds from escrow
- `POST /api/escrow/[id]/dispute`: Initiate a dispute resolution process

## Architecture

The system architecture consists of:
- Frontend: Next.js 14 application with App Router for server-side and client-side rendered React components
- Backend: API Routes in Next.js for serverless functions, with Prisma ORM for database interactions
- Blockchain: Ethereum blockchain for smart contracts handling Espees transactions
- Database: PostgreSQL for storing user profiles, product listings, and transaction history

## Contributing

(Add guidelines for contributing to the project)

## License

(Add license information)