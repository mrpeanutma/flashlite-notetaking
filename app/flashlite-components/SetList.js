import Card from "./Card.js";
import Set from "./Set.js";
import "./SetList.css";

function UsersList(props) {    
    return (
        <Card className="sets">
        <ul>
            {props.items.map((set) => (
                <Set
                    id={set.id}
                    img={set.img}
                    title={set.title}
                    numOfTerms={set.numOfTerms}
                    creator={set.creator}
                />
            ))}
        </ul>
        </Card>
      );
}

export default SetList;
