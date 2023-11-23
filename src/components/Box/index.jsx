import { useState } from "react";

const Box = (props) => {

    const [text, setText] = useState("");


    const clickBox = () => {
        if(text===""){
            setText(props.currentState)
            props.changeTurn(props.row,props.col)
        }
    }

    return ( 
        <div onClick={clickBox} className="box">{text}</div>
    );
}

export default Box;