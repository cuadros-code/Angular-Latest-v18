import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { UsersService } from '@services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export default class UsersComponent {

  public userService = inject( UsersService );
  
}
