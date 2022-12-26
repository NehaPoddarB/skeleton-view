import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Skeleton View';
  dataList = undefined;

  loadItems() {
    this.dataList = [];
    // mock server request
    setTimeout(() => {
      this.dataList = [{
        id: 1,
        title: 'Skeleton-loader',
        body: 'The Skeleton view Implemented for cards'
      }, {
        id: 2,
        title: 'Skeleton-loader',
        body: ' The Skeleton view Implemented for cards'
      }, {
        id: 3,
        title: 'Skeleton-loader',
        body: 'The Skeleton view Implemented for cards.'
      }, {
        id: 4,
        title: 'Skeleton-loader',
        body: 'The Skeleton view Implemented for cards.'
      }, {
        id: 5,
        title: 'Skeleton-loader',
        body: 'Omnis exercitationem est facilis minima molestiae laudantium.'
      }];
    }, 2000);
  }
//To generate more then ones fake card for skeleton view
  generateFake(count: number): Array<number> {
    const indexes = [];
    for (let i = 0; i < count; i++) {
      indexes.push(i);
    }
    return indexes;
  }
}
