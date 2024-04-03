import Card from "./Card.js";
import User from "./User.js";
import "./UsersList.css";

function UsersList(props) {    
    return (
        <Card className="users">
        <ul>
            {props.items.map((user) => (
                <User
                    id={user.id}
                    img={user.img}
                    name={user.name}
                    age={user.age}
                    major={user.major}
                />
            ))}
        </ul>
        </Card>
      );
}

export default UsersList;
