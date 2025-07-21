
import React from "react";
import { useState } from "react";


function SignUp() {

    const [obj, setObj] = useState({
        name: "",
        email: "",
        password: "",
    })

    function onChange(e) {
        let { name, value } = e.target;
        setObj((previous) => ({ ...previous, [name]: value }))
    }

    function handelSubmit(e) {
        e.preventDefault();

        if(!obj.name || !obj.email || !obj.password){
            alert("All fields are mandatory !");
            return;
        }

        console.log(obj);

        setObj({
            name: "",
            email: "",
            password: "",
        })
    }

    return (
        <>
            <div>
                <h1 style={{ textAlign: 'center', margin: '10px', padding: '10px' }}>Sign Up</h1>
                <form onSubmit={handelSubmit} style={{
                    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                    width: '30vw',
                    display: 'flex',
                    height: '30vh',
                    flexDirection: 'column',
                    margin: 'auto',
                    padding: '10px',
                    gap: '10px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding : '20px',
                    borderRadius : '10px',


                }}>
                    <input type="text" placeholder="Enter  Name" name="name" value={obj.name} onChange={onChange} />
                    <input type="email" placeholder="Enter Email-id" name="email" value={obj.email} onChange={onChange} />
                    <input type="text" placeholder="Enter Password" name="password" value={obj.password} onChange={onChange} />
                    <button>Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default SignUp;