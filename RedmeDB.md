# 📌 Next.js + Strapi + PostgreSQL (Docker)

Цей проєкт використовує **Next.js**, **Strapi (CMS)** та **PostgreSQL** у **Docker** для розробки та продакшену.

---

## 🔥 Запуск у режимі розробки (Dev)

1. **Запускаємо базу даних (PostgreSQL)**

   ```sh
   yarn dev:db
   ```

   > **Що робить ця команда?**
   >
   > - Стартує базу даних PostgreSQL в Docker.
   > - Використовує файл `docker-compose.dev.yml`.

2. **Запускаємо CMS (Strapi)**

   ```sh
   yarn dev:cms
   ```

   > **Що робить ця команда?**
   >
   > - Переходить у папку `backend` та запускає `yarn develop`.

3. **Запускаємо фронтенд (Next.js)**
   ```sh
   yarn dev:nextjs
   ```
   > **Що робить ця команда?**
   >
   > - Переходить у папку `frontend` та запускає `yarn dev`.

---

## 🚀 Запуск у продакшені (Prod)

1. **Запускаємо всі сервіси для продакшену**

   ```sh
   yarn start:prod
   ```

   > - Запускає **базу даних**, **Strapi**, **Next.js** у **Docker** (файл `docker-compose.prod.yml`).

2. **Зупиняємо всі сервіси**

   ```sh
   yarn stop:prod
   ```

3. **Перезапускаємо всі сервіси**
   ```sh
   yarn restart:prod
   ```

---

## 🛠 Керування базою даних (PostgreSQL)

1. **Бекап бази даних**

   ```sh
   yarn db:backup
   ```

   > - Робить дамп бази (`pg_dump`) у файл `database_backup.sql`.

2. **Відновлення бази даних**

   ```sh
   yarn db:restore
   ```

   > - Відновлює базу (`psql`) з файлу `database_backup.sql`.

3. **Стартуємо тільки базу даних**

   ```sh
   yarn db:start
   ```

4. **Зупиняємо тільки базу даних**

   ```sh
   yarn db:stop
   ```

5. **Перезапускаємо тільки базу даних**
   ```sh
   yarn db:restart
   ```

---

## 📂 Структура проєкту

```
📦 project-root
 ┣ 📂 backend      # Strapi (CMS)
 ┣ 📂 frontend     # Next.js (React)
 ┣ 📜 package.json # Головний файл із командами (scripts)
 ┣ 📜 docker-compose.dev.yml  # Docker-конфіг для розробки
 ┣ 📜 docker-compose.prod.yml # Docker-конфіг для продакшену
 ┣ 📜 database_backup.sql      # Файл бекапу бази
 ┗ 📜 README.md   # Документація
```

---

## 📝 Важливі нотатки

- Всі сервіси запускаються через **Docker**.
- Strapi працює в режимі `develop`, щоб дозволити зміни без перезапуску.
- **Перед пушем у продакшен НЕ забувайте робити бекап бази (`yarn db:backup`).**

---

## 🤝 Автор

**Олег Губський**  
✉️ `oleh.hubskiy@bndigital.co`

```

---

### 🔥 **Що ми зробили?**
✅ **Чітка структура документації**
✅ **Пояснення команд**
✅ **Приклади запуску**
✅ **Корисні нотатки**

Готово! 🚀
```
