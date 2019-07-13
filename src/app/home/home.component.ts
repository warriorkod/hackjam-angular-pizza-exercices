import { Component, OnInit, Input } from "@angular/core";
import { PIZZAS } from "../pizzasList";
import { BasketService } from "../basket.service";
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Pizza } from '../pizza';



@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  counter = 0;
  constructor(private basketService: BasketService,private modalService: NgbModal) { }
  pizzas = PIZZAS;
  closeResult: string;
  totalPrice: number;

  ngOnInit() { 
    this.basketService.update.subscribe(value =>{
      this.totalPrice = value
    });
  }

  updateList(isIncrementing: boolean) {
    /* You should check if the value is incrementing or not and 
    change the value of the counter depending of the value of the boolean
    */
    if (isIncrementing){
      this.counter++;
    }else{
      this.counter--;
    }
  }

  resetAll() {
    // First, you need to set the value of the total Amount and the number of pizza Ordered to every pizza to 0 (use map)
    this.pizzas.map(numberOrdered => numberOrdered.numberOrdered = 0);
    this.pizzas.map(totalAmount => totalAmount.totalAmountProduct = 0);
    // Then, don't forget to also reset the counter
    this.counter = 0;
    // Finally, let's call the service to reset the basket. (Be sure that you have called the service inside the constructor !)
    this.basketService.resetBasket();
  }

  buyNow(testModal) {
    /*
     If the total amount of the basket is greater than 0 and equal or less to 200,
    you can open the modal that contains the pizza choosen
     */
    if (this.totalPrice > 0 && this.totalPrice <= 200){
      this.modalService.open(testModal, {ariaLabelledBy: ''}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
}
