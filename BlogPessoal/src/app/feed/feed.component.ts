import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Postagem } from '../model/Postagem';
import { Tema } from '../model/Tema';
import { AlertasService } from '../service/alertas.service';
import { PostagemService } from '../service/postagem.service';
import { TemaService } from '../service/tema.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  key = 'date'
  reverse = true

postagem: Postagem = new Postagem()
ListaPostagens: Postagem[]
titulo: string

tema: Tema = new Tema()
ListaTemas: Tema[]
idTema: number
nomeTema: string


  constructor(
    private postagemService: PostagemService,
    private temaService: TemaService,
    private alerta: AlertasService,
    private router: Router
  ) { }

  ngOnInit(){

    let token = localStorage.getItem('token')

    if( token == null) {
      this.router.navigate(['/login'])
      this.alerta.showAlertInfo('Faça o login primeiro para ter acesso a página de interação')
    }
    window.scroll(0,0)
    this.findAllPostagens()
    this.findAllTemas()

  }

  findAllPostagens(){
    this.postagemService.getAllPostagens().subscribe((resp: Postagem[]) => {
      this.ListaPostagens = resp
    })
  }

  publicar(){
    this.tema.id = this.idTema
    this.postagem.tema = this.tema

    if (this.postagem.titulo == null || this.postagem.texto == null || this.postagem.tema == null) {
      this.alerta.showAlertDanger (' Preencha todos os campos requeridos antes de publicar!')
    } else {
      this.postagemService.postPostagem(this.postagem).subscribe((resp: Postagem) => {
        this.postagem = resp
        this.postagem = new Postagem()
        this.alerta.showAlertSucess ('Postagem realizada com sucesso!')
        this.findAllPostagens()
      } )
    }
  }
  
  findAllTemas(){
   this.temaService.getAllTemas().subscribe((resp: Tema[]) => {
     this.ListaTemas = resp
   })
  }

 findByIdTema() {
   this.temaService.getByIdTema(this.idTema).subscribe((resp: Tema) => {
     this.tema = resp;
   })
 }

 findByTituloPostagem() {
   if (this.titulo ==='') {
     this.findAllPostagens()
   } else {
     this.postagemService.getByTituloPostagem(this.titulo).subscribe((resp: Postagem[])=> {
      this.ListaPostagens = resp
     } )
   }
 }
 findByNomeTema() {
  if (this.nomeTema ==='') {
    this.findAllTemas
  } else {
    this.temaService.getByNomeTema(this.nomeTema).subscribe((resp: Tema[] ) => {
     this.ListaTemas = resp
    } )
  }
}

}
