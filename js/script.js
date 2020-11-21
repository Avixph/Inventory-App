class LuluBoutique {
  constructor(price) {
    this.price = price;
    this.item = [];
  }

  Inventory(items = null) {
    const itemName = items;
    const price = this.price;
    const itemAmount = this.itemAmount;
    if (items !== null) {
      this.item.push({ items: items, price: price, itemAmount: itemAmount });
    }
  }
}

class Clothes extends LuluBoutique {
  constructor(price, itemAmount) {
    super(price);
    this.itemAmount = itemAmount;
  }
}

class Snacks extends LuluBoutique {
  constructor(price, itemAmount) {
    super(price);
    this.itemAmount = itemAmount;
  }
}

const fallSweaters = new Clothes();
fallSweaters.price = 18.29;
fallSweaters.itemAmount = 42;
fallSweaters.item;
fallSweaters.Inventory("sweaters");

console.log(fallSweaters);

const artisanSnacks = new Snacks();
artisanSnacks.price = 4.49;
artisanSnacks.itemAmount = 62;
artisanSnacks.item;
artisanSnacks.Inventory("artisanSnacks");

console.log(artisanSnacks);
