import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-jokes-list',
  templateUrl: './jokes-list.component.html',
  styleUrls: ['./jokes-list.component.css']
})
export class JokesListComponent implements OnInit {
  greeting = 'Hello there';

  jokes; // = [{ joke: 'Een grap' }, { joke: 'Een andere grap' }];

  newDate() {
    return new Date();
  }

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const url =
      'http://api.icndb.com/jokes/random/10/?limitTo=[nerdy]&escape=javascript';

    // this.httpClient
    //   .get(url)
    //   .subscribe((data: any) => (this.jokes = data.value));

    this.jokes = this.httpClient.get(url);
  }
}
