import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-post-tema',
  templateUrl: './post-tema.component.html',
  styleUrls: ['./post-tema.component.css']
})
export class PostTemaComponent implements OnInit {

tema: Tema = new Tema()
ListaTemas: Tema[]

  constructor(
    private temaService: TemaService,
    private router: Router,
    private alerta: AlertasService
  ) { }

  ngOnInit() {
  }

  findAllTemas(){
    this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
      this.ListaTemas = resp
    })
   }
 
  findByIdTema() {
    this.temaService.getByIdTema(this.tema.id).subscribe((resp: Tema) => {
      this.tema = resp;
    })
  }

  cadastrar(){
    if ( this.tema.descricao == null) {
      this.alerta.showAlertDanger('Preencha o campo de nome do tema corretamente!')
    } else{
      this.temaService.postTema(this.tema).subscribe((resp: Tema) => {
        this.tema = resp
        this.router.navigate(['/feed'])
        this.alerta.showAlertSucess('Tema cadastrado com sucesso!')
      })
    }
  }

}
