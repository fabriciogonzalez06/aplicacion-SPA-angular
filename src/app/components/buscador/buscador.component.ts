import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { HeroesService} from '../../servicios/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  public heroes:any[]=[];
  public termino:string;

  constructor(
    private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,
    private _router:Router
  ) { }

  ngOnInit() {
    this._activatedRoute.params.subscribe(params=>{
      this.termino=params['termino'];
      //llamar al servicio y al metodo buscar heroes
      this.heroes= this._heroesService.buscarHeroe(params['termino']);
      console.log(this.heroes);
    });
  }


  //metodo ver heroe
  verHeroe(idx: number) {
    this._router.navigate(['/heroe', idx]);
  }

}
