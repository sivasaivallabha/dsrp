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
    {
      image: 'assets/gallery/photo9.jpeg'
    },

    {
      image: 'assets/gallery/photo10.jpeg'
    },

    {
      image: 'assets/gallery/photo11.jpeg'
    },

    {
      image: 'assets/gallery/photo12.jpeg'
    },
    {
      image: 'assets/gallery/photo13.jpeg'
    },
    {
      image: 'assets/gallery/photo14.jpeg'
    },
    {
      image: 'assets/gallery/photo15.jpeg'
    },
    {
      image: 'assets/gallery/photo16.jpeg'
    },
    {
      image: 'assets/gallery/photo17.jpeg'
    },
    {
      image: 'assets/gallery/photo18.jpeg'
    },
    {
      image: 'assets/gallery/photo19.jpeg'
    },
    {
      image: 'assets/gallery/photo20.jpeg'
    },
    {
      image: 'assets/gallery/photo21.jpeg'    
    },
    {
      image: 'assets/gallery/photo22.jpeg'    
    },
    {
      image: 'assets/gallery/photo23.jpeg'    
    },
    {
      image: 'assets/gallery/photo24.jpeg'    
    },
    {
      image: 'assets/gallery/photo25.jpeg'    
    },
    {
      image: 'assets/gallery/photo26.jpeg'    
    },
    {
      image: 'assets/gallery/photo27.jpeg'    
    },
    {
      image: 'assets/gallery/photo28.jpeg'    
    },
    {
      image: 'assets/gallery/photo29.jpeg'    
    },
    {
      image: 'assets/gallery/photo30.jpeg'    
    },
    {
      image: 'assets/gallery/photo31.jpeg'    
    }
    

  ];

}