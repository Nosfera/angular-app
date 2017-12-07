// Input allows use decorator to inter-communicate among  components
import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';
// import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  // here you use the decorator to pass data into the
  // template
  @Input()
  dish: Dish;
  constructor() { }

  ngOnInit() {
  }

}
