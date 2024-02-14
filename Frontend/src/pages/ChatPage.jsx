
import {PrettyChatWindow}  from 'react-chat-engine-pretty'
import Authpage from './Authpage'


const ChatsPage = (props)=>{
       
        
        
        
    return(
        <>
        <div style={{height:'100vh'}}>
              <PrettyChatWindow
              
              projectId='435fafcc-1f16-49e6-aa4e-b10fbec815f0'
              username={props.user.username} 
              secret={props.user.secret}
              style={{height:'100%'}}
              />
        </div>
        </>
    )
}

export default ChatsPage