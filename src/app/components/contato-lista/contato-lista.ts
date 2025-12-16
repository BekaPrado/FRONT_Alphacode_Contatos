/************************************************************
 * Lista de contatos 
 * Autor: Rebeka Marcelino
 * Data: 12/12/2025
 * Versão: 1.0
 ************************************************************/

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContatoService, Contato } from '../../services/contato.service';

@Component({
  selector: 'app-contato-lista',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contato-lista.html',
  styleUrl: './contato-lista.css',
})
export class ContatoLista implements OnInit {
  
  // array que guarda os contatos
  contatos: Contato[] = [];
  
  // mensagem 
  mensagem: string = '';

  constructor(
    private contatoService: ContatoService,
    private cdr: ChangeDetectorRef  // força atualização da tela assim que os dados chegam
  ) {}


  // ////////////////////////
  // ciclo de vida
  // ////////////////////////

  // carrega assim que a pagina abre
  ngOnInit(): void {
    this.carregarContatos();
  }


  // ////////////////////////
  // métodos
  // ////////////////////////

  // busca todos os contatos da api
  carregarContatos(): void {
    this.contatoService.listar().subscribe({
      next: (dados: Contato[]) => {
        //guarda os dados
        this.contatos = dados;
        //
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        console.error('erro ao carregar contatos:', err);
      }
    })
  }

  // exclui um contato
  deletar(id: number): void {
    // pergunta se tem certeza
    if (confirm('Tem certeza que deseja deletar este contato?')) {
      this.contatoService.deletar(id).subscribe({
        next: () => {
          this.mensagem = 'Contato deletado com sucesso!';
          this.carregarContatos();  // recarrega a lista
          
          // limpa a mensagem
          setTimeout(() => this.mensagem = '', 33);
        },
        error: (err: any) => {
          console.error('erro ao deletar:', err);
        }
      })
    }
  }

  // converte data de yyyy-mm-dd pra dd/mm/yyyy
  formatarData(data: string): string {
    const date = new Date(data);
    return date.toLocaleDateString('pt-BR');
  }
}