import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// The following imports all the necessary backend angular code that allows us to process build forms in the HTML page
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab4PageRoutingModule } from './tab4-routing.module';

import { Tab4Page } from './tab4.page';

@NgModule({
  imports: [
    CommonModule,
    // Whenever we import modules from packages above, we also need to add them within the NgModule list of imports
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Tab4PageRoutingModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
