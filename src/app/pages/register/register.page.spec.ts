import { Component, OnInit } from '@angular/core';
// Add any other necessary imports if not already present
// import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  // Existing properties from your form model
  model: any = {};
  phoneRegex: RegExp = /^\d{11}$/; // Example regex
  
  // New properties to control password visibility
  passwordType: string = 'password';
  passwordIcon: string = 'eye-outline';
  confirmPasswordType: string = 'password';
  confirmPasswordIcon: string = 'eye-outline';

  constructor() {}

  ngOnInit() {}
  
  // Your existing register method
  register() {
    console.log(this.model);
    // Add your registration logic here
  }

  // Method to toggle the first password field
  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-outline' ? 'eye-off-outline' : 'eye-outline';
  }

  // Method to toggle the confirm password field
  toggleConfirmPasswordVisibility() {
    this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
    this.confirmPasswordIcon = this.confirmPasswordIcon === 'eye-outline' ? 'eye-off-outline' : 'eye-outline';
  }
}