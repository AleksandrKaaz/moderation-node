const announcements1 = [
  {
    id: 1234567,
    publishDate: 1234567,
    publishDateString: "08:46, сегодня",
    ownerId: 1234567,
    ownerLogin: "MyOwner",
    bulletinSubject: "Заголовок объявления",
    bulletinText: "Текст объявления ...",
    bulletinImagees: [
      "https://static.baza.farpost.ru/v/1510541224458_hugeBlock",
    ],
  },
  {
    id: 9876543,
    publishDate: 9876543,
    publishDateString: "12:21, 3 апреля",
    ownerId: 9876543,
    ownerLogin: "Продавец гаража",
    bulletinSubject: "Продам гараж",
    bulletinText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    bulletinImagees: [
      "https://img.lovepik.com/free-png/20211103/lovepik-garage-png-image_400243418_wh1200.png",
      "https://w7.pngwing.com/pngs/930/514/png-transparent-cute-sun-smiling-face-lovely-sun-smiling-face.png",
    ],
  },
  {
    id: 4433443,
    publishDate: 4433443,
    publishDateString: "08:46, позавчера",
    ownerId: 4433443,
    ownerLogin: "Еще один логин",
    bulletinSubject: "Заголовок объявления 22222",
    bulletinText:
      "Текст объявления ... Текст объявления ... Текст объявления ... Текст объявления ...",
    bulletinImagees: [
      "https://static.baza.farpost.ru/v/1510541224458_hugeBlock",
    ],
  },
  {
    id: 6543210,
    publishDate: 6543210,
    publishDateString: "12:21, 5 апреля",
    ownerId: 6543210,
    ownerLogin: "Продавец телефона",
    bulletinSubject: "Продам телефон",
    bulletinText:
      "ЫЫЫЫLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    bulletinImagees: [
      "https://w7.pngwing.com/pngs/930/514/png-transparent-cute-sun-smiling-face-lovely-sun-smiling-face.png",
      "https://w7.pngwing.com/pngs/930/514/png-transparent-cute-sun-smiling-face-lovely-sun-smiling-face.png",
    ],
  },
  {
    id: 33333,
    publishDate: 33333,
    publishDateString: "08:46, 25 марта",
    ownerId: 33333,
    ownerLogin: "Логиннн",
    bulletinSubject: "Заголовок объявления",
    bulletinText:
      "Опять ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    bulletinImagees: [
      "https://w7.pngwing.com/pngs/930/514/png-transparent-cute-sun-smiling-face-lovely-sun-smiling-face.png",
    ],
  },
  {
    id: 12112221,
    publishDate: 12112221,
    publishDateString: "12:21, 3 апреля",
    ownerId: 12112221,
    ownerLogin: "Субарист",
    bulletinSubject: "Продам субару",
    bulletinText:
      "Продам субаря Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    bulletinImagees: [
      "https://i0.wp.com/dopegfx.co.uk/wp-content/uploads/2020/04/Subaru-Logo-Sticker.png",
      "https://e7.pngegg.com/pngimages/293/931/png-clipart-subaru-car-logo-desktop-subaru-emblem-logo.png",
    ],
  },
  {
    id: 543555,
    publishDate: 543555,
    publishDateString: "03:15, позавчера",
    ownerId: 543555,
    ownerLogin: "+ Еще один логин",
    bulletinSubject: "Заголовок объявления",
    bulletinText:
      "Текст объявления ... Текст объявления ... Текст объявления ... Текст объявления ...",
    bulletinImagees: [
      "https://static.baza.farpost.ru/v/1510541224458_hugeBlock",
    ],
  },
  {
    id: 18543211,
    publishDate: 18543211,
    publishDateString: "12:21, 7 апреля",
    ownerId: 18543211,
    ownerLogin: "Продавец квартиру",
    bulletinSubject: "Продам квартиры",
    bulletinText:
      "ЫЫЫЫLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    bulletinImagees: [
      "https://w7.pngwing.com/pngs/930/514/png-transparent-cute-sun-smiling-face-lovely-sun-smiling-face.png",
      "https://w7.pngwing.com/pngs/930/514/png-transparent-cute-sun-smiling-face-lovely-sun-smiling-face.png",
    ],
  },
  {
    id: 9999999,
    publishDate: 9999999,
    publishDateString: "03:15, сегодня",
    ownerId: 9999999,
    ownerLogin: "Логин",
    bulletinSubject: "Заголовок объявления",
    bulletinText:
      "Текст объявления ... Текст объявления ... Текст объявления ... Текст объявления ...",
    bulletinImagees: [
      "https://static.baza.farpost.ru/v/1510541224458_hugeBlock",
    ],
  },
  {
    id: 82837393,
    publishDate: 82837393,
    publishDateString: "12:24, 8 апреля",
    ownerId: 82837393,
    ownerLogin: "Продавец",
    bulletinSubject: "Продам",
    bulletinText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    bulletinImagees: [
      "https://w7.pngwing.com/pngs/930/514/png-transparent-cute-sun-smiling-face-lovely-sun-smiling-face.png",
      "https://static.baza.farpost.ru/v/1510541224458_hugeBlock",
    ],
  },
];

module.exports = { announcements1 };
