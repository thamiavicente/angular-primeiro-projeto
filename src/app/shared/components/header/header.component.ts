import { Component } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  title = 'Welcome';

  constructor(
    private authService: AuthService,
  ) { }

  logout() {
    this.authService.logout();
  }

}
