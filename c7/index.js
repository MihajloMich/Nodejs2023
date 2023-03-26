// let operacija = "minus";

// if (operacija == "minus") {
//   console.log("odzemanje");
// } else if (operacija == "plus") {
//   console.log("dodavanje");
// } else if ("mnozenje") {
//   console.log("mnozenje");
// } else if (operacija == delenje) {
//   console.log("delenje");
// }

// // let text = "Zdravo jas sum MIhajlo i ova e 7mi cas";
// // let zbor = "zdravo";

// // let rezultat = text.toLowerCase().search("zdravo"); // rezultat = 0;
// // if (rezultat === false) {
// //   console.log("zborot ne e najden vo tekstot");
// // } else {
// //   console.log("pozicijata na koja se naogja zborot vo stringot e" + rezultat);
// // }

// switch (operacija) {
//   case "plus":
//     console.log("dodavanje");
//     break;
//   case "minus":
//     console.log("odzemanje");
//     break;
//   case "mnozenje":
//     console.log("mnozenje");
//     break;
//   case "delenje":
//     console.log("delenje");
//     break;
// }

// let result = {
//   plus: () => {
//     console.log("dodavanje");
//   },
//   minus: () => {
//     console.log("odzemanje");
//   },
//   mnozenje: () => {
//     console.log("mnozenje");
//   },
//   delenje: () => {
//     console.log("delenje");
//   },
// };

// result[operacija]();

// const student = {
//   ime: "Pero",
//   prezime: "Perovski",
//   "horoskopski znak": "vodolija",
//   apsolvent: false,
//   godina_na_studii: 10,
//   akcija: () => {
//     console.log("Kaj si Pero be");
//     return "PEROOOOOOOO!!!";
//   },
// };

// console.log(student.ime, student["ime"]);

// let prop = "prezime";
// console.log(student[prop], student.prop);

// console.log(student["horoskopski znak"]);
// console.log(student.apsolvent);
// console.log(student.godina_na_studii);
// console.log(student.akcija());

const fs = require("fs");

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) return fail(err);
      return success(data);
    });
  });
};

const render = async (page, data) => {
  let content = await fileRead(`./${page}.html`);
  return content.replace("{{res}}", data);
};

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("test server");
  console.log(req.url);
});

server.listen(8080);
console.log("Server started...");
