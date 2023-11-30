const SelectButton = ({ children, selected, onClick }) => {
  return (
    <span
      onClick={onClick}
      style={{
        border: "1px solid gold",
        borderRadius: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        fontFamily: "Montserrat",
        cursor: "pointer",

        "&:hover": {
          backgroundColor: "gold",
          color: "black",
        },
        width: "22%",
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
        //   margin: 5,
      }}
    >
      {children}
    </span>
  );
};
export default SelectButton;
