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


  // @ViewChild('gridContainer') gridContainer!: ElementRef;
  // cellSize = 50;
  // buffer = 5;
  // visibleCells: { x: number; y: number }[] = [];
  // gridOffsetX = 0;
  // gridOffsetY = 0;
  // constructor(private cdr: ChangeDetectorRef) {}

  // ngOnInit() {
  //   console.log('Componente caricato');

  // }

  // ngAfterViewInit() {
  //   this.centerGrid();
  //   this.updateVisibleCells();
  // }

  // onScroll() {
  //   this.updateVisibleCells();
  // }

  // centerGrid() {
  //   const container = this.gridContainer.nativeElement;
  //   this.gridOffsetX = container.clientWidth / 2;
  //   this.gridOffsetY = container.clientHeight / 2;
  //   container.scrollLeft = container.scrollWidth / 2 - container.clientWidth / 2;
  //   container.scrollTop = container.scrollHeight / 2 - container.clientHeight / 2;
  // }

  // updateVisibleCells() {
  //   const container = this.gridContainer.nativeElement;
  //   const scrollLeft = container.scrollLeft;
  //   const scrollTop = container.scrollTop;
  //   const containerWidth = container.clientWidth;
  //   const containerHeight = container.clientHeight;

  //   const startX = Math.floor((scrollLeft - this.gridOffsetX) / this.cellSize) - this.buffer;
  //   const startY = Math.floor((scrollTop - this.gridOffsetY) / this.cellSize) - this.buffer;
  //   const endX = Math.ceil((scrollLeft + containerWidth - this.gridOffsetX) / this.cellSize) + this.buffer;
  //   const endY = Math.ceil((scrollTop + containerHeight - this.gridOffsetY) / this.cellSize) + this.buffer;

  //   this.visibleCells = [];
  //   for (let x = startX; x < endX; x++) {
  //     for (let y = startY; y < endY; y++) {
  //       this.visibleCells.push({ x, y });
  //     }
  //   }
  // }

  // isCentral404(x: number, y: number): boolean {
  //   return (x === 0 && y === 0) || (x === -1 && y === 0) || (x === 1 && y === 0);
  // }

  // getNumber(x: number, y: number): string {
  //   if (x === -1 && y === 0) return '4';
  //   if (x === 0 && y === 0) return '0';
  //   if (x === 1 && y === 0) return '4';
  //   return Math.abs(((x * 31) ^ (y * 17)) % 10).toString();
  // }
}
