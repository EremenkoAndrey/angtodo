import { Component, Input } from '@angular/core';

@Component({
    selector: 'todo-item',
    templateUrl: 'Task.component.html'
})
export class TaskComponent {
    @Input() todo: string[];

}