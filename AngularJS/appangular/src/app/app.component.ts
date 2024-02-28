import { Component, OnInit } from '@angular/core';
import { PeopleService } from './shared/services/people.service';

@Component({
  selector: 'spa-root', // tag HTML que mostra o template.
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  text = 'Angular funcionando!';
  numero = -10;
  name: string = '';

  constructor() {}

  ngOnInit(): void{
    let interval = setInterval(() => {
      this.numero++;
      if(this.numero == 10){
        clearInterval(interval);
      }
    }, 1000)
  }

  cTitle(){
    if(this.text === 'Angular funcionando!')
      this.text = 'Mudou o titulo';
    else
      this.text = 'Angular funcionando!';
  }
  
  
}
