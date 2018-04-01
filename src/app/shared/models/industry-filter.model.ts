import { IIndustry } from '../interfaces/industry.interface';


/**
 * Industry filter model
 */
export class IndustryFilter implements IIndustry {
  id: string;
  parent: string;
  label: string;
  isEnabled: boolean;

  constructor(industry: IIndustry) {
    this.id = industry.id;
    this.label = industry.label;
    this.isEnabled = false;
  }

  /**
   * Enables filter
   */
  enable(): void {
    this.isEnabled = true;
  }


  /**
   * Disables filter
   */
  disable(): void {
    this.isEnabled = false;
  }
}
