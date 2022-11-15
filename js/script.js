let txtNik = document.getElementById("nik");
let txtNama = document.getElementById("nama");
let txtAlamat = document.getElementById("alamat");
let tblPenduduk = document.getElementById("tblPenduduk");
let dataPenduduk = [];
show();

// tblP = table penduduk
const Sbutton = document.getElementById("submit");
Sbutton.addEventListener("click", function () {
  console.log("berhasil ditekan");
  // Jika data penduduk kosong
  if (localStorage.getItem("tblP") === null) {
    dataPenduduk.push({
      nik: txtNik.value,
      nama: txtNama.value,
      alamat: txtAlamat.value,
    });
    localStorage.setItem("tblP", JSON.stringify(dataPenduduk));
  }
  //   Jika data penduduk ada
  else {
    // Mengambil data tblPenduduk dengan id tblP
    const dataLs = JSON.parse(localStorage.getItem("tblP"));
    dataLs.push({ nik: txtNik.value, nama: txtNama.value, alamat: txtAlamat.value });
    localStorage.setItem("tblP", JSON.stringify(dataLs));
  }
  show();

  // Pop up Success
  const berhasil = document.querySelector("#berhasil");
  const visible = () => {
    berhasil.classList.remove("hidden");
    berhasil.classList.add("visible");
    setTimeout(() => {
      berhasil.classList.add("hidden");
      berhasil.classList.remove("visible");
    }, 2000);
  };

  visible();
});

function show() {
  // Menghapus sebuah elemen
  tblPenduduk.innerHTML = "";
  const dataTampil = JSON.parse(localStorage.getItem("tblP"));
  if (dataTampil === null) {
    console.log("no tasks");
  } else {
    dataTampil.forEach(listPenduduk);
  }
}

function listPenduduk(item, index) {
  // innerHTML elemen yang digunakan di tblPenduduk
  tblPenduduk.innerHTML += `<tr><td>${item.nik}</td><td>${item.nama}</td><td>${item.alamat}</td><tr>`;
}
