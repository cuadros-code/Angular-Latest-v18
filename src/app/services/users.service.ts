import { Injectable, signal } from '@angular/core';
import { User } from '@interfaces/req-response';

interface State {
  users   : User[];
  loading : boolean;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  #state = signal<State>({
    users: [],
    loading: true,
  });

  constructor() {
    console.log("Loading Users");
    
  }

}
