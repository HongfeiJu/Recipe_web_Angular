import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputElement: ElementRef;
  @ViewChild('amountInput') amountInputElement: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
  }

  onAdd() {
    this.shoppingListService.addIngredient(
      {name: this.nameInputElement.nativeElement.value, amount: this.amountInputElement.nativeElement.value});
  }
}
