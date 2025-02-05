// 3dienio uždaviniai: // Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono
// pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?

function sezonas(menesis) {
  // arba vietoj šito naudočiau menesis.isInteger(), kad veiktų tik su sveikais skaičiais.
  if (typeof menesis !== "number" || isNaN(menesis) || 1 > menesis >= 13) {
    return "Neteisinga įvestis: naudokite skaičių nuo 1 iki 12";
  }
  if (menesis >= 12 || menesis < 3) return "Žiema";
  return menesis < 6 ? "Pavasaris" : menesis < 9 ? "vasara" : "Ruduo";
}

console.log("\n" + sezonas(3) + "\n\n ********");

// Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.
// Kuris operatorius naudoti?

function lyguNelygu(a, b) {
  return a === b ? a + " yra lygu " + b : a + " nėra lygu " + b;
}

console.log("\n" + lyguNelygu(3, 3) + "\n\n ********");

// Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, priebalsė ar nėra raidė.
// Koks operatorius geriausiai tinka?

function koksChar(char) {
  if (char.length > 1 || typeof char !== "string")
    return "Įveskite tik vieną simbolį(string type)";
  char = char.toLocaleLowerCase();
  if ("aąeęėiįyouųū".includes(char)) return char + " yra balsė";
  else if ("bcčdfghjklmnprsštvzžxw".includes(char)) {
    return char + " yra priebalsė";
  }
  return char + " nėra raidė";
}

console.log("\n" + koksChar("s") + "\n\n ********");

// Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) išveda,
// ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?

function arDarboD(diena) {
  if (typeof diena !== "string") {
    return "Neteisigna įvestis: įrašykite savaitės dieną, pvz: Antradienis";
  }
  diena = diena.toLocaleLowerCase();
  switch (diena) {
    case "pirmadienis":
      return "Darbo diena";
    case "antradienis":
      return "Darbo diena";
    case "trečiadienis":
      return "Darbo diena";
    case "ketvirtadienis":
      return "Darbo diena";
    case "penktadienis":
      return "Darbo diena";
    case "šeštadienis":
      return "Savaitgalis";
    case "sekmadienis":
      return "Savaitgalis";
    default:
      return "Neteisigna įvestis: įrašykite savaitės dieną, pvz: Antradienis";
  }
}

console.log("\n" + arDarboD("šešTADIEnis") + "\n\n ********");

// Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: "Šalta"(< 10°C),
// "Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?

function oroBukle(temp) {
  if (typeof temp !== "number" || isNaN(temp)) {
    return "Įveskite temperatūros reikšmę laipsniais(number type)";
  }

  return temp < 10 ? "Šalta" : temp < 25 ? "Šilta" : "Karšta";
}

console.log("\n" + oroBukle(15) + "\n\n ********");

// Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5.
// Kurį operatorių naudoti?

// Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") išveda atitinkamą
// veiklą: "Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?

// Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?

function kelemieji(metai) {
  if (typeof metai !== "number" || isNaN(metai))
    return "Įveskite metus(number)";
  return metai % 4 === 0 ? metai + " yra kelemieji" : metai + " nekelemieji";
}
console.log("\n" + kelemieji(4) + "\n\n ********");

// Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją:
//  "Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?
