import { ajax } from 'rxjs/ajax';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NewsItem } from '@src/modules/news/models';

export function getNews(): Observable<NewsItem[]> {
  return ajax.getJSON<NewsItem[]>('/static/news/news.json', {
    'Cache-Control': 'no-cache, no-store, must-revalidate', 
    'Pragma': 'no-cache', 
    'Expires': '0'
  }).pipe(
    catchError(error => of([]))
  )
}