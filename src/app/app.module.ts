import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './Views/Account/login/login.component';
import { ResetComponent } from './Views/Account/reset/reset.component';
import { ConfirmComponent } from './Views/Account/confirm/confirm.component';
import { DefaultComponent } from './Views/Home/default/default.component';
import { NavbarComponent } from './Views/Shared/navbar/navbar.component';
import { HeaderComponent } from './Views/Shared/header/header.component';
import { BreadcrumbsComponent } from './Views/Shared/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './Views/Shared/footer/footer.component';
import { CurrencyComponent } from './Views/Catalog/currency/currency.component';
import { BankComponent } from './Views/Catalog/bank/bank.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetComponent,
    ConfirmComponent,
    DefaultComponent,
    NavbarComponent,
    HeaderComponent,
    BreadcrumbsComponent,
    FooterComponent,
    CurrencyComponent,
    BankComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
