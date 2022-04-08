import React from 'react'
import { Form, Input, Button } from 'antd';
import axios from 'axios'
import { useNavigate } from "react-router-dom";


const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const papakipari = (Component) => {
    return props => <Component {...props} navigate={useNavigate()} />
  }
 class Antadd extends React.Component {
    state = {
        user: { },name: "",
        username: "",
        email: "",
        phone: "",
        website: "",
        gender:""
      }; 

    onInputChange =  (e) => {
        // console.log(this.state.user);
        this.setState({ user: { ...this.state.user, [e.target.name]: e.target.value } });
        // console.log("fgfg",this.state.user);
      };
      

      onSubmit = async (e) => {
        // e.preventDefault();
        await axios.post("http://localhost:3003/users/", this.state.user);
        this.props.navigate("/");
      };

    render() {
        const { name = "", username = "", email = "", phone = "", website = "", 
        // gender = "" 
      } = this.state.user;
        return (
            <div>
                <h2 className="text-center mb-4">Add A User</h2>
                <Form  style={{
                    display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column",
                }}
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={(e)=>this.onSubmit(e)}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        value={name}
                        onChange={e => this.onInputChange(e)}

                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <Input name="name"
                        value={name}
                        onChange={e => this.onInputChange(e)}/>
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        name="username"
                        value={username}
                        onChange={e => this.onInputChange(e)}
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input  name="username"
                        value={username}
                        onChange={e => this.onInputChange(e)}
 />
                    </Form.Item>

                    <Form.Item
                        label="E-mail"
                        name="email"
                        value={email}
                        onChange={e => this.onInputChange(e)}

                        rules={[
                            {
                                required: true,
                                message: 'Please input your e-mail!',
                            },
                        ]}
                    >
                        <Input name="email"
                        type="email"
                        value={email}
                        onChange={e => this.onInputChange(e)}/>
                    </Form.Item>


                    <Form.Item
                        label="phone"
                        name="phone"
                        value={phone}
                        onChange={e => this.onInputChange(e)} 
                        rules={[
                            {
                                required: true,
                                message: 'Please input your phoneno.',
                            },
                        ]}
                    >
                        <Input  name="phone"
                        value={phone} type="number"
                        onChange={e => this.onInputChange(e)} />
                    </Form.Item>

                    <Form.Item
                        label="Website"
                        

                        rules={[
                            {
                                required: true,
                                message: 'Please input your Website!',
                            },
                        ]}
                    >
                        <Input  name="website"
                        value={website}
                        onChange={e => this.onInputChange(e)}
/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary"  htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>


            </div >
        )
    }
}
export default papakipari(Antadd)