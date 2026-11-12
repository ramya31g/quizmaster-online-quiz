
const questionBank = {

    "Science": [
        { q: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "H2"], answer: 0 },
        { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], answer: 1 },
        { q: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Skin", "Liver"], answer: 2 },
        { q: "Which gas do plants absorb?", options: ["Oxygen", "Nitrogen", "Hydrogen", "Carbon Dioxide"], answer: 3 },
        { q: "What is the boiling point of water at sea level?", options: ["50°C", "100°C", "150°C", "200°C"], answer: 1 },
        { q: "Which part of a plant absorbs water?", options: ["Leaf", "Flower", "Root", "Stem"], answer: 2 },
        { q: "How many bones are there in an adult human body?", options: ["206", "300", "150", "250"], answer: 0 },
        { q: "Which planet is closest to the Sun?", options: ["Earth", "Mars", "Venus", "Mercury"], answer: 3 }
    ],

    "Computer": [
        { q: "What does CPU stand for?", options: ["Central Processing Unit", "Computer Personal Unit", "Central Program Utility", "Control Processing User"], answer: 0 },
        { q: "Which language is used to style web pages?", options: ["HTML", "CSS", "Python", "SQL"], answer: 1 },
        { q: "What does HTML stand for?", options: ["High Text Machine Language", "Hyper Transfer Markup Language", "HyperText Markup Language", "Home Tool Markup Language"], answer: 2 },
        { q: "Which of these is an operating system?", options: ["Google", "Python", "HTML", "Windows"], answer: 3 },
        { q: "Which language is mainly used for web interactivity?", options: ["JavaScript", "SQL", "C", "XML"], answer: 0 },
        { q: "What does RAM stand for?", options: ["Read Access Memory", "Random Access Memory", "Run Active Memory", "Rapid Action Machine"], answer: 1 },
        { q: "Which company developed Java?", options: ["Microsoft", "Apple", "Sun Microsystems", "Google"], answer: 2 },
        { q: "Which symbol is used for comments in JavaScript single-line code?", options: ["##", "//", "<!--", "**"], answer: 1 }
    ],

    "Games": [
        { q: "Which company created Minecraft?", options: ["Nintendo", "Mojang", "Sony", "Ubisoft"], answer: 1 },
        { q: "How many players are there in a standard chess game?", options: ["2", "4", "6", "8"], answer: 0 },
        { q: "Which game features a character named Mario?", options: ["Minecraft", "PUBG", "Super Mario", "Free Fire"], answer: 2 },
        { q: "What is the maximum number of players in a standard PUBG Mobile classic squad?", options: ["2", "3", "5", "4"], answer: 3 },
        { q: "Which game uses blocks to build structures?", options: ["Minecraft", "FIFA", "Chess", "Tetris"], answer: 0 },
        { q: "Which company makes PlayStation?", options: ["Microsoft", "Sony", "Apple", "Samsung"], answer: 1 },
        { q: "What is the main objective in a racing game?", options: ["Cook food", "Build houses", "Finish the race", "Solve equations"], answer: 2 },
        { q: "Which game is famous for falling blocks?", options: ["Minecraft", "Fortnite", "Roblox", "Tetris"], answer: 3 }
    ],

    "General Knowledge": [
        { q: "What is the capital of India?", options: ["Mumbai", "New Delhi", "Chennai", "Kolkata"], answer: 1 },
        { q: "Which is the largest ocean in the world?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: 2 },
        { q: "Who wrote the Indian national anthem?", options: ["Rabindranath Tagore", "Mahatma Gandhi", "Jawaharlal Nehru", "Sarojini Naidu"], answer: 0 },
        { q: "How many colours are there in a rainbow?", options: ["5", "6", "8", "7"], answer: 3 },
        { q: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "Australia"], answer: 1 },
        { q: "What is the currency of Japan?", options: ["Dollar", "Euro", "Yen", "Rupee"], answer: 2 },
        { q: "Which animal is known as the King of the Jungle?", options: ["Lion", "Tiger", "Elephant", "Leopard"], answer: 0 },
        { q: "When is India's Independence Day celebrated?", options: ["26 January", "2 October", "14 November", "15 August"], answer: 3 }
    ],

    "Movies & TV": [
        { q: "Which movie features the character Jack Sparrow?", options: ["Titanic", "Pirates of the Caribbean", "Avatar", "Jumanji"], answer: 1 },
        { q: "Which animated character lives in a pineapple under the sea?", options: ["Mickey Mouse", "Tom", "SpongeBob", "Shrek"], answer: 2 },
        { q: "Which film series features Hogwarts?", options: ["Harry Potter", "Fast & Furious", "Avengers", "Toy Story"], answer: 0 },
        { q: "Which country produces Bollywood movies?", options: ["USA", "Japan", "China", "India"], answer: 3 },
        { q: "Which character is a superhero from Gotham City?", options: ["Superman", "Batman", "Iron Man", "Thor"], answer: 1 },
        { q: "What is the name of Elsa's sister in Frozen?", options: ["Rapunzel", "Moana", "Anna", "Belle"], answer: 2 },
        { q: "Which movie features a blue alien species called Na'vi?", options: ["Avatar", "Jaws", "Titanic", "Cars"], answer: 0 },
        { q: "Which animated movie features Woody and Buzz?", options: ["Finding Nemo", "Shrek", "Frozen", "Toy Story"], answer: 3 }
    ],

    "Sports": [
        { q: "How many players are there in a cricket team?", options: ["9", "11", "10", "12"], answer: 1 },
        { q: "Which sport uses a shuttlecock?", options: ["Tennis", "Football", "Badminton", "Hockey"], answer: 2 },
        { q: "How many rings are there in the Olympic symbol?", options: ["5", "4", "6", "7"], answer: 0 },
        { q: "Which country won the FIFA World Cup in 2022?", options: ["France", "Brazil", "Germany", "Argentina"], answer: 3 },
        { q: "Which sport is associated with Wimbledon?", options: ["Cricket", "Tennis", "Golf", "Boxing"], answer: 1 },
        { q: "What is the national sport officially recognized by India?", options: ["Hockey", "Cricket", "India has no officially declared national sport", "Football"], answer: 2 },
        { q: "How many players from one team are on a football field during normal play?", options: ["11", "9", "10", "12"], answer: 0 },
        { q: "Which sport uses a bat, ball and wickets?", options: ["Baseball", "Tennis", "Golf", "Cricket"], answer: 3 }
    ]
};


