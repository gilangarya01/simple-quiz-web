
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
let dataSoal

tampilSoal()
tampilJawaban()

for (var i = 0; i < answer.length; i++) {
    answer[i].addEventListener("click", (item) => {
        count += 1

        if(dataSoal[1] == item.target.textContent) {
            correctAnswer += 1
        }

        tampilSoal()
        tampilJawaban()
    })
}

function tampilSoal() {
    dataSoal = acakSoal[count]
    if(count < 3) {
        question.textContent = dataSoal[0]
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

function tampilJawaban() {
    
    if(count < 3) {
        let correct = dataSoal[1]
        let pilihanGanda = dataSoal[2].sort((a, b) => 0.5 - Math.random())
        for (var i = 0; i < answer.length; i++) {
            answer[i].textContent = pilihanGanda[i]
        }
    }
}