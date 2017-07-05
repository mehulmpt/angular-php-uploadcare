import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  shouldIbeVisible: boolean = false;
  uuid = "blank";

  constructor() {

  }

  
  gotSomeDataFromTheBackend(uuid: string) {

  		this.shouldIbeVisible = true;
  		this.uuid = uuid;

  	
  }


}
