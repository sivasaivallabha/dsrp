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
      role: 'Data Analyst',
      company: 'Infosys',
      image: 'assets/alumni/alumni2.jpg'
    },

    {
      name: 'Member 3',
      role: 'Web Developer',
      company: 'Wipro',
      image: 'assets/alumni/alumni3.jpg'
    },

    {
      name: 'Member 4',
      role: 'Cloud Engineer',
      company: 'Accenture',
      image: 'assets/alumni/alumni4.jpg'
    },

    {
      name: 'Member 5',
      role: 'AI Engineer',
      company: 'Google',
      image: 'assets/alumni/alumni5.jpg'
    },

    {
      name: 'Member 6',
      role: 'System Engineer',
      company: 'IBM',
      image: 'assets/alumni/alumni6.jpg'
    },

    {
      name: 'Member 7',
      role: 'Frontend Developer',
      company: 'Capgemini',
      image: 'assets/alumni/alumni7.jpg'
    },

    {
      name: 'Member 8',
      role: 'Backend Developer',
      company: 'Oracle',
      image: 'assets/alumni/alumni8.jpg'
    },

    {
      name: 'Member 9',
      role: 'Cyber Security Analyst',
      company: 'HCL',
      image: 'assets/alumni/alumni9.jpg'
    },

    {
      name: 'Member 10',
      role: 'DevOps Engineer',
      company: 'Amazon',
      image: 'assets/alumni/alumni10.jpg'
    },

    {
      name: 'Member 11',
      role: 'UI UX Designer',
      company: 'Zoho',
      image: 'assets/alumni/alumni11.jpg'
    },

    {
      name: 'Member 12',
      role: 'Software Engineer',
      company: 'Microsoft',
      image: 'assets/alumni/alumni12.jpg'
    },

    {
      name: 'Member 13',
      role: 'Full Stack Developer',
      company: 'Tech Mahindra',
      image: 'assets/alumni/alumni13.jpg'
    },

    {
      name: 'Member 14',
      role: 'AI Researcher',
      company: 'Meta',
      image: 'assets/alumni/alumni14.jpg'
    },

    {
      name: 'Member 15',
      role: 'Machine Learning Engineer',
      company: 'Deloitte',
      image: 'assets/alumni/alumni15.jpg'
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