import { Component } from '@angular/core';

//firebase
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articlesCollection: AngularFirestoreCollection<any>;
  articles: Observable<any[]>;
  title = "APP";

  constructor(db: AngularFirestore){
    this.articlesCollection = db.collection('articles', ref=>{
      return ref.orderBy('title', 'desc');
    });
    this.articles = this.articlesCollection.valueChanges();
  }
}
