import { Pipe, PipeTransform } from "@angular/core";
import { In } from "../core/models";

@Pipe({ name: "toString" })
export class ToStringPipe implements PipeTransform {
  transform(value: In | undefined): string {
    if (!value) {
      return "Invalid input.";
    }

    const builder: string[] = [];
    if (value.description) {
      builder.push("description");
    }

    if (value.name) {
      builder.push("name");
    }

    if (value.readme) {
      builder.push("readme");
    }

    return builder.join(", ");
  }
}
