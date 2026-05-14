const Input = ({
  type,
  label,
  id,
  name,
  value,
  className,
  onChange,
  onBlur,
  error,
  placeholder,
}) => {
  return (
    <div className="mb-2 xl:nth-[3]:col-span-2 xl:nth-[4]:col-span-2">
      <div className="flex items-center gap-1 mb-1">
        <label className="text-lg" htmlFor={name}>
          {label}
        </label>
        <span className="text-[0.625rem]">(obrigatório)</span>
      </div>
      <div>
        <input
          className={className}
          placeholder={placeholder}
          type={type}
          value={value}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      {error && (
        <p
          style={{
            color: "red",
            fontSize: "0.825rem",
            padding: "0",
            marginTop: "2px",
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

export default Input;
