import { url } from "./constants.js"
let lastId = 0;
export default class Student {

    constructor(nom, date, note) {
        this.nom = nom
        this.date = date
        this.note = note
    }



    static allstudents = async function () {
        const response = await fetch(url)
        const students = await response.json()
        return students
    }

    static fetchLastId = async function () {
        try {
            const response = await fetch(url); // Assuming this URL fetches the list of students
            const students = await response.json();
            if (students.length > 0) {
                lastId = students.length + 1;
            }
        } catch (error) {
            console.error('Error fetching students:', error);
        }
        return lastId;
    };

    addStudent = async function () {
        let lastid = await Student.fetchLastId()
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: lastid,
                name: this.nom,
                date: this.date,
                note: parseFloat(this.note)
            })
        })
        return response
    }

    static removeStudent = async function (id) {
        const response = "";
        if (confirm("Êtes-vous sûr de supprimer l'étudiant ?") == true) {
            response = await fetch(url + "/" + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
        }

        return response
    }

}