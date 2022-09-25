import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RepositoryListComponent } from "./repository-list/repository-list.component";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatChipsModule } from "@angular/material/chips";
import { ToDatePipe } from "./to-date.pipe";
import { GetLanguagesPipe } from "./language.pipe";
import { NgPipesModule } from "ngx-pipes";

@NgModule({
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    NgPipesModule,
    MatChipsModule,
  ],
  exports: [
    CommonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    NgPipesModule,
    MatChipsModule,
    RepositoryListComponent,
  ],
  declarations: [RepositoryListComponent, ToDatePipe, GetLanguagesPipe],
  providers: [ToDatePipe, GetLanguagesPipe],
})
export class SharedModule {}
