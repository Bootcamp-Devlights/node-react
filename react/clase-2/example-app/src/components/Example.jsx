import React, {useState, Component, useEffect} from 'react'

const Example1 = () => {

    const [title, setTitle] = useState("");
    const [subTitle, setSubTitle] = useState("");

    useEffect(() => {
        setTimeout(() => setSubTitle(title), 1000);
    }, [])

    const handleChange = (event) => {
        setTitle(event.target.value);
    };


    return (
        <>
            <h1>Example1 - {title}</h1>
            <h3>Subtitle - {subTitle}</h3>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => handleChange(e)} 
            />
        </>
    );
}

class Example2 extends Component {
    state = {
        title: ""
    }

    handleChange = (e) => {
        this.setState({
            ...this.state,
            title: e.target.value,
        })
    };

    render() {
        return (
            <div>
                <h1>Example2 - {this.state.title}</h1>
                <input type="text" value={this.state.title} onChange={this.handleChange} />
            </div>
        );
    }
}

export {Example1 as default, Example2};