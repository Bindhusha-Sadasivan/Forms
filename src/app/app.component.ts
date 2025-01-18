import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports:[FormsModule, CommonModule]
})
export class AppComponent {

  @ViewChild('form', {static:true}) signupForm!:NgForm

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // Displays the complete form
  // onSubmit(form:HTMLFormElement){
  //   console.log(form);
  // }

  //Displays the values of the each field we entered
  // onSubmit(form:NgForm){
  //     console.log(form);
  //   }

  //using ViewChild
  onSubmit(){
        console.log(this.signupForm);
     }
}
