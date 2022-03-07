import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
    const [users, setUsers] = useState([]);
    // const { id } = useParams();

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = async () => {
        const result = await axios.get("http://localhost:3003/users")
        console.log(result.data);
        setUsers(result.data)
    };

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
        toast.success('Deleted Successful 🗑', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    };
    return (
        <div className='container'>
            <div className="py-4">
                <h1>Home</h1>
                <table className="table border shadow">
                    <thead className="table-dark ">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">e-mail</th>
                            <th scope="col">username</th>
                            <th style={{width: "20%"}}>Action</th>
                        </tr>
                    </thead>
                    <tbody>{
                        users.map((user, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td >
                                    <Link className=" btn btn-outline-primary" to={`/user/${user.id}`}>view</Link>
                                    <Link className=" btn btn-secondary mx-2" to={`/user/update/${user.id}`}>update</Link>
                                    <button className="btn btn-danger"  onClick={() => deleteUser(user.id)}>delete</button>      
                                    </td>
                            </tr>
                        ))
                    }

                    </tbody>
                </table>
            </div>
        </div>
    )
}
