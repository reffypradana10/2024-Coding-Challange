// Function untuk memeriksa ada Huruf Besar/Kecil/Angka

const CekHuruf = (str) => {
  let cekBesar = /[A-Z]/g.test(str);
  let cekKecil = /[a-z]/g.test(str);
  let cekAngka = /\d/g.test(str);
  let cekKarak = /.*/g.test(str);

  return cekBesar && cekKecil && cekAngka && cekKarak
    ? "Ini Merupakan Huruf Besar dan Kecil dan ada angka dan ada karakter special"
    : cekBesar
    ? "Ini Merupakan Huruf Besar"
    : cekKecil
    ? "Ini Merupakan Huruf Kecil"
    : cekAngka
    ? "ada angka"
    : cekKarak
    ? "ada karakter special"
    : cekBesar && cekKecil && cekAngka
    ? "Ini Merupakan Huruf Besar dan Kecil dan ada angka"
    : cekBesar && cekKecil && cekKarak
    ? "Ini Merupakan Huruf Besar dan Kecil dan ada karakter special"
    : cekBesar && cekKecil
    ? "Ini Merupakan Huruf Besar dan Kecil"
    : cekBesar && cekKecil
    ? "Ini Merupakan Huruf Besar dan Kecil"
    : cekBesar && cekAngka && cekKarak
    ? "Ini Merupakan Huruf Besar dan ada Angka dan ada karakter special"
    : cekBesar && cekAngka
    ? "Ini Merupakan Huruf Besar dan ada Angka"
    : cekBesar && cekKarak
    ? "Ini Merupakan Huruf Besar dan ada Angka dan karakter special"
    : cekKecil && cekAngka && cekKarak
    ? "Ini Merupakan Huruf Kecil dan ada Angka dan ada karakter special"
    : cekKecil && cekAngka
    ? "Ini Merupakan Huruf Kecil dan ada Angka"
    : cekKecil && cekKarak
    ? "Ini Merupakan Huruf Kecil dan ada Angka dan karakter special"
    : cekAngka && cekKarak
    ? "Merupakan Angka dan KarakterSpeciall"
    : "mboh";
};

console.log(CekHuruf("a@"));
