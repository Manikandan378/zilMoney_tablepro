import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from './tableview/tableview.component';
// import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    // { id: 1, name: 'John Doe', email: 'john@example.com' },
  ];

  private usersSubject = new BehaviorSubject<User[]>([...this.users]);
  users$ = this.usersSubject.asObservable();

  getUsers(): User[] {
    return [...this.users];
  }

  addUser(user: User): void {
    user.id = Date.now();
    this.users.push(user);
    this.usersSubject.next(this.getUsers());
  }

  updateUser(updatedUser: User): void {
    const index = this.users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      this.usersSubject.next(this.getUsers());
    }
  }

  deleteUser(id: number): void {
    this.users = this.users.filter(u => u.id !== id);
    this.usersSubject.next(this.getUsers());
  }
}
