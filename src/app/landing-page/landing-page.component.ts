import { Component } from '@angular/core';
import { SupabaseService } from '../supabase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  public user: any;
  constructor(private supabaseService: SupabaseService, private router: Router) {}

  public ngOnInit() {
  this.supabaseService.getCurrentUser().then((user) => {
    this.user = user
  });
  }
  public logout() {
    this.supabaseService.signOut();
    this.router.navigate(['/login']);
  }
}
