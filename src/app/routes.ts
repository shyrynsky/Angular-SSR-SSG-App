import {Routes} from '@angular/router';
import { BooksComponent } from './pages/books/books.component';

const routeConfig: Routes = [
    {
      path: '',
      redirectTo: 'books',
      pathMatch: 'full',
      title: 'Home page',
    },
    {
      path: 'books',
      component: BooksComponent,
      title: 'Books',
    }
  ];
export default routeConfig;
