import {Routes} from '@angular/router';
import { BooksComponent } from './pages/books/books.component';
import { AuthorComponent } from './pages/author/author.component';

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
    },
    {
      path: 'author/:id',
      component: AuthorComponent,
      title: 'Author',
    }
  ];
export default routeConfig;
