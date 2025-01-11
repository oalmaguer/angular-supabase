import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ToastService } from '../toast.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  constructor(private supabaseService: SupabaseService, private toastService: ToastService) {}


  async signUp() {
    const { data, error } = await this.supabaseService.signUp(this.email, this.password);
    if (error) {
      console.error('Error signing up:', error.message);
      this.toastService.showToast('Sign up failed: ' + error.message, 'error');

    } else {
      console.log('Signed up successfully:', data);
      this.toastService.showToast('Signed up successfully', 'success');

    }
  }

}
