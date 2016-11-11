import { Component, Input } from '@angular/core';

@Component({
    selector: 'todo-list',
    templateUrl: 'Todo-list.component.html'
})
export class TodoListComponent {
    @Input() todos: string[];

}