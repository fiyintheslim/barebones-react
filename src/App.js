
const Pet = (props) => {
    return(
        React.createElement("div", null, [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed)
        ])
    )
}

const App = () => {
    return React.createElement(
        "div",
        {},
        [
        React.createElement("h1", {}, "Adopt me!"),
        React.createElement(Pet, {name:"Maxy", animal:"Dog", breed:"Mixed"}),
        React.createElement(Pet, {name:"Jake", animal:"Dog", breed:"GSD"}),
        React.createElement(Pet, {name:"Jessie", animal:"Dog", breed:"GSD"}),
        ]
        )
}

ReactDOM.render(React.createElement(App), document.querySelector("#root"))