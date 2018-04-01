export interface IIndustry {
  id: string;
  parent?: string;
  label: string;
  children?: IIndustry[];
}
