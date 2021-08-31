// import React from "react";
// import { useHistory } from "react-router-dom";
// import { Register } from "../../lib/api";

// const registerUser = () => {
//   const history = useHistory();
//   const [state, setState] = React.useState({
//     formData: {
//       email: "",
//       password: "",
//       passwordConfirmation: "",
//       registrationErrors: "",
//     },
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//   };

//   try {
//     const res = Register(state.formData);
//     if (res.status === 200) {
//       history.push("/login");
//     }
//   } catch (err) {
//     console.error("Error registering user", err);
//   }
// };

// const handleChange = (e) => {
//   const formData = {
//     ...state.formData,
//     [e.target.name]: e.target.value,
//   };

//   setState({ formData });
// };

// return (
//   <section className="section">
//     <div className="container">
//       <div className="columns">
//         <form
//           onSubmit={handleSubmit}
//           className="column is-half is-offset-one-quarter-box"
//         >
//           <div className="field">
//             <label className="label">Username</label>
//             <div className="control">
//               <input
//                 classname="input"
//                 placeholder="username"
//                 name="username"
//                 value={state.formData.username}
//                 onChange={state.handleChange}
//               />
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Email</label>
//             <div className="control">
//               <input
//                 classname="input"
//                 placeholder="email"
//                 name="email"
//                 value={state.formData.email}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Password</label>
//             <div className="control">
//               <input
//                 classname="input"
//                 placeholder="password"
//                 name="password"
//                 type="password"
//                 value={state.formData.password}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="field">
//             <label className="label">Confirm Password</label>
//             <div className="control">
//               <input
//                 classname="input"
//                 placeholder="Confirm Password"
//                 name="passwordConfirmation"
//                 type="password"
//                 value={state.formData.passwordConfirmation}
//                 onChange={handleChange}
//               />
//             </div>
//           </div>

//           <div className="field">
//             <input
//               className="button is-fullwidth is-warning"
//               type="submit"
//               value="Register"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   </section>
// );

// export default Register;
