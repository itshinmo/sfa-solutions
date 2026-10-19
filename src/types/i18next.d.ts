import { type DefaultNamespace, type defaultResources } from "@/i18n/resources";
import "i18next";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: DefaultNamespace;
    resources: typeof defaultResources;
  }
}
