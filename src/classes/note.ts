export class Note {
    id: number;
    title: string;
    date: string;
    text: string

    constructor(id, title, date, text) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.text = text;
    }
};
