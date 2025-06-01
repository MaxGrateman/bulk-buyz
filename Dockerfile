FROM node:20-alpine

WORKDIR /app

COPY backend/package*.json ./backend/
RUN cd backend && npm install

COPY backend/ ./backend/
COPY frontend/dist ./backend/public

COPY backend/.env ./backend/

EXPOSE 5000

CMD ["node", "backend/index.js"]

