
/*
 * TEAM-25: Form Validation
 * Connects input validation with TEAM-24 error messages.
 */

import { validateJobOffer } from "./validation.js";
import { getErrorMessage } from "./errorMessages.js";

const validationCodes = {
  "Job offer is required.": "jobOfferRequired",
  "Compensation information is required.": "compensationRequired",
  "Salary must be a valid non-negative number.": "salaryInvalid",
  "Bonus must be a valid non-negative number.": "bonusInvalid",
  "Benefits information is required.": "benefitsRequired",
  "Work conditions information is required.": "workConditionsRequired",
  "Work arrangement is required.": "workArrangementRequired",
  "Hours per week must be greater than 0.": "hoursPerWeekInvalid"
};

export function getFormErrors(offer) {
  const errors = [];

  if (!offer) {
    return [getErrorMessage("jobOfferRequired")];
  }

  if (!String(offer.companyName ?? "").trim()) {
    errors.push(getErrorMessage("companyNameRequired"));
  }

  if (!String(offer.positionTitle ?? "").trim()) {
    errors.push(getErrorMessage("positionTitleRequired"));
  }

  const compensation = offer.compensation;

  if (compensation) {
    if (compensation.salary == null ||
        String(compensation.salary).trim() === "") {
      errors.push(getErrorMessage("salaryRequired"));
    }

    if (compensation.bonus == null ||
        String(compensation.bonus).trim() === "") {
      errors.push(getErrorMessage("bonusRequired"));
    }
  }

  // Get errors from Anu's validation function.
  const validationErrors = validateJobOffer(offer);

  for (const message of validationErrors) {
    const errorCode = validationCodes[message];

    // Avoid duplicate errors for empty numeric fields.
    if (errorCode === "salaryInvalid" &&
        errors.includes(getErrorMessage("salaryRequired"))) {
      continue;
    }

    if (errorCode === "bonusInvalid" &&
        errors.includes(getErrorMessage("bonusRequired"))) {
      continue;
    }

    errors.push(getErrorMessage(errorCode) || message);
  }

  return [...new Set(errors)];
}
