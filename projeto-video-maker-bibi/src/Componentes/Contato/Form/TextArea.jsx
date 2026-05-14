import React from "react";

const TextArea = ({ value, name, label, onChange, onBlur, error }) => {
  return (
    <div className="xl:col-span-2">
      <label htmlFor={name}>{label}</label>
      <textarea
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name="textarea"
        id="textarea"
        className="bg-neutral-5 h-37.5 w-full mt-1 rounded-md text-neutral-1 focus:border-red-2 focus:bg-neutral-4 focus:ring-2 focus:ring-red-2 hover:bg-neutral-4 focus:outline-none"
      ></textarea>
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "0.825rem",
            padding: "0",
            margin: "2px",
            maxWidth: "60ch",
            marginBottom: "0",
          }}
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default TextArea;
