let numRows = 3
let numColumns = 3

let allColumns = document.querySelectorAll(".cols")

const board = document.querySelector("#board-container")
const rowButtonAdd = document.querySelector("#add-row")
const columnButtonAdd = document.querySelector("#add-column")
const rowButtonDelete = document.querySelector("#delete-row")
const columnButtonDelete = document.querySelector("#delete-column")
const whiteButtonFill = document.querySelector("#fill-white")
const allButtonFill = document.querySelector("#fill-all")
const clearButton = document.querySelector("#clear-all")

// add rows
rowButtonAdd.addEventListener("click", () => {
    allColumns = document.querySelectorAll(".cols")

    allColumns.forEach((column) => {
        let cell = document.createElement("div")
        cell.setAttribute("class", "cell")
        column.append(cell)
    })

    numRows++;
    addClickability()
})

// add columns
columnButtonAdd.addEventListener("click", () => {
    let column = document.createElement("div")
    column.setAttribute("class", "cols")

    for (let i = 0; i < numRows; i++){
        let cell = document.createElement("div")
        cell.setAttribute("class", "cell")
        column.append(cell)        
    }

    board.append(column)
    
    numColumns++;
    addClickability()
})

// delete columns
columnButtonDelete.addEventListener("click", () => {
    if (numColumns > 1) {
        board.lastElementChild.remove()
        numColumns--
    }
})