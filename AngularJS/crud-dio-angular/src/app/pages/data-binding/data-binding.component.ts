import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  text = 'Ronald Chaves'
  textred = false;
  bgColor = 'grey';

  constructor() { }

  ngOnInit(): void {
  }

  click(){
    alert('Clicou');
  }

  keyUpEvent(value: any){
    return value;
  }

  cor(){
    this.textred = true;
  }
}
