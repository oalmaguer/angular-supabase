import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Toast, ToastService } from '../toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="toast" 
         class="fixed top-4 right-4 p-4 rounded-md text-white"
         [ngClass]="{'bg-green-500': toast.type === 'success', 'bg-red-500': toast.type === 'error'}">
      {{ toast.message }}
    </div>
  `,
  styles: []
})
export class ToastComponent implements OnInit {
  toast: Toast | null = null;

  constructor(private toastService: ToastService) {}

  ngOnInit() {
    this.toastService.getToast().subscribe((toast: any) => {
      this.toast = toast;
    });
  }
}