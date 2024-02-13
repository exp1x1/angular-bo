import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  // remove this if not needed
  // slides = [
  //   {
  //     id: 1,
  //     productTitle: 'Apple - Magic Magic 2',
  //     productDescription: 'Space Grey',
  //     priceCheck: '$ 199,-',
  //     price: '$ 100,-',
  //     imageUrl: '../../assets/img/slide1.png',
  //   },
  //   {
  //     id: 2,
  //     productTitle: 'Samsung Galaxy S21',
  //     productDescription: 'Phantom Black',
  //     priceCheck: '$ 999,-',
  //     price: '$ 799,-',
  //     imageUrl: '../../assets/img/slide2.png',
  //   },
  //   {
  //     id: 3,
  //     productTitle: 'Sony PlayStation 5',
  //     productDescription: 'Disk Version',
  //     priceCheck: '$ 499,-',
  //     price: '$ 399,-',
  //     imageUrl: '../../assets/img/slide3.png',
  //   },
  // ];
  slides = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct() {
    this.http
      .get('https://dummyjson.com/products?limit=3')
      .subscribe((res: any) => {
        console.log(res);
        this.slides = res.products;
      });
  }
}
