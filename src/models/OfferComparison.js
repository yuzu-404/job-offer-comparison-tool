
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
    const offers = [this.offer1, this.offer2];

    // Check that both offers have valid compensation.
    for (const offer of offers) {
      if (!offer || !offer.compensation) {
        throw new Error("Both job offers need compensation information.");
      }

      for (const field of ["salary", "bonus"]) {
        const value = offer.compensation[field];

        if (
          value === "" ||
          value === null ||
          value === undefined ||
          !Number.isFinite(Number(value)) ||
          Number(value) < 0
        ) {
          throw new Error(`Each offer needs a valid ${field}.`);
        }
      }
    }

    const salary1 = Number(this.offer1.compensation.salary);
    const salary2 = Number(this.offer2.compensation.salary);
    const bonus1 = Number(this.offer1.compensation.bonus);
    const bonus2 = Number(this.offer2.compensation.bonus);

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
