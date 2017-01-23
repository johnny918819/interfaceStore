interface IProduct {
    name: string;
    price: number;
    loudness?: string;
    color?: string;
}
class fruit implements IProduct {
    constructor(public name: string, public price: number, public color: string) {}
}
class phone implements IProduct {
    constructor(public name: string, public price: number, public loudness: string) {}
}

let apple = new fruit(`Apple`, 1.29, `Red`); 
let banana = new fruit(`Banana`, 1.49, `Yellow`); 
let orange = new fruit(`Orange`, 0.89, `Orange colored`); 

let pixel = new phone(`Google Pixel`, 700, `Very loud`); 
let iPhone = new phone(`Apple iPhone 7`, 860, `Super loud`); 

let inventory: IProduct[] = [apple, banana, orange, pixel, iPhone];
//

function showInventory(inventoryArray: IProduct[]) {
    for (let i = 0; i < inventoryArray.length; i++) {
        console.log(`The product named ${inventoryArray[i].name} costs ${inventoryArray[i].price}`);
    }
}
showInventory(inventory);
