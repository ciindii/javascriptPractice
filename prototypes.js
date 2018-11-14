class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getSummary() {
    return ` ${this.year} ${this.make} ${this.model}`;
  }
}

class ForSale extends Car {
  constructor(make, model, year, sale) {
    super(make, model, year);
    this.sale = sale;
  }
}

class salePrice extends Car {
  constructor(make, model, year, sale, price) {
    super(make, model, year);
    this.price = price;
  }
}

const forSale1 = new ForSale('Honda', 'Civic', '1994', 'for Sale');

const forSale2 = new ForSale('Toyota', '4Runner', '2018', 'Not For Sale');

const forSale3 = new ForSale('Subaru', 'Sti', '2018', 'For Sale', '$30,000');

console.log(forSale1);
console.log(forSale2);
console.log(forSale1.getSummary());
console.log(forSale2.getSummary());
console.log(forSale3);
