#!/bin/bash

# TODO(jordanhuus): remove when productionizing the app
cd backend
export DATABASE_URL=postgresql://jordanhuus@localhost:5432/capstone_sudoku_solver

# Run the application
gunicorn app:app
