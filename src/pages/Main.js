import React, { useState } from "react";


export function Main() {
    const [state, setState] = useState([]);
    const [value, setValue] = useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    }


    const addSkill = (event) => {
        event.preventDefault();
        const technologies = event.target[0].value;

        setState([...state, technologies]);
        event.target[0].value = "";
    };
    
    return (
        <main>
            <div>
                <div>Learned Technologies:
                    {state.map((skill, i) => (
                    <div key={skill + i}>
                        {skill}
                    </div>
                    ))}
                </div>
                <form action="#" onSubmit={addSkill}>
                    <input type="text" value={value} onChange={handleChange}></input>
                    <button disabled={value.length < 5}>Add it</button>
                </form>
            </div>
        </main>
    )
}