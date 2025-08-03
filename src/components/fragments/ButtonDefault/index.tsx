export const ButtonDefault = ({ textButton, link }) => {
    return (
        <a href={link}>
            <button className="default__button">
                {textButton}
            </button>
        </a>
    )
}