export function validateJobOffer(offer) {
  const errors = [];

  if (!offer) {
    errors.push("Job offer is required.");
    return errors;
  }

  if (!offer.compensation) {
    errors.push("Compensation information is required.");
  } else {
    const salary = Number(offer.compensation.salary);
    const bonus = Number(offer.compensation.bonus);

    if (
      offer.compensation.salary === "" ||
      !Number.isFinite(salary) ||
      salary < 0
    ) {
      errors.push("Salary must be a valid non-negative number.");
    }

    if (
      offer.compensation.bonus === "" ||
      !Number.isFinite(bonus) ||
      bonus < 0
    ) {
      errors.push("Bonus must be a valid non-negative number.");
    }
  }

  if (!offer.benefits) {
    errors.push("Benefits information is required.");
  }

  if (!offer.workConditions) {
    errors.push("Work conditions information is required.");
  } else {
    const hours = Number(offer.workConditions.hoursPerWeek);

    if (!offer.workConditions.workArrangement) {
      errors.push("Work arrangement is required.");
    }

    if (
      offer.workConditions.hoursPerWeek === "" ||
      !Number.isFinite(hours) ||
      hours <= 0
    ) {
      errors.push("Hours per week must be greater than 0.");
    }
  }

  return errors;
}