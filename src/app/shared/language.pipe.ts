import { HttpClient } from "@angular/common/http";
import { Pipe, PipeTransform } from "@angular/core";
import { map, Observable } from "rxjs";

@Pipe({ name: "getLanguages" })
export class GetLanguagesPipe implements PipeTransform {
  public constructor(private readonly _httpClient: HttpClient) {}
  transform(url: string): Observable<string[]> {
    return this._httpClient
      .get(url)
      .pipe(map((response) => Object.keys(response)));
  }
}
