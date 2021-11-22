import spinner from './spinner.gif';

 const Loader = () => {
    return (
        <div className="loader">
            <img src={spinner} alter="Loading..." />
            <h1>Fetchig data</h1>
        </div>
    )
}
export default Loader
