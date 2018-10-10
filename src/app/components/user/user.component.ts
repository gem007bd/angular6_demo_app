import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Title } from '@angular/platform-browser';

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
  posts: Post[];
  isEdit: boolean;

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
    this.dataService.getPosts().subscribe((posts) => {
       // console.log(posts);
       this.posts = posts;
    });
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

  toggleEdit() {
    this.isEdit = !this.isEdit;
  }
}

interface Address {
  street: string;
  city: string;
  state: string;
}

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}
