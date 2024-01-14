import { ContentComponent } from "./layout/content/content.component";
import { UiToolkitComponent } from "./layout/ui-toolkit/ui-toolkit.component";

export const routes = [
  { path: "", component: ContentComponent },
  { path: "ui-toolkit", component: UiToolkitComponent },
];
