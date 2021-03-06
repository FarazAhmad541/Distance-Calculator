import React from "react"

class Header extends React.Component {

    render() {
        return (
            <div id="header">
                <h1 className="heading">Calculate distance between two points on a graph.</h1>
                <p className="heading-text">Enter coordinates for first and second points below.</p>
            </div>
        )
    }
}
export default Header