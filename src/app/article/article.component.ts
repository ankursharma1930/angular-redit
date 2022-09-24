import { Component, HostBinding, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';

  title: string;
  vote: number;
  link: string;
  constructor() {
    this.vote = 3;
    this.link = "https://google.com";
    this.title = "Angular";
   }

  ngOnInit(): void {
  }

  voteup(): boolean{
    this.vote +=1;
    return false;
  }
  votedown(): boolean{
    this.vote -=1;
    return false
  }

}
