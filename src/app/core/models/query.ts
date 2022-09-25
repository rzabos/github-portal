import { Advanced } from "./advanced";
import { In } from "./in";

export interface Query {
  text?: string;
  in?: In;
  advanced?: Advanced;
}
