// const {name} = props;
// const {name} =  { name: "Boris" };

// prefer destructuring in parameters than props usage
// function Greeting(props) {...
function Greeting({name}) {
    return (<h1>Hello {name}!</h1>);
}

export default Greeting;