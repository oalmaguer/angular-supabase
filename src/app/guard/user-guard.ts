// user.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { SupabaseService } from '../supabase.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {

  constructor(private supabaseService: SupabaseService, private router: Router) { }

  async canActivate(): Promise<boolean> {
    const user = await this.supabaseService.getCurrentUser();
    if (user === null) {
      this.router.navigate(['/login']); // or any other route you want to redirect to
      return false;
    }
    return true;
  }

}