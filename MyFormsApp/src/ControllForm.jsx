import React, { useState } from 'react';

export function FuncControlledForm() {
    const [name, setName] = useState("");
    const[age, setAge] = useState(0);
    const [inputError, setInputError] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        if(name){
            alert("The name you entered was: " + name + " and the age is: " + age);
        }
    }

    function handleNameChange(event){
        const value= event.target.value;
        setName(value);

        if(value.length < 5){
            setInputError("Name must be at least 5 characters");
        } else {
            setInputError(null);
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input type="text" value={name} onChange={handleNameChange} />
            </label>
            <label >
                Enter your age:
                <input type="number" value={age || "0"} onChange={(e) => setAge(e.target.value)} />
            </label>
            {inputError && <div style={{color: 'red'}}>{inputError}</div>}
            <input type="submit" value="Submit" />
        </form>
    );
}