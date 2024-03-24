import { useNavigate } from "react-router-dom";

export default function User({ users }) {
  const navigate = useNavigate();

  const getListItemStyle = (index) => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderBottom: "1px solid #ccc",
    backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff",
    margin: "5px 0",
  });

  const buttonStyle = {
    padding: "10px 20px",
    // background: "black",
    // color: "white",
    border: "1px solid gray",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
      {users.map((user, index) => (
        <li key={user._id} style={getListItemStyle(index)}>
          <div>
            <span style={{ fontWeight: "bold" }}>
              {user.firstName} {user.lastName}
            </span>
          </div>
          <button
            className="p-4 rounded-md ml-4 ring-1 ring-inset ring-gray-300 px-3.5 py-2 text-base shadow-sm  hover:bg-gray-100"
            onClick={() => {
              navigate("/send?id=" + user._id + "&name=" + user.firstName);
            }}
          >
            Send Money
          </button>
        </li>
      ))}
    </ul>
  );
}

// username: "mayank@gmail.com", firstName: "Mayank", lastName: "Sain", _id: "65fe954595c4dff619568833"}
