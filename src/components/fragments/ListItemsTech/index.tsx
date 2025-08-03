export const ListItemsTech = ({ addressImg, labelImg, classLi }) => {
    return (
        <li className={classLi}>
            <img src={addressImg} alt={`ícone referente a tecnologia ${labelImg}`} />
            <span className="font-title-3">{labelImg}</span>
        </li>
    )
}
