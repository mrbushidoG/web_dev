// function makeBurgerCurried(bun){
//     return function(patty) {
//         return function(toppoing) {
//             return `Your burger has: ${bun} bun, ${patty} patty, with ${toppoing} toppings`;
//         };
//     };
// }

const makeMyBurger = (bun)=>(patty)=>(topping) =>
    `Your Burger has: ${bun} bun, ${patty} patty, and ${topping} topping`;

const showMeMyOrder = makeMyBurger("Sesame")("Mix Veg")("Cheese");
console.log(showMeMyOrder);

