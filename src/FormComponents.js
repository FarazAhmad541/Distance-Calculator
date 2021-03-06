import React from "react"
class FormComponents extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.getInitialState()
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    getInitialState = () => ({
        x1: "",
        x2: "",
        y1: "",
        y2: "",
        ans: ""
    })

    resetState = () => {
        this.setState(this.getInitialState());
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(e) {
        const { name } = e.target
        const distance = Math.sqrt((this.state.y2 - this.state.y1) ** 2 + (this.state.x2 - this.state.x1) ** 2);
        (name === "reset") ? this.resetState() : this.setState({
            ans: distance
        })
        e.preventDefault()
    }

    render() {
        return (
            <div>
                <fieldset>
                    <form id="form">
                        <p>First point</p>
                        <input
                            type="number"
                            name="x1"
                            value={this.state.x1}
                            className="input-field x1"
                            placeholder="X-Coordinate"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="y1"
                            value={this.state.y1}
                            className="input-field y1"
                            placeholder="Y-Coordinate"
                            onChange={this.handleChange}
                            required
                        />
                        <p>Second point</p>
                        <input
                            type="number"
                            name="x2"
                            value={this.state.x2}
                            className="input-field x2"
                            placeholder="X-Coordinate"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            type="number"
                            name="y2"
                            value={this.state.y2}
                            className="input-field y2"
                            placeholder="Y-Coordinate"
                            onChange={this.handleChange}
                            required
                        />
                        <input
                            name="ans"
                            type="text"
                            className="input-field"
                            value={this.state.ans}
                            placeholder="Awnser will be displayed here"
                            readOnly
                        />
                        <button
                            name="submit"
                            id="submit"
                            type="submit"
                            value="submit"
                            className="submit"
                            onClick={this.handleSubmit}
                        >Calculate
                        </button>
                        <button
                            name="reset"
                            id="submit"
                            type="submit"
                            value="submit"
                            className="submit"
                            onClick={this.handleSubmit}
                        >Reset
                        </button>
                    </form>
                </fieldset>
            </div>
        )
    }

}
export default FormComponents