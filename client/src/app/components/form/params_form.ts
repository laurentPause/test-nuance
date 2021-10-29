import { FieldForm } from "./field_form";

export interface ParamsForm {
    name: string;
    fields: Array<FieldForm>;
    nameSubmit: string;
}