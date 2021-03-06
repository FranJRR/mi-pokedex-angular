import { Component, ViewChild, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';
import { MatSidenav } from '@angular/material/sidenav';
// Services
import { SidenavService } from './services/sidenav/sidenav.service';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Pokédex';

  @ViewChild('drawer')
  public sidenav: MatSidenav;

  constructor(
    public media: MediaObserver,
    private sidenavService: SidenavService,
  ) {}

  ngAfterViewInit(): void {
    this.sidenavService.setSidenav(this.sidenav);
  }
  
  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyCGQCc2PCFEMU4PRBjzEUDyPPF7zDMzHns",
      authDomain: "pokeangular-d7a8b.firebaseapp.com",
    })
  }
}
