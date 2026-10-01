import { commentsFromYoutube } from "./comments.js";
// 2 quest

const arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newArrayNumbers = arrayNumbers.slice(4, 10);

console.log(newArrayNumbers);

// 3 quest

const cars = [
  {
    brand: 'toyota', model: 'camry',
  },
  {
    brand: 'tank', model: '300',
  },
  {
    brand: 'changan', model: 'uni-z',
  },
  {
    brand:'lexus', model : 'lx 570',
  },
  {
    brand:'mercedes', model : 'g63',
  },
]

const checkCar = cars.find(car => car.mercedes === "g63");

console.log(checkCar);

// 4 quest

arrayNumbers.reverse();
console.log(arrayNumbers);

cars.reverse();
console.log(cars);

// 7 quest

const comEmails = commentsFromYoutube.filter(commentEmail => commentEmail.email.includes('.com'));

console.log(comEmails);

// 8 quest 

commentsFromYoutube.forEach(post =>{
  post.postId = post.postId <= 5 ? 2 : 1;
})

console.log(commentsFromYoutube);


// 9 quest

const onlyNameId = commentsFromYoutube.map (object => {
  return{
    id: object.id,
    name: object.name
  };
});

console.log(onlyNameId);


// 10 quest

const workingComments = commentsFromYoutube.map (comment =>{
  comment.isInvalid = comment.body.length > 180;
  return comment
});

console.log(workingComments);

//11 quest 

const usersEmails = commentsFromYoutube.reduce((packEmails, user) =>{
  packEmails.push(user.email);
  return packEmails;
}, []);

console.log(usersEmails);

// 12 quest

console.log(usersEmails.toString());
console.log(usersEmails.join(","));