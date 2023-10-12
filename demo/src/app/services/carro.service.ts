import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  API: string = 'http://localhost:8080/api/carro';
  http = inject(HttpClient);

  constructor() { }


  listAll(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API);
  }

  save(pessoa: Carro): Observable<Carro> {
    return this.http.post<Carro>(this.API, pessoa);
  }

  edit(pessoa: Carro): Observable<Carro> {
    return this.http.put<Carro>(this.API, pessoa);
  }

  delete(pessoa: Carro): Observable<any> {

    let params = new HttpParams()
    .set('id', pessoa.id.toString())
    return this.http.delete<any>(this.API, { params: params});
  }

  exemploErro(): Observable<Carro[]> {
    return this.http.get<Carro[]>(this.API + '/erro');
  }
}
