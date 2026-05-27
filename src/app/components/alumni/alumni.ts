import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumni',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumni.html',
  styleUrls: ['./alumni.css']
})
export class Alumni {

  alumniList = [

    {
      name: 'Member 1',
      role: 'Technical Architect',
      company: 'HCL Technologies',
      image: 'assets/alumni/alumni1.jpeg'
    },

    {
      name: 'Member 2',
      role: 'Managing partner',
      company: 'SSM Technologies private limited',
      image: 'assets/alumni/alumni2.jpeg'
    },

    {
      name: 'Member 3',
      role: 'Asset IM Specialist - SAP',
      company: 'Qatar Shell GTL',
      image: 'assets/alumni/alumni3.jpeg'
    },

    {
      name: 'Member 4',
      role: 'Program Manager',
      company: 'SVARAPPS Technologies Group',
      image: 'assets/alumni/alumni4.jpeg'
    },

    {
      name: 'Member 5',
      role: 'Functional Safety Assessor ',
      company: 'ZF  India Private Limited',
      image: 'assets/alumni/alumni5.jpeg'
    },

    {
      name: 'Member 6',
      role: 'Motor Vehicles Inspector',
      company: 'Telangana Transport Department',
      image: 'assets/alumni/alumni6.jpeg'
    },

    {
      name: 'Member 7',
      role: 'Manging director',
      company: 'provac solutions(opc) pvt ltd',
      image: 'assets/alumni/alumni7.jpeg'
    },

    {
      name: 'Member 8',
      role: 'loco pilot',
      company: 'Railway Department Guntur',
      image: 'assets/alumni/alumni8.jpeg'
    }

  ];

  visibleCount = 4;

  get visibleAlumni() {
    return this.alumniList.slice(0, this.visibleCount);
  }

  showMore() {
    this.visibleCount += 4;
  }

}