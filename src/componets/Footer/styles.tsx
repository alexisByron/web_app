import CSS from 'csstype';

const footer: CSS.Properties = {
        backgroundColor: '#FFAACC',
        fontFamily: 'Comic Sans MS',
        color: '#76106A',
        left: 0,
        bottom: 0,
        right: 0,
        textAlign: "center",
        position: 'fixed',
        minHeight: '250px'
};

const footerContainer :CSS.Properties={
    marginTop:'20px'
};

const ul: CSS.Properties={
    listStyleType: 'none'
};

export const styles = {
    footer,
    ul,
    footerContainer
};