// SCREEN ELEMENTS
const welcomeScreen = document.getElementById("welcome-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

let selectedCategory = "";
let playerName = "";
let questions = [];
let currentQuestion = 0;
let answers = [];
let timeLeft = 30;
let timerInterval;


// CHANGE SCREEN
function showScreen(screen) {
    document.querySelectorAll(".screen").forEach(item => {
        item.classList.remove("active");
    });

    screen.classList.add("active");
}


// START QUIZ
function startQuiz(category) {
    const nameInput = document.getElementById("username");

    if (!nameInput.value.trim()) {
        alert("Please enter your name before starting!");
        nameInput.focus();
        return;
    }

    playerName = nameInput.value.trim();
    selectedCategory = category;
    questions = questionBank[category];

    currentQuestion = 0;
    answers = new Array(questions.length).fill(null);

    document.getElementById("quiz-category").textContent = category;

    showScreen(quizScreen);
    loadQuestion();
}


// LOAD QUESTION
function loadQuestion() {
    clearInterval(timerInterval);

    const q = questions[currentQuestion];

    document.getElementById("question").textContent = q.q;

    document.getElementById("question-number").textContent =
        "QUESTION " + String(currentQuestion + 1).padStart(2, "0");

    document.getElementById("question-count").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    const percentage = Math.round(
        ((currentQuestion + 1) / questions.length) * 100
    );

    document.getElementById("progress-percent").textContent =
        percentage + "%";

    document.getElementById("progress-fill").style.width =
        percentage + "%";

    const container = document.getElementById("options-container");
    container.innerHTML = "";

    document.getElementById("feedback").textContent = "";

    const savedAnswer = answers[currentQuestion];

    q.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.className = "option-btn";
        button.textContent =
            String.fromCharCode(65 + index) + ". " + option;

        if (savedAnswer !== null) {
            button.disabled = true;

            if (index === q.answer) {
                button.classList.add("correct");
            }

            if (index === savedAnswer && savedAnswer !== q.answer) {
                button.classList.add("incorrect");
            }
        }

        button.addEventListener("click", () => selectAnswer(index));

        container.appendChild(button);
    });

    if (savedAnswer !== null) {
        showFeedback(savedAnswer);
    }

    document.getElementById("previous-btn").disabled =
        currentQuestion === 0;

    document.getElementById("previous-btn").style.opacity =
        currentQuestion === 0 ? "0.4" : "1";

    document.getElementById("next-btn").textContent =
        currentQuestion === questions.length - 1
            ? "Finish Quiz ✓"
            : "Next Question →";

    timeLeft = 30;
    updateTimer();

    if (savedAnswer === null) {
        startTimer();
    }
}


