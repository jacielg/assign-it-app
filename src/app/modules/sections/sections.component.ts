import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Sections } from 'src/app/models/section';
import { SectionsService } from '../../services/sections.service';
//type AOA = any[][];

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.scss']
})
export class SectionsComponent implements OnInit {
  //srcResult: any;
  public inputLabel: string;
  public data: Sections[] = [];

  constructor(private sectionService: SectionsService) { }

  ngOnInit() {
  }

  import(evt: any) {
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) {
      throw new Error('Cannot use multiple files');
    }
    this.inputLabel = evt.target.files[0].name;
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      const wsname: string = wb.SheetNames[0];
      const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      const data = (XLSX.utils.sheet_to_json(ws, { header: 2 }));
      // this.fileChange.emit(data);
      this.importedData(data);
      console.log('Import Data: ', data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  importedData(dataImported: any[]) {
    this.data = new Array<Sections>();
    console.log('Imported Data: ', dataImported);
    if (dataImported) {
      dataImported.forEach(item => {
        const newItemImported = new Sections();
        newItemImported.seccion = item.Seccion;
        newItemImported.materia = item.Materia;
        newItemImported.anio = item.Anio;
        newItemImported.maestro = item.Maestro;
        newItemImported.capacidad = item.Capacidad;
        newItemImported.sede = item.Sede;
        this.data.push(newItemImported);
      });
      if (this.data) {
        this.sectionService.createSection(this.data).subscribe(() => {
          alert('Success');
        })
      }
    }
    console.log('New Imported Data: ', this.data);
  }

  // onFileChange(evt: any) {
  //   /* wire up file reader */
  //   const target: DataTransfer = <DataTransfer>(evt.target);
  //   if (target.files.length !== 1) throw new Error('Cannot use multiple files');
  //   const reader: FileReader = new FileReader();
  //   reader.onload = (e: any) => {
  //     /* read workbook */
  //     const bstr: string = e.target.result;
  //     const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

  //     /* grab first sheet */
  //     const wsname: string = wb.SheetNames[0];
  //     const ws: XLSX.WorkSheet = wb.Sheets[wsname];

  //     /* save data */
  //     this.data = <AOA>(XLSX.utils.sheet_to_json(ws, { header: 1 }));
  //     console.log(this.data);
  //   };
  //   reader.readAsBinaryString(target.files[0]);
  // }

}
