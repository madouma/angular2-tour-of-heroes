import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroesComponent } from './heroes.component';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html'
})

export class AppComponent {
    title = 'Tour of Heroes'; 
}
