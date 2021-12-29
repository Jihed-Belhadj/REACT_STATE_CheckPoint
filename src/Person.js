import React from 'react'
import img1 from './images/me.jpg' 


export class Person extends React.Component {
    constructor() {
        super()
        this.state={Person:{fullName:'Jihed Belhadj',bio:'I will be a fullstack JS developer', imgSrc:img1, profession:'SQLServer DBA'},count:0}    
    }
    componentDidMount(){
        this.myInterval = setInterval(()=>{
            this.setState({count: this.state.count + 1})
          },1000)
      }
   

    render() {
        return (
            <div>
                <h4>{this.state.count}</h4>
                <img className='img' src={this.state.Person.imgSrc}/>
                <h1>{this.state.Person.fullName}</h1>
                <h2>{this.state.Person.bio}</h2>
                <h3>{this.state.Person.profession}</h3>             
            </div>
        )
    }
}

export default Person

