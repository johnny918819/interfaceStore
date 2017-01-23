var fruit = (function () {
    function fruit(name, price, color) {
        this.name = name;
        this.price = price;
        this.color = color;
    }
    return fruit;
}());
var phone = (function () {
    function phone(name, price, loudness) {
        this.name = name;
        this.price = price;
        this.loudness = loudness;
    }
    return phone;
}());
var apple = new fruit("Apple", 1.29, "Red");
var banana = new fruit("Banana", 1.49, "Yellow");
var orange = new fruit("Orange", 0.89, "Orange colored");
var pixel = new phone("Google Pixel", 700, "Very loud");
var iPhone = new phone("Apple iPhone 7", 860, "Super loud");
var inventory = [apple, banana, orange, pixel, iPhone];
//
function showInventory(inventoryArray) {
    for (var i = 0; i < inventoryArray.length; i++) {
        console.log("The product named " + inventoryArray[i].name + " costs " + inventoryArray[i].price);
    }
}
showInventory(inventory);
