import React, { useState } from "react";

const Test = () => {
  const [info, setInfo] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    accoutType: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // customValidate();
  };
  return (
    <div className="container mt-5 max-w-sm mx-auto">
      <form className="needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="validationCustom01" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom01"
            defaultValue="Mark 1"
            required
          />
          <div className="valid-feedback">Looks good!</div>
          <div className="invalid-feedback">Please choose a username.</div>
        </div>
        <div className="form-group">
          <label htmlFor="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustom02"
            defaultValue="Otto"
            required
          />
          <div className="valid-feedback">Looks good!</div>
        </div>

        <div className="">
          <button className="btn btn-primary" type="submit">
            Submit form
          </button>
        </div>
      </form>
    </div>
  );
};

export default Test;

// export const customValidate = function () {
//   // Example starter JavaScript for disabling form submissions if there are invalid fields
//   "use strict";

//   // Fetch all the forms we want to apply custom Bootstrap validation styles to
//   var forms = document.querySelectorAll(".needs-validation");

//   // Loop over them and prevent submission
//   Array.prototype.slice.call(forms).forEach(function (form) {
//     form.addEventListener(
//       "submit",
//       function (event) {
//         if (!form.checkValidity()) {
//           event.preventDefault();
//           event.stopPropagation();
//         }
//         form.classList.add("was-validated");
//       },
//       false
//     );
//   });
// };
