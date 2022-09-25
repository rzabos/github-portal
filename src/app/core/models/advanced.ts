import { Range } from "./range";

export interface Advanced {
  username?: string;
  organization?: string;
  languages?: string[];
  topics?: string[];
  stars?: Range;
  size?: Range;
  created?: Range;
}
