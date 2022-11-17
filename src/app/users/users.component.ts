import { Component, OnInit } from '@angular/core';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UsersService) { }


Usersdata : any = []

 //data : use

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data => {
      console.log(data);
      this.Usersdata = data;
    })
  }


}
