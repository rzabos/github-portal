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
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    NgPipesModule,
    MatChipsModule,
    MatCardModule,
    MatRadioModule,
  ],
  exports: [
    CommonModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatIconModule,
    NgPipesModule,
    MatChipsModule,
    RepositoryListComponent,
    MatCardModule,
    ReactiveFormsModule,
  ],
  declarations: [RepositoryListComponent, ToDatePipe, GetLanguagesPipe],
  providers: [ToDatePipe, GetLanguagesPipe],
})
export class SharedModule {}
