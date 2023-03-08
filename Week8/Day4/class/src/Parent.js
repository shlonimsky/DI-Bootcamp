import Counter from "./Components/Counter";
const Parent = (props) => {
    console.log(props);
    if(props.auth=='admin'){
        return (
            <Counter />
        )
    }
    return props.children
}

export default Parent