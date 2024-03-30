# Тестовое задание (Vue 3 + TypeScript)[`DEMO`](https://dalinte.github.io/vue3-ts-pinia-test/)
Цель: Продемонстрировать навыки владения Vue 3, TypeScript, а также опыт работы с API и CRUD-операциями.

## ТЗ
Разработать веб-приложение, которое позволяет:
- Отображать список постов, полученный с помощью API JSONPlaceholder: https://jsonplaceholder.typicode.com/posts.
- Добавлять новых постов.
- Редактировать информацию о существующих постах.
- Удалять посты.

## Technology stack

- **Framework**: [`vue 3`](https://vuejs.org/)
- **Lang**: [`typescript`](https://www.typescriptlang.org/)
- **UI**: [`vuetify`](https://vuetifyjs.com/)
- **Store**: [`pinia`](https://pinia.vuejs.org/)
- **Data fetching**: [`axios`](https://axios-http.com/)
- **Lint**: [`eslint`](https://eslint.org/), [`prettier`](https://prettier.io/)
- **Architecture**: [`feature-sliced`](https://feature-sliced.design/)

<details>
<summary>Дополнительные функции</summary>

- Показ уведомлений об успешных действиях или ошибках после вызова апи (toast)
- Валидация форм: поля в формах обязательные
</details>

<details>
<summary>Что можно улучшить</summary>

- Модальные окна вынести в modal-provider, где контент отделен от логики открытия
- Т.к страница всего одна, то в ней находится layout. При vue-router и других страниц это можно вынести
- При добавлении поста приходит id=101. Если попытаться отредактировать, то возвращается ошибка. Как раз пригодится для демонстрации toast с типом error
</details>

