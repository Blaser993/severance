import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, DoCheck, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-cell',
  imports: [],
  templateUrl: './cell.component.html',
  styleUrl: './cell.component.scss'
})
export class CellComponent implements AfterViewInit {
  number: number | undefined

// OnChanges x
// OnInit x
// DoCheck X
// AfterContentInit x
// AfterContentChecked x
  // Componente figlio –> OnChanges
  // Componente figlio –> OnInit
  // Componente figlio –> DoCheck
  // Componente figlio –> AfterContentInit
  // Componente figlio –> AfterContentChecked
  // Componente figlio –> AfterViewInit
  // Componente figlio –> AfterViewChecked
  // AfterViewInit x
  // AfterViewChecked x
  
  ngAfterViewInit(): void{
      
   setTimeout(() => {
    
     this.number = Math.floor(Math.random() * 10);
   }, 0);
      
  
  }

    









  

  
  


}
