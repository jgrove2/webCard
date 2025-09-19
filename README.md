# WebCard - Simple HTML Page with Traefik

A simple HTML page displaying "Justin Grove" in a card, served with nginx and routed through Traefik.

## Files

- `index.html` - Main HTML page with HTMX included
- `styles.css` - CSS modules for styling the card
- `Dockerfile` - Container configuration for nginx
- `docker-compose.yml` - Traefik and webcard service configuration

## Running the Application

1. Build and start the services:
   ```bash
   docker-compose up --build
   ```

2. Access the application:
   - Main page: http://localhost
   - Traefik dashboard: http://localhost:8080

## Features

- Clean, centered card design
- Responsive layout
- HTMX library included
- Traefik reverse proxy
- Docker containerization
