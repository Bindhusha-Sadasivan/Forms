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

  defaultQuestion:string='pet';
  questionAnswer:string='';
  genders:Array<any>=['male','female'];
  defaultSelect:any='male';
  displaySelect:string='';

  suggestUserName() {
    const suggestedName = 'Superuser';

    //setValue
    // this.signupForm.setValue({
    //   'userData':{
    //           'username' : suggestedName,
    //           'email' : 'max@max.com'
    //       },
    //       'secret' : 'teacher',
    //       'detailedText' : 'My teacher is a good teacher',
    //       'gender' : 'female',
    // });
    //patchValue
    this.signupForm.form.patchValue({
        'userData':{
                'username' : suggestedName}});
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

        // this.signupForm.setValue({
        //   'userData':{
        //       'username' : 'Max',
        //       'email' : 'max@max.com'
        //   },
        //   'secret' : 'teacher',
        //   'detailedText' : 'My teacher is a good teacher',
        //   'gender' : 'female',

        // });
     }
}
