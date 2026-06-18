import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
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

  scrollToSection(sectionId: string) {

    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }

    this.mobileMenuOpen = false;
  }
}