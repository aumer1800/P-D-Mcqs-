import { data } from './data.js';

/**
 * Loads and displays MCQs for a specific category.
 */
window.loadCategory = function(category, event) {
    const buttons = document.querySelectorAll(".buttons button");
    const container = document.getElementById("mcqs");
    
    // Active button UI
    buttons.forEach(btn => btn.classList.remove("active"));
    if (event && event.target) {
        event.target.classList.add("active");
    }

    container.innerHTML = "";

    // Get questions
    let questions = data[category] ? [...data[category]] : [];

    if (questions.length === 0) {
        container.innerHTML = "<div class='no-data'><h3>No MCQs available for this category yet.</h3></div>";
        return;
    }

    questions.forEach((q, index) => {
        let div = document.createElement("div");
        div.classList.add("mcq");

        // Escape explanation text
        const safeExp = q.explanation
            .replace(/\\/g, "\\\\")
            .replace(/'/g, "\\'");

        let html = `<h4>${index + 1}. ${q.question}</h4>`;
        
        html += `<div class="options-container">`;
        q.options.forEach((opt, i) => {
            html += `
                <div class="option" onclick="check(this, '${q.correct}', '${i}', '${safeExp}')">
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
 * Handles option click
 */
window.check = function(element, correct, selected, explanation) {

    // Convert to numbers (IMPORTANT)
    correct = Number(correct);
    selected = Number(selected);

    const parent = element.parentElement;
    const mcqContainer = parent.closest(".mcq");
    const options = parent.querySelectorAll(".option");
    const expBox = mcqContainer.querySelector(".explanation");

    // Disable further clicks
    parent.style.pointerEvents = "none";
    parent.style.opacity = "0.9";

    // Remove old classes
    options.forEach(opt => {
        opt.classList.remove("correct", "wrong");
    });

    // ✅ CORRECT ANSWER
    if (selected === correct) {
        element.classList.add("correct");

        if (!element.innerHTML.includes("✅")) {
            element.innerHTML += " ✅";
        }

        expBox.innerHTML = `<strong>Correct!</strong><br>${explanation}`;
        expBox.style.borderLeft = "4px solid #2e7d32";
        expBox.style.color = "#2e7d32";
    } 
    
    // ❌ WRONG ANSWER
    else {
        element.classList.add("wrong");

        if (!element.innerHTML.includes("❌")) {
            element.innerHTML += " ❌";
        }

        // Highlight correct option
        if (options[correct]) {
            options[correct].classList.add("correct");

            if (!options[correct].innerHTML.includes("✅")) {
                options[correct].innerHTML += " ✅";
            }
        }

        expBox.innerHTML = `<strong>Incorrect</strong><br>${explanation}`;
        expBox.style.borderLeft = "4px solid #d32f2f";
        expBox.style.color = "#d32f2f";
    }

    // Show explanation
    expBox.style.display = "block";
    expBox.style.marginTop = "15px";
    expBox.style.padding = "10px";
    expBox.style.backgroundColor = "#f9f9f9";
    expBox.style.borderRadius = "4px";
};