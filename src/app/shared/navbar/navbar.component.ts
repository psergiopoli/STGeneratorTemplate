import { Router } from '@angular/router';
import { GlobalEventsManager } from './../../global.eventmanager';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

  showAdminMenu = false;

  constructor(private globalEvents: GlobalEventsManager,private router: Router,private globalEventsManager: GlobalEventsManager) { }

  ngOnInit() {
    this.globalEvents.showNavBar.subscribe((event:any) =>{
      this.showAdminMenu = true;
    });
    this.globalEvents.hideNavBar.subscribe((event:any) =>{
      this.showAdminMenu = false;
    });
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.globalEventsManager.hideNavBar.emit(true);
    this.router.navigate(['/']);
  }

}
