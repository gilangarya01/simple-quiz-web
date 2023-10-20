
const answer = document.querySelectorAll(".answer")
const question = document.querySelector("#question-area p")
const questionArea = document.querySelector("#question-area")
const score = document.querySelector("#score-area h3 span")
const scoreArea = document.querySelector("#score-area")
const quizArea = document.querySelector("#quiz-area")

let soal = [
    ["Siapakah tokoh sejarah yang merupakan penemu alat listrik, terkenal dengan eksperimen layang-layang, dan menulis 'Kunci Elektrik'?", "Benjamin Franklin", ["Albert Einstein", "Thomas Edison", "Nikola Tesla", "Benjamin Franklin"]],
    ["Apa yang menjadi penyebab utama terjadinya gerhana matahari?", "Bulan berada di antara Bumi dan Matahari", ["Bumi berada di antara Matahari dan Bulan", "Bulan berada di antara Bumi dan Matahari", "Matahari berada di antara Bumi dan Bulan", "Bumi berada di depan Matahari"]],
    ["Manakah dari berikut ini yang bukan merupakan benua?", "Madagaskar", ["Amerika", "Australia", "Madagaskar", "Antartika"]],
    ["Berapakah hasil dari 3 x 7?", "21", ["14", "21", "28", "35"]],
    ["Apa nama ibu kota Jepang?", "Tokyo", ["Seoul", "Bangkok", "Beijing", "Tokyo"]],
    ["Siapakah pelukis terkenal yang menciptakan lukisan Mona Lisa?", "Leonardo da Vinci", ["Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Michelangelo"]],
    ["Dalam olahraga sepak bola, berapa jumlah pemain di setiap tim pada saat pertandingan dimulai?", "11", ["8", "9", "10", "11"]],
    ["Apa gas yang paling melimpah di atmosfer Bumi?", "Nitrogen", ["Oksigen", "Hidrogen", "Karbon dioksida", "Nitrogen"]],
    ["Siapakah presiden Amerika Serikat pertama?", "George Washington", ["Abraham Lincoln", "George Washington", "Thomas Jefferson", "John F. Kennedy"]],
    ["Siapakah penulis terkenal yang mengarang novel 'Matahari Juga Bangkit'?", "Ernest Hemingway", ["Jane Austen", "Charles Dickens", "F. Scott Fitzgerald", "Ernest Hemingway"]]
]

// acak urutan soal dari array yang sudah dibuat
const acakSoal = soal.sort(() => 0.5 - Math.random())
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
    if(count < soal.length) {
        question.textContent = dataSoal[0]
    } else {
        quizArea.classList.toggle("hide")
        scoreArea.classList.toggle("hide")

        // Menghitung Skor
        let skor = (correctAnswer/jumlahSkor) * 100
        score.textContent = Math.round(skor)
    }
}

function tampilJawaban() {
    
    if(count < soal.length) {
        let pilihanGanda = dataSoal[2].sort(() => 0.5 - Math.random())
        for (var i = 0; i < answer.length; i++) {
            answer[i].textContent = pilihanGanda[i]
        }
    }
}