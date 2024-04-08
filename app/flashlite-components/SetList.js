import Card from "./Card.js";
import Set from "./Set.js";
import "./SetList.css";
import Link from 'next/link';
import Button from "./Button.js";



function SetList({items, signedIn}) {   
    if (signedIn) {
        return (
            <div className="items">
                {/* <Card className="sets"> */}
                <ul>
                    {items.map((set) => (
                        <Set
                            id={set.id}
                            img={set.img}
                            title={set.title}
                            numOfTerms={set.numOfTerms}
                            creator={set.creator}
                        />
                    ))}
                 

                    <Link href='/create-set'>
                        <Button className="styled-button">
                        {'+\nAdd Set'}                        
                        </Button>
                    </Link>
                </ul>
                {/* </Card> */}
            </div>
          );
    } else {
        return (
            <div>
                {/* <Card className="sets"> */}
                <ul>
                    {items.map((set) => (
                        <Set
                            id={set.id}
                            img={set.img}
                            title={set.title}
                            numOfTerms={set.numOfTerms}
                            creator={set.creator}
                        />
                    ))}
                </ul>
                {/* </Card> */}
            </div>
        );
    }
}

export default SetList;
