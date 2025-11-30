# Honors Inventory

A full-stack inventory management application for tracking equipment and their locations.

## Tech stack

**Backend:** Node.js, Express.js, TypeScript, Sequelize, PostgreSQL

**Frontend:** React, TypeScript, Vite, Axios

## Setup

### Backend .env
For convenience, I've provided my Postgres database link here, feel free to use it! https://docs.google.com/document/d/1ujywV-hbxelCK_mNtfrs5CWvD3pTSdw48CTNPZ7S-nE
```env
# Replace with your db URL
DATABASE_URL=postgresql://user:password@host:port/database
PORT=3000
```

### Frontend .env
```env
VITE_BACKEND_URL=http://localhost:3000
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

```bash
cd backend
npm install
npm start
```

The backend server will run on `http://localhost:<env.PORT>`, with the default PORT being 3000.

### Add sample data
```bash
cd ..
# for linux users, I could not find a way for Windows machines
psql "<sql_db_link>" -f schema.sql
```

### Start Frontend

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`.





## API Endpoints

### Equipment
- `GET /api/equipment` - Get all equipment
- `GET /api/equipment/types` - Get all equipment types
- `POST /api/equipment` - Create new equipment
- `PUT /api/equipment/:id` - Update equipment
- `DELETE /api/equipment/:id` - Delete equipment

### Locations
- `GET /api/locations` - Get all locations (with equipment)
- `GET /api/locations/types` - Get all building types
- `POST /api/locations` - Create new location
- `PUT /api/locations/:id` - Update location
- `DELETE /api/locations/:id` - Delete location
