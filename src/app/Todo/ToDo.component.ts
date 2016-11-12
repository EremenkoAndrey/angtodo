import { Component } from '@angular/core';
import { Task } from './../models/Task';

@Component({
    selector: 'todo-app',
    templateUrl: 'ToDo.component.html'
})
export class ToDoComponent {
    title: string;
    todos: Task[];

    constructor(){
        this.title = 'It ToDo';
        this.todos = []
    }

    onAddTask(title: string) {
        this.todos.push(new Task(title))
    }

}