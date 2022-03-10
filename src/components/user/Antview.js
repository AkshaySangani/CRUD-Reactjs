import { Button } from 'antd';
import React  from 'react';
import { List, Typography, Divider } from 'antd';
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />
}
class Antview extends React.Component {
  
  state = {
    user: {},
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    gender: "",
    id: this.props.params.id,
    data: []
  };
  
  // const { id } = useParams();

  componentDidMount() {
    this.loadUser();
    console.log("hello");
  }

  loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${this.state.id}`);
    console.log("Res", res.data)
    let newData = [...this.state.data, res.data]
    this.setState({
      user: res.data,
      data: newData
    })
  };


  render() {
    //  console.log("props",this.props);
    return (
      <div className="container py-4">
       
        <Divider orientation="left"><h2>All info of User Id: {this.state.id}</h2></Divider>
        <List
          // header={<div>Header</div>}
          // footer={<div>Footer</div>}
          bordered
          dataSource={this.state.data}
          renderItem={item => (
            <><List.Item>
              <Typography.Text >Name: </Typography.Text>{ item.name}
            </List.Item><List.Item>
                <Typography.Text >Username: </Typography.Text>{item.username}
              </List.Item><List.Item>
                <Typography.Text >E-mail: </Typography.Text> {item.email}
              </List.Item><List.Item>
                <Typography.Text >Phone: </Typography.Text>{item.phone}
              </List.Item><List.Item>
                <Typography.Text >Gender: </Typography.Text>{item.gender}
              </List.Item><List.Item>
                <Typography.Text >Website: </Typography.Text>{item.website}
              </List.Item></>
          )}
        />
         <Link  to="/"> <Button type="primary" style={{margin:'5px',}}>Back to Home</Button></Link>
      </div>
    )
  }
}
export default withParams(Antview)
