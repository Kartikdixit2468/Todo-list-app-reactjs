import React from "react";

export default function Footer(){
    let footer_style = {
        position: "relative",
        marginBottom: "0px",
        backgroundColor: "black",
        height: "60px",
        color: "white",
        textAlign: "center"
    }
    return(
        <>
        <footer style={footer_style}>
            <h5> Copyright &copy; by CodeWithKartik.tech </h5>
        </footer>
        </>
    );
}
