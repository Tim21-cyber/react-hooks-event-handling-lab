// Code EyesOnMe Component Here
function EyesOnMe() {
    return (
        <button onFocus={handleFocus} onBlur={handleBlur}>
            Eyes on me
        </button>
    );
    function handleFocus() {
        console.log("Good!");
    }
    function handleBlur() {
        console.log("Hey! Eyes on me!");
    }
}
export default EyesOnMe;
