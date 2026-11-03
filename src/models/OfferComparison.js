
/*
 * TEAM-29: OfferComparison
 * Compares the salary, bonus, benefits, and work conditions
 * of two job offers.
 */

export class OfferComparison {
  constructor(offer1, offer2) {
    this.offer1 = offer1;
    this.offer2 = offer2;
  }

  compareOffers() {
    const salary1 = this.offer1.compensation.salary;
    const salary2 = this.offer2.compensation.salary;

    const bonus1 = this.offer1.compensation.bonus;
    const bonus2 = this.offer2.compensation.bonus;

    return {
      salaryDifference: Math.abs(salary1 - salary2),
      bonusDifference: Math.abs(bonus1 - bonus2),

      benefits: {
        offer1: this.offer1.benefits,
        offer2: this.offer2.benefits
      },

      workConditions: {
        offer1: this.offer1.workConditions,
        offer2: this.offer2.workConditions
      }
    };
  }
}
