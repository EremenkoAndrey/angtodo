import { Injectable } from '@angular/core';

import { ITask } from './../models/Task';
import { mock } from './../mocks/todos.mock';

@Injectable()
export class TodoServise {
    get getData(): ITask[] {
        return mock;
    }
}