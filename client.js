class Order {
    constructor(pizzas = []){
        this.pizzas = pizzas;
    }
    addPizzas(){ 
        let largeCount = 0;
        let totalPrice = 0;
        let mediumCount = 0;
        for (let i = 0; i < this.pizzas.length; i++) {
            totalPrice += (this.pizzas[i].ingredients.length - 1) * 0.99 + this.pizzas[i].basePrice;
            if(this.pizzas[i].size == 'large'){
                largeCount++;
            } else if(this.pizzas[i].size == 'medium'){
                mediumCount++;
            }
        }
        if(largeCount >= 2 && mediumCount > 0){
            
        }
        return totalPrice;
    }
}

class Pizza {
    constructor(ingredients = ['cheese']){
        this.ingredients = ingredients;
        this.basePrice = 10.00;
    }
}

class SmallPizza extends Pizza{
    constructor(ingredients){
        super(ingredients);
        this.basePrice = 8.99;
        this.size = 'small';
    }
}

class MediumPizza extends Pizza{
    constructor(ingredients){
        super(ingredients);
        this.basePrice = 10.99;
        this.size = 'medium';
    }
}

class LargePizza extends Pizza{
    constructor(ingredients){
        super(ingredients);
        this.basePrice = 12.99;
        this.size = 'large';
    }
}

let pepperoniPizza = new SmallPizza(['cheese', 'pepperoni']);
let hawaiianPizza = new LargePizza(['cheese', 'canadian bacon', 'pineapple']);
let newOrder = new Order([pepperoniPizza, hawaiianPizza]);
console.log(pepperoniPizza);
