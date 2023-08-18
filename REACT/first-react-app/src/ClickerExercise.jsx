
export default function ClickerExercise({buttonText, message}){
    const handleClick = ()=> {
        alert(message);
    };
    return <button onClick={handleClick}>{buttonText}</button>
}