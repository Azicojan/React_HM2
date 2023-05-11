import  './App.css'



function MyComponent(props) {
    return (
        <h3 className='Greeting' >Hi, how are you doing today? I'm doing {props.mood}, thanks. </h3>
    )
}

export default MyComponent