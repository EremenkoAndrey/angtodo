import {Component, Input, Output, EventEmitter} from '@angular/core';
import { Task } from './../models/Task';

@Component({
    selector: 'todo-item',
    templateUrl: 'Task.component.html',
    styleUrls: ['Task.component.css']
})
export class TaskComponent {
    @Input() task: Task;
    @Output() deletedTask: EventEmitter<any> = new EventEmitter();

    toggleDone(){
       this.task.done = !this.task.done;
    }

    deleteTask() {
        this.deletedTask.emit(this.task);
    }
}
