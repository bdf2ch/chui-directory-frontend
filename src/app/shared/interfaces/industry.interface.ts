export interface IIndustry {
  id: string;
  label: string;
  children?: IIndustry[];
}
