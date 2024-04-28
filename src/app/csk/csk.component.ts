import { Component } from '@angular/core';

export interface staff{
  position:number;
Name:string;
Role:string;

}

const ELEMENT_DATA:staff[]=[{
  position:1,Name:'Kasinath Viswanathan',Role:'CEO'
},{
  position:2,Name:'Russell Radhakrishnan',Role:'Team manager'
},
{
  position:3,Name:'Stephen Fleming',Role:'Head coach'
},
{
  position:4,Name:'Michael Hussey',Role:'Batting coach'
},{
  position:5,Name:'	Dwayne Bravo',Role:'Bowling coach'
}
];

@Component({
  selector: 'app-csk',
  templateUrl: './csk.component.html',
  styleUrl: './csk.component.css'
})
export class CSKComponent {
  displayedColumns: string[] = ['position', 'Name', 'Role'];
  dataSource =ELEMENT_DATA;
}
