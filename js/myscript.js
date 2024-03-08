import Student from "./student.js";

const dispalystudents = async function () {
    return Student.allstudents().then(function (response) {
        return response.map((student) => {
            const { id, name, date, note } = student

            return (`<tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${date}</td>
                <td>${note}</td>
                <td><button class='btn btn-danger btn-sm'>Supprimer</button></td>
              </tr>`)
        })
    })

}

const addStudent = function (event) {
    event.preventDefault() // kt3ni annuler lia dakchi li kadir donc ghay annuler lia submit dyal form bhala dart return false
    const [nom, date, note] = document.querySelectorAll("#nom, #date, #note")
    console.log(nom.value, date, note)
    const student = new Student(nom.value, date.value, note.value)
    student.addStudent()
}
const renderStudent = function () {
    const tbody = document.querySelector(".list_students")
    dispalystudents().then(data => tbody.innerHTML = data.join(' ')) //had join bach thayad dik , li chaybatni 

}
const init = function () {
    let btn_reload = document.querySelector(".reload_btn")
    btn_reload.addEventListener('click', () => {
        renderStudent()
    })
    let btn_add_st = document.querySelector("#addstudent")
    btn_add_st.addEventListener('click', (event) => {
        addStudent(event)
    })
}



init()
renderStudent()
