import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../supabase.service';
import { ToastService } from '../toast.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private supabaseService: SupabaseService, private toastService: ToastService, private router: Router) {}


   ngOnInit() {
    this.supabaseService.getCurrentUser()
    .then((user) => {
      if (user) {
        this.router.navigate(['/landing']); 
      }
    })
  }
  
  async login() {
    const { data, error } = await this.supabaseService.signIn(this.email, this.password);
    if (error) {
      console.error('Error logging in:', error.message);
      this.toastService.showToast('Login failed: ' + error.message, 'error');

    } else {
      console.log('Logged in successfully:', data);
      this.router.navigate(['/landing']);
      this.toastService.showToast('Logged in successfully', 'success');

    }
  }
}
