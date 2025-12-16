/************************************************************
 * faz as Requisições http
 * Autor: Rebeka Marcelino
 * Data: 12/12/2025
 * Versão: 1.0
 ************************************************************/

import { Injectable } from '@angular/core'
//requisições 
import { HttpClient } from '@angular/common/http'
//emissor de dados biblioteca rxjs
import { Observable } from 'rxjs'
// para extrair dados das repostas
import { map } from 'rxjs/operators'


// tabela do banco de dados
export interface Contato {
  id?: number
  nome_completo: string
  data_nascimento: string
  email: string
  profissao?: string
  telefone?: string
  celular?: string
  possui_whatsapp?: boolean
  notificacao_sms?: boolean
  notificacao_email?: boolean
}

// formato que a api retorna
interface RespostaAPI {
  status: boolean;
  status_code: number;
  mensagem: string;
  dados?: any;
  erros?: string[];
}


@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  
  // url da api php
  private apiUrl = 'http://localhost/alphacode/Back%20de%20Contatos/api/contatos.php';

  // injeta o httpclient pra fazer requisições
  constructor(private http: HttpClient) {}


  //  ////////////////////////
  //  ""crud""
  //  ////////////////////////

  // get - lista todos os contatos
  listar(): Observable<Contato[]> {
    return this.http.get<RespostaAPI>(this.apiUrl).pipe(
      // 
      map(resposta => resposta.dados || [])
    )
  }

  // get - busca um contato por id
  buscarPorId(id: number): Observable<Contato> {
    return this.http.get<RespostaAPI>
    (
      `${this.apiUrl}?id=${id}`
    )
    .pipe(
      map
      (resposta => resposta.dados)
    )
  }

  // post - cria novo contato
  criar(contato: Contato): Observable<RespostaAPI> {
    return this.http.post<RespostaAPI>
    (
      this.apiUrl, contato
    )
  }

  // put - atualiza contato existente
  atualizar(id: number, contato: Contato): Observable<RespostaAPI> {
    return this.http.put<RespostaAPI>
    (
      `${this.apiUrl}?id=${id}`,
       contato);
  }

  // delete - remove contato
  deletar(id: number): Observable<RespostaAPI> {
    return this.http.delete<RespostaAPI>
    (`${this.apiUrl}?id=${id}`);
  }
}