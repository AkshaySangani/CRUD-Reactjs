import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

// export default function User () {
//   const [user, setUser] = useState({
//     name: "",
//     username: "",
//     email: "",
//     phone: "",
//     website: "",
//     gender:""
//   });
//   const { id } = useParams();

//   useEffect(() => {
//     loadUser();
//   },[]) // some error handling

//   const loadUser = async () => {
//     const res = await axios.get(`http://localhost:3003/users/${id}`);
//     setUser(res.data);
//   };


  
//   return (
//     <div className="container py-4">
//       <Link className="btn btn-primary" to="/">
//         back to Home
//       </Link>
//       <h1 className="display-4">User Id: {id}</h1>
//       <hr />
//       <ul className="list-group w-50">
//         <li className="list-group-item">name: {user.name}</li>
//         <li className="list-group-item">user name: {user.username}</li>
//         <li className="list-group-item">email: {user.email}</li>
//         <li className="list-group-item">phone: {user.phone}</li>
//         <li className="list-group-item">website: {user.website}</li>
//         <li className="list-group-item">gender: {user.gender}</li>
//       </ul>
//     </div> 
//   );
// };


function withParams(Component){
  return props => <Component {...props} params={useParams()}/>
}
class View extends React.Component {
  state ={user:{},
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    gender:"",
    id:this.props.params.id,
  };

  // const { id } = useParams();
  
  componentDidMount(){
    this.loadUser();
}

  loadUser =async()=>{
    const res = await axios.get(`http://localhost:3003/users/${this.state.id}`);
    console.log("Res",res.data)
    this.setState({
      user:res.data
    })
  };

  render() {
    //  console.log("props",this.props);
    return (
      <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id: {this.state.id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {this.state.user.name}</li>
        <li className="list-group-item">user name: {this.state.user.username}</li>
        <li className="list-group-item">email: {this.state.user.email}</li>
        <li className="list-group-item">phone: {this.state.user.phone}</li>
        <li className="list-group-item">website: {this.state.user.website}</li>
        <li className="list-group-item">gender: {this.state.user.gender}</li>
      </ul>
    </div> 
    )
  }
}
export default withParams(View)