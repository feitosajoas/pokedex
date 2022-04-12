import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, MatToolbarModule],
  exports: [HeaderComponent]
})
export class CoreModule {}
