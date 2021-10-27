import { LightningElement, api } from 'lwc';

export default class Editform extends LightningElement {
    // props parent/child we need it
    @api data;
    error;
    editBook(e) {
        e.preventDefault();
        let title = this.template.querySelector('#title').value;
        let author = this.template.querySelector('#author').value;
        let id = this.data.id;
        if (title == '' || author == '') {
            this.error = 'remplir tous les champs';
        } else {
            fetch('http://localhost:8000/api/books/' + id, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, author })
            })
                .then((res) => res.json())
                .then((res) => {
                    location.reload();
                });
        }
    }
}
