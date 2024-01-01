import useUpdate from "../Hooks/useUpdate";

export default function Controller({ onClickButton, setCount }) {
    useUpdate(() => {
        console.log(`Controller Update`);
    });

    return (
        <div>
            <button
                onClick={() => onClickButton(-1)}
            >-1</button>
            <button
                onClick={() => onClickButton(-10)}
            >-10</button>
            <button
                onClick={() => onClickButton(-100)}
            >-100</button>
            <button
                onClick={() => onClickButton(100)}
            >+100</button>
            <button
                onClick={() => onClickButton(10)}
            >+10</button>
            <button
                onClick={() => onClickButton(1)}
            >+1</button>
            <button
                onClick={() => setCount(0)}>초기화</button>
        </div>
    );
}