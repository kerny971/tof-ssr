import { Component, OnInit } from '@angular/core';
import Vilains from '../type/vilains.type';

@Component({
  selector: 'app-vilain-list',
  templateUrl: './vilain-list.component.html',
  styleUrls: ['./vilain-list.component.css']
})
export class VilainListComponent implements OnInit {

  vilains: Vilains[] = [
    // tslint:disable-next-line:max-line-length
    {id: 1, name: 'Joker', powers: ['Criminal mastermind', 'Expert chemist', 'Uses weaponized props and toxins', 'Injustice Gang', 'Injustice League'], img: '/assets/joker.gif'},
    // tslint:disable-next-line:max-line-length
    {id: 2, name: 'Thanos', powers: ['natural God force', 'Access to nearly all powerful mystical artifacts and weapons', 'Superhuman physiology of Eternals', 'Plasma energy projection', 'Master tactician'], img: '/assets/thanos.gif'},
    // tslint:disable-next-line:max-line-length
    {id: 3, name: 'Scarlet Witch', powers: ['Superhuman genes allow energy and reality manipulation and powerful access to magical energies, such as chaos magic', 'Teleportation, time manipulation, reality warping', 'Nexus being with great influence on time', 'Probability manipulation'], img: '/assets/sorciere-rouge.gif'}
  ];

  theHero: Vilains | null = null;

  nameHero!: string;
  powers!: string;
  img!: string;

  addHero(): void {
    this.theHero = {
      id: (this.vilains.length + 1),
      name: this.nameHero,
      powers: this.powers.split(';'),
      img: this.img
    };
    this.vilains.push(this.theHero);
  }

  constructor() { }

  ngOnInit() {
  }

}
