import { Component, OnInit } from '@angular/core';
import { SectionsService } from '../../services/sections.service';
import { FileData } from '../../models/file-data';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-no-sections',
  templateUrl: './no-sections.component.html',
  styleUrls: ['./no-sections.component.scss']
})
export class NoSectionsComponent implements OnInit {
  public data: FileData[] = [];

  constructor(private sectionsService: SectionsService, private snackBar: MatSnackBar) { }

  ngOnInit() { }

  showNotAssignedSections() {
    this.sectionsService.getNotAssignedSections().subscribe(item => {
      this.data = item;
      this.snackBar.open('Sections Loaded', 'Dismiss', {
        duration: 3000
      });
      if (this.data.length === 0) {
        this.snackBar.open('No Sections Found', 'Dismiss', {
          duration: 3000
        });;
      }
    });
  }
}
