import { Component, OnInit } from '@angular/core';
import { IndexedDbService, UserModel, UserService } from '../../services/indexed-db.service';

@Component({
  selector: 'app-dantist-list',
  templateUrl: './dantist-list.component.html',
  styleUrls: ['./dantist-list.component.css']
})
export class DantistListComponent implements OnInit {

  constructor(private userService: UserService) { }
  dentists: UserModel[];
  ngOnInit() {
    this.userService.getItems().then(function(items){
      this.dentists = items;
      console.log(items)
    });
  }
}
