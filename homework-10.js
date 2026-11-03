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


const getCardsAmount = () =>{
  const inputUser = prompt("Сколько карточек отобразить? От 1 до 5" )
  const inputNumber = Number(inputUser)
  if (Number.isNaN(inputNumber) || inputNumber <= 0 || inputNumber >= 6){
    alert('некорректный ввод,введите число')
    return getCardsAmount()
  }
  return inputNumber
};


const cardsTemplate = document.getElementById('cards-template');
const cardsList = document.getElementById('cards-list');

productCards.forEach(product =>{
  const cardClone = cardsTemplate.content.cloneNode(true);
  cardClone.querySelector('.product-card__image').src = product.image;
  cardClone.querySelector('.product-card__under-name').textContent = product.underName;
  cardClone.querySelector('.product-card__product-name').textContent = product.productName;
  cardClone.querySelector('.product-card__for-what').textContent = product.forWhat;
  cardClone.querySelector('.product-card__compound').textContent = product.compound
  const elementsNodes = 
  cardClone.querySelectorAll('.product-card__elements');
  elementsNodes.forEach((node,index) =>{
    if (product.elements[index]) {
      node.textContent = product.elements[index];
    }
  });
  cardClone.querySelector('.product-card__price').textContent = product.price;
  cardClone.querySelector('.product-card__number').textContent = product.priceNumber;
  cardClone.querySelector('.buy-button__icon').textContent = product.buttonIcon;
  cardClone.querySelector('.buy-button__text').textContent = product.buttonText;
  cardsList.appendChild(cardClone)
  console.log(cardsList);
})


const showCards = (productsToShow) =>{
  const cardsList = document.getElementById('cards-list')
  cardsList.innerHTML ='';
  productsToShow.forEach(product =>{
  const cardClone = cardsTemplate.content.cloneNode(true);
  cardClone.querySelector('.product-card__image').src = product.image;
  cardClone.querySelector('.product-card__under-name').textContent = product.underName;
  cardClone.querySelector('.product-card__product-name').textContent = product.productName;
  cardClone.querySelector('.product-card__for-what').textContent = product.forWhat;
  cardClone.querySelector('.product-card__compound').textContent = product.compound
  const elementsNodes = 
  cardClone.querySelectorAll('.product-card__elements');
  elementsNodes.forEach((node,index) =>{
    if (product.elements[index]) {
      node.textContent = product.elements[index];
    }
  });
  cardClone.querySelector('.product-card__price').textContent = product.price;
  cardClone.querySelector('.product-card__number').textContent = product.priceNumber;
  cardClone.querySelector('.buy-button__icon').textContent = product.buttonIcon;
  cardClone.querySelector('.buy-button__text').textContent = product.buttonText;
  cardsList.appendChild(cardClone)
  console.log(cardsList);
});
}
const amount = getCardsAmount();

if (amount) {
  const productsToRender = productCards.slice(0,amount);
  showCards(productsToRender);
}


