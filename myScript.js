// Prompt the user with the first question
let correctCount = 0;

function updateScore() {
    const score = correctCount * 10;
    document.getElementById("score").innerHTML = score;
}

document.getElementById("question1").innerHTML = "8 + 7 = ... ";
const correctAnswer1 = 15;

function checkAnswer1() {
    const userAnswer1 = document.getElementById("userAnswer1").value;
    document.getElementById("answer1").innerHTML = userAnswer1;

    // Clear previous feedback classes
    feedback1.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer1) === correctAnswer1) {
        document.getElementById("feedback1").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback1").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback1").innerHTML = "&cross; Correct Answer is : " + correctAnswer1;
        document.getElementById("feedback1").classList.add("incorrect");
    }
    updateScore();
}

// Additional questions
document.getElementById("question2").innerHTML = "5 * 6 = ... ";
const correctAnswer2 = 30;

function checkAnswer2() {
    const userAnswer2 = document.getElementById("userAnswer2").value;
    document.getElementById("answer2").innerHTML = userAnswer2;

    // Clear previous feedback classes
    feedback2.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer2) === correctAnswer2) {
        document.getElementById("feedback2").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback2").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback2").innerHTML = "&cross; Correct Answer is : " + correctAnswer2;
        document.getElementById("feedback2").classList.add("incorrect");
    }
    updateScore();
}

document.getElementById("question3").innerHTML = "12 / 4 = ... ";
const correctAnswer3 = 3;

function checkAnswer3() {
    const userAnswer3 = document.getElementById("userAnswer3").value;
    document.getElementById("answer3").innerHTML = userAnswer3;

    // Clear previous feedback classes
    feedback3.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer3) === correctAnswer3) {
        document.getElementById("feedback3").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback3").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback3").innerHTML = "&cross; Correct Answer is : " + correctAnswer3;
        document.getElementById("feedback3").classList.add("incorrect");
    }
    updateScore();
}

document.getElementById("question4").innerHTML = "9 - 3 = ... ";
const correctAnswer4 = 6;

function checkAnswer4() {
    const userAnswer4 = document.getElementById("userAnswer4").value;
    document.getElementById("answer4").innerHTML = userAnswer4;

    // Clear previous feedback classes
    feedback4.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer4) === correctAnswer4) {
        document.getElementById("feedback4").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback4").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback4").innerHTML = "&cross; Correct Answer is : " + correctAnswer4;
        document.getElementById("feedback4").classList.add("incorrect");
    }
    updateScore();
}

document.getElementById("question5").innerHTML = "7 + 2 = ... ";
const correctAnswer5 = 9;

function checkAnswer5() {
    const userAnswer5 = document.getElementById("userAnswer5").value;
    document.getElementById("answer5").innerHTML = userAnswer5;

    // Clear previous feedback classes
    feedback5.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer5) === correctAnswer5) {
        document.getElementById("feedback5").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback5").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback5").innerHTML = "&cross; Correct Answer is : " + correctAnswer5;
        document.getElementById("feedback5").classList.add("incorrect");
    }
    updateScore();
}

document.getElementById("question6").innerHTML = "15 - 6 = ... ";
const correctAnswer6 = 9;

function checkAnswer6() {
    const userAnswer6 = document.getElementById("userAnswer6").value;
    document.getElementById("answer6").innerHTML = userAnswer6;

    // Clear previous feedback classes
    feedback6.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer6) === correctAnswer6) {
        document.getElementById("feedback6").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback6").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback6").innerHTML = "&cross; Correct Answer is : " + correctAnswer6;
        document.getElementById("feedback6").classList.add("incorrect");
    }
    updateScore();
}

document.getElementById("question7").innerHTML = "8 * 2 = ... ";
const correctAnswer7 = 16;

function checkAnswer7() {
    const userAnswer7 = document.getElementById("userAnswer7").value;
    document.getElementById("answer7").innerHTML = userAnswer7;

    // Clear previous feedback classes
    feedback7.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer7) === correctAnswer7) {
        document.getElementById("feedback7").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback7").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback7").innerHTML = "&cross; Correct Answer is : " + correctAnswer7;
        document.getElementById("feedback7").classList.add("incorrect");
    }
    updateScore();
}

document.getElementById("question8").innerHTML = "16 / 2 = ... ";
const correctAnswer8 = 8;

function checkAnswer8() {
    const userAnswer8 = document.getElementById("userAnswer8").value;
    document.getElementById("answer8").innerHTML = userAnswer8;

    // Clear previous feedback classes
    feedback8.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer8) === correctAnswer8) {
        document.getElementById("feedback8").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback8").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback8").innerHTML = "&cross; Correct Answer is : " + correctAnswer8;
        document.getElementById("feedback8").classList.add("incorrect");
    }
    updateScore();
}

document.getElementById("question9").innerHTML = "5 * 3 = ... ";
const correctAnswer9 = 15;

function checkAnswer9() {
    const userAnswer9 = document.getElementById("userAnswer9").value;
    document.getElementById("answer9").innerHTML = userAnswer9;

    // Clear previous feedback classes
    feedback9.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer9) === correctAnswer9) {
        document.getElementById("feedback9").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback9").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback9").innerHTML = "&cross; Correct Answer is : " + correctAnswer9;
        document.getElementById("feedback9").classList.add("incorrect");
    }
    updateScore();
}

document.getElementById("question10").innerHTML = "20 - 10 = ... ";
const correctAnswer10 = 10;

function checkAnswer10() {
    const userAnswer10 = document.getElementById("userAnswer10").value;
    document.getElementById("answer10").innerHTML = userAnswer10;

    // Clear previous feedback classes
    feedback10.classList.remove("correct", "incorrect");

    if (parseInt(userAnswer10) === correctAnswer10) {
        document.getElementById("feedback10").innerHTML = "&checkmark; Correct";
        document.getElementById("feedback10").classList.add("correct");
        correctCount++;
    } else {
        document.getElementById("feedback10").innerHTML = "&cross; Correct Answer is : " + correctAnswer10;
        document.getElementById("feedback10").classList.add("incorrect");
    }
    updateScore();
}
