import React, {useState} from "react";
import Greeting from "./Greeting";

type GreetingContainerPropsType = {
    users: any // need to fix any
    addUserCallback: any // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<any>(""); // need to fix any
    const [error, setError] = useState<any>(""); // need to fix any

    const setNameCallback = (e: any) => { // need to fix any
        setName(e.currentTarget.value);
        setError('')
    };
    const addUser = () => {
        if (name){
            alert(`Hello ${name} !`);
            addUserCallback(name)
        }
        else {
            setError(' ')
        }
    };

    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
}

export default GreetingContainer;
