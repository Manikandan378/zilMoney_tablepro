import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { UserService } from '../user-service.service';
import { UserDialogComponent } from '../user-dialog/user-dialog.component';

export interface User {
  id: number;
  name: string;
  email: string;
  imageUrl: string; 
}

export interface PeriodicElement {
  id: number;
  name: string;
  username: string;
  email:any;
  address:any;
  phone:any;
  website:any;
  company:any;
}


@Component({
  selector: 'app-tableview',
  imports: [MatTableModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,CommonModule],
  templateUrl: './tableview.component.html',
  styleUrl: './tableview.component.css'
})



export class TableviewComponent {
  userForm!: FormGroup;
  users: User[] = [];
  editingUserId: number | null = null;

  constructor(private fb: FormBuilder, private userService: UserService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      id: [null],
      name: [''],
      email: [''],
      imageUrl: [''],
    });

    this.userService.users$.subscribe(data => (this.users = data));
  }

  openDialog(user?: User): void {
   console.log('user: ', user);
  const dialogRef = this.dialog.open(UserDialogComponent, {
    width: '400px',
    data: user || null,
  });

  dialogRef.afterClosed().subscribe((result: User) => {
   console.log('result: ', result);
    if (result) {
      console.log('result: ', result);
      if (result.id) {
        this.userService.updateUser(result);
      } else {
        this.userService.addUser(result);
      }
    }
  });
}

  onSubmit(): void {
    if (this.editingUserId) {
      this.userService.updateUser(this.userForm.value);
    } else {
      this.userService.addUser(this.userForm.value);
    }
    this.userForm.reset();
    this.editingUserId = null;
  }

  editUser(user: User): void {
    this.userForm.setValue(user);
    this.editingUserId = user.id;
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id);
  }

  cancelEdit(): void {
    this.userForm.reset();
    this.editingUserId = null;
  }
}
