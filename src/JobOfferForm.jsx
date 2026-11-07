import { useState } from 'react'

function formatNumber(value) {
  const digits = String(value ?? '').replace(/\D/g, '')

  if (!digits) return ''

  return Number(digits).toLocaleString('en-US')
}

function JobOfferForm() {
    const [offers, setOffers] = useState(() => {
        const savedOffers = localStorage.getItem('jobOffers')

        if (savedOffers) {
            return JSON.parse(savedOffers)
        }

        return [
            { company: '', salary: '', bonus: '', benefits: '', workConditions: '' },
            { company: '', salary: '', bonus: '', benefits: '', workConditions: '' }
        ]
    })

  return (
    <div>
      <h1>Job Offer Evaluation Tool</h1>
      <p>Enter the details of two job offers to compare them.</p>

      {offers.map((offer, index) => (
        <section key={index}>
          <h2>Job Offer {index + 1}</h2>

            <label htmlFor={`company-${index}`}>Company Name:</label>
            <input
                id={`company-${index}`}
                type="text"
                value={offer.company}
                onChange={(event) => {
                    const updatedOffers = [...offers]
                    updatedOffers[index] = {
                        ...offer,
                        company: event.target.value
                    }
                    setOffers(updatedOffers)
                }}
          />

            <label htmlFor={`salary-${index}`}>Annual Salary ($):</label>
            <input
                id={`salary-${index}`}
                type="text"
                inputMode="decimal"
                value={formatNumber(offer.salary)}
                onChange={(event) => {
                    const updatedOffers = [...offers]
                    updatedOffers[index] = {
                    ...offer,
                    salary: event.target.value.replace(/\D/g, '')
                    }
                    setOffers(updatedOffers)
                }}
            />

            <label htmlFor={`bonus-${index}`}>Annual Bonus ($):</label>
            <input
                id={`bonus-${index}`}
                type="text"
                inputMode="decimal"
                placeholder="Enter 0 if none"
                value={formatNumber(offer.bonus)}
                onChange={(event) => {
                    const updatedOffers = [...offers]
                    updatedOffers[index] = {
                    ...offer,
                    bonus: event.target.value.replace(/\D/g, '')
                    }
                    setOffers(updatedOffers)
                }}
            />

            <label htmlFor={`benefits-${index}`}>Benefits:</label>
            <textarea
                id={`benefits-${index}`}
                rows="3"
                placeholder="e.g., Health insurance, 401(k), paid time off"
                value={offer.benefits}
                onChange={(event) => {
                    const updatedOffers = [...offers]
                    updatedOffers[index] = {
                    ...offer,
                    benefits: event.target.value
                    }
                    setOffers(updatedOffers)
                }}
            />

            <label htmlFor={`workConditions-${index}`}>
            Work Conditions:
            </label>
            <textarea
                id={`workConditions-${index}`}
                rows="3"
                placeholder="e.g., Remote work, flexible hours, 40 hours/week"
                value={offer.workConditions}
                onChange={(event) => {
                    const updatedOffers = [...offers]
                    updatedOffers[index] = {
                    ...offer,
                    workConditions: event.target.value
                    }
                    setOffers(updatedOffers)
                }}
            />

        </section>
      ))}

            <button
                type="button"
                onClick={() => {
                    const hasIncompleteOffers = offers.some((offer) =>
                        !offer.company.trim() ||
                        !offer.salary ||
                        !offer.bonus ||
                        !offer.benefits.trim() ||
                        !offer.workConditions.trim()
                    )

                    if (hasIncompleteOffers) {
                        alert('Please complete all fields for both job offers.')
                        return
                    }

                    localStorage.setItem('jobOffers', JSON.stringify(offers))
                    console.log('Saved Job Offers:', offers)
                    alert('Job offers saved successfully!')
                }}
                >
                Save Offers
            </button>

    </div>
  )
}

export default JobOfferForm