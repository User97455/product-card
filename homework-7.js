//#1
const  getCityTemp = (city, temperature) => {
  console.log(`Сейчас в ${city} температура — ${temperature} градусов по Цельсию`)
}
  getCityTemp(`Moscow`, `35`);

  //#2

const lightSpeed = 299792458 ;

const checkSpeed = (speed) => {
  if (speed > lightSpeed) { 
    console.log('Сверхсветовая скорость')
  } else if  (speed === lightSpeed) {
    console.log('Скорость света')
  } else {
    console.log('Субсветовая скорость')
  }
}
checkSpeed(299792459);

//#3

const firstProduct = "коричневый стол";
const firstPriceProduct = 3500;

const buyProduct = (money) => {
  if (money >= firstPriceProduct ){
    const  buyDifference = money - firstPriceProduct;
    console.log(` ${productFirst} приобретен, спасибо за покупку!, ваша сдача ${buyDifference}$`)
  } else {
    const priceDifference = firstPriceProduct - money;
    console.log(`Вам не хватает ${priceDifference}$, пополните баланс`)
  }
}
buyProduct(2500);

//#4

const checkNumber = (number) => {
  console.log(`${number} в течение 2-х минут код придет на данный номер `)
}

checkNumber(1234567890);

const Mouse = "3500$";
const Keyboard = "2500$";
const Monitor = "15000$";