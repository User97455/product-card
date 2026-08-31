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

ownerCar = userInfo;

// 5-oe задание

function CheckCarSpeed(carInfo){
  if (Object.hasOwn(carInfo, 'maxSpeed')) {
    console.log('свойство maxSpeed существует')
} else {
    carInfo.maxSpeed = 250;
    console.log('свойство maxSpeed добавлено')
}
}
CheckCarSpeed(carInfo);
console.log(carInfo);

//6-oe задание

const logUserInfo =(userInfo, [property]) => {
  console.log(` ${userInfo[property]} `);
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

// 10-ое задание

const checkSizeDestruction = (marvelVillains) => {
  return marvelVillains.map(evil => {
  if (evil.sizeDestruction > 8 ){
    return evil.villain + (` высокая степень угрозы для общества `)
  }
  else {
    return evil.villain + (` низкая степень угрозы для общества `)
  }
});
}

const result = checkSizeDestruction(marvelVillains);
console.log(result[0]);

