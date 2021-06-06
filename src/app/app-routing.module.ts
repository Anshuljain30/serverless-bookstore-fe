import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "my-products",
    loadChildren: () =>
      import("./components/my-products/my-products.module").then(
        (m) => m.MyProductsModule
      ),
  },
  {
    path: "add-book",
    loadChildren: () =>
      import("./components/add-book/add-book.module").then(
        (m) => m.AddBookModule
      ),
  },
  {
    path: "login",
    loadChildren: () =>
      import("./components/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "signup",
    loadChildren: () =>
      import("./components/sign-up/sign-up.module").then((m) => m.SignUpModule),
  },
  { path: "", component: HomeComponent, pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
