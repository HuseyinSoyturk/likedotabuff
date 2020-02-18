import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMatch } from '../models/IMatch';
import { Observable } from 'rxjs';
import { IHero } from '../models/IHero';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<IHero[]> {
    return this.httpClient.get<IHero[]>('https://api.opendota.com/api/heroes');
  }

  getMatchList(): Observable<IMatch[]> {
    return this.httpClient.get<IMatch[]>('https://api.opendota.com/api/players/168242047/matches');
  }
}
