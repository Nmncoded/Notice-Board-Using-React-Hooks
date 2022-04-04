import React from 'react';

class DisplayUI extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        let {dataArr,isClicked,changetxt,activIndex} = this.props;
        // console.log(isClicked)
        if(!dataArr.length){
            return null;
        }
        return (
            <main className="container">
                <ul className="ul">
                    {
                        dataArr.map((notice,index) => {
                            // console.log(notice)
                            return(
                                <li key={index} className="li">
                                    <span onClick={() => this.props.handleDelete(index)} >X</span>
                                    <p className="category">{notice.language}</p>
                                    {
                                        isClicked && activIndex === index ? 
                                        <input type='text' style={{color:"black"}} value={changetxt} name='changetxt' onChange={this.props.handleChange} /> 
                                        :
                                        <p >{notice.text} </p>
                                    }
                                    {
                                        isClicked && activIndex === index ? 
                                        <span   onClick={() => this.props.handleUpdate(index)}  >Update</span> : 
                                        <span   onClick={ () =>  this.props.handleIsClicked(index)}  >Edit</span> 
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
        )
    }
}

export default DisplayUI;