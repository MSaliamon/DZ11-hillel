
let table = document.createElement("table");


let num = 1;
for (let i = 0; i < 10; i++) {
  let row = document.createElement("tr");
  for (let j = 0; j < 10; j++) {
    let cell = document.createElement("td");
    cell.textContent = num;
    row.appendChild(cell);
    num++;
  }
  table.appendChild(row);
}


document.body.appendChild(table);