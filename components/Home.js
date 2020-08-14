import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="ui fluid container ldr-padding" ref="home">
                <div className="ui grid">
                    <div className="ui row">
                        <div className="column">
                            <div className="ui segment content">
                                <h2 className="ui header">Datacatalogus - Provincie Noord-Holland Data Platform</h2>
                                <p>
                                    <img className="ui left floated image animated zoomIn" src="/assets/img/ld-reactor.gif" alt="ld-reactor" />
                                    De datacatalogus is een viewer gebaseerd op het <a href="http://ld-r.org"> LD-R </a> framework. <br/>
                                    Hier vind je alle datasets die beschikbaar zijn op het dataplatform. <br/>
                                    Je kunt zoeken in de catalogus en de metadata van de verschillende datasets raadplegen.
                                    
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Home;
