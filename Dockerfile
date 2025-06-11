# Используем официальный образ Node.js на основе Alpine (легковесный)
FROM node:24-alpine AS builder

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости с очисткой кэша
RUN npm cache clean --force && \
    rm -rf node_modules package-lock.json && \
    npm install

# Копируем все файлы проекта
COPY . .

# Собираем приложение
RUN npm run build

# Используем nginx для обслуживания статических файлов
FROM nginx:alpine

# Копируем собранные файлы из builder в nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]