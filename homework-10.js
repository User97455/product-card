import {productCards} from "./cards.js";
//  quest 4 Используя метод .reduce(), получить массив объектов, 
//  где ключем является название продукта, а значением - его описание

const productsDescriptions = productCards.reduce((products,productCard) =>{
  const element = {
    [productCard.productName]: productCard.forWhat
  }
  products.push(element)
  return products;
}, []);

console.log(productsDescriptions)


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
  const elementsNodes = 
  cardClone.querySelectorAll('.product-card__elements');
  elementsNodes.forEach((node,index) =>{
    if (product.elements[index]) {
      node.textContent = product.elements[index];
    }
  });
  cardClone.querySelector('.product-card__number').textContent = product.priceNumber;
  cardsList.appendChild(cardClone)
  console.log(cardsList);
})


const showCards = (productsToShow) =>{
  const cardsList = document.getElementById('cards-list');
  cardsList.innerHTML ='';
  productsToShow.forEach(product =>{
  const cardClone = cardsTemplate.content.cloneNode(true);
  cardClone.querySelector('.product-card__image').src = product.image;
  cardClone.querySelector('.product-card__under-name').textContent = product.underName;
  cardClone.querySelector('.product-card__product-name').textContent = product.productName;
  cardClone.querySelector('.product-card__for-what').textContent = product.forWhat;
  const elementsNodes = 
  cardClone.querySelectorAll('.product-card__elements');
  elementsNodes.forEach((node,index) =>{
    if (product.elements[index]) {
      node.textContent = product.elements[index];
    }
  });
  cardClone.querySelector('.product-card__number').textContent = product.priceNumber;
  cardsList.appendChild(cardClone)
  console.log(cardsList);
});
}
const amount = getCardsAmount();

if (amount) {
  const productsToRender = productCards.slice(0,amount);
  showCards(productsToRender);
}


