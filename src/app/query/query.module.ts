import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatInputModule } from "@angular/material/input";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { selectorKey } from "./state";
import { queryReducer } from "./state/query.reducer";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatButtonModule } from "@angular/material/button";
import { MatSliderModule } from "@angular/material/slider";
import { FormService } from "./utils/form.service";
import { MatSelectModule } from "@angular/material/select";
import { QueryRoutingModule } from "./query-routing.module";
import { AdvancedFormComponent } from "./query-form/advanced-form/advanced-form.component";
import { ChipsComponent } from "./query-form/chips/chips.component";
import { RangeComponent } from "./query-form/range/range.component";
import { QueryFormComponent } from "./query-form/query-form.component";
import { QueryComponent } from "./query.component";
import { SharedModule } from "../shared/shared.module";
import { QueryEffects } from "./state/query.effects";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    QueryRoutingModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatSliderModule,
    MatSelectModule,
    StoreModule.forFeature(selectorKey, queryReducer),
    EffectsModule.forFeature([QueryEffects]),
  ],
  declarations: [
    AdvancedFormComponent,
    ChipsComponent,
    RangeComponent,
    QueryFormComponent,
    QueryComponent,
  ],
  providers: [FormService],
})
export class QueryModule {}
