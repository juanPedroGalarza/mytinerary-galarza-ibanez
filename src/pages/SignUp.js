import GoogleSignUp from "../components/Users/GoogleSignUp";
import '../styles/SignUpPage.css';
import Input from "../components/Input";
import { useUserSignUpMutation } from "../features/actions/usersAPI";
import { useState, useEffect } from "react"
import Alert from "../components/Alert"

function SignUp() {
    const inputArray =[
        
        {
            name: "name",
            type: "text",
            placeholder: "Write your name here!",
            value: ""
        },
        {
            name: "lastName",
            type: "text",
            placeholder: "Write your last name here!",
            value: ""
        },
        {
            name: "email",
            type: "email",
            placeholder: "Write your email here",
            value: ""
        },
        {
            name: "country",
            type: "text",
            placeholder: "Where are you from?",
            value: ""
        },
        {
            name: "password",
            type: "password",
            placeholder: "Insert your password",
            value: ""
        },
        {
            name: "photo",
            type: "url",
            placeholder: "Insert the image url for your profile picture!",
            value: ""
        },
    ]
    const [showAlert,setShowAlert] = useState(false)
    let [userSignUp, { data: resSignUp, error}] = useUserSignUpMutation()
    
    const signUserForm =(arrayform) => {
        let inputsForm = arrayform.filter(element => element.value)
        let data = inputsForm.reduce((values,input)=>{
            values[input.name] = input.value
            return values
        }, {})
        data.role = "user"
        data.from ="form"
        userSignUp(data)
        setShowAlert(true)
    }
    useEffect(() => {
        if (showAlert) {
            setTimeout(() => {
                setShowAlert(false)
            },5000)
        }
    },[resSignUp, error])

    return (
        <div className="signup-page-main">
            <Input inputsData={inputArray}  event={signUserForm} classPage="signup" />
            <GoogleSignUp />
            {showAlert ?
                <Alert res={resSignUp} err={error} />
            : null}
        </div>
    )
}

export default SignUp