// 1. FELADAT: ADATTÍPUSOK:

// number
const a = 15;
console.log(a);

// string
const b = 'szöveg';
console.log(b);

// boolean
const c = true;
const d = false;
console.log(c);
console.log(d);

// array
const e = [1, 2, 3, 4, 'ot', 'hat', true, false];
console.log(e);

// undefined
let f;
console.log(f);

// null
const g = null;
console.log(g);

// objetc
const h = {
  a: 1,
  b: 2,
  c: true
};
console.log(h);
console.log(h.a);
console.log(h.c);

// 2. FELADAT: Referencia szerinti értékátadásnál tömböt mósodítunk az index megadásával. Érték szerinti paraméterátadás: értéket adunk egy változónak és átadjuk.

const stringArr = ['zebra', 'zsiráf'];

const addToArray = (source) => {
  source.push('alma'); // beleteszi a tömbbe h alma
  source[0] = 'körte'; // 0. indexű elemet megváltoztatja körtére
};

addToArray(stringArr);
console.log(stringArr);

const setToN = (n) => { // Értékszerinti param.átadás
  n = 7;
  console.log('Függvényben: ', n);
};
const q = 5;
setToN(q);
console.log('Átadva: ', q);

// 3. FELADAT: Összeadás tétele:

const arr = [5, 6, 8, 15, 10];

const sumArr = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log('Sum: ', sumArr(arr));

// 4. FELADAT: Megszámlálás tétele:

const arr2 = [5, 6, 8, 15, 10, 15, 6, 7, 15];

const countElement = (element, arr) => {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      counter++;
    }
  }
  return counter;
};

console.log('15:', countElement(15, arr2));

// 5. FELADAT:

const ageOfperson = 16;

const switchfunction = (ageOfperson) => {
  switch (ageOfperson) {
    case 16:
      console.log('Csinálhatom a jogsit');
      break;
    case 19:
      console.log('Vezethetek ha van jogsim');
      break;
    case 15:
      console.log('Nem vezethetek');
      break;
  }
};

switchfunction(ageOfperson);

// 6. FELADAT: Metszet tétele:

const array1 = [5, 8, 9, 15, 17];
const array2 = [1, 6, 8, 17, 20];

const intersection = (array1, array2) => {
  const inters = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        inters.push(array1[i]);
        break;
      }
    }
  }
  return inters;
};

console.log('Intersection: ', intersection(array1, array2));

// 7. FELADAT:

const osszeadas = (a, b) => {
  return a + b;
};

const kivonas = (a, b) => {
  return a - b;
};

const szorzas = (a, b) => {
  return a * b;
};

const osztas = (a, b) => {
  return a / b;
};

console.log('Összeadás: ', osszeadas(10, 15));
console.log('Kivonás: ', kivonas(20, 12));
console.log('Szorzás: ', szorzas(5, 4));
console.log('Osztás: ', osztas(10, 2));

module.export = {
  osszeadas: osszeadas,
  kivonas: kivonas,
  szorzas: szorzas,
  osztas: osztas
};

// 8. FELADAT:

const arr2D = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill2D = (source) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      source[i][j] = Math.pow(2, 2);
    }
  }
};

const print2D = (source) => {
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < source[i].length; j++) {
      process.stdout.write(source[i][j] + ' ');
    }
    console.log();
  }
};
const map = arr2D(2, 3);
console.log('2D tömb: ', map);
fill2D(map);
print2D(map);
