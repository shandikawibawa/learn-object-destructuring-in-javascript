// in boject destructuring order doesn't matter but the name does matter
const student = {name: "Shandika", position: "First", rollNo: 27}
const {name, position, rollNo} = student;
console.log(name);
console.log(position);
console.log(rollNo);


const siswa = {nama: "Shandika", umur: "18", negara: "indonesia"}
const {nama, umur, negara} = siswa;
console.log(nama);
console.log(umur);
console.log(negara);

const num = {x: 100, y:200};
const {x: new1, y: new2} = num;

console.log(new1);
console.log(new2);

// object destructuring and rest operator
let {a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500};
// console.log(a);
// console.log(b);
console.log(rest);

const orang = {namaewa: "ryan", age: "18", kelamin: "laki-laki", country: "indonesia"}
const {namaewa: personName, age: personAge, kelamin: personGender, country: personCountry} = orang
console.log(personName)
console.log(personAge)
console.log(personGender)
console.log(personCountry)

// function destructuring
const manusia = {
    namaKau: "diwa",
    umurKau: 18,
    negaraKau: "indonesian",
}

function printPersonInfo({namaKau, umurKau, negaraKau}) {
    console.log(`Name: ${namaKau}`)
    console.log(`age: ${umurKau}`)
    console.log(`country: ${negaraKau}`)
}

printPersonInfo(manusia)

//==============================================//

let options = {
    title: "My menu",
    items: ['item1', 'item2']
}

function showMenu({
    title, 
    width: w = 100, 
    height: h = 200, 
    items: [item1, item2],
}) {
    console.log(`${title} ${w} ${h}`)
    console.log(item1)
    console.log(item2)
}

showMenu(options);