import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { authUser } from "../context/AuthContext";


function Login(){

    const {loginUser, msg, errorMsg } = useContext(authUser);
    const navigate = useNavigate()

    const [obj, setObj] = useState({
        email: "",
        password: "",
    })

    function onChange(e) {
        let { name, value } = e.target;
        setObj((previous) => ({ ...previous, [name]: value }))
    }

    function handelSubmit(e) {
        e.preventDefault();

        if(!obj.email || !obj.password){
            alert("All fields are mandatory !");
            return;
        }

        // console.log(obj);

        loginUser(obj.email, obj.password)

        setObj({
            email: "",
            password: "",
        })
    };

    useEffect(() => {
        if (msg) {
            localStorage.setItem('user', JSON.stringify(msg.email))
            navigate('/gallery');
        }
    }, [msg]);
    

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center', margin: '10px', padding: '10px' }}> Login Page</h1>
                <form onSubmit={handelSubmit} style={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    width: '30vw',
                    height: '30vh',
                    display: 'flex',
                    flexDirection: 'column',
                    margin: 'auto',
                    padding: '10px',
                    gap: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius : '10px',


                }}>
                    
                    <input type="email" placeholder="Enter Email-id" name="email" value={obj.email} onChange={onChange} />
                    <input type="password" placeholder="Enter Password" name="password" value={obj.password} onChange={onChange} />
                    <button>Login</button>
                    {errorMsg && <p style={{ fontSize: '10px', color: 'red' }}>{errorMsg}</p>}
                </form>
            </div>
        </>
    )
}

export default Login;