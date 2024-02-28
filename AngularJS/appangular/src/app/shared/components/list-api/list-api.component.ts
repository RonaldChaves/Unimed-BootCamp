import { Component, OnInit } from '@angular/core';
import { ApiResponse, ListService } from '../../services/list.service';

@Component({
  selector: 'spa-list-api',
  templateUrl: './list-api.component.html',
  styleUrls: ['./list-api.component.css']
})
export class ListApiComponent implements OnInit {

  personagens: any = [ ];

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    this.listService.getList().subscribe(result => {
      this.personagens = result.results;
      console.log(this.personagens)
    })
  }
}
