import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from "./navbar/navbar.component";
import { SummaryComponent } from "./summary/summary.component";
import { DetailsComponent } from "./details/details.component";
import { HourlySalesComponent } from "./hourly-sales/hourly-sales.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, NavbarComponent, SummaryComponent, DetailsComponent, HourlySalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dahsboard';
}
