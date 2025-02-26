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

# Собираем Next.js приложение
RUN yarn build

# Указываем порт для Next.js
EXPOSE 3000

# Запускаем сервер Next.js
CMD ["yarn", "start"]
