import { Component } from '@angular/core';
import { CellComponent } from '../cell/cell.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grid',
  imports: [CommonModule, CellComponent],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  rows = Array(20)
  cols = Array(36)
}
