import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMatch } from '../models/IMatch';
import { Observable } from 'rxjs';
import { IHero } from '../models/IHero';
import { IWordCloud } from '../models/IWordCloud';

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

  getWordCloudList(): Observable<IWordCloud> {
    return this.httpClient.get<IWordCloud>('https://api.opendota.com/api/players/168242047/wordcloud');
  }

  getMatchInfo(match_id) {
    return this.httpClient.get('https://api.opendota.com/api/matches/' + match_id);
  }
}
