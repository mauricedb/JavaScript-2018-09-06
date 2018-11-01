import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { JokesListComponent } from './jokes-list/jokes-list.component';
import { JokeItemComponent } from './joke-item/joke-item.component';

@NgModule({
  imports: [CommonModule, FormsModule, HttpClientModule],
  declarations: [JokesListComponent, JokeItemComponent],
  exports: [JokesListComponent]
})
export class JokesModule {}
