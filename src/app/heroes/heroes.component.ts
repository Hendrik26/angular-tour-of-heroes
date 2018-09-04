import {Component, OnInit} from '@angular/core';
import {Hero} from '../hero';
// import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  // public heroes: Hero[] = HEROES;

  heroes: Hero[];

  selectedHero: Hero;

  // constructor() {   }

  constructor(private heroService: HeroService) {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  /* initializeHeroes(): void {
    this.heroes = this.heroService.getHeroes();
  } */

  initializeHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.initializeHeroes();
  }

}
