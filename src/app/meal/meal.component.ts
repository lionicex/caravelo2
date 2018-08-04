import {Component} from '@angular/core';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent {
  public mealId = 'ML01';
  public desc = 'Snacks & Soda';
  public max = 20;
  public min = 0;
  public jump = 5;
  public price = 0;

}
/*function plus() {
  while (price !== max) {
    price = price + jump;
  }
}*/
