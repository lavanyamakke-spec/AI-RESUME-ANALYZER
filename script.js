const button = document.getElementById("analyzeBtn");

const result = document.getElementById("result");

button.addEventListener("click", function () {

    result.style.display = "block";

    result.innerHTML = `
        <h3>⏳ Analyzing Resume...</h3>
    `;

    setTimeout(function(){

        result.innerHTML = `

        <h2>Resume Score : 85 /100</h2>

        <hr>

        <h3>✅ Strengths</h3>

        <ul>
            <li>Good Education</li>
            <li>Technical Skills</li>
            <li>Clean Layout</li>
        </ul>

        <h3>📌 Suggestions</h3>

        <ul>
            <li>Add Projects</li>
            <li>Add Certifications</li>
            <li>Improve Professional Summary</li>
        </ul>

        `;

    },2000);

});