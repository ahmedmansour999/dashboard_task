import { Routes } from '@angular/router';
import { ListComponent } from './details/list/list.component';
import { GraphComponent } from './details/graph/graph.component';

export const routes: Routes = [
  {path:"" , redirectTo:"/list" , pathMatch:"full" } ,
  {path: 'list', component:ListComponent , title:"List"},
  {path: 'graph', component:GraphComponent , title:"List"},
];
