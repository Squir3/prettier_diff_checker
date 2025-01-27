FROM node:18-alpine

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj pliki package.json i package-lock.json
COPY package*.json ./

# Zainstaluj zależności
RUN npm install

# Skopiuj resztę plików aplikacji
COPY . .

# Ustawienie użytkownika kontenera
USER node

# Ustawienie domyślnego polecenia
CMD ["npm", "test"]

