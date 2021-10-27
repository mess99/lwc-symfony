import { LightningElement } from 'lwc';

export default class Form extends LightningElement {
    error;
    addBook(e) {
        e.preventDefault();
        let title = this.template.querySelector('#title').value;
        let author = this.template.querySelector('#author').value;
        if (title == '' || author == '') {
            this.error = 'remplir tous les champs';
        } else {
            fetch('http://localhost:8000/api/books', {
                method: 'post',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author })
            })
                .then((res) => res.json())
                .then((res) => {
                    this.resetInput();
                });
        }
    }
    resetInput() {
        this.template.querySelector('#title').value = '';
        this.template.querySelector('#author').value = '';
    }
}
