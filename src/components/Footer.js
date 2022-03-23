import React from 'react';
import { AiFillLinkedin, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";

var linkStyle = {
    button: {
        backgroundColor: "#7F7979",
        borderColor: "5F5B6B",
        color: "#fff" 
    }
}
function Footer() {
    return (
        <div class="m-0 p-0" style={{width: '100%'}}>

            <footer class="text-center text-lg-start" style={{backgroundColor: "#3D3B3C"}}>
                <div class="d-flex justify-content-center py-5">
                <button type="button" class="btn btn-lg btn-floating mx-2" style={linkStyle.button}>
                    <AiOutlinePhone />
                </button>
                <button type="button" class="btn btn-lg btn-floating mx-2" style={linkStyle.button}>
                    <AiOutlineMail />
                </button>
                <button type="button" class="btn btn-lg btn-floating mx-2" style={linkStyle.button}>
                    <BsGithub />
                </button>
                <button type="button" class="btn btn-lg btn-floating mx-2" style={linkStyle.button}>
                    <AiFillLinkedin />
                </button>
                </div>
                <div class="text-center text-white p-3" style={{backgroundColor: "#323031"}}>
                </div>
            </footer>
        </div>  
    )
};


export default Footer;