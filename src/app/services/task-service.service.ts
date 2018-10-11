import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _folderid: BehaviorSubject<number>;
  private _taskid: BehaviorSubject<number>;

  constructor() {
    this._folderid = new BehaviorSubject<number>(null);
    this._taskid = new BehaviorSubject<number>(null);
  }
  get folderid$(): Observable<number> {
    return this._folderid.asObservable();
  }

  get folderid(): number {
    return this._folderid.value;
  }
  set folderid(nextState: number) {
    this._folderid.next(nextState);
  }

  get taskid$(): Observable<number> {
    return this._taskid.asObservable();
  }

  get taskid(): number {
    return this._taskid.value;
  }
  set taskid(nextState: number) {
    this._taskid.next(nextState);
  }
}
