import { Component, OnInit } from '@angular/core';
import { SectionsService } from 'src/app/services/sections.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sections } from 'src/app/models/sections';

@Component({
  selector: 'app-assigned-sections',
  templateUrl: './assigned-sections.component.html',
  styleUrls: ['./assigned-sections.component.scss']
})
export class AssignedSectionsComponent implements OnInit {
  public assignedSections: Sections[] = [];

  constructor(private sectionsService: SectionsService, private snackBar: MatSnackBar) { }

  ngOnInit() { }

  showAssignedSections() {
    this.sectionsService.getAssignedSections().subscribe(item => {
      this.assignedSections = item;
      this.snackBar.open('Sections Loaded', 'Dismiss', {
        duration: 3000
      });
      if (this.assignedSections.length === 0) {
        this.snackBar.open('No Sections Found', 'Dismiss', {
          duration: 3000
        });
      }
    });
  }

}
