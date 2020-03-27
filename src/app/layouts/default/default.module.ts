import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { SectionsComponent } from 'src/app/modules/sections/sections.component';
import { NoSectionsComponent } from 'src/app/modules/no-sections/no-sections.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AssignedSectionsComponent } from 'src/app/modules/assigned-sections/assigned-sections.component';
@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    SectionsComponent,
    NoSectionsComponent,
    AssignedSectionsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatPaginatorModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    NgxDatatableModule,
    MatIconModule,
    MatSnackBarModule,
  ]
})
export class DefaultModule { }
