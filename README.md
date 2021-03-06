# Hacker news

[Ссылка на проект](https://hacker-news-ui-clone.netlify.app/).

Интерфейс для просмотра последних новостей [Hacker News](https://news.ycombinator.com/news), статей и комментариев.

## Функционал

### Главная страница

-   Отображает последние 100 новостей в виде списка отсортированного по дате
-   Каждая новость содержит:
    -   название
    -   рейтинг
    -   ник автора
    -   дату публикации
-   По клику на новость происходит переход на страницу новости
-   ~~Список новостей автоматически обновляться раз в минуту без участия пользователя~~
-   На странице есть кнопка для принудительного обновления списка новостей
-   Добавлена пагинация по контенту новостей

### Страница новости

-   Содержит:
    -   заголовок новости
    -   автора
    -   дату
    -   рейтинг
    -   счётчик количества комментариев
    -   ссылку на новость
    -   текст новости(если он есть)
    -   список комментариев в виде дерева
-   Корневые комментарии и вложенные комментарии подгружаются сразу же при входе на страницу
-   Вложенные комментарии отображаются при клике на кнопку "Show more" у родительского комментария.
-   Список комментариев автоматически обновляться раз в минуту без участия пользователя
-   На странице есть кнопка для принудительного обновления списка комментариев
-   На странице есть кнопка для возврата к списку новостей

### Технический стек

-   Приложение разработано с использованием React и Redux Toolkit
-   Использован [официальный API Hacker News](https://github.com/HackerNews/API). Вызовы Hacker News API и обработка данных от него производятся напрямую с фронтенда
-   Роутинг выполнен с использованием React Router v5
-   Использован css modules для изоляции стилей

### Дополнительно

-   Проект адаптивен для отображения на мобильных устройствах
-   Настроен линтер, скрипт `npm run lint`
-   Для валидации пропсов используется библиотека PropTypes
-   Для пагинации использован кастомный хук
-   Для парсинга HTML разметки текстов статьи и комментариев используется [sanitize-html](https://www.npmjs.com/package/sanitize-html), например:
    -   добавляет атрибут `target="_blank"` для ссылок
    -   заменяет тег `pre`, который может повлиять на верстку проекта

## Запуск проекта

Клонировать проект:

```bash
    $ git clone https://github.com/romanlesnoy/hacker-news.git
```

Перейти в директорию проекта и установить зависимости

```bash
$ cd hacker-news && npm install
```

Запустить приложение

```bash
 npm run start
```

[Ссылка на тестовое задание Avito](https://github.com/avito-tech/sx-frontend-trainee-assignment/blob/main/README.md)
