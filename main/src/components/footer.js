function Footer(props){
    return (
        <footer className="footer container">
            <form className="f-form">
                <input type="text" value={props.text} onChange={props.handleChange} name="text" />
                <select name="language"  value={props.language} onChange={props.handleChange}  id="drop-down">
                    <option value='' >Select</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JAVASCRIPT">JAVASCRIPT</option>
                    <option value="RUBY">RUBY</option>
                </select>
                <input type='submit' onClick={(event) => props.handleSubmit(event)} className="submit" value='ADD' />
            </form>
        </footer>
    )
}
export default Footer;

