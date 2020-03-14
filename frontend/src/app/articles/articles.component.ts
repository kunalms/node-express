import {Component, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from "../models/user";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  loading = false;
  users: User[];

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.loading = true;
    this.userService.getAll().subscribe(users => {
      this.loading = false;
      this.users = users;
      console.log(users);
    });
  }

}
