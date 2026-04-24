import PropTypes from "prop-types";

function Feature_item({ imgsrc, title, content }) {
    return (
        <div className="feature-item">
            <img src={imgsrc} alt="Chat Icon" className="feature-icon" />
            <h3 className="feature-item-title">{title}</h3>
            <p>
                {content}
            </p>
        </div>
    )
}

Feature_item.propTypes = {
    imgsrc: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string,
};
Feature_item.defaultProps = {
    imgsrc: "",
    title: "LOREM IPSUME",
    content: "Eius populus ab incunabulis primis ad usque pueritiae tempus extremum, quod annis circumcluditur fere trecentis, circummurana pertulit bella, deinde aetatem ingressus adultam post multiplices bellorum aerumnas Alpes transcendit et fretum, in iuvenem erectus et virum ex omni plaga quam orbis ambit inmensus, reportavit laureas et triumphos, iamque vergens in senium et nomine solo aliquotiens vincens ad tranquilliora vitae discessit.",
}

export default Feature_item