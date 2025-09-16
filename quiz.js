function checkAnswer () {
    const correctAnswer = "4";

    // Retrieve User's Answer
    const userAnswer = document.querySelector("input[name='quiz']:checked").value;
    
    // Check user's answer
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";   
    }
}

const submitButton = document.getElementById("submit-answer");

// Add event listener that calls the checkAnswer function
submitButton.addEventListener("click", checkAnswer);
