// 2-oe задание

const userInfo = {
  name: 'Shamil',
  surname: 'Nairuev',
  age: 20,
  city: 'Munhattan',
  job:'Angular developer',
  hobby: 'games',
  sport:'judo',
  religion:'Islam',
  country:'USA',
  phone: +1234567890,
}
// 3-oe задание

const carInfo = {
  brand: 'Mercedes',
  model: 'E-class',
  year: 2021,
  colour: 'gray',
  engine: 'V6',
}
// 4-oe задание

carInfo.owner = userInfo;

// 5-oe задание

function checkCarSpeed(carInfo){
  if (Object.hasOwn(carInfo, 'maxSpeed')) {
    console.log('свойство maxSpeed существует')
} else {
    carInfo.maxSpeed = 250;
    console.log('свойство maxSpeed добавлено')
}
}
checkCarSpeed(carInfo);
console.log(carInfo);

//6-oe задание

const logUserInfo =(userInfo, property) => {
  console.log(` ${userInfo, [property]} `);
};

logUserInfo(userInfo, ['religion']);
// 7-oe задание

const itemsForSale = ['телефон', 'кассета', 'стол', 'зеркало', 'подставка']


// 8-oe задание

const books = [
  {
    title: 'Ромео и Джульетта',
    author: 'Уильям Шекспир',
    year: 1597,
    genre:'Poман'
  },
  {
    title: 'Война и мир',
    author: 'Лев Толстой',
    year:'1869', 
    genre: 'Роман'
  },
  {
    title: 'حقوق الصديق', 
    author:'أحمد إبن ناصر الطيار', 
    year:'٢٠٢٦', 
    genre:'تعليميّ'
  },
  {
    title: 'Красивый голос за 30 дней', 
    author:'Кирил Плешаков-Качалин', 
    year:'2026', 
    genre:'обучение'
  }
]

const newBooksList = books.push({title: 'Рай и Ад', author: 'Умар Сулейман Аль-Ашкар', year: '2013', genre: 'религия'})
console.log(newBooksList);

//9-ое задание

const marvelVillains= [
  {
    villain:'Веном',
    clothes: 'Черная слизь',
    weapons:'Симбиот',
    sizeDestruction: 10,
  },
  {
    villain:'Капитан Октавиус',
    clothes: 'Коричневое Пальто',
    weapons:'Железные щупальцы осьминога',
    sizeDestruction: 7,
  },
  {
    villain:'Скорпион',
    clothes: 'Зеленые доспехи',
    weapons:'Отравляющее жало',
    sizeDestruction: 6,
  },
  {
    villain:'Ящер',
    clothes: 'белый халат ученого',
    weapons:'Зубы',
    sizeDestruction: 9,
  },
]

const booksAndVillains = [...books, ...marvelVillains];
console.log(booksAndVillains);


// 10-ое задание

const checkSizeDestruction = marvelVillains.map((villain, i) => {
  console.log(`${i}:` , villain);
  const sizeDestruction = villain.sizeDestruction;
  villain.isDangerous = sizeDestruction > 6;
  return villain;
});

console.log(checkSizeDestruction);
