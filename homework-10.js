import {productCards} from "./cards.js";
//  quest 4 Используя метод .reduce(), получить массив объектов, 
//  где ключем является название продукта, а значением - его описание

const productDescription = productCards.reduce((cardsName,compound) =>{
  cardsName[compound.productName] = compound.forWhat;
  return cardsName;
}, {});

console.log(productDescription)

// quest 5*. Реализовать функцию, которая при старте страницы выводит
//  сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" 
//  и в зависимости от результата - будет выводить введенное количество.
//   Должна быть защита от ввода других значений (проверка if). 
//   То-есть: у нас будет 2 функции, одна возвращает количество карточек,
//    которое нужно ввести,
//   другая - рендерить эти карточки (принимая массив аргументом)


const showCards = () =>{
   const inputUser = prompt("Сколько карточек отобразить? От 1 до 5" )
    const inputNumber = Number(inputUser)
    if (Number.isNaN(inputNumber)){
      console.log('некорректный ввод,введите число')
    }
      
    else if (inputNumber <= 0)
      console.log('некорректный ввод,повторите снова')
    else if (inputNumber >= 6)
      console.log('некорректный ввод,попробуйте снова')
    else {
      return inputNumber
}}

showCards()

const workCards = (productCards) =>{
  const countUser = showCards()
    console.log(productCards.slice(0,countUser)) 

}
workCards(productCards)
