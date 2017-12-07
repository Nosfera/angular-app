import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
// import { DishdetailComponent } from '../dishdetail/dishdetail.component';
// import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  /* the declaration of :Dish [] is not required*/
  // dishes: Dish[] = DISHES;
  dishes: Dish[];
  selectedDish: Dish;
  //  dish: Dish[] = COMMENTS;

  // The menu constructor pass the dishService
  constructor(private dishService: DishService) { }

  //ngOnInit triggers when the component is available
  // then loads the dishService "service" into a local variable
  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }


}
