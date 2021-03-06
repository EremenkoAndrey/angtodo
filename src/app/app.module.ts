import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { ToDoComponent } from './Todo/ToDo.component';
import { TodoListComponent } from './Todo-List/Todo-List.component';
import { TaskComponent } from './Task/Task.component';
import { TodoFormComponent } from './Form/Form.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        ToDoComponent,
        TodoFormComponent,
        TodoListComponent,
        TaskComponent
    ],
    bootstrap: [ ToDoComponent ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AppModule { }
