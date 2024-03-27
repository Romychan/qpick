<div align="center">
 <h2>Тестовое задание Neoflex</h2>
 <p>
  <a href="#описание">Описание</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#технологии">Технологии</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#начало-работы">Начало работы</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#описание-команд">Описание команд</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#скриншоты">Скриншоты</a>
 </p>
</div>

## Описание

![Главная страница](https://github.com/Romychan/qpick/assets/60140867/3f554842-1f47-4956-9cdd-0dafb57500e1)

Решение тестового задания по разработке интернет-магазина аудио аксессуаров QPICK. Приложение состоит из трех основных страниц: каталог, корзина покупок и форма оплаты. Основные и дополнительные требования тестового задания были выполнены.

- [Ссылка на приложение](https://romychan-qpick.netlify.app)
- [Ссылка на Storybook приложения](https://romychan-qpick-storybook.netlify.app)

## Функционал

### Основной

- Отображение товаров в каталоге из переданного массива
- Увеличение количества товаров рядом с иконкой при нажатии на кнопку «Купить»
- Изменение итоговой цены в корзине при изменении количества товаров
- Сохранение корзины в SessionStorage

### Дополнительный

- Удаление карточки товара из корзины
- Отображение детальной информации о товаре в модальном окне при нажатии на иконку или название товара
- Адаптация приложения под различные экраны устройств
- Валидация формы оплаты с помощью [React-Hook-Form](https://react-hook-form.com/) и [Zod](https://zod.dev/)
- [Storybook](https://storybook.js.org/) с компонентами приложения
- Модульное тестирование с использованием [Vitest](https://vitest.dev/) и [React Testing Library](https://testing-library.com/)
- [Husky](https://typicode.github.io/husky/) для Pre-Commit хуков

## Технологии

### Frontend

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [React Router Dom](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)

### Тестирование

- [React Testing Library](https://testing-library.com/)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)

### Качество кода

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://typicode.github.io/husky/)
- [Lint-Staged](https://www.npmjs.com/package/lint-staged/)

## Начало работы

### Требования

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Установка

1. Клонировать репозиторий и перейти в папку проекта

   ```sh
   # Клонировать этот репозиторий
   git clone https://github.com/Romychan/qpick.git
   # Перейти в папку проекта
   cd qpick
   ```

2. Установить зависимости проекта

   ```sh
   npm install
   ```

3. Запустить проект в режиме разработки

   ```sh
   npm run dev
   ```

   Приложение будет доступно по адресу <http://localhost:3000>

## Описание команд

| Команда&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | Описание                                                                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`                                                                                                                                                                                                       | Запускает приложение в режиме разработки. Приложение будет доступно по адресу <http://localhost:3000>                                                 |
| `npm run build`                                                                                                                                                                                                     | Запускает сборку проекта в prod режиме. Собранный проект будет находиться в папке `dist`                                                              |
| `npm run preview`                                                                                                                                                                                                   | Запускает локальный сервер для предварительного просмотра рабочей сборки из папки `dist`. Приложение будет доступно по адресу <http://localhost:4173> |
| `npm run test:unit`                                                                                                                                                                                                 | Запускает модульные тесты                                                                                                                             |
| `npm run lint:eslint`                                                                                                                                                                                               | Запускает ESLint для проверки и отображения проблем с кодом                                                                                           |
| `npm run lint:eslint:fix`                                                                                                                                                                                           | Запускает ESLint для устранения обнаруженных проблем с кодом                                                                                          |
| `npm run lint:prettier`                                                                                                                                                                                             | Запускает Prettier для устранения проблем с форматированием кода                                                                                      |
| `npm run lint:types`                                                                                                                                                                                                | Запускает проверку типов для проекта                                                                                                                  |
| `npm run lint`                                                                                                                                                                                                      | Последовательно выполняет все проверки качества кода                                                                                                  |
| `npm run storybook`                                                                                                                                                                                                 | Запускает Storybook в режиме разработки. Storybook будет доступен по адресу <http://localhost:6006>                                                   |
| `npm run storybook:build`                                                                                                                                                                                           | Запускает сборку Storybook. Собранный Storybook будет находиться в папке `storybook-static`                                                           |
| `npm run prepare`                                                                                                                                                                                                   | Запускает инициализацию Husky для работы pre-commit хуков                                                                                             |

## Скриншоты

Страница каталога

![Страница каталога](https://github.com/Romychan/qpick/assets/60140867/935c0036-cdc5-435a-b718-edfec927511f)

Подробная информация о товаре

![Подробная информация о товаре](https://github.com/Romychan/qpick/assets/60140867/71834266-7455-49d9-ae7d-4fd3d0524ecd)

Страница корзины

![Страница корзины](https://github.com/Romychan/qpick/assets/60140867/d6dd1c7b-9d60-4e68-a91a-697053c5bf99)

Страница формы оплаты

![Страница формы оплаты](https://github.com/Romychan/qpick/assets/60140867/ef57a8a0-43af-4da0-b4b2-48be312c2343)
