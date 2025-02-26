# Используем официальный образ Node.js
FROM node:18

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и yarn.lock перед установкой зависимостей
COPY package.json yarn.lock ./

# Устанавливаем зависимости
RUN yarn install

# Копируем весь код проекта в контейнер
COPY . .

# Указываем порт, который будет использовать Strapi
EXPOSE 1337

# Запускаем Strapi в продакшн-режиме
CMD ["yarn", "start"]
