import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from "../../shared/components/side-menu/side-menu.component";

import { JgxSideMenuComponent, TitleColor } from 'jgx-side-menu';

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideMenuComponent,
    JgxSideMenuComponent,
],
  templateUrl: './admin-layout.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AdminLayoutComponent {

  public isAuthenticated = signal<boolean>(false);
  public TitleColor = TitleColor;

  onLogin() {
    this.isAuthenticated.set(true);
  }

  onLogout() {
    this.isAuthenticated.set(false);
  }

}
