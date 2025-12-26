import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Pokemon app';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // Auto-create default user if none exists
    if (!this.userService.user) {
      this.userService.user = { id: 1, username: 'Trainer', pokemon: [] };
    }
  }
}
