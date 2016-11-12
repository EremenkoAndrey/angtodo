import { Component, Input } from '@angular/core';
import { Task } from './../models/Task';

@Component({
    selector: 'todo-list',
    templateUrl: 'Todo-list.component.html'
})
export class TodoListComponent {
    @Input() todos: Task[];

    onTaskDelete(task: Task){
        if(task) {
            let index = this.todos.indexOf(task);
            if(index !== -1) {
                this.todos.splice(index, 1);
            }
        }
    }
}