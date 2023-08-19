import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, first, tap } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root',
})
export class PokemonService {
    url = environment.apiUrl

    constructor(private http: HttpClient) { }

    getAll(): Observable<any> {

        return this.http.get(`${this.url}/pokemon`)
            .pipe(
                first(),
                tap(pokemons => pokemons),
            )
    }

    getById(name: string): Observable<any> {

        return this.http.get(`${this.url}/pokemon/${name}`)
            .pipe(
                first(),
                tap(pokemon => pokemon),
            )
    }
}