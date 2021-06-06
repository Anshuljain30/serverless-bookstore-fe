import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MdbModule } from "mdb-angular-ui-kit";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavigationBarComponent } from "./components/navigation-bar/navigation-bar.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, NavigationBarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgbModule,
    MdbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
