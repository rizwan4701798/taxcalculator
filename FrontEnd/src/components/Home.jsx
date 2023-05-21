import React, { useState } from "react";

function Home() {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(0);

  const handleIncomeChange = (e) => {
    setIncome(e.target.value);
  };

  const calculateTax = () => {
    let calculatedTax = 0;

    if (isNaN(income) || income < 0) {
      // Handle invalid input
      setTax(calculatedTax);
      return;
    }

    const taxRates = [
      { threshold: 600000, rate: 0 },
      { threshold: 1200000, rate: 0.985 },
      { threshold: 2400000, rate: 0.885 },
      { threshold: 3600000, rate: 0.8 },
      { threshold: 6000000, rate: 0.75 },
      { threshold: 12000000, rate: 0.685 },
      { threshold: Infinity, rate: 0.65 }
    ];

    for (const { threshold, rate } of taxRates) {
      if (income <= threshold) {
        calculatedTax = income * rate;
        break;
      }
    }

    setTax(calculatedTax);
  };

  return (
    <div className="container calculator">
      <h2 className="text-center title">Tax Calculator</h2>
      <div className="form-group">
        <label htmlFor="income" className="label">
          Income:
        </label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={handleIncomeChange}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="tax" className="label">
          Tax:
        </label>
        <input
          type="number"
          id="tax"
          value={tax}
          className="form-control"
          readOnly
        />
      </div>
      <button onClick={calculateTax} className="btn btn-primary btn-block">
        Calculate
      </button>
    </div>
  );
}

export default Home;
