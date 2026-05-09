import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  isEditing = false;
  saving = false;

  editForm = {
    fullName: '',
    email: '',
    phone: '',
    location: ''
  };

  activeTab = 'personal';

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
      if (user) {
        this.editForm = {
          fullName: user.fullName,
          email: user.email,
          phone: user.phone,
          location: user.location || ''
        };
      }
    });
  }

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  startEditing() {
    this.isEditing = true;
  }

  cancelEditing() {
    this.isEditing = false;
    if (this.user) {
      this.editForm = {
        fullName: this.user.fullName,
        email: this.user.email,
        phone: this.user.phone,
        location: this.user.location || ''
      };
    }
  }

  saveChanges() {
    if (!this.user) return;

    this.saving = true;

    // Simulate saving user data
    setTimeout(() => {
      this.saving = false;
      this.isEditing = false;
      alert('تم حفظ التغييرات بنجاح!');
    }, 1000);
  }

  logout() {
    this.authService.logout();
  }
}
