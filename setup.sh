#!/bin/bash

# Run the application
cd backend/src/
gunicorn "sudoku_app:create_app()"
