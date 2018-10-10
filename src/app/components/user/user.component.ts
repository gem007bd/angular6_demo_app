import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];
  hello: any;

  constructor(private dataService: DataService) {
    console.log('Constructor ran..');
  }

  ngOnInit() {
    console.log('ngOnInit');

    this.name = 'John Doe';
    this.email = 'abcd@email.com';
    this.age = 30;
    this.address = {
      street: '50 Main st',
      city: 'Boston',
      state: 'MA'
    };
    this.hobbies = [
      'Write codes',
      'Go to Gym',
      'ride bicycle',
      'play guiter'
    ];
    this.hello = true;
  }
  onClick() {
    this.name = 'Gem';
    this.hobbies.push('New hobby');
    console.log('this is the click button');
  }

  addHobby(hobby) {
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby) {
    for ( let i = 0; i < this.hobbies.length; i++ ) {
        if (this.hobbies[i] === hobby) {
          this.hobbies.splice(i, 1);
        }
    }
   // this.hobbies.shift(hobby);
    console.log(hobby);
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}
