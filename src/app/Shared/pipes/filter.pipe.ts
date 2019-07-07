import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(tasks: any, field: string, text: string): any {
    if (text === '' || tasks.length === 0) {
      return tasks;
    }

    const tasksCopy = tasks.slice();
console.log(tasksCopy);
    field = field === 'no.' ? 'id' : field;

    return tasksCopy.filter(task => (task[field] + '').toLowerCase().indexOf(text.toLowerCase()) !== -1);
  }

}
