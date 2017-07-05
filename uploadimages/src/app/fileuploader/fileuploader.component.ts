import { Component, Input } from '@angular/core';
import { Http } from '@angular/http';

import {GalleryComponent} from '../gallery/gallery.component';

@Component({
  selector: 'app-fileuploader',
  templateUrl: './fileuploader.component.html',
  styleUrls: ['./fileuploader.component.css']
})
export class FileuploaderComponent {

  @Input()
  	gallery: GalleryComponent;	

  constructor(private http: Http) { }

  uploadFile(event) {
  	let elem = event.target;
  	if(elem.files.length > 0) {
  		console.log(elem.files[0]);
  		let formData = new FormData();
  		formData.append('file', elem.files[0]);

  		this.http.post('http://localhost/angular-php/script.php', formData)
  		.subscribe((data) => {

  			let jsonResponse = data.json();

  			this.gallery.gotSomeDataFromTheBackend(jsonResponse.file);
  			
  			console.log('Got some data from backend ', data);
  		}, (error) => {
  			console.log('Error! ', error);
  		});
  	}
  }

}
