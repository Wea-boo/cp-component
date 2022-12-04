import React from 'react'
import PhotoProfile from './Profile/PhotoProfile'

export default function Navbar(props) {
 const { ProfilePic } = props;
  return (
    <nav style={{height:'70px',width:'100%', borderBottomStyle:'solid', borderBottomWidth:'1px'
                 ,borderBottomColor:'grey', display:'flex', alignItems:'center', justifyContent:'space-between'
                 ,marginBottom:'20px'}}>
        <p style={{fontSize:'20px'}}>Servico</p>
        <div style={{display:'flex', gap:'30px', alignItems:'center'}}>
          <p>Messages</p>
          <p>Marketplace</p>
        <PhotoProfile pic={ProfilePic} size="40px" className="mini-profile-pic"/>
        </div>
    </nav>
  )
}
