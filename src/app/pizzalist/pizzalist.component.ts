import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  HostListener
} from "@angular/core";
import { PIZZAS } from "../pizzasList";
import { BasketComponent } from "../basket/basket.component";
import { BasketService } from "../basket.service";
import { Pizza } from "../pizza";

@Component({
  selector: "app-pizzalist",
  templateUrl: "./pizzalist.component.html",
  styleUrls: ["./pizzalist.component.css"]
})
export class PizzalistComponent implements OnInit {
  @Input() name: string;
  @Output() isAdded = new EventEmitter<boolean>();
  pizzas: Pizza[] = [];
  constructor(private basketService: BasketService) {}

  ngOnInit() {
    this.pizzas = PIZZAS;
  }

  updateList(pizza: Pizza, addedToTotal: boolean) {
    this.basketService.addToTotalAmount(pizza.price, addedToTotal);
    this.isAdded.emit(addedToTotal);
  }

  decrementNumber(pizza: Pizza) {
    // Decrement the number of the ordered pizza
    pizza.numberOrdered--;
    // the total amount of the selected pizza should be reduced as well
    pizza.totalAmountProduct--;
    // call the update list
    this.updateList(pizza,false);
  }

  incrementNumber(pizza: Pizza) {
    // Increment the number of the ordered pizza
    pizza.numberOrdered++;
    // the total amount of the selected pizza should be augmented as well
    pizza.totalAmountProduct++;
    // call the update list
    this.updateList(pizza, true);
  }
}
