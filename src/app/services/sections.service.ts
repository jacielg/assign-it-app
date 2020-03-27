import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FileData } from '../models/file-data';
import { Sections } from '../models/sections';

@Injectable({
  providedIn: 'root'
})
export class SectionsService {
  apiUrl = 'http://localhost:5000/api/Sections';

  constructor(private http: HttpClient) { }

  createSection(section: FileData[]) {
    return this.http.post<FileData[]>(this.apiUrl + '/Add', section);
  }

  getNotAssignedSections() {
    return this.http.get<FileData[]>(this.apiUrl + '/not-assigned');
  }

  getAssignedSections() {
    return this.http.get<Sections[]>(this.apiUrl);
  }
}
