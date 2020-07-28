import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], search: string): any {
    if (!items) {
      return [];
    }
    if (!search) {
      return items;
    }
    search = search.toLowerCase().trim();
    return items.filter((x) => x.name.toLowerCase().includes(search));
  }
}
