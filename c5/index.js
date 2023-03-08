const fs = require("fs");

const fileRead = (filename) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });
};

(async () => {
  try {
    let datastring = await fileRead("studenti.json");
    let studenti = JSON.parse(datastring);

    console.log(studenti);

    let prosek = [
      ...studenti.sort((a, b) => {
        if (a.prosek > b.prosek) {
          return -1;
        } else if (a.prosek < b.prosek) {
          return 1;
        }
        return 0;
      }),
    ];

    let sortIme = [
      ...studenti.sort((a, b) => {
        if (a.ime.charAt(0) > b.ime.charAt(0)) {
          return 1;
        } else if (a.ime.charAt(0) < b.ime.charAt(0)) {
          return -1;
        }
      }),
    ];

    console.log(prosek);
    console.log(sortIme);

    let najnizokProsek = prosek[prosek.length - 1];
    let najvisokiotProsek = prosek[0];

    //iteracija 1, accum = 0 + current.prosek 8.9
    // iterecija 2 accum = 8.9 + 9.5 ...
    let vkupenProsek = studenti.reduce((prev, cur) => {
      return cur.prosek + prev;
    }, 0);

    let sredenProsek = vkupenProsek / studenti.length;
    console.log(sredenProsek);

    let cities = {}; //{"Los Angeles": 8.2,"New York":5.7}

    for (let s of studenti) {
      if (!cities[s.grad]) {
        cities[s.grad] = s.prosek;
      }

      cities[s.grad] = (cities[s.grad] + s.prosek) / 2;
    }
  } catch (err) {
    console.log(err);
  }
})();
