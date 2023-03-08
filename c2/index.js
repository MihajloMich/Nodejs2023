// console.log("zdravo svetu");
// console.log(5 != 5);
// console.log(typeof 25);

// const chovek = {
//   name: "John",
//   surname: "Doe",
// };

// console.log(chovek);
// a = 10;
// console.log(a);
// a = 12;
// console.log(a);
// const b = 15;
// console.log(b);
// b = 30s
//console.log(b);

//let niza = [1, true, 2.5, "zdravo"];
//console.log(niza);

function testFn() {
  return "Test fn initiated";
}

let test_fn = testFn();
console.log(testFn());
//testFn();

const testFn1 = () => {
  console.log("test fn1 initiated,this is arrow functionl");
};

testFn1();

const testFn2 = (b, a = 25) => {
  return a + b;
};

console.log(testFn2(50, 20));

const testFn3 = (o = {}) => {
  o.ime = "Zhivko";
  console.log(o);
};

const s = { ime: "Zlate", prezime: "Zlatevski" };
testFn3(s);
console.log(s);

let ucenik = { ime: "Marko", ocena: 4 };
let ucenik2 = ucenik;

console.log(ucenik);
ucenik2.ime = "Vlado";
console.log(ucenik);
console.log(ucenik2);

const convert = (type, value) => {
  switch (type) {
    case "c2f":
      return (value * 9) / 5 + 32;
    case "f2c":
      return ((value - 32) * 5) / 9;
  }
};

// c2f vrednost * 9/5 + 32
// f2c (vrednsot - 32) * 5/9

// definirajte 2 objekti na ucenici
//da imaat ime prezime i ocenka
//dokolku prviot ucenik ima pogolema ocena od vtoriot pecatete ime na prv ucenik
// pa potoa prezime na prv ucenik e podobar od vtoriot uce nik
//dokolku e obratno ispecatete go obratnoto
//dokolku se isti ispecatete ucenik 1 ima isto znaenje kako i ucenik 2
