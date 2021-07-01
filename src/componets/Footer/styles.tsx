import CSS from 'csstype';

const footer: CSS.Properties = {
        backgroundColor: '#FFAACC',
        fontFamily: 'Comic Sans MS',
        color: '#76106A',
        textAlign: "center",
        position: 'fixed',
        //position: 'absolute',
        width: '100%',
        right: '0',
        bottom: '0',
        left: '0',
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