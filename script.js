function loadCategory(category) {

    const container = document.getElementById("mcqs");
    container.innerHTML = "";

    const questions = data[category];

    if (questions.length === 0) {
        container.innerHTML = "<h3>No MCQs available yet</h3>";
        return;
    }

    questions.forEach((q, index) => {

        let div = document.createElement("div");
        div.classList.add("mcq");

        let html = `<h4>${index + 1}. ${q.question}</h4>`;

        q.options.forEach((opt, i) => {
            html += `<div class="option" onclick="check(this, ${q.correct}, ${i}, '${q.explanation}')">${opt}</div>`;
        });

        html += `<div class="explanation"></div>`;

        div.innerHTML = html;
        container.appendChild(div);
    });
}


function check(element, correct, selected, explanation) {

    const parent = element.parentElement;
    const options = parent.querySelectorAll(".option");
    const expBox = parent.querySelector(".explanation");

    options.forEach(opt => {
        opt.classList.remove("correct", "wrong");
        opt.innerHTML = opt.innerText; // reset icons
    });

    if (selected === correct) {
        element.classList.add("correct");
        element.innerHTML += " ✅";

        expBox.innerHTML = `✅ Correct! <br>${explanation}`;
        expBox.style.color = "green";

    } else {
        element.classList.add("wrong");
        element.innerHTML += " ❌";

        options[correct].classList.add("correct");
        options[correct].innerHTML += " ✅";

        expBox.innerHTML = `❌ Wrong! <br>${explanation}`;
        expBox.style.color = "red";
    }

    expBox.style.display = "block";
}

const buttons = document.querySelectorAll(".buttons button");

function loadCategory(category) {

    buttons.forEach(btn => btn.classList.remove("active"));

    event.target.classList.add("active");

    const container = document.getElementById("mcqs");
    container.innerHTML = "";

    const questions = data[category];

    if (questions.length === 0) {
        container.innerHTML = "<h3>No MCQs available yet</h3>";
        return;
    }

    questions.forEach((q, index) => {

        let div = document.createElement("div");
        div.classList.add("mcq");

        let html = `<h4>${index + 1}. ${q.question}</h4>`;

        q.options.forEach((opt, i) => {
            html += `<div class="option" onclick="check(this, ${q.correct}, ${i}, '${q.explanation}')">${opt}</div>`;
        });

        html += `<div class="explanation"></div>`;

        div.innerHTML = html;
        container.appendChild(div);
    });
}