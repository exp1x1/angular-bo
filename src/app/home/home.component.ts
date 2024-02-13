import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() slides: any = [];
  cart: any = [];
  currentIndex: number = 0;

  constructor(private router: Router, private cartService: CartService) {}
  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cartService.cartUpdated.subscribe((res) => (this.cart = res));
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prev() {
    this.currentIndex =
      this.currentIndex === 0 ? this.slides.length - 1 : this.currentIndex - 1;
  }

  addItem() {
    if (this.isAdded()) {
      alert('item alredy added');
    } else {
      this.cartService.addToCart(this.slides[this.currentIndex]);
    }
  }

  isAdded() {
    let res = false;
    this.cart.forEach((ele: any) => {
      if (ele.id === this.currentIndex + 1) {
        res = true;
      }
    });

    return res;
  }

  onCartClick() {
    this.router.navigate(['cart']);
  }
}
