import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  data: any

  constructor(
    private tokenStorageService: TokenStorageService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.testAuthEndpoint().subscribe({
      next: data => {
        this.data = data.message
        // console.warn(data)
      },

      error: err => {
        this.data = err.error
        // console.warn(err)
      }
    })
  }

}
