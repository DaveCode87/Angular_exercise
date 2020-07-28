import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchId',
})
export class SearchIdPipe implements PipeTransform {
  transform(items: any[], search: number): any {
    if (!items) {
      return [];
    }
    if (!search) {
      return items;
    }
    return items.filter((x) => x.id.includes(search));
  }
}
