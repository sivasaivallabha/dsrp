import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class Gallery {

  galleryImages = [

    {
      image: 'assets/gallery/photo1.jpeg'
      
    },

    {
      image: 'assets/gallery/photo2.jpeg'
      
    },

    {
      image: 'assets/gallery/photo3.jpeg'
    },

    {
      image: 'assets/gallery/photo4.jpeg'
    },

    {
      image: 'assets/gallery/photo5.jpeg'
    },

    {
      image: 'assets/gallery/photo6.jpeg'
    },

    {
      image: 'assets/gallery/photo7.jpeg'
    },

    {
      image: 'assets/gallery/photo8.jpeg'
    },

  ];

}