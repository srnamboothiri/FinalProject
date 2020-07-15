import { useState } from "react";

const useInput = (initialValue)=>{

    const [value, update] = useState(initialValue);

    const onChangeHandler = (event) => update(event.target.value);

    const reset=()=>update("");

    return [value, onChangeHandler, reset];

};

export { useInput };