

export default function Term(props) {
    return (
        <li key={props.id} className="term-item">
            <img src={props.img} className="term-img" alt={props.title} />
            <div className="term-info">
                <div className="term">{props.Term}</div>
                <div className="definition">{props.definition}</div>
            </div>
        </li>
    );
}