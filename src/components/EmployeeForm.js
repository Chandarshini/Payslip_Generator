import { useState } from "react";

function EmployeeForm({ setEmployeeData }) {
  const [formData, setFormData] = useState({
    // Employee Details
    employeeName: "",
    employeeId: "",
    designation: "",
    branch: "",
    salaryMonth: "",

    // Earnings
    basicSalary: "",
    incentive: "",
    transportAllowance: "",
    overtime: "",

    // Deductions
    advanceDeduction: "",
    leaveDeduction: "",
    loanDeduction: "",
    otherDeductions: "",

    // Additional Details
    paymentDate: "",
    paymentMethod: "Bank Transfer",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmployeeData(formData);
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    border: "1px solid #d6d6d6",
    borderRadius: "8px",
    fontSize: "14px",
    boxSizing: "border-box",
  };

  const labelStyle = {
    marginBottom: "6px",
    fontWeight: "600",
    color: "#333",
    display: "block",
  };

  const sectionTitle = {
    color: "#800020",
    marginTop: "35px",
    marginBottom: "20px",
    borderBottom: "2px solid #800020",
    paddingBottom: "8px",
  };

  const mobileGrid = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "15px",
};

  return (
    <div
      style={{
         width: "95%",
        maxWidth: "450px",
        margin: "15px auto",
        background: "#fff",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <div
  style={{
    background: "linear-gradient(135deg, #800020, #5a0016)",
    color: "#fff",
    padding: "25px 20px",
    textAlign: "center",
    borderBottom: "4px solid #D4AF37",
    boxShadow: "0 3px 10px rgba(0,0,0,0.15)",
  }}
>
  <h2
    style={{
        fontSize: "40px",
      margin: 0,
      color: "#D4AF37",
      letterSpacing: "1px",
    }}
  >
    Nandha Natyalaya
  </h2>

  <p
    style={{
      margin: "5px 0 15px",
      fontSize: "20px",
      color: "#f5e6a8",
    }}
  >
    Udaiyampalayam, Coimbatore - 28
  </p>

  <div
    style={{
      width: "100px",
      height: "3px",
      background: "#D4AF37",
      margin: "0 auto 15px",
      borderRadius: "10px",
    }}
  />

  <h1
    style={{
      margin: 0,
      fontSize: "28px",
      letterSpacing: "2px",
      color: "#fff",
    }}
  >
    PAYSLIP GENERATOR
  </h1>

</div>

      <form
        onSubmit={handleSubmit}
        style={{
          padding: "20px",
        }}
      >
        {/* Employee Details */}

        <h2 style={sectionTitle}>
          ஊழியர் விவரங்கள் / Employee Details
        </h2>

        <div
          style={mobileGrid}
        >
          <div>
            <label style={labelStyle}>ஊழியர் பெயர்</label>
            <input
              style={inputStyle}
              name="employeeName"
              placeholder="Employee Name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>ஊழியர் ID</label>
            <input
              style={inputStyle}
              name="employeeId"
              placeholder="Employee ID"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>பதவி</label>
            <input
              style={inputStyle}
              name="designation"
              placeholder="Designation"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>பணிபுரியும் கிளை</label>
            <input
              style={inputStyle}
              name="branch"
              placeholder="Branch"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>சம்பள மாதம்</label>
            <input
              style={inputStyle}
              name="salaryMonth"
              placeholder="May 2026"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Earnings */}

        <h2 style={sectionTitle}>
          வருமான விவரங்கள் / Earnings Details
        </h2>

        <div
         style={mobileGrid}
        >
          <div>
            <label style={labelStyle}>Basic Salary</label>
            <input
              style={inputStyle}
              type="number"
              name="basicSalary"
              placeholder="0"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Incentive</label>
            <input
              style={inputStyle}
              type="number"
              name="incentive"
              placeholder="0"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Transport Allowance</label>
            <input
              style={inputStyle}
              type="number"
              name="transportAllowance"
              placeholder="0"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Overtime (OT)</label>
            <input
              style={inputStyle}
              type="number"
              name="overtime"
              placeholder="0"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Deductions */}

        <h2 style={sectionTitle}>
          கழிவு விவரங்கள் / Deduction Details
        </h2>

        <div
         style={mobileGrid}
        >
          <div>
            <label style={labelStyle}>Advance Deduction</label>
            <input
              style={inputStyle}
              type="number"
              name="advanceDeduction"
              placeholder="0"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Leave Deduction</label>
            <input
              style={inputStyle}
              type="number"
              name="leaveDeduction"
              placeholder="0"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Loan Deduction</label>
            <input
              style={inputStyle}
              type="number"
              name="loanDeduction"
              placeholder="0"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Other Deductions</label>
            <input
              style={inputStyle}
              type="number"
              name="otherDeductions"
              placeholder="0"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Additional Details */}

        <h2 style={sectionTitle}>
          கூடுதல் விவரங்கள் / Additional Details
        </h2>

        <div
          style={mobileGrid}
        >
          <div>
            <label style={labelStyle}>Payment Date</label>
            <input
              style={inputStyle}
              type="date"
              name="paymentDate"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Payment Method</label>
            <select
              style={inputStyle}
              name="paymentMethod"
              onChange={handleChange}
            >
              <option>Bank Transfer</option>
              <option>Cash</option>
              <option>UPI</option>
              <option>Cheque</option>
            </select>
          </div>
        </div>

        <button
          type="submit"
          style={{
            marginTop: "35px",
            width: "100%",
            padding: "14px",
            background: "#800020",
            color: "white",
            border: "none",
            borderRadius: "8px",
            fontSize: "18px",
            fontWeight: "18px",
            cursor: "pointer",
          }}
        >
          Generate Payslip
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;