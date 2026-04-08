import { useRef } from "react";

export default function Uncontrolled() {
    const selectOptionRef= useRef(null);
    const checkboxRef= useRef(null);
    const textboxRef= useRef(null);

    function handleSubmit(event){
        event.preventDefault();
        console.log("Selected Option: ", selectOptionRef.current.value);
        console.log("Checkbox value: ", checkboxRef.current.checked);
        console.log("Text box value: ", textboxRef.current.value);
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>
                <p>name:</p>
                <input ref={textboxRef} type="text" />
            </label>
            <label>
                <p>Favorite color:</p>
                <select ref={selectOptionRef}  >
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </label>
            <br />
            <label>
                Do You like React?
                <input ref={checkboxRef} type="checkbox" />
            </label>
            <br />
            <button type="submit" >Submit</button>
        </form>
    );

}