import { Component, OnInit } from '@angular/core';
import { TaskService } from 'app/services/task-service.service';

@Component({
  selector: 'app-editview',
  templateUrl: './editview.component.html',
  styleUrls: ['./editview.component.scss']
})

export class EditviewComponent implements OnInit {
  editor: HTMLIFrameElement;
  showingSourceCode = false;
  isInEditMode = true;
  taskid;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    console.log('on init editview');
    this.editor = (<HTMLIFrameElement>document.getElementById('editor'));
    this.editor.contentWindow.document.designMode = 'On';

    this.taskService.taskid$.subscribe(
      (taskid) => {
        console.log('changed', taskid);
        this.taskid = taskid;
      }
    );
  }

  execCmd(command) {
    this.editor.contentWindow.document.execCommand(command, false, null);
  }

  execCommandWithArg(command, arg) {
    this.editor.contentWindow.document.execCommand(command, false, arg);
  }

  toggleSource() {
    if (this.showingSourceCode) {
      this.editor.contentWindow.document.getElementsByTagName('body')[0].innerHTML
        = this.editor.contentWindow.document.getElementsByTagName('body')[0].textContent;
      this.showingSourceCode = false;
    } else {
      this.editor.contentWindow.document.getElementsByTagName('body')[0].textContent
        = this.editor.contentWindow.document.getElementsByTagName('body')[0].innerHTML;
      this.showingSourceCode = true;
    }
  }
}
