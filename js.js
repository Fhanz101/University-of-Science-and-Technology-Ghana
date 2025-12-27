const form = document.getElementById("studentForm");
const table = document.getElementById("tableBody");

let students = JSON.parse(localStorage.getItem("students")) || [];

function displayStudents() {
    table.innerHTML = "";
    students.forEach(s => {
        table.innerHTML += `
            <tr>
                <td>${s.name}</td>
                <td>${s.matric}</td>
                <td>${s.course}</td>
                <td>${s.activity}</td>
            </tr>
        `;
    });
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const student = {
        name: name.value,
        matric: matric.value,
        course: course.value,
        activity: activity.value
    };

    students.push(student);
    localStorage.setItem("students", JSON.stringify(students));
    displayStudents();
    form.reset();
});

displayStudents();
