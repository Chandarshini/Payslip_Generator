import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { toWords } from "number-to-words";
import companyLogo from "../assets/logo.png";
import natarajarImg from "../assets/natrajar.png"

function PayslipPreview({ employeeData }) {
  const basicSalary =
    Number(employeeData.basicSalary || 0);

  const incentive =
    Number(employeeData.incentive || 0);

  const transportAllowance =
    Number(employeeData.transportAllowance || 0);

  const overtime =
    Number(employeeData.overtime || 0);

  const advanceDeduction =
    Number(employeeData.advanceDeduction || 0);

  const leaveDeduction =
    Number(employeeData.leaveDeduction || 0);

  const loanDeduction =
    Number(employeeData.loanDeduction || 0);

  const otherDeductions =
    Number(employeeData.otherDeductions || 0);

  const totalEarnings =
    basicSalary +
    incentive +
    transportAllowance +
    overtime;

  const totalDeductions =
    advanceDeduction +
    leaveDeduction +
    loanDeduction +
    otherDeductions;

  const netSalary =
    totalEarnings - totalDeductions;

    const salaryInWords =
  netSalary > 0
    ? toWords(netSalary)
    : "Zero";

  const downloadPDF = async () => {
  const input = document.getElementById("payslip");

  const canvas = await html2canvas(input, {
    scale: 2,
    useCORS: true,
  });

  const imgData = canvas.toDataURL("image/png");

  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = 210;
  const pageHeight = 297;

  pdf.addImage(
    imgData,
    "PNG",
    0,
    0,
    pageWidth,
    pageHeight
  );

  pdf.save(
    `${employeeData.employeeName}_Payslip.pdf`
  );
};
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  };

  const colors = {
  maroon: "#800020",
  gold: "#D4AF37",
  lightGold: "#FFF8E7",
};

  const thTdStyle = {
  border: "1px solid #999",
  padding: "8px",
  textAlign: "left",
};

