const User = ({ color = "white", width = "20", height = "21" }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 22 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="1"
        y="1.5"
        width="20"
        height="20"
        rx="10"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M17.6666 19V17.3333C17.6666 16.4493 17.3154 15.6014 16.6903 14.9763C16.0652 14.3512 15.2173 14 14.3333 14H7.66659C6.78253 14 5.93468 14.3512 5.30956 14.9763C4.68444 15.6014 4.33325 16.4493 4.33325 17.3333V19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.0001 10.6667C12.841 10.6667 14.3334 9.17428 14.3334 7.33333C14.3334 5.49238 12.841 4 11.0001 4C9.15913 4 7.66675 5.49238 7.66675 7.33333C7.66675 9.17428 9.15913 10.6667 11.0001 10.6667Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default User;
