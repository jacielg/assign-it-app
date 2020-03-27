import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Sections } from '../models/section';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  apiUrl = 'http://localhost:60764/api/Sections';

  constructor(private http: HttpClient) { }

  createSection(section: Sections[]) {
    return this.http.post<Sections[]>(this.apiUrl + '/Add', section);
  }
}
