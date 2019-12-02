import { Component, OnInit } from '@angular/core';
import {BookService} from "../../services/book.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bookReg

  constructor(private bookService:BookService, private  route:ActivatedRoute) { }

  ngOnInit() {
        this.getBookReg(this.route.snapshot.params.id);
  }

  getBookReg(id:number){
    this.bookService.getBook(id).subscribe(
      data =>{
        this.bookReg =data;
      },

      err => console.error(err),
      () => console.log('Book Loaded')
    );
  }

}
