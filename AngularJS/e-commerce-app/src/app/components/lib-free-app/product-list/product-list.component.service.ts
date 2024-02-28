import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Book } from "./model/book";

@Injectable({
   providedIn: 'root'
})
export class BooksService{

   apiURL = 'https://sheet.best/api/sheets/d50275e5-8eab-438d-9a96-bb589b25f46e'
   httpOptions = {
      Headers: new HttpHeaders({
         'content-type': 'application/json'
      })
   }

   constructor(private httpClient: HttpClient){}

   getBook(){
      return this.httpClient.get(this.apiURL)
   }
}