import { forwardRef, useRef} from "react";

const Input = forwardRef(function Input({ label, ...props }, ref) {
  const isDescription = label === "description";
  const cssClass =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isDescription ? (
        <textarea ref={ref} {...props} className={cssClass} />
      ) : (
        <input ref={ref} {...props} className={cssClass} />
      )}
    </p>
  );
});

export default Input;
