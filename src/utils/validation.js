export function validateJobOffer(offer) {
  const errors = [];

  if (!offer) {
    errors.push("Job offer is required.");
    return errors;
  }

  if (!offer.compensation) {
    errors.push("Compensation information is required.");
  } else {
    if (
      typeof offer.compensation.salary !== "number" ||
      offer.compensation.salary < 0
    ) {
      errors.push("Salary must be a valid non-negative number.");
    }

    if (
      typeof offer.compensation.bonus !== "number" ||
      offer.compensation.bonus < 0
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
    if (!offer.workConditions.workArrangement) {
      errors.push("Work arrangement is required.");
    }

    if (
      typeof offer.workConditions.hoursPerWeek !== "number" ||
      offer.workConditions.hoursPerWeek <= 0
    ) {
      errors.push("Hours per week must be greater than 0.");
    }
  }

  return errors;
}