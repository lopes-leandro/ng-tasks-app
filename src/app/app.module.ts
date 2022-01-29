import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import { TaskComponent } from './tasks/task/task.component';
import { EnterTaskComponent } from './tasks/enter-task/enter-task.component';
import { CheckboxComponent } from './shared/ui/checkbox/checkbox/checkbox.component';
import { ToggleComponent } from './shared/ui/toggle/toggle.component';
import { Database } from "./database/database";
import { TaskListContainerComponent } from './container/task-list-container/task-list-container.component';
import { ProjectService } from './project/project.service';
import { ProjectComponent } from './project/project/project.component';
import { ProjectContainerComponent } from './container/project-container/project-container.component';
import { TabsComponent } from './shared/ui/tabs/tabs/tabs.component';
import { NavigationItemComponent } from './shared/ui/navigation-item/navigation-item/navigation-item.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    EnterTaskComponent,
    CheckboxComponent,
    ToggleComponent,
    TaskListContainerComponent,
    ProjectComponent,
    ProjectContainerComponent,
    TabsComponent,
    NavigationItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(Database, {delay: 0}),
  ],
  providers: [ProjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