// SELECT ANSWER
function selectAnswer(index) {
    if (answers[currentQuestion] !== null) return;

    clearInterval(timerInterval);

    answers[currentQuestion] = index;

    const correctAnswer = questions[currentQuestion].answer;
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach((button, i) => {
        button.disabled = true;

        if (i === correctAnswer) {
            button.classList.add("correct");
        }

        if (i === index && index !== correctAnswer) {
            button.classList.add("incorrect");
        }
    });

    showFeedback(index);
}


// FEEDBACK
function showFeedback(index) {
    const correctAnswer = questions[currentQuestion].answer;
    const feedback = document.getElementById("feedback");

    if (index === correctAnswer) {
        feedback.textContent = "🎉 Excellent! Your answer is correct!";
        feedback.style.color = "#168344";
    } else {
        feedback.textContent = "❌ Not quite! Check the green answer.";
        feedback.style.color = "#d83c3c";
    }
}


// TIMER
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            document.getElementById("feedback").textContent =
                "⏰ Time's up! Moving to the next question.";

            document.getElementById("feedback").style.color = "#e56a29";

            setTimeout(() => {
                if (currentQuestion < questions.length - 1) {
                    currentQuestion++;
                    loadQuestion();
                } else {
                    finishQuiz();
                }
            }, 1000);
        }
    }, 1000);
}


function updateTimer() {
    document.getElementById("timer").textContent = timeLeft;

    const timer = document.querySelector(".timer");

    timer.style.color = timeLeft <= 10 ? "#e53935" : "#e56a29";
}


// NEXT QUESTION
document.getElementById("next-btn").addEventListener("click", () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        finishQuiz();
    }
});


// PREVIOUS QUESTION
document.getElementById("previous-btn").addEventListener("click", () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
});


// FINISH QUIZ
function finishQuiz() {
    clearInterval(timerInterval);

    let correct = 0;

    answers.forEach((answer, index) => {
        if (answer === questions[index].answer) {
            correct++;
        }
    });

    const total = questions.length;
    const wrong = total - correct;
    const percentage = Math.round((correct / total) * 100);

    document.getElementById("final-score").textContent =
        `${correct}/${total}`;

    document.getElementById("percentage").textContent =
        percentage + "%";

    document.getElementById("correct-count").textContent = correct;
    document.getElementById("wrong-count").textContent = wrong;

    document.getElementById("result-user").textContent =
        "Great job, " + playerName + "!";

    let message = "";

    if (percentage >= 90) {
        message = "🏆 Outstanding! You are a Quiz Champion!";
    } else if (percentage >= 70) {
        message = "🌟 Excellent work! Keep shining!";
    } else if (percentage >= 50) {
        message = "👏 Good effort! You are learning!";
    } else {
        message = "💪 Keep practising. You can do better!";
    }

    document.getElementById("result-message").textContent = message;

    showScreen(resultScreen);
}


// PLAY AGAIN
document.getElementById("restart-btn").addEventListener("click", () => {
    startQuiz(selectedCategory);
});


// HOME BUTTON
document.getElementById("home-btn").addEventListener("click", () => {
    clearInterval(timerInterval);
    showScreen(welcomeScreen);
});


// CATEGORY BUTTONS
document.querySelectorAll(".category-card").forEach(card => {
    card.addEventListener("click", () => {
        startQuiz(card.dataset.category);
    });
});


// DARK MODE
document.getElementById("theme-btn").addEventListener("click", () => {
    document.body.classList.toggle("dark");

    const isDark = document.body.classList.contains("dark");

    document.getElementById("theme-btn").textContent =
        isDark ? "☀️" : "🌙";
});
