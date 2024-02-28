import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[MarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {

  @Input() corDefundo = 'yellow'; 
  @Input() corDoTexto = 'white';

  constructor(private elemento: ElementRef) { }
  
  ngOnInit(): void {
    this.mudarFundo();
  }

  private mudarFundo(cor: string = 'yellow') {
    this.elemento.nativeElement.style.backgroundColor = this.corDefundo || cor;
    this.elemento.nativeElement.style.color = this.corDoTexto;
    this.elemento.nativeElement.style.fontWeight = 'bold';
  }
}
