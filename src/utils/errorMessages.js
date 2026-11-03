
/*
 * TEAM-24: Error Messages
 * Error messages for the job offer form.
 */

const errorMessages = {
  companyNameRequired: "Please enter a company name.",
  positionTitleRequired: "Please enter a job title.",
  salaryRequired: "Please enter a salary.",
  salaryInvalid: "Salary must be a valid number (0 or higher).",
  bonusInvalid: "Bonus must be a valid number (0 or higher).",
  stockEquityInvalid: "Stock equity must be a valid number (0 or higher).",
  ptoDaysInvalid: "PTO days must be a whole number (0 or higher)."
};

// Returns the error message based on the error code.
export function getErrorMessage(errorCode) {
  return errorMessages[errorCode] || "";
}
