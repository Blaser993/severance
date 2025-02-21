import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef, OnInit } from '@angular/core';

import { CellComponent } from "./cell/cell.component";
import { GridComponent } from "./grid/grid.component";
import { GridHeaderComponent } from "./grid-header/grid-header.component";
import { GridFooterComponent } from "./grid-footer/grid-footer.component";

@Component({
  selector: 'app-macrodatarefinement',
  standalone:true,
  imports: [GridComponent, GridHeaderComponent, GridFooterComponent],
  templateUrl: './macrodatarefinement.component.html',
  styleUrl: './macrodatarefinement.component.scss'
})
export class MacrodatarefinementComponent  {



}
