function Greeting({ name }) {
    return (
        <div className="mt-4">
            {name && <h4>Hello, {name}! Welcome to React.</h4>}
        </div>
    );
}
export default Greeting;