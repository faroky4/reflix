import React, { Component } from 'react';

// import '../styles/home.css'

class Landing extends Component {
    constructor(){
        super()
        this.state = {
            users: [
                {id:0 , name:"elon Musk" , img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGQrCbENiDpim85YIHXM_ZMTf_2vFiDTEcVw&usqp=CAU" },
                {id:1 , name:"Jeff Bezos" , img:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5bb22ae84bbe6f67d2e82e05%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D627%26cropX2%3D1639%26cropY1%3D129%26cropY2%3D1142"}
            ]
        }
    }
    
    render() {
        return (
            <div className='landing'>
                {(this.state.users).map(u => 
                    <div>
                        <h3>{u.name}</h3>
                        <img src={u.img} id='userIMG'/>
                    </div>
                )}
            </div>
        );
    }
}

export default Landing;