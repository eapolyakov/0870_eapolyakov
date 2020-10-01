class User {
  constructor(name,lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}
let names = ['Изяслав',
'Арсений',
'Карл',
'Роман',
'Фома',
'Ипатий',
'Глеб',
'Святослав',
'Вячеслав',
'Трофим',
'Полина',
'Лада',
'Алиса',
'Янина',
'Людмила',
'Пелагея',
'Каролина',
'Галина',
'Валерия'
];
let lastnames = ['Шумов',
'Пахомов',
'Кравков',
'Сабанцев',
'Балашов',
'Янцев',
'Тяпичев',
'Аристархов',
'Топорков',
'Кузикин',
'Сыромятников'];
let users ={};
for (var i = 0; i < 30; i++) {
  let nameIndex = getRandom(0, names.length);
  let name = names[nameIndex];
  let lastname = lastnames[getRandom(0, lastnames.length)];
  users[i] = new User(name, nameIndex>9?lastname+'a':lastname);
}
console.log(users);
function getRandom(min,max) {
  return Math.floor(Math.random()*(max-min)+min);
}
