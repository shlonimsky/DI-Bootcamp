const Card = (props) => {
    return(
        <article>
            <i className={props.iconClass}>{props.iconCont}</i>
            <span>{props.title}</span>
            <h1>{props.score}</h1>
        </article>
    )
}

export default Card