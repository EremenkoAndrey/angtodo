import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'todo-form',
    templateUrl: 'Form.component.html'
})

export class TodoFormComponent {
    @Output() addNewTask: EventEmitter<any> = new EventEmitter();

    addTask(taskInput: HTMLInputElement, event?: any) {
        if(event) {
            event.preventDefault();
        }
        if(taskInput.value.length === 0) return;
         this.addNewTask.emit(taskInput.value);
         taskInput.value = '';
    }
}