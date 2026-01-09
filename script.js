let students = JSON.parse(localStorage.getItem("students")) || [];

const tableBody = document.getElementById("tableBody");
const form = document.getElementById("studentForm");
const searchInput = document.getElementById("search");

function renderTable(data = students) {
  tableBody.innerHTML = "";
  data.forEach((s, index) => {
    tableBody.innerHTML += `
      <tr>
        <td>${s.name}</td>
        <td>${s.roll}</td>
        <td>${s.dept}</td>
        <td>${s.year}</td>
        <td>${s.marks}</td>
        <td>
          <button onclick="deleteRecord(${index})">❌</button>
        </td>
      </tr>`;
  });
}

form.addEventListener("submit", e => {
  e.preventDefault();

  const student = {
    name: name.value,
    roll: roll.value,
    dept: dept.value,
    year: year.value,
    marks: marks.value
  };

  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));
  form.reset();
  renderTable();
});

function deleteRecord(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  renderTable();
}

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();
  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(value) ||
    s.roll.toLowerCase().includes(value)
  );
  renderTable(filtered);
});

function exportCSV() {
  let csv = "Name,Roll,Department,Year,Marks\n";
  students.forEach(s => {
    csv += `${s.name},${s.roll},${s.dept},${s.year},${s.marks}\n`;
  });

  const blob = new Blob([csv], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "students.csv";
  link.click();
}

renderTable();
