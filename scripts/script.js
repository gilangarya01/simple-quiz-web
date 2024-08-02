import soal from "./answer.js";
// DOM
const answer = document.querySelectorAll(".answer");
const question = document.querySelector("#question-area p");
const score = document.querySelector("#score-area h3 span");
const scoreArea = document.querySelector("#score-area");
const quizArea = document.querySelector("#quiz-area");

// acak urutan soal dari array yang sudah dibuat
const acakSoal = soal.sort(() => 0.5 - Math.random());

// Variable
let count = 0;
let correctAnswer = 0;
let jumlahSkor = soal.length;
let dataSoal;

// Menampilkan soal saat & jawaban saat pertama kali dibuka
tampilSoal();
tampilJawaban();

for (var i = 0; i < answer.length; i++) {
  answer[i].addEventListener("click", (item) => {
    count += 1;

    // Mengecek apakah soal yang dipilih benar
    if (dataSoal["correct"] == item.target.textContent) {
      correctAnswer += 1;
    }

    // Menampilkan soal baru dan
    // cek apakah semua soal sudah dijawab
    if (count < soal.length) {
      tampilSoal();
      tampilJawaban();
    } else {
      hasilSkor();
    }
  });
}

// Fungsi untuk menampilkan soal
function tampilSoal() {
  dataSoal = acakSoal[count];
  question.textContent = dataSoal["question"];
}

// Fungsi untuk menampilkan jawaban
function tampilJawaban() {
  let pilihanGanda = dataSoal["choice"].sort(() => 0.5 - Math.random());
  for (var i = 0; i < answer.length; i++) {
    answer[i].textContent = pilihanGanda[i];
  }
}

// Fungsi untuk menghitung skor,
// menyembunyikan area quiz dan menampilkan hasil skor
function hasilSkor() {
  quizArea.classList.toggle("hide");
  scoreArea.classList.toggle("hide");

  // Menghitung Skor
  let skor = (correctAnswer / jumlahSkor) * 100;
  score.textContent = Math.round(skor);
}
