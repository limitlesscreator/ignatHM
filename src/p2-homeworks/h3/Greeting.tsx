import React from "react";
import s from "./Greeting.module.css";

type GreetingPropsType = {
    name: string
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error;

    return (
        <div>

            <span>{error ? "Ошибка! Введите строку :)" : null}</span>
            <div style={{position: "relative"}}>
                <input value={name}
                       onChange={setNameCallback}
                       className={error ? inputClass : ''}/>
                <button onClick={addUser} style={{
                    width: "100px",
                }}>add</button>
                <span style={
                    {fontSize: "35px",
                        position: "absolute",
                        right: "500px",
                        top: "-32px",
                        textTransform: "uppercase",
                        background: "black",
                        color: "white",
                        padding: "9px 15px"
                    }
                }>{`total users: ${totalUsers}`}</span>
            </div>


        </div>
    );
}

export default Greeting;
