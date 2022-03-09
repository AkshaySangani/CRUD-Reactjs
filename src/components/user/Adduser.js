import React from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
 
// export default function AddUser() {
//   let navigate = useNavigate();
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     website: "",
//     gender:""
//   });

//   const { name, username, email, phone, website} = user;
//   const onInputChange = e => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post("http://localhost:3003/users", user);
//     navigate("/");
//   };

//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add A User</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group my-2">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Name"
//               name="name"
//               value={name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group my-2">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Username"
//               name="username"
//               value={username}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group my-2">
//             <input
//               type="email"
//               className="form-control form-control-lg"
//               placeholder="Enter Your E-mail Address"
//               name="email"
//               value={email}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group my-2 d-flex">
//             <label><strong>Gender:</strong></label>
//             <div className="form-check mx-2">
//               <input className="form-check-input" type="radio" value={"male"} name="gender" id="flexRadioDefault1" onChange={e => onInputChange(e)}/>
//               <label className="form-check-label" htmlFor="flexRadioDefault1">
//                 male
//               </label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" value={"female"} name="gender" id="flexRadioDefault2" onChange={e => onInputChange(e)}  />
//               <label className="form-check-label" htmlFor="flexRadioDefault2">
//                 female
//               </label>
//             </div>
//           </div>
//           <div className="form-group my-2">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Phone Number"
//               name="phone"
//               value={phone}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group my-2">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter Your Website Name"
//               name="website"
//               value={website}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-primary btn-block">Add User</button>
//         </form>
//       </div>
//     </div>
//   );
// };

function papakipari(Component) {
  return props => <Component {...props} navigate={useNavigate()} />
}

class Update extends React.Component {

  state = {
    user: {},
  };

  onInputChange = async (e) => {
    console.log(this.state.user);
    this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } });
  };

  

  onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3003/users/", this.state.user);

    this.props.navigate("/");

  };

  render() {
    const { name = "", username = "", email = "", phone = "", website = "", 
    // gender = "" 
  } = this.state.user;
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Add A User</h2>
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="form-group my-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <div className="form-group my-2 d-flex">
              <label><strong>Gender:</strong></label>
              <div className="form-check mx-2">
                <input className="form-check-input" type="radio" value={"male"} name="gender" id="flexRadioDefault1" onChange={e => this.onInputChange(e)} />
                <label className="form-check-label" htmlFor="flexRadioDefault1">
                  male
                </label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" value={"female"} name="gender" id="flexRadioDefault2" onChange={e => this.onInputChange(e)} />
                <label className="form-check-label" htmlFor="flexRadioDefault2">
                  female
                </label>
              </div>
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Phone Number"
                name="phone"
                value={phone}
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <div className="form-group my-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Website Name"
                name="website"
                value={website}
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <button className="btn btn-primary btn-block">Add User</button>
          </form>
        </div>
      </div>
    )
  }
}
export default papakipari(Update)