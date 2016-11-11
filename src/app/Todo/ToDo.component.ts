import { Component } from '@angular/core';

@Component({
    selector: 'todo-app',
    templateUrl: 'ToDo.component.html',
    styleUrls: ['ToDo.component.css']
})
export class ToDoComponent {
    title: string;
    todos: string[];

    constructor(){
        this.title = 'It ToDo';
        this.todos = []
    }

    addTask(taskInput: HTMLInputElement, event?: any) {
        if(event) {
            event.preventDefault();
        }
        var newTask: string = taskInput.value;
        if(newTask.length === 0) return;
        this.todos.push(newTask);
        taskInput.value = '';
    }

}