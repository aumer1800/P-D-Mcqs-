import { data } from './data.js';

/**
 * Shuffles an array using the Fisher-Yates algorithm.
 */
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

/**
 * Loads and displays MCQs for a specific category.
 */
window.loadCategory = function(category, event) {
    const buttons = document.querySelectorAll(".buttons button");
    const container = document.getElementById("mcqs");
    
    buttons.forEach(btn => btn.classList.remove("active"));
    if (event && event.target) {
        event.target.classList.add("active");
    }

    container.innerHTML = "";

    // Get questions from data.js
    let questions = data[category] ? [...data[category]] : [];

    if (questions.length === 0) {
        container.innerHTML = "<div class='no-data'><h3>No MCQs available for this category yet.</h3></div>";
        return;
    }

    // Shuffle questions for variety
    shuffleArray(questions);

    questions.forEach((q, index) => {
        let div = document.createElement("div");
        div.classList.add("mcq");

        // CLEANUP: Escape single quotes and backslashes in the explanation string
        const safeExp = q.explanation.replace(/\\/g, "\\\\").replace(/'/g, "\\'");

        let html = `<h4>${index + 1}. ${q.question}</h4>`;
        
        html += `<div class="options-container">`;
        q.options.forEach((opt, i) => {
            // CRITICAL FIX: Use q.answer to match the data structure
            html += `
                <div class="option" onclick="check(this, ${q.answer}, ${i}, '${safeExp}')">
                    ${opt}
                </div>`;
        });
        html += `</div>`;

        html += `<div class="explanation" style="display:none;"></div>`;
        
        div.innerHTML = html;
        container.appendChild(div);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
};

/**
 * Handles the logic when an option is clicked.
 */
window.check = function(element, correct, selected, explanation) {
    const parent = element.parentElement; 
    const mcqContainer = parent.closest(".mcq");
    const options = parent.querySelectorAll(".option");
    const expBox = mcqContainer.querySelector(".explanation");

    // 1. Disable interaction immediately to prevent double-clicking
    parent.style.pointerEvents = "none";
    parent.style.opacity = "0.9";

    // 2. Clear existing status indicators
    options.forEach(opt => {
        opt.classList.remove("correct", "wrong");
    });

    // 3. Logic for Correct vs Incorrect
    // Note: 'correct' here is the index passed from q.answer
    if (selected === correct) {
        element.classList.add("correct");
        element.innerHTML += " ✅";
        expBox.innerHTML = `<strong>Correct!</strong><br>${explanation}`;
        expBox.style.borderLeft = "4px solid #2e7d32";
        expBox.style.color = "#2e7d32";
    } else {
        element.classList.add("wrong");
        element.innerHTML += " ❌";
        
        // Highlight the actual correct answer
        if (options[correct]) {
            options[correct].classList.add("correct");
            options[correct].innerHTML += " ✅";
        }
        
        expBox.innerHTML = `<strong>Incorrect</strong><br>${explanation}`;
        expBox.style.borderLeft = "4px solid #d32f2f";
        expBox.style.color = "#d32f2f";
    }

    // 4. ALWAYS SHOW the explanation box
    expBox.style.display = "block";
    expBox.style.marginTop = "15px";
    expBox.style.padding = "10px";
    expBox.style.backgroundColor = "#f9f9f9";
    expBox.style.borderRadius = "4px";
};