import {useState} from "react"

export default function Form() {

    const [values, setValues] = useState({
        email: "",
        password:"",
        confirmPassword:"",
        okayToEmail: false      
    })
    
    function handleChange(event){
        const {name, value, type, checked} = event.target      
        setValues(preValues => ({...preValues, [name]: type==='checkbox'? checked :  value }))
    }

    
    function handleSubmit(event) {
        event.preventDefault()
        if(values.password===values.confirmPassword){ console.log("Successfully signed up")}else{ console.log("Passwords do not match"); return }
        values.okayToEmail===true ? console.log("Thanks for signing up to our newsletter"):console.log()
        console.log(values)
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    value = {values.email}
                    onChange = {handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    value = {values.password}
                    onChange = {handleChange}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="confirmPassword"
                    value = {values.confirmPassword}
                    onChange = {handleChange}
                />
                
                <div className="form--marketing">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="okayToEmail"
                        checked = {values.okayToEmail} 
                        onChange = {handleChange}
                                             
                        
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
