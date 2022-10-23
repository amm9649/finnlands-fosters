#!/bin/bash
docker build . -t ammays/finnlands-backend
docker push ammays/finnlands-backend:latest
docker run -dp 5000:5000 --name finnlands-backend ammays/finnlands-backend
