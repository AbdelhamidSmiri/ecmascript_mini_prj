import { url } from "./constants.js"

export default class Student {
    static nextId = 4;
    constructor(nom, age, note) {
        this.id = Student.nextId++;
        this.nom = nom
        this.age = age
        this.note = note
    }

    static allstudents = async function () {
        const response = await fetch(url)
        const students = await response.json()
        return students
    }

    addStudent = async function () {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: this.id,
                name: this.nom,
                date: this.age,
                note: this.note
            })
        })
        return response
    }

}