# Next.js + Strapi Template

## 📌 Опис проекту

Цей шаблон створений для розробки веб-додатка з використанням **Next.js** (фронтенд) та **Strapi** (бекенд) із базою даних **PostgreSQL**. База даних працює у Docker-контейнері.

---

## 🚀 Запуск проекту

### 1️⃣ Клонування репозиторію

```sh
 git clone <URL_РЕПОЗИТОРІЮ>
 cd nextjs-strapi-template
```

### 2️⃣ Встановлення залежностей

```sh
yarn install
```

### 3️⃣ Запуск бази даних (PostgreSQL)

```sh
yarn dev:db
```

### 4️⃣ Запуск Strapi (бекенд)

```sh
yarn dev:cms
```

### 5️⃣ Запуск Next.js (фронтенд)

```sh
yarn dev:nextjs
```

Після цього:

- **Strapi** буде доступний за адресою `http://localhost:1337`
- **Next.js** буде доступний за адресою `http://localhost:3000`

---

## 🔄 Зупинка та перезапуск

### Зупинка dev-оточення:

```sh
yarn stop:dev
```

### Перезапуск dev-оточення:

```sh
yarn restart:dev
```

---

## 💾 Робота з базою даних (бекап та відновлення)

Перед початком роботи **рекомендується зробити резервну копію** бази даних!

### 🔹 Бекап бази даних:

```sh
yarn db:backup
```

Файл `database_backup.sql` буде збережено в кореневій папці проекту.

### 🔹 Відновлення бази даних:

```sh
yarn db:restore
```

### 🔹 Перезапуск бази даних:

```sh
yarn db:restart
```

---

## 🎯 Ведення розробки

1️⃣ **Створюємо нову гілку**

```sh
git checkout -b feature/header
```

2️⃣ **Робимо коміти** під час роботи:

```sh
git add .
git commit -m "Створено компонент Header"
```

3️⃣ **Відправляємо зміни у віддалений репозиторій**

```sh
git push origin feature/header
```

4️⃣ **Створюємо Pull Request (PR) та об'єднуємо з `main`**

---

## 🚀 Запуск у продакшені

### 1️⃣ Запуск прод-оточення

```sh
yarn start:prod
```

### 2️⃣ Зупинка прод-оточення

```sh
yarn stop:prod
```

### 3️⃣ Перезапуск прод-оточення

```sh
yarn restart:prod
```

---

## 🔗 Корисні посилання

- **Strapi**: [https://strapi.io](https://strapi.io)
- **Next.js**: [https://nextjs.org](https://nextjs.org)
- **Docker**: [https://www.docker.com](https://www.docker.com)
