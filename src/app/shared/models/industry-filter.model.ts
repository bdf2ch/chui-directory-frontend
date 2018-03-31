import { Industry } from './industry.model';


/**
 * Industry filter model
 */
export class IndustryFilter extends Industry {
  isEnabled: boolean;

  constructor() {
    super();
    this.isEnabled = false;
  }
}
