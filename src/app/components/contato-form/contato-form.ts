/************************************************************
 * Cadastro de Contatos e Atualização
 * Autor: Rebeka Marcelino
 * Data: 15/12/2025
 * Versão: 1.1
 ************************************************************/

import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ContatoService, Contato } from '../../services/contato.service';

@Component({
  selector: 'app-contato-form',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contato-form.html',
  styleUrl: './contato-form.css',
})
export class ContatoForm implements OnInit {
  
  // guarda os dados
  contato: Contato = {
    nome_completo: '',
    data_nascimento: '',
    email: '',
    profissao: '',
    telefone: '',
    celular: '',
    possui_whatsapp: false,
    notificacao_sms: false,
    notificacao_email: false
  };

  // edição / guarda o id do contato que está sendo editado
  id: number | null = null;
  editando: boolean = false;
  
  // erros mensagens
  erros: string[] = [];

  //para requisições e navegação
  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {}


  // ////////////////////////
  // ciclo de vida
  // ////////////////////////

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    
    if (idParam) {
      this.id = +idParam;
      this.editando = true;
      this.carregarContato();
    }
  }


  // ////////////////////////
  // métodos
  // ////////////////////////

  // busca os dados do contato pra preencher o formulário
  carregarContato(): void {
    if (this.id) {
      this.contatoService.buscarPorId(this.id).subscribe({
        next: (dados: Contato) => {
          // ngZone para identidicar mudanças 
          this.ngZone.run(() => {
            this.contato = {
              nome_completo: dados.nome_completo,
              data_nascimento: dados.data_nascimento,
              email: dados.email,
              profissao: dados.profissao || '',
              telefone: dados.telefone || '',
              celular: dados.celular || '',
              possui_whatsapp: dados.possui_whatsapp || false,
              notificacao_sms: dados.notificacao_sms || false,
              notificacao_email: dados.notificacao_email || false
            };
            this.cdr.detectChanges();
          });
        },
        error: (err: any) => {
          console.error('erro ao carregar:', err);
          this.router.navigate(['/contatos']);
        }
      });
    }
  }

  // salva o contato criado ou atualizado)
  salvar(): void {
    this.erros = [];

    if (this.editando && this.id) {
      this.contatoService.atualizar(this.id, this.contato).subscribe({
        next: () => {
          this.router.navigate(['/contatos']);
        },
        error: (err: any) => {
          this.tratarErro(err);
        }
      });
    } else {
      this.contatoService.criar(this.contato).subscribe({
        next: () => {
          this.router.navigate(['/contatos']);
        },
        error: (err: any) => {
          this.tratarErro(err);
        }
      });
    }
  }

  // extrai os erros 
  private tratarErro(err: any): void {
    console.error('erro:', err);
    
    if (err.error?.erros) {
      this.erros = err.error.erros;
    } else {
      this.erros = ['Erro ao salvar contato.'];
    }
  }
}