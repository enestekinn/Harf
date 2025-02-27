import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { faker } from '@faker-js/faker';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  randomText = faker.lorem.sentence();
  enteredText = '';
  color = "incorrect"

  getInputValue(value: string)
  {
      this.enteredText = value;
    
    
  }
  compare(randomLetter: string, enteredLetter: string)
  {
    if(!enteredLetter){
      return 'pending';
    } 
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
    
  }

}
