import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-Reviews",
  templateUrl: "./Reviews.component.html",
  styleUrls: ["./Reviews.component.scss"]
})
export class ReviewsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  GetValues() {
    this.http.get("http://localhost:5000/api/reviews");
  }
}
