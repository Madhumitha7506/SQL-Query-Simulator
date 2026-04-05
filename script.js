let students = [
{name:"Asha", marks:85},
{name:"Ravi", marks:70},
{name:"Kiran", marks:90},
{name:"Meena", marks:60}
];

function runQuery(){

let query = document.getElementById("query").value.toLowerCase();
let result = [...students];

// INSERT
if(query.includes("insert")){
let name = prompt("Enter student name:");
let marks = parseInt(prompt("Enter marks:"));

students.push({name:name, marks:marks});

alert("Data inserted successfully!");
displayTable(students);
return;
}

// WHERE
if(query.includes("where marks >")){
let value = parseInt(query.split(">")[1]);
result = result.filter(s => s.marks > value);
}
else if(query.includes("where marks <")){
let value = parseInt(query.split("<")[1]);
result = result.filter(s => s.marks < value);
}

// ORDER BY
if(query.includes("order by marks asc")){
result.sort((a,b)=>a.marks-b.marks);
}
else if(query.includes("order by marks desc")){
result.sort((a,b)=>b.marks-a.marks);
}

displayTable(result);
}

function displayTable(data){

let table = document.getElementById("resultTable");

table.innerHTML = "<tr><th>Name</th><th>Marks</th></tr>";

data.forEach(s => {
table.innerHTML += `<tr><td>${s.name}</td><td>${s.marks}</td></tr>`;
});

}

displayTable(students);