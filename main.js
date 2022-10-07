const flowers = [
  {
    id: 1,
    type: "Rose",
    colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
    price: 2.59,
    usdaZones: [3, 4, 5, 6, 7, 8, 9, 10],
  },
  {
    id: 2,
    type: "Tulip",
    colors: ["Orange", "White", "Yellow", "Violet", "Red"],
    price: 1.04,
    usdaZones: [5, 6, 7, 8, 9],
  },
  {
    id: 3,
    type: "Daisy",
    colors: ["Gold", "White", "Orange", "Crimson"],
    price: 0.89,
    usdaZones: [3, 4, 5, 6, 7, 8],
  },
  {
    id: 4,
    type: "Carnation",
    colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
    price: 1.59,
    usdaZones: [5, 6, 7, 8, 9],
  },
  {
    id: 5,
    type: "Bird of Paradise",
    colors: ["Orange", "White"],
    price: 2.33,
    usdaZones: [9, 10, 11],
  },
  {
    id: 6,
    type: "Delphinium",
    colors: ["Blue", "Violet", "White", "Pink"],
    price: 1.67,
    usdaZones: [3, 4, 5, 6, 7],
  },
  {
    id: 7,
    type: "Gladiolus",
    colors: [
      "White",
      "Cream",
      "Yellow",
      "Red",
      "Pink",
      "Green",
      "Lavender",
      "Voilet",
    ],
    price: 1.85,
    usdaZones: [6, 7, 8, 9, 10],
  },
  {
    id: 8,
    type: "Lilly",
    colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
    price: 1.52,
    usdaZones: [3, 4, 5, 6, 7, 8, 9],
  },
  {
    id: 9,
    type: "Chinese Lantern",
    colors: ["Orange"],
    price: 2.33,
    usdaZones: [3, 4, 5, 6, 7, 8, 9],
  },
];

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/

/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/
const inexpensiveFlowers = () => {
  const filteredFlowers = []; // Do not modify
  for (const flower of flowers) {
    if (flower.price < 2.0) {
      filteredFlowers.push(flower);
    }
  }

  // I need to iterate through the the array of objects(flowers) using a for of loop. I need the loop to have a conditional if statement that if the key value pair for price is less than 2.00 then I need to push the of flower to the variable filteredFlowers

  return filteredFlowers; // Do not modify
};

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/
const zoneFlowers = () => {
  const filteredFlowers = []; // Do not modify
  for (const flower of flowers) {
    if (flower.usdaZones.includes(3) && flower.usdaZones.includes(8)) {
      filteredFlowers.push(flower);
    }
  }

  // I need to iterate through the array of objects(flowers) using a for of loop. I need the loop to have a conditional if statement that if the key value pair array for USDA zones has a 3 or 8. I need to push that flower to the variable filteredFlowers.

  return filteredFlowers; // Do not modify
};

/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
  const filteredFlowers = []; // Do not modify
  for (const flower of flowers) {
    if (flower.colors.includes("Orange")) {
      filteredFlowers.push(flower);
    }
  }

  // I need to iterate through the array of objects(flowers) using a for of loop. I need the loop to have a conditional if statement that if the key value pair for the color array is Orange. Then I need to push that flower to the variable filteredFlowers.

  return filteredFlowers; // Do not modify
};

/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/
const flowersAsHTML = () => {
  let flowersHTMLString = ""; // Do not modify
  for (const flower of flowers) {
    flowersHTMLString += `<article>${flower.type}</article> \n`;
    for (const color of flower.colors) {
      flowersHTMLString += `<section>${color}</section> \n`;
    }
    for (const usdaZones of flower.usdaZones) {
      flowersHTMLString += `<div>${usdaZones}</div> \n`;
    }
  }

  //   for (const flower of flowers) {
  //     for (const color of flower.colors)
  //       flowersHTMLString += `<section>${color}</section>`;
  //   }
  for (const flower of flowers) {
    for (usdaZones of flower.usdaZones)
      flowersHTMLString += `<div>${usdaZones}</div>`;
  }

  /*
        1. I need a for of loop to iterate throught the array of objects (flowers)
            2. I need to capture the flower ("string") and put that in the HTML format: <article>(flower Type)</article>
            3. I need to loop through flowers's color (array) and put that in the HTML format: <section>(flower color)</section>
            4. I need to loop through the USDA zones (array) and put that in the HTML format: <div>USDA zones</div>
    */

  return flowersHTMLString; // Do not modify
};
console.log(flowersAsHTML());
/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers;
module.exports = {
  inexpensiveFlowers,
  orangeFlowers,
  zoneFlowers,
  flowersAsHTML,
};
/*  DO NOT TOUCH THIS CODE  */
