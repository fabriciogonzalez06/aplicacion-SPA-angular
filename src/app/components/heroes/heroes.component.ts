import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe} from '../../servicios/heroes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  public heroes:Heroe[]=[];

  constructor(
    private _heroesService:HeroesService,
    private _router:Router
  ) { }

  ngOnInit() {

    this.heroes=this._heroesService.getHeroes();
    //console.log(this.heroes);
  }

  //metodo ver heroe
  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }
  
}
