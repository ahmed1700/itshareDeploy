import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get(this.url);
  }
  update(resource, newResource) {
    return this.http.put(this.url + '/' + resource.id, newResource);
  }
  delete(resource) {
    return this.http.delete(this.url + '/' + resource.id);
  }

  create(newresource) {
    return this.http.post(this.url, JSON.stringify(newresource));
  }
}
