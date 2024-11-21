const Lock = ({ color = "white", width = "20", height = "21" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.8333 9.66667H4.16667C3.24619 9.66667 2.5 10.4129 2.5 11.3333V17.1667C2.5 18.0871 3.24619 18.8333 4.16667 18.8333H15.8333C16.7538 18.8333 17.5 18.0871 17.5 17.1667V11.3333C17.5 10.4129 16.7538 9.66667 15.8333 9.66667Z"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.83325 9.66667V6.33333C5.83325 5.22826 6.27224 4.16846 7.05364 3.38706C7.83504 2.60565 8.89485 2.16667 9.99992 2.16667C11.105 2.16667 12.1648 2.60565 12.9462 3.38706C13.7276 4.16846 14.1666 5.22826 14.1666 6.33333V9.66667"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Lock;
