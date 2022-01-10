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

// delete rows
rowButtonDelete.addEventListener("click", () => {
    allColumns = document.querySelectorAll(".cols")

    if (numRows > 1) {
        allColumns.forEach((column) => {
            column.lastElementChild.remove()
        })

        numRows--;
    }
})

// color one
addClick()

function addClick() {
    const everySquare = document.querySelectorAll(".cell");
    for (let box of everySquare) {
        box.addEventListener("click", () => {box.style.backgroundColor = "red"})
    }
}

// fill white
whiteButtonFill.addEventListener("click", () => {
    let everySquare = document.querySelectorAll(".cell")
    
    for (let i = 0; i < everySquare.length; i++) {
        if (everySquare[i].style.backgroundColor == "") {
            everySquare[i].style.backgroundColor = "blue"
        }
    }
})

// fill all
allButtonFill.addEventListener("click", () => {
    let everySquare = document.querySelectorAll(".cell")
    
    for (let box of everySquare) {
        box.style.backgroundColor = "blue"
    }
})

// clear board
clearButton.addEventListener("click", () => {
    let everySquare = document.querySelectorAll(".cell")
    
    for (let box of everySquare) {
        box.style.backgroundColor = ""
    }
})
