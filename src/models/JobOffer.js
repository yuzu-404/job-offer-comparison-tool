class JobOffer {
    constructor(company, salary, bonus, benefits, workConditions) {
        this.company = company
        this.salary = salary
        this.bonus = bonus
        this.benefits = benefits
        this.workConditions = workConditions
    }

    getTotalCompensation() {
        return Number(this.salary) + Number(this.bonus)
    }
}

export default JobOffer