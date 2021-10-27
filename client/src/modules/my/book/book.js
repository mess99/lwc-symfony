import { LightningElement, track } from 'lwc';

export default class Book extends LightningElement {
    books = [];
    show = false;
    edit = false;
    dataEdit = {};

    // add get before the function to call it without click
    get handleFetch() {
        fetch('http://localhost:8000/api/books')
            .then((response) => response.json())
            .then((data) => {
                return (this.books = data['hydra:member']);
            });
    }

    deleteBook(e) {
        let id = e.currentTarget.dataset.id;
        fetch('http://localhost:8000/api/books/' + id, {
            method: 'DELETE'
        })
            .then((res) => location.reload())
            .catch((err) => console.log(err));
    }
    hoverDelete(e) {
        e.target.parentNode.style.backgroundColor = 'red';
    }
    hoverStop(e) {
        e.target.parentNode.style.backgroundColor = '';
    }

    showAdd() {
        this.edit = false;
        this.show = true;
    }
    openEdit(e) {
        this.show = false;
        this.edit = true;
        return (this.dataEdit = {
            id: e.target.parentNode.firstChild.innerHTML,
            title: e.target.parentNode.children[1].innerHTML,
            author: e.target.parentNode.children[2].innerHTML
        });
    }
}
