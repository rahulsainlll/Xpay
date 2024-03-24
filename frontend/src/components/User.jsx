

export default function User({ users }) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user._id}>
          {user.firstName} - {user.lastName}
        </li>
      ))}
    </ul>
  );
}



// username: "mayank@gmail.com", firstName: "Mayank", lastName: "Sain", _id: "65fe954595c4dff619568833"}