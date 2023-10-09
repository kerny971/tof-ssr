import { Component, OnInit } from '@angular/core';
import Hero from '../type/hero.type';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})


export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [
      // tslint:disable-next-line:max-line-length
      {id: 1, name: 'Batman', powers: ['Genius-level intellect', 'One of the Richest Man', 'Expert detective', 'Master tactician, strategist, and field commander'], img: '/assets/batman.gif'},
      // tslint:disable-next-line:max-line-length
      {id: 2, name: 'Superman', powers: ['Natural strong force', 'The Man of Steel', 'Enhanced Vision', 'Super-Hearing', 'Solar Energy Absorption'], img: '/assets/superman.gif'},
      // tslint:disable-next-line:max-line-length
      {id: 3, name: 'Spiderman', powers: ['Agility', 'Superhuman strength, speed, agility, jump, reflexes, stamina, durability, coordination, and balance', 'Wall-climbing on the surfaces and ceilings', 'Master martial artist and hand-to-hand combatant'], img: '/assets/spiderman.gif'}
  ];

  theHero: Hero | null = null;

  nameHero!: string;
  powers!: string;
  img!: string;

  addHero(): void {
      this.theHero = {
          id: (this.heroes.length + 1),
          name: this.nameHero ,
          powers: this.powers.split(';'),
          img: this.img,
      };
      this.heroes.push(this.theHero);
      this.nameHero = '';
      this.powers = '';
      this.img = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
