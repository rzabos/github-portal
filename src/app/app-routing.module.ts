import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "query",
    loadChildren: () =>
      import("./query/query.module").then((m) => m.QueryModule),
  },
  {
    path: "history",
    loadChildren: () =>
      import("./history/history.module").then((m) => m.HistoryModule),
  },
  {
    path: "**",
    redirectTo: "query",
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
