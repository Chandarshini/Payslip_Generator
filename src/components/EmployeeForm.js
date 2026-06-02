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

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "30px auto",
        background: "#fff",
        borderRadius: "15px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          background: "#800020",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>PAYSLIP GENERATOR</h1>
        <p style={{ marginTop: "8px" }}>Nandha Natyalaya</p>
      </div>

      <form
        onSubmit={handleSubmit}
        style={{
          padding: "30px",
        }}
      >
        {/* Employee Details */}

        <h2 style={sectionTitle}>
          ஊழியர் விவரங்கள் / Employee Details
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <div>
            <label style={labelStyle}>Employee Name</label>
            <input
              style={inputStyle}
              name="employeeName"
              placeholder="Employee Name"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Employee ID</label>
            <input
              style={inputStyle}
              name="employeeId"
              placeholder="Employee ID"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Designation</label>
            <input
              style={inputStyle}
              name="designation"
              placeholder="Designation"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Branch</label>
            <input
              style={inputStyle}
              name="branch"
              placeholder="Branch"
              onChange={handleChange}
            />
          </div>

          <div>
            <label style={labelStyle}>Salary Month</label>
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
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
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
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
            fontSize: "16px",
            fontWeight: "bold",
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