# Honors Inventory Management System

A full-stack inventory management application for tracking equipment and their locations.

## Tech stack

**Backend:** Node.js, Express.js, TypeScript, Sequelize, PostgreSQL

**Frontend:** React, TypeScript, Vite, Axios

## Setup

### Backend Environment Variables
For convenience, I've provided my Postgres database link here, feel free to use it! https://docs.google.com/document/d/1ujywV-hbxelCK_mNtfrs5CWvD3pTSdw48CTNPZ7S-nE
```env
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3000
```

## Installation

### Backend Setup
```bash
cd backend
npm install
```

### Frontend Setup
```bash
cd frontend
npm install
```

## Running the Application

### Start Backend
- Will create the tables in the database automatically
- Will also create a default warehouse location if it doesnt exist

```bash
npm install
npm start
```

The backend server will run on `http://localhost:<env.PORT>`, with default PORT being 3000.

### Start Frontend

```bash
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`.

## Database Setup

### Create schema

The schema will be created once the backend is run, no need for manually creating it.

### Add Sample Data

For convenience, I've provided my Postgres database link here, feel free to use it! https://docs.google.com/document/d/1ujywV-hbxelCK_mNtfrs5CWvD3pTSdw48CTNPZ7S-nE

**Important:** Make sure the backend has been started at least once before running the SQL script, as it creates the necessary ENUM types.
```bash
psql "<sql_db_link>" -f schema.sql
```



## API Endpoints

### Equipment
- `GET /api/equipment` - Get all equipment
- `GET /api/equipment/types` - Get all equipment types
- `POST /api/equipment` - Create new equipment
- `PUT /api/equipment/:id` - Update equipment
- `DELETE /api/equipment/:id` - Delete equipment

### Locations
- `GET /api/locations` - Get all locations (with equipments)
- `GET /api/locations/types` - Get all building types
- `POST /api/locations` - Create new location
- `PUT /api/locations/:id` - Update location
- `DELETE /api/locations/:id` - Delete location