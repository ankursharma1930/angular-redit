import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    addArticle(newTitle:HTMLInputElement, newLink:HTMLInputElement): boolean{
    console.log(`New title is ${newTitle.value} and its link is ${newLink.value}`);
    return false;
  }

}
