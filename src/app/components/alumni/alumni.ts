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
      name: 'S.Ibraheem Basha',
      role: 'Technical Architect',
      company: 'HCL Technologies',
      image: 'assets/alumni/alumni1.jpeg'
    },

    {
      name: 'B.Venkata Seshu',
      role: 'Managing partner',
      company: 'SSM Technologies private limited',
      image: 'assets/alumni/alumni2.jpeg'
    },

    {
      name: 'G. Ravi Kumar',
      role: 'Asset IM Specialist - SAP',
      company: 'Qatar Shell GTL',
      image: 'assets/alumni/alumni3.jpeg'
    },

    {
      name: 'Deekshith ',
      role: 'Program Manager',
      company: 'SVARAPPS Technologies Group',
      image: 'assets/alumni/alumni4.jpeg'
    },

    {
      name: 'M.Paidi Rajugopal ',
      role: 'Functional Safety Assessor ',
      company: 'ZF  India Private Limited',
      image: 'assets/alumni/alumni5.jpeg'
    },

    {
      name: 'K Vasudeva Rao',
      role: 'Motor Vehicles Inspector',
      company: 'Telangana Transport Department',
      image: 'assets/alumni/alumni6.jpeg'
    },

    {
      name: 'Shyam sundar',
      role: 'Manging director',
      company: 'provac solutions(opc) pvt ltd',
      image: 'assets/alumni/alumni7.jpeg'
    },

    {
      name: 'Shyam kumar',
      role: 'loco pilot',
      company: 'Railway Department Guntur',
      image: 'assets/alumni/alumni8.jpeg'
    },

    {
      name: 'Dr. T. Jagannadha Swamy',
      role: 'Dean, Alumni Affairs & Professor of ECEr',
      company: 'GRIET, Hyderabad',
      image: 'assets/alumni/alumni9.jpeg'
    },

    {
      name: 'Member 10',
      role: 'Associate Professor,ECE',
      company: 'Shri Vishnu Engineering college for Women.',
      image: 'assets/alumni/alumni10.jpeg'
    },

    {
      name: 'kota praksh',
      role: 'Sector leader IT Security',
      company: 'Kyndryl',
      image: 'assets/alumni/alumni11.jpeg'
    },

    {
      name: 'I. Rajasekhar',
      role: 'Superintendent, O/o the RJDIE,',
      company: 'Government',
      image: 'assets/alumni/alumni12.jpeg'
    },

     {
      name: 'L B Srinivas',
      role: 'Loco Pilot',
      company: 'IRCTC',
      image: 'assets/alumni/alumni13.jpeg'
    },

    {
      name: 'B.Tammiraju ',
      role: 'Movie Editor',
      company: 'Film Industry',
      image: 'assets/alumni/alumni14.jpeg'
    },

  ];

  visibleCount = 4;

  get visibleAlumni() {
    return this.alumniList.slice(0, this.visibleCount);
  }

  showMore() {
    this.visibleCount += 4;
  }

}