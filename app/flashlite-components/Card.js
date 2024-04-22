

export default function Card(props) {
    return (
        <li key={props.id} className="card-item">
            {props.img!=NULL ? (
                <img src={props.img} className="term-img" alt={props.title} />
            ) : (<></>)}
            <div className="term-info">
                <div className="term">{props.term}</div>
                <div className="definition">{props.definition}</div>
            </div>
        </li>
    );
}