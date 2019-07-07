import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'paginator'
})
export class PaginatorPipe implements PipeTransform {

  transform(tasks: any, pageIndex: number, pageSize: number, length: number): any {
    if (tasks.length === 0) {
      return tasks;
    }

    const tasksCopy = tasks.slice();

    return tasksCopy.filter((task, index) => {
      return index >= pageIndex * pageSize && index < (pageIndex + 1) * pageSize && index < length;
    });
  }
}


























