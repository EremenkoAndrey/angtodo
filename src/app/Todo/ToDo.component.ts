import { Component, OnInit } from '@angular/core';

import { Task } from './../models/Task';
import { TodoServise } from './../servises/todo.servise';

@Component({
    selector: 'todo-app',
    templateUrl: 'ToDo.component.html',
    providers: [TodoServise]
})
export class ToDoComponent implements OnInit{
    title: string;
    todos: Task[];

    constructor(private todoServise: TodoServise){
        this.title = 'It ToDo';
        this.todos = [];
    }

    ngOnInit(){
        this.todos = this.todoServise.getData;
    }

    onAddTask(title: string) {
        this.todos.push(new Task(title))
    }

}