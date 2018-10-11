import { Pipe, PipeTransform } from '@angular/core';
import { Note } from 'classes/note';

@Pipe({
  name: 'searchNoteFilter'
})
export class SearchNoteFilter implements PipeTransform {

  transform(notes: Note[], searchText?: string): Note[] {
    console.log('piped');
    if (!notes) { return []; };
    if (!searchText) { return notes; };

    searchText = searchText.toLowerCase();
    const filteredNotes = notes.filter(note => {
      return note.title.toLowerCase().includes(searchText);
    });
    // console.log(filteredNotes);
    return filteredNotes;
  }

}
