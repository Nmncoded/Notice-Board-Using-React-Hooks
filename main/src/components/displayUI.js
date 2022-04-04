import React from 'react';

class DisplayUI extends React.Component {
    constructor(props){
        super(props);
        this.state={}
    }
    
    render(){
        console.log("displayui")
        let {dataArr} = this.props;
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
                                    <p>{notice.text}</p>
                                    
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