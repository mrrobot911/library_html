console.log(
    `
    Выполненные пункты:
    1) Карусель реагирует на нажатие кнопок (кнопки под каруселью и стрелочки слева и справа в мобильной версии) и происходит анимация перелистывания. +15 
    
    2) На экране шириной 1440px проверяем, чтобы было доступно 2 других скрытых картинки. При каждом нажатии выезжает следующая, и так до границ справа и слева. +2
    
    3) Выделенная кнопка под каруселью (имеется ввиду кнопка соответствующая активному слайду и которая имеет коричневый цвет) - неактивная. +2
    
    4) Если анимация карусели не успела завершиться, при этом нажата была следующая кнопка, то картинка не должна зависнуть в промежуточном состоянии. +2
    
    5) На экране шириной 768px проверяем, чтобы было доступно 4 других скрытых картинки. Для этого меняем разрешение и перезагружаем страницу. Теперь доступных перемещений становится 5. +2

    6) Неактивными становятся не только выделенные кнопки, но и стрелочки на границах карусели. +2
    
    7) "Слайдер" реагирует на нажатие кнопок панели навигации и происходит анимация затухания и проявления. +15
    
    8) На любой ширине экрана все 4 карточки с книгами одновременно будут плавно затухать, а затем плавно проявляться следующие. +2
    
    9) Анимация может быть прервана следующим нажатием на кнопку выбора поры года, но при этом анимация не должна застывать в промежуточном состоянии. Если анимация не была прервана следующим нажатием кнопки, то она должна отрабатывать до конца. +2
    
    10) Во время анимаций высота блока Favorites не должна меняться. +2
    
    11) Панель навигации "слайдера" сделана по технологии "sticky" для разрешений с одним рядом книг (768px и меньше), т.е. опускается вниз вместе со скроллом страницы, прилипая к верхней части экрана, в рамках блока Favorites. +2
    
    12) Нажатие на кнопку Check the card ни к чему не приведёт.
    
    13) Иконка юзера в хедере отображается в виде силуэта.
    
    14) В блоке Favorites все кнопки должны иметь имя Buy, а не Own. +2.
    
    15) Нажатие на иконку пользователя в хедере открывает меню, которое должно оказаться под иконкой таким образом, что правый верхний угол меню находится в той же точке, что и нижний правый угол контейнера с иконкой в хедере. Меню под иконкой. +2.
    
    16) То же верно и в обратную сторону, кнопка бургер-меню должна быть доступна при открытом меню авторизации. +1
    
    17) Нажатие на любую область или элемент вне меню приводят к закрытию меню авторизации. +2
    
    18) Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).

    19) При нажатии на кнопку Register в открытом меню авторизации появляется модальное окно REGISTER, где есть поля First name, Last name, E-mail и Password. +2.
    20) При нажатии кнопки Sign Up в блоке Digital Library Cards также появляется модальное окно REGISTER. +2
    21) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
    22) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
    23) В данном случае, ограничения по полям - все поля должны быть не пустыми. +2
    24) Пароль должен быть не короче 8 символов. +2
    25) В поле E-mail должна быть валидация типа email. +2
    26) Данные сохраняются в хранилище localStorage, в том числе и пароль, хотя в реальной жизни так делать нельзя. +2
    27) Иконка пользователя меняется на заглавные буквы имени. +2
    28) Отображение страницы приходит в состояние после авторизации (этап 4). +2
    29) Будет сгенерирован девятизначный Card Number случайным образом в формате 16-ричного числа. +2
    30) Блок Digital Library Cards. Если введённые имя и номер карты совпадают с данными пользователя, то отображается панель с информацией, вместо кнопки Check the card на 10 секунд. +2
    31) Там же после отображения информации, кнопка возвращается в прежнее состояние, а поля в форме сбрасываются. +2
    32) Дизайн модального окна соответствует макету. +15 (позже появятся пункты оценки по каждому элементу в отдельности).
    33) При нажатии на кнопку Log In появляется модальное окно LOGIN, где есть поля E-mail or readers card и Password. +2
    34) При нажатии кнопки Log In в блоке Digital Library Cards также появляется модальное окно LOGIN. +2
    35) Окно центрировано, а область вокруг затемнена (насколько затемнена - не имеет значения). +2
    36) При нажатии на крестик в углу окна, или на затемнённую область вне этого окна, оно закрывается. +2
    37) Для авторизации все поля должны быть не пустыми. +2
    38) Пароль должен быть не короче 8 символов. +2
    39) Если пользователь ещё не вошёл в учётную запись, то при нажатии на любую кнопку Buy открывается модальное окно LOGIN. +2
    40) При наведении курсором на иконку пользователя должно отображаться полное имя пользователя (атрибут title). +2
    41) При наличии авторизации вместо кнопки Check the Card будут отображаться данные пользователя и бейджи, как на дизайне LibraryCard after login in account. +2 
    Ваша оценка - 198 баллов
    `
);