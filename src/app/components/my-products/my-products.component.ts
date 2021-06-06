import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my-products",
  templateUrl: "./my-products.component.html",
  styleUrls: ["./my-products.component.css"],
})
export class MyProductsComponent implements OnInit {
  i = [1, 2, 3, 4, 5, 6, 7, 7, 8, 8, 8, 5];

  constructor() {}

  ngOnInit(): void {}
}
