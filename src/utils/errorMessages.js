
/*
 * TEAM-24: Error Messages
 * Messages for missing or invalid job offer information.
 */

const errorMessages = {
  jobOfferRequired: "Job offer is required.",
  companyNameRequired: "Please enter a company name.",
  positionTitleRequired: "Please enter a job title.",
  compensationRequired: "Compensation information is required.",
  salaryRequired: "Please enter a salary.",
  salaryInvalid: "Salary must be a valid number (0 or higher).",
  bonusRequired: "Please enter a bonus (enter 0 if none).",
  bonusInvalid: "Bonus must be a valid number (0 or higher).",
  stockEquityInvalid: "Stock equity must be a valid number (0 or higher).",
  benefitsRequired: "Benefits information is required.",
  ptoDaysInvalid: "PTO days must be a whole number (0 or higher).",
  workConditionsRequired: "Work conditions information is required.",
  workArrangementRequired: "Please enter a work arrangement.",
  hoursPerWeekInvalid: "Hours per week must be greater than 0."
};

// Returns the message for an error code.
export function getErrorMessage(errorCode) {
  return errorMessages[errorCode] || "";
}