const thStyle = {
  ...thTdStyle,
  backgroundColor: colors.maroon,
  color: "#fff",
};

  

  return (
    <>
      <div
        id="payslip"
       style={{
        width: "100%",
  maxWidth: "794px",
  minHeight: "1123px",
  boxSizing: "border-box",
  padding: "20px",
  margin: "20px auto",
  background: colors.lightGold,
  border: `4px solid ${colors.maroon}`,
  boxShadow: "0 0 10px rgba(0,0,0,0.15)",
  fontFamily: "Arial, sans-serif",
}}
      >
        
       <div
  style={{
    background: colors.maroon,
    color: "#fff",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
      <div
  style={{
    width: "125px",
    height: "125px",
    background: "#fff",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: "15px",
  }}
>
  <img
    src={companyLogo}
    alt="Logo"
    style={{
      width: "100px",
      height: "100px",
      objectFit: "contain",
    }}
  />
</div>

    <div
      style={{
        flex: 1,
        textAlign: "center",
        marginLeft: "-10px",
      }}
    >

      <h2
        style={{
        fontSize: "35px",
          marginTop: "15px",
          color: colors.gold,
        }}
      >
        நந்தா நாட்டியாலயா
      </h2>

      <h2 style={{ margin: 0,  fontSize: "30px", }}>
        சம்பள சீட்டு / PAY SLIP
      </h2>

      {/* <p style={{ margin: 0 }}>
        உடையாம்பாளையம், கோவை - 28
      </p> */}
    </div>
        <div
      style={{
        width: "125px",
        height: "125px",
        background: "#fff",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img
        src={natarajarImg}
        alt="Natarajar"
        style={{
          width: "100px",
          height: "100px",
          objectFit: "contain",
        }}
      />
    </div>
  </div>
</div>

        {/* Employee Details */}

        <h3>ஊழியர் விவரங்கள்</h3>

        <div
  style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    background: "#fff",
    padding: "12px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  }}
>
  <div>
    <p><strong>ஊழியர் பெயர் :</strong> {employeeData.employeeName}</p>
    <p><strong>ஊழியர் ID :</strong> {employeeData.employeeId}</p>
    <p><strong>பதவி :</strong> {employeeData.designation}</p>
  </div>

  <div>
    <p><strong>பணிபுரியும் கிளை :</strong> {employeeData.branch}</p>
    <p><strong>சம்பள மாதம் :</strong> {employeeData.salaryMonth}</p>
    <p><strong>சம்பளம் வழங்கிய தேதி :</strong> {employeeData.paymentDate}</p>
  </div>
</div>

        {/* Earnings */}
        <div
  style={{
    display: "flex",
    gap: "15px",
    marginTop: "20px",
  }}
>

  <div
  style={{
    flex: 1,
    background: "#fff",
    borderRadius: "6px",
    overflow: "hidden",
  }}
>
  <div
    style={{
      background: colors.maroon,
      color: "#fff",
      padding: "10px",
      fontWeight: "bold",
    }}
  >
    வருமான விவரங்கள்
  </div>

  <table style={tableStyle}>
    {/* KEEP YOUR EXISTING EARNINGS ROWS HERE */}
          <tbody>
            <tr>
              <th style={thStyle}>விவரம்</th>
              <th style={thStyle}>தொகை</th>
            </tr>

            <tr>
              <td style={thTdStyle}>
                அடிப்படை சம்பளம்
              </td>
              <td style={thTdStyle}>
                ₹ {basicSalary}
              </td>
            </tr>

            <tr>
              <td style={thTdStyle}>
                ஊக்கத் தொகை
              </td>
              <td style={thTdStyle}>
                ₹ {incentive}
              </td>
            </tr>

            <tr>
              <td style={thTdStyle}>
                போக்குவரத்து செலவு
              </td>
              <td style={thTdStyle}>
                ₹ {transportAllowance}
              </td>
            </tr>

            <tr>
              <td style={thTdStyle}>
                ஓவர்டைம் (OT)
              </td>
              <td style={thTdStyle}>
                ₹ {overtime}
              </td>
            </tr>

            <tr>
              <td style={thTdStyle}>
                <strong>
                  மொத்த வருமானம்
                </strong>
              </td>

              <td style={thTdStyle}>
                <strong>
                  ₹ {totalEarnings}
                </strong>
              </td>
            </tr>
          </tbody>
  </table>
</div>
<div
  style={{
    flex: 1,
    background: "#fff",
    borderRadius: "6px",
    overflow: "hidden",
  }}
>
  <div
    style={{
      background: colors.gold,
      color: "#000",
      padding: "10px",
      fontWeight: "bold",
    }}
  >
    கழிவு விவரங்கள்
  </div>

  <table style={tableStyle}>
    {/* KEEP YOUR EXISTING DEDUCTION ROWS HERE */}
    <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={thStyle}>விவரம்</th>
              <th style={thStyle}>தொகை</th>
            </tr>

            <tr>
              <td style={thTdStyle}>
                Advance Deduction
              </td>
              <td style={thTdStyle}>
                ₹ {advanceDeduction}
              </td>
            </tr>

            <tr>
              <td style={thTdStyle}>
                Leave Deduction
              </td>
              <td style={thTdStyle}>
                ₹ {leaveDeduction}
              </td>
            </tr>

            <tr>
              <td style={thTdStyle}>
                Loan Deduction
              </td>
              <td style={thTdStyle}>
                ₹ {loanDeduction}
              </td>
            </tr>

            <tr>
              <td style={thTdStyle}>
                மற்ற கழிவுகள்
              </td>
              <td style={thTdStyle}>
                ₹ {otherDeductions}
              </td>
            </tr>

            <tr>
              <td style={thTdStyle}>
                <strong>
                  மொத்த கழிவு
                </strong>
              </td>

              <td style={thTdStyle}>
                <strong>
                  ₹ {totalDeductions}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
  </table>
</div>
</div>
        {/* Net Salary */}

        <div
         style={{
  textAlign: "center",
  marginTop: "20px",
  padding: "18px",
  background: colors.maroon,
color: "#fff",
  border: `3px solid ${colors.gold}`,
  borderRadius: "10px",
}}
        >
          <h2>
            நிகர சம்பளம் (NET SALARY)
          </h2>

        <h1
  style={{
    color: colors.gold,
    fontSize: "38px",
    margin: 0,
  }}
>
  ₹ {netSalary.toLocaleString()}
</h1>
        </div>

        <p
  style={{
    textAlign: "center",
    fontWeight: "bold",
  }}
>
  (Rupees {salaryInWords} Only)
</p>

        {/* Additional Details */}

        <h3>கூடுதல் விவரங்கள்</h3>

        <div
  style={{
    marginTop: "20px",
    background: "#fff",
    border: "1px solid #ccc",
    padding: "12px",
    borderRadius: "6px",
  }}
>
  <p>
    <strong>சம்பளம் வழங்கிய தேதி :</strong>
    {" "}
    {employeeData.paymentDate}
  </p>

  <p>
    <strong>வழங்கிய முறை :</strong>
    {" "}
    {employeeData.paymentMethod}
  </p>
</div>

        {/* Signature */}

        <div
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            marginTop: "15px",
            paddingTop: "40px",
borderTop: "2px solid #ccc",
          }}
        >
          <div>
            ____________________
            <br />
            ஊழியர் கையொப்பம்
          </div>

          <div>
            ____________________
            <br />
            நிர்வாகி கையொப்பம் /
            முத்திரை
          </div>
        </div>

        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          நன்றி
        </p>
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <button
          onClick={downloadPDF}
          style={{
            padding: "12px 25px",
            background: "#800020",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Download PDF
        </button>
      </div>
    </>
  );
}

export default PayslipPreview;
