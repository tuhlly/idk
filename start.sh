#!/bin/bash
# Simple script to start the local server

cd "$(dirname "$0")"
echo "Starting Health Symptom Checker..."
echo "Server will be available at http://localhost:8000"
echo ""
python3 server.py

