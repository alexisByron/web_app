import React from 'react';
import {styles} from './styles';

class Footer extends React.Component{
    render(){
        return(
                <div style={styles.footer}>
                    <div className="row" style={styles.footerContainer}>
                        <div className="col-sm-6 col-md-3" >
                            <h3>Services</h3>
                            <ul style={styles.ul}>
                                <li><p>Web design</p></li>
                                <li><p>Development</p></li>
                                <li><p>Hosting</p></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h3>Company Name</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo.</p>
                        </div>
                        <div className="col-sm-6 col-md-3">
                            <h3>About</h3>
                            <ul style={styles.ul}>
                                <li><p>Company</p></li>
                                <li><p>Team</p></li>
                                <li><p>Careers</p></li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <p className="col-12">Company Name © 2021</p>
                    </div>
                </div>
        )
    }
}

export default Footer;