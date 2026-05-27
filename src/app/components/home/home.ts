import { Component } from '@angular/core';

import { Hero } from '../hero/hero';
import { About } from '../about/about';
import { Alumni } from '../alumni/alumni';
import { Gallery } from '../gallery/gallery';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    Hero,
    About,
    Alumni,
    Gallery
  ],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class Home {

}