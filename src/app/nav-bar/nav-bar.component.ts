import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService
  ) { }

  ngOnInit(): void {
    
  }

  onLogoutClick(): void {
    this.tokenStorageService.signOut()
  }

}
