import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HistoryComponent } from '../history/history.component';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  constructor(private dialog:MatDialog){}
  openDialog(): void {
    const dialogRef = this.dialog.open(HistoryComponent, {
      width: '1000px',height:'500px'
      
    });
}}
