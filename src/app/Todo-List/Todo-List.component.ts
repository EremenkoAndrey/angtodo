import { Component, Input } from '@angular/core';
import { Task } from './../models/Task';

@Component({
    selector: 'todo-list',
    templateUrl: 'Todo-list.component.html'
})
export class TodoListComponent {
    @Input() todos: Task[];

    get sortedTodos() {
        return this.todos
            .sort((a: Task, b: Task)=> {
                if (a.title > b.title) return 1;
                else if (a.title < b.title) return -1;
                else return 0;
            })
            .sort((a: Task, b: Task)=> {
                if (a.done && !b.done) return 1;
                else if (!a.done && b.done) return -1;
                else return 0;
            })
    }

    onTaskDelete(task: Task){
        if(task) {
            let index = this.todos.indexOf(task);
            if(index !== -1) {
                this.todos.splice(index, 1);
            }
        }
    }
}