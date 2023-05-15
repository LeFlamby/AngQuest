import { Component } from '@angular/core';
import { isFormArray } from '@angular/forms';

export class User {
  name: string;
  firstName: string;
  age: number;
  quote: string;
  photo: string;
  isAgeHidden: boolean;

  constructor(
    name: string,
    firstName: string,
    age: number,
    quote: string,
    photo: string,
    isAgeHidden: boolean
  ) {
    this.name = name;
    this.firstName = firstName;
    this.age = age;
    this.quote = quote;
    this.photo = photo;
    this.isAgeHidden = isAgeHidden;
  }
}

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User;

  constructor() {
    this.user = new User(
      'Doe',
      'John',
      25,
      '',
      'https://randomuser.me/api/portraits/lego/2.jpg',
      false
    );
  }

  /*  user = {
    name : 'Doe',
    firstName : 'John', 
    age : 25,
    quote : '',
    photo : 'https://randomuser.me/api/portraits/lego/2.jpg',
    isAgeHidden : false
  }; */

  isAgeHidden(): void {
    this.user.isAgeHidden = !this.user.isAgeHidden;
  }
}
