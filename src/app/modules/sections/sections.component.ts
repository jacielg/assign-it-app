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

  ngOnInit() { }


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
      this.importedData(data);
    };
    reader.readAsBinaryString(target.files[0]);
  }

  importedData(dataImported: any[]) {
    this.data = new Array<Sections>();
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
      // if (this.data) {
      //   this.sectionService.createSection(this.data).subscribe(() => {
      //     alert('Success');
      //   })
      // }
    }
  }

  downloadTemplate() {
    const template = new Array<Sections>();
    const section: Sections = new Sections();
    section.seccion = '';
    section.materia = '';
    section.anio = 0;
    section.maestro = '';
    section.capacidad = 0;
    section.sede = '';
    template.push(section);

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(template);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'SectionsTemplate.xlsx');
  }

}
