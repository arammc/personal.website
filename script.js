var quizData = [
  {q: "1. What does HTML stand for?", a: "HyperText Markup Language", choices: ["HyperText Markup Language", "HighTech Modern Language", "Hyper Transfer Markup Language"]},
  {q: "2. Which CSS property changes text color?", a: "color", choices: ["color", "text-color", "font-color"]},
  {q: "3. Which JavaScript method displays a message box?", a: "alert()", choices: ["alert()", "message()", "display()"]},
  {q: "4. What is the correct HTML5 doctype?", a: "!DOCTYPE html", choices: ["!DOCTYPE html", "!DOCTYPE HTML5", "!DOCTYPE"]},
  {q: "5. Which HTML tag creates a hyperlink?", a: "a", choices: ["a", "link", "href"]},
  {q: "6. What does CSS stand for?", a: "Cascading Style Sheets", choices: ["Cascading Style Sheets", "Computer Style System", "Colorful Style Sheets"]},
  {q: "7. Which JavaScript method converts a string to an integer?", a: "parseInt()", choices: ["parseInt()", "toNumber()", "convertInt()"]},
  {q: "8. Which HTML5 element is used for navigation?", a: "nav", choices: ["nav", "menu", "navigation"]}
];

function createQuiz() {
  var quizHTML = "";

  for (var i = 0; i < quizData.length; i++) {
    quizHTML += "<p>" + quizData[i].q + "<br>";

    for (var j = 0; j < quizData[i].choices.length; j++) {
      quizHTML += 
        '<input type="radio" name="q' + i + '" value="' + quizData[i].choices[j] + '"> '
        + quizData[i].choices[j] + "<br>";
    }

    quizHTML += "</p>";
  }

  document.getElementById("quizForm").innerHTML = quizHTML;
}

function checkQuiz() {
  var score = 0;
  var results = "";

  for (var i = 0; i < quizData.length; i++) {
    var radios = document.getElementsByName("q" + i);
    var userAnswer = "";
    var selected = false;

    for (var j = 0; j < radios.length; j++) {
      if (radios[j].checked) {
        userAnswer = radios[j].value;
        selected = true;
        break;
      }
    }

    if (selected && userAnswer === quizData[i].a) {
      score++;
      results += "Question " + (i + 1) + ": Correct!<br>";
    } else {
      results += "Question " + (i + 1) + ": Incorrect — correct: " + quizData[i].a + "<br>";
    }
  }

  document.getElementById("quizResult").innerHTML = "Score: " + score + "/" + quizData.length;
  document.getElementById("quizAnswers").innerHTML = results;
}
createQuiz();
