
import { userRouter } from "next/navigation";

export default function Button({ children, type, onClick }) {
  function btnType() {
    const classes = {
      primary: "bg-white rounded-full text-black",
      secondary: "bg-teal-500 rounded-full text-white hover:white",
      cancel: "bg-red-500 rounded-full text-white",
    };
    return `px-8 py-2 ${classes[type]}`;
  }
  return (
    <>
      <button className={btnType()} onClick={onClick}>
        {children}
      </button>
    </>
  );
}
