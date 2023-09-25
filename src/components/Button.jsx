function Button({ children, type = "button", styles }) {
  return (
    <button
      type={type}
      className={`${styles} rounded-md bg-colorRed px-[5px] py-[3px] text-colorWhite`}
    >
      {children}
    </button>
  );
}

export default Button;
