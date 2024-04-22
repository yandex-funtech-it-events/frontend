# Yandex FunTech IT Meetups API

## Оглавление <a id="contents"></a>

1. [О проекте](#about)
2. [Авторы проекта](#authors)
3. [Стек технологий](#tools)
4. [Обязательные ключи](#key)
5. [Запуск](#start)
6. [Backend](#backend)

## О проекте <a id="about"></a>

Сервис для участников it мероприятий.

[demo](https://exquisite-manatee-10e520.netlify.app/)

## Авторы проекта <a id="authors"></a>

Команда:

- Project manager
    - Петелина Александра (TG) [@Picha_pich](https://t.me/Picha_pich)

- Business analytics
    - Павлова Мария (TG [@MariaPavlova111](https://t.me/MariaPavlova111))

- System analytics
    - Джага Артем (TG [@purple_SU](https://t.me/purple_SU))
    - Титов Владислав (TG [@Vladislav7](https://t.me/Vladislav7))
    - Дунаевский Евгений (TG [@Evgeniy_Dunaevskiy](https://t.me/Evgeniy_Dunaevskiy))

- Designers
    - Суслов Андрей (TG [@s_aandrei](https://t.me/s_aandrei))
    - Черепова Александра (TG [@Cherepova_alex](https://t.me/Cherepova_alex))

- Frontend
    - [Мытников Дмитрий](https://github.com/Dimitry-prog) (TG [@Dmitry_Myt](https://t.me/Dmitry_Myt))
    - [Боднюк Анастасия](https://github.com/Chill-Peppa) (TG [@chill_peppa](https://t.me/chill_peppa))

- Backend
    - [Лашков Павел](https://github.com/hutji) (TG [@hutjinator](https://t.me/hutjinator))
    - [Бобков Константин](https://github.com/deltabobkov) (TG [@Bi_oKey](https://t.me/Bi_oKey))
    - [Сидельцева Мария](https://github.com/mvs51) (TG [@sub_mar](https://t.me/sub_mar))

## Стек технологий <a id="tools"></a>

* React
* Redux Toolkit
* Typescript
* react router
* react hook form
* yup
* material ui
* eslint
* prettier

### Пример обязательных ключей<a id="key"></a>

<details><summary>Ключи</summary>

* VITE_API_BASE_URL=https://meetup.ddns.net/api/v1

</details>

## Запуск <a id="start"></a>

> * установка зависимостей: npm install
> * старт проекта: npm run dev

## Backend <a id="backend"></a>

[Ссылка на репозиторий](https://github.com/yandex-funtech-it-events/backend)

[Оглавление](#contents)


<details><summary>Review</summary>
Всем привет! 🤍 
Несу обратную связь по итогам проверки артефактов:

🔨 Frontend

Что получилось хорошо? 

Плюсы
+ тайпскрипт
+ за вите, нет варнингов во время установки
+ по коду хорошо

Что необходимо исправить?
Требования
не написано как запускать прод-режим
Есть варнинги во время работы


Работоспособность
Написал рандомное имя и пароль, выскакивает нотификация "Ошибка". Могу ли я что-то сделать, чтобы исправить эту ошибку? - непонятно. 
В последний момент увидел логин и пароль.
На главной не работает фильтрация эвентов
На странице эвента:
Карта не работает, вызов такси не работает, проложить маршрут не работает.
Не все вопросы отвечены
Кнопка Перейти в Чат не работает
Страница Профиль показывает список эвентов. Кнопка Выйти не работает
Интеграции с бэком нет



UX
Пароль должен показываться звездочками. 
На самом главном слайдере рекламируются эвенты, и я не могу на них перейти
Favicon и title должны быть ваши, а не дефолтные
Предлагаемый логин root, а на поле написано, что логин кириллицей
Навожу мышкой на CodeConnect или DesignXChange и вся строка увеличивает высоту
кнопка лайка подлагивает. Надо или optimistic update или показывать лоадер. 
Нажал на Менеждмент, потом на Бизнес. Выделились два фильтра. Но ничего не поменялось
Потом нажал на Бизнес3, добавился тэг под поиском. Но список эвентов все равно не поменялся. Не то баг, не то я не понимаю как оно работает
Профиль - избранные - Нажимаю на сердечко и не понимаю что именно удалилось из избранного

Оценки:
Работоспособность - 0
Код - 2
UX - 0
Соблюдение требований - 1
Итог - 3


</details>

