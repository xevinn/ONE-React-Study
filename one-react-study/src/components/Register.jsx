import { useInput } from "../util/common"


export default function Register() {
    const name = useInput('')
    const email = useInput('')
    const pw = useInput('')
    const pwc = useInput('')
   
  
    function Click() {
      if (name.value&&pw.value&&pwc.value&&email.value) {
        if (pw.value != pwc.value) { window.alert('PW error') } 
          else { window.alert('Complete')}
        }
    }
    
    return (
      <div>
        <h1>Sign Up</h1>
        <div>
        name: 
        <input placeholder="Enter your Name" {...name}/>
        </div>
  
        <div>
        email: 
        <input  placeholder="plz Enter your Email" {...email}/>
        </div>
        
        <div>
        Pw: 
        <input  placeholder="plz Enter your Pw" {...pw}/>
        </div>
  
        <div>
        Pwc:
        <input placeholder="plz Check your Pw" {...pwc}/>
        </div>
  
        <button onClick={Click}>Register</button>
      </div>
    )
    
  }
  
 