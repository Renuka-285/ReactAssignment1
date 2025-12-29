import React, { useReducer } from "react";

/* ---------------- Initial State ---------------- */
const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: ""
  },
  isSubmitted: false
};

/* ---------------- Reducer ---------------- */
function formReducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };

    case "NEXT_STEP":
      return {
        ...state,
        step: state.step + 1
      };

    case "PREVIOUS_STEP":
      return {
        ...state,
        step: state.step - 1
      };

    case "SUBMIT_FORM":
      return {
        ...state,
        isSubmitted: true
      };

    case "RESET_FORM":
      return initialState;

    default:
      return state;
  }
}

/* ---------------- Component ---------------- */
function MultiStepForm() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const { step, formData, isSubmitted } = state;

  /* ---------------- Render Steps ---------------- */
  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2>Step 1: Personal Details</h2>
            <input
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "name",
                  value: e.target.value
                })
              }
            />
            <br />
            <input
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "email",
                  value: e.target.value
                })
              }
            />
            <br />
            <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
              Next
            </button>
          </>
        );

      case 2:
        return (
          <>
            <h2>Step 2: Account Details</h2>
            <input
              type="text"
              placeholder="Username"
              value={formData.username}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "username",
                  value: e.target.value
                })
              }
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              value={formData.password}
              onChange={(e) =>
                dispatch({
                  type: "UPDATE_FIELD",
                  field: "password",
                  value: e.target.value
                })
              }
            />
            <br />
            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button onClick={() => dispatch({ type: "NEXT_STEP" })}>
              Next
            </button>
          </>
        );

      case 3:
        return (
          <>
            <h2>Step 3: Review & Submit</h2>
            <p><strong>Name:</strong> {formData.name}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Username:</strong> {formData.username}</p>

            <button onClick={() => dispatch({ type: "PREVIOUS_STEP" })}>
              Back
            </button>
            <button onClick={() => dispatch({ type: "SUBMIT_FORM" })}>
              Submit
            </button>
          </>
        );

      default:
        return null;
    }
  };

  /* ---------------- Submitted View ---------------- */
  if (isSubmitted) {
    return (
      <>
        <h2>Form Submitted Successfully </h2>
        <button onClick={() => dispatch({ type: "RESET_FORM" })}>
          Reset Form
        </button>
      </>
    );
  }

  return <div>{renderStep()}</div>;
}

export default MultiStepForm;
