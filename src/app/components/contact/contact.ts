import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  formData = {
    userName: '',
    userAge: '',
    userEmail: '',
    userPassword: ''
  };

  onSubmit(event: Event) {
    event.preventDefault();
  }
}