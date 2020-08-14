import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div className="ui fluid container ldr-padding" ref="about">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="column">
                            <div className="ui segment content">
                                <h2 className="ui header">About</h2>
                                <div>
                                Documentation is available at <a href="http://ld-r.org">http://ld-r.org</a>. <br/>LD-Reactor is developed by VU Amsterdam.
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
