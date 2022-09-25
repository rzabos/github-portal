import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, Observable, throwError } from "rxjs";
import { environment } from "src/environments/environment";
import { GitHubResponse, QueryRequest } from "../models";

@Injectable({ providedIn: "root" })
export class GitHubService {
  private PerPage = 10;
  public constructor(private readonly httpClient: HttpClient) {}

  public getRepositories(request: QueryRequest): Observable<GitHubResponse> {
    const headers = new HttpHeaders().append(
      "Accept",
      "application/vnd.github+json"
    );

    let params = new HttpParams()
      .set("q", request.query)
      .set("page", request.pageNumber ? request.pageNumber + 1 : 1)
      .set("order", request.orderBy ?? "desc")
      .set("per_page", this.PerPage);

    if (request.sortBy) {
      params = params.set("sort", request.sortBy);
    }

    return this.httpClient
      .get<GitHubResponse>(environment.baseUrl, {
        params: params,
        headers: headers,
      })
      .pipe(
        map((response) => {
          response.total_pages = Math.ceil(response.total_count / this.PerPage);
          return response;
        }),
        catchError((errorResponse: HttpErrorResponse) =>
          this.rethrowError(errorResponse)
        )
      );
  }

  private rethrowError(errorResponse: HttpErrorResponse): Observable<never> {
    const errorMessage =
      errorResponse.status === 0
        ? "Unable to communicate with the GitHub API."
        : "Something went wrong during communication with the GitHub API.";
    return throwError(() => new Error(errorMessage));
  }
}
