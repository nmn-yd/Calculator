function InputButton({ type, dispatch, children, className }) {
  return (
    <button
      className={className}
      onClick={(e) => {
        dispatch({
          type,
          payload: e.target.textContent,
        });
      }}
    >
      {children}
    </button>
  );
}

export default InputButton;
