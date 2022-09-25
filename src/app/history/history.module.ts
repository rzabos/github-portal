import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HistoryComponent } from "./history.component";
import { StoreModule } from "@ngrx/store";
import { selectorKey } from "./state";
import { historyReducer } from "./state/history.reducer";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatListModule } from "@angular/material/list";
import { SharedModule } from "../shared/shared.module";
import { HistoryRoutingModule } from "./history-routing.module";
import { HistoryEffects } from "./state/history.effect";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HistoryRoutingModule,
    StoreModule.forFeature(selectorKey, historyReducer),
    EffectsModule.forFeature([HistoryEffects]),
    MatSidenavModule,
    MatListModule,
  ],
  declarations: [HistoryComponent],
})
export class HistoryModule {}
