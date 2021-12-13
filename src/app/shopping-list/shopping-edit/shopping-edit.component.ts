import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput',{static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput',{static: true}) amountInputRef: ElementRef;
  @Output() newIngredientAdded= new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
  //onIngredientAdded(nameIngredient: HTMLInputElement, amountIngredient: HTMLInputElement){
    //this.newIngredientAdded.emit({
      //name: nameIngredient.value,
      //amount: Number(amountIngredient.value)
    //})
  //}
  onIngredientAdded(){
    const nameItem=this.nameInputRef.nativeElement.value
    const amountItem=this.amountInputRef.nativeElement.value
    const newIngredient= new Ingredient(nameItem, amountItem)

    this.newIngredientAdded.emit(newIngredient)
  }
}
