import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class Header {

  showDepartments = false;
  showPlacements = false;
  mobileMenuOpen = false;
  
  openDepartments() {
    this.showDepartments = true;
  }

  closeDepartments() {
    this.showDepartments = false;
  }

  openPlacements() {
    this.showPlacements = true;
  }

  closePlacements() {
    this.showPlacements = false;
  }
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }


}