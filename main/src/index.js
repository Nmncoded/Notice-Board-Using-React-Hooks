import React,{useEffect, useState} from 'react';
import { createRoot } from 'react-dom/client';
import './stylesheets/style.css';
import DisplayUI from './components/displayUI';
import Header from './components/header';
import Footer from './components/footer';

const container = document.getElementById('root');
const root = createRoot(container);

/* class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:"",
            language:"HTML",
            dataArr: JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : [],
        }
    }
    componentDidUpdate(){
        // console.log("update")
        localStorage.setItem("data",JSON.stringify(this.state.dataArr))
    }
    handleChange = ({target}) => {
        let {name,value} = target;
        this.setState({[name]: value})
    }
    handleDelete = (id) => {
        // console.log(id) 
        this.setState({
            dataArr: this.state.dataArr.filter((p,index) => index !== id )
        })
    } 
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
        let {dataArr,text,language} = this.state;
        this.setState({
            dataArr: dataArr.concat({text,language}),
            text:"",
            language:"",
        })
    }
    render(){
        return (
            <div className='body' >
                <Header />
                <DisplayUI dataArr={this.state.dataArr} handleDelete={(index) => this.handleDelete(index)} />
                <Footer handleChange={this.handleChange} handleSubmit={this.handleSubmit} text={this.state.text} language={this.state.language} />
            </div>
        )
    }
} */
function App(){
    let [text,setText] = useState("");
    let [language,setLanguage] = useState("HTML");
    let [dataArr,setDataArr] = useState(JSON.parse(localStorage.getItem("data")) ? JSON.parse(localStorage.getItem("data")) : []);
    const handleChange = ({target}) => {
        let {name,value} = target;
        switch(name){
            case "text" : setText(text = value)
            break;
            case "language" : setLanguage(language = value)
            break;
            default:
            break;
        }
        
    }
    useEffect = (() => {
        localStorage.setItem("data",JSON.stringify(dataArr))
    },[dataArr])
    const handleDelete = (id) => {
        // console.log(id) 
        setDataArr(
            dataArr.filter((p,index) => index !== id )
        )
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
        // let {dataArr,text,language} = this.state;
        setDataArr(dataArr.concat({text,language}));
        setText(text = "")
        setLanguage(language = "")
        
    }
    return (
        <div className='body' >
            <Header />
            <DisplayUI dataArr={dataArr} handleDelete={(index) => handleDelete(index)} />
            <Footer handleChange={handleChange} handleSubmit={handleSubmit} text={text} language={language} />
        </div>
    )
}



root.render(<App />);

/* 
import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App tab="home" />);
*/