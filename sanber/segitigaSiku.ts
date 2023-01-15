// Soal nomor 1 ; Segi tiga siku siku
const segiTigaSiku = (tinggi: number): void => {
  for (let i = 0; i < tinggi; i++) {
    let baris: string = "";
    for (let j = 0; j < i; j++) {
      if (baris.length === 0) {
        baris += "*";
      } else if (baris.slice(-1) == "*") {
        baris += "#";
      } else if (baris.slice(-1) == "#") {
        baris += "%";
      } else {
        baris += "*";
      }
    }
    console.log(baris);
  }
};

segiTigaSiku(7);
