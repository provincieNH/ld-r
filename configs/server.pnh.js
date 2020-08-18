//important: first value in the array is considered as default value for the property
//this file is visible to the server-side
export default {
    serverPort: [4000],
    sparqlEndpoint: {
        // config in generic
        'generic': {
            host: '10.0.0.127', port: 7200, path: '/repositories/ld-r-config', graphName: 'http://ld-r.org/users', endpointType: 'graphdb'
        },
        //DBPedia example dataset
        'http://dbpedia.org/sparql': {
            host: 'dbpedia.org', port: 80, path: '/sparql', graphName: 'default', endpointType: 'virtuoso'
        },
        //GraphDB triple store Datacatalogus
        'datacatalogus': {
            host: '10.0.0.127', port: 7200, path: '/repositories/datacatalogus', graphName: 'http://ld.noord-holland.nl/catalogus/', endpointType: 'graphdb'
        },
        //GraphDB triple store OTL
        'otl': {
            host: '10.0.0.127', port: 7200, path: '/repositories/otl', graphName: 'http://otl.noord-holland.nl/def/areaaldata/objecttype/', endpointType: 'graphdb'
        }
    },
    dbpediaLookupService: [
        { host: 'lookup.dbpedia.org' }
    ],
    dbpediaSpotlightService: [
        { host: 'api.dbpedia-spotlight.org', port: 80, path: '/en/annotate' }
    ],
    //it is used only if you enabled recaptcha feature for user authentication
    //get keys from https://www.google.com/recaptcha
    googleRecaptchaService: {
        siteKey: ['put your google recaptcha site key here...'],
        secretKey: ['put your google recaptcha secret key here...']
    }
};
