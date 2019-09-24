class Humburger {

    // Размеры гамбургеров:
    static sizeLarge = {
        cost : 100,
        calorie : 40
    }
    static sizeSmall = {
        cost : 50,
        calorie : 20
    }
    // Виды начинок:
    static salad = {
        cost : 20,
        calorie : 5
    }
    static cheese = {
        cost : 10,
        calorie : 20
    }
    static potatoes = {
        cost : 15,
        calorie : 10
    }
    // Добавки к гамбургеру:
    static flavoring = {
        cost : 15,
        calorie : 0
    }
    static mayonnaise = {
        cost : 20,
        calorie : 5
    }
    constructor (size, stuffing){
        this.addingToppings = []
        this.price = size.cost + stuffing.cost
        this.calories = size.calorie + stuffing.calorie
    }

    addTopping (topping) {  
        this.addingToppings.push(topping);
    }

    calculateCalories () {  
        return this.addingToppings.reduce((sum, addTopping) =>{
            return sum + addTopping.calorie;
        }, this.calories)
    }

    calculatePrice () {
        return this.addingToppings.reduce((sum, addTopping) =>{
            return sum + addTopping.cost;
        }, this.price)
    }
};
//гамбургер большой с картофилем
const hamburger = new Humburger (Humburger.sizeLarge, Humburger.potatoes);
//добавка приправ
hamburger.addTopping(Humburger.flavoring);
//отображение кол-ва калорий и цена
console.log(`Кол-во калорий: ${hamburger.calculateCalories()} Цена: ${hamburger.calculatePrice()}`);
//добавление майонеза
hamburger.addTopping(Humburger.mayonnaise);
//отображение пересчитаного кол-ва калорий и цены
console.log(`Изменённое кол-во калорий: ${hamburger.calculateCalories()} Изменённая цена: ${hamburger.calculatePrice()}`);