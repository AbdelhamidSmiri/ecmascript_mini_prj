import Student from "./student.js";
const MAX_NOTE = 20

let filtersetting = {
    'column': 'id',
    'desc': false
}
const getage = (date) => (new Date()).getFullYear() - new Date(date).getFullYear()
const isAdmit = (note) => note >= 10
let isFirstLoad = true;
const dispalystudents = async function () {
    return Student.allstudents().then(function (response) {




        response.sort((a, b) => {
            const isNumber = typeof a[filtersetting.column] === 'number'
            // SORT NUMBERS
            if (isNumber) {
                if (filtersetting.desc) {
                    return b[filtersetting.column] - (a[filtersetting.column])
                }

                return a[filtersetting.column] - (b[filtersetting.column])
            }
            // SORT STRINGS
            if (filtersetting.desc) {
                return b[filtersetting.column].localeCompare(a[filtersetting.column])
            }

            return a[filtersetting.column].localeCompare(b[filtersetting.column])
        })
        return response.map((data) => {
            const { id, name, date, note } = data
            let age = getage(date)
            return (`<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${age} ans</td>
                <td><span class="badge rounded-pill text-bg-${isAdmit(note) ? 'success' : 'danger'} ">${note} / ${MAX_NOTE}</span> </td>
                <td><button class='btn btn-danger btn-sm btn_rmv_st' data-id='${id}'>Supprimer</button></td>
              </tr>`)
        })
    })

}


const addStudent = function (event) {
    event.preventDefault()
    const [nom, date, note] = document.querySelectorAll("#nom, #date, #note")
    console.log(nom.value, date.value, note.value)
    const student = new Student(nom.value, date.value, note.value)
    student.addStudent()
}
function add_student_listener() {
    let btn_add_st = document.querySelector("#addstudent")
    btn_add_st.addEventListener('click', (event) => {
        addStudent(event)
    })
}

const removestudent = (id) => {
    Student.removeStudent(id)
}

const renderStudent = async function () {
    add_student_listener()
    const tbody = document.querySelector(".list_students")
    await dispalystudents().then(data => tbody.innerHTML = data.join(' '))
    if (isFirstLoad)
        init()

    isFirstLoad = false

}
const init = function () {
    let btn_reload = document.querySelector(".reload_btn")
    btn_reload.addEventListener('click', () => {
        renderStudent()
    })
    let btn_rmv_st = document.querySelectorAll(".btn_rmv_st")

    btn_rmv_st.forEach((btn) => {
        btn.addEventListener('click', () => {
            removestudent(btn.dataset.id)
        })
    })
    let btn_sort_st = document.querySelectorAll(".sort-element")
    btn_sort_st.forEach((btn) => {
        btn.addEventListener('click', () => {
            filtersetting.column = btn.dataset.column
            clearSpanArrow()
            console.log(filtersetting.desc)
            renderSort(filtersetting.column)

        })
    })
}

const renderSort = (column) => {
    if (filtersetting.column === column) {
        const element = document.querySelector(".sort-element[data-column='" + column + "'] span")
        element.innerHTML = `<button class='btn fw-bold' onclick="sortDirection()">${filtersetting.desc ? '&#8593;' : '&#8595;'}</button>`
    }
}
const clearSpanArrow = () => {
    document.querySelectorAll(".sort-element span").forEach(span => {
        span.innerHTML = ''
    })
}
window.sortDirection = function () {
    filtersetting.desc = !filtersetting.desc
    clearSpanArrow()
    renderSort(filtersetting.column)
    renderStudent()
}


renderSort('id')
renderSort('name')
renderSort('date')
renderSort('note')
renderStudent()


