
const answer = document.querySelectorAll(".answer")
const question = document.querySelector("#question-area p")
const questonArea = document.querySelector("#question-area")

let soal = [
    ["Siapa saya", "orang", ["orang", "hewan", "tumbuhan", "batu"]],
    ["Mengapa saya", "hidup", ["hidup", "mati", "mandi", "terbang"]],
    ["Hidup seperti", "larry", ["larry", "udang", "patrick", "nasi"]]
]

// acak urutan soal dari array yang sudah dibuat
const acakSoal = soal.sort((a, b) => 0.5 - Math.random())
let count = 0
let correctAnswer = 0
let jumlahSkor = soal.length
let dataSoal = acakSoal[count]

tampilSoal()

for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", () => {
        tampilSoal()
    })
}

function tampilSoal() {
    if(count < 3) {
        question.textContent = dataSoal[0]
        count += 1
    } else {
        for (var i = 0; i < answer.length; i++) {
            answer[i].classList.add("hide")
        }
        questonArea.classList.add("hide")

        // Menghitung Skor
        let skor = (correctAnswer/jumlahSkor) * 100
        console.log("Hasil: " +skor)
    }
}