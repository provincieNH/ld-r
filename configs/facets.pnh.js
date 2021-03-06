export default {
    facets: {
        'generic': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {

            }
        },
        'datacatalogus': {
            list: [
                'http://www.w3.org/ns/dcat#keyword','http://purl.org/dc/terms/accessRights', 'http://purl.org/dc/terms/creator','http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {
                'http://www.w3.org/ns/dcat#keyword':{
                    bjectBrowser: ['TagListBrowser'],
                    position: 2
                },
                'http://purl.org/dc/terms/accessRights':{
                    objectBrowser: ['TagListBrowser'],
                    position: 1
                },
                'http://purl.org/dc/terms/creator':{
                    shortenURI: 0,
                    position: 3
                }
            }
        },
        'datacatalogus': {
            list: [
                'http://www.w3.org/ns/dcat#keyword','http://purl.org/dc/terms/accessRights', 'http://purl.org/dc/terms/creator','http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {
                'http://www.w3.org/ns/dcat#keyword':{
                    objectBrowser: ['TagListBrowser'],
                    position: 2
                },
                'http://purl.org/dc/terms/accessRights':{
                    objectBrowser: ['TagListBrowser'],
                    position: 1
                },
                'http://purl.org/dc/terms/creator':{
                    shortenURI: 0,
                    position: 3
                }
            }
        },
        'satellietbeelden': {
            list: [
                'http://www.w3.org/ns/dcat#theme', 'http://www.w3.org/ns/dcat#SpatialResolutionInMeters', 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type'
            ],
            config: {
                'http://www.w3.org/ns/dcat#theme':{
                    objectBrowser: ['TagListBrowser'],
                    position: 1
                },
                'http://www.w3.org/ns/dcat#SpatialResolutionInMeters':{
                    position: 2,
                    allowRangeOfValues: 1,
                    label: ['resolutie'],
                    dataType: ['xsd:decimal']
                }
            }
        },
        'otl': {
            list: [
                'http://otl.noord-holland.nl/def/areaaldata/objecttype/isBGT_Object',
                'http://www.w3.org/2000/01/rdf-schema#subClassOf','http://otl.noord-holland.nl/def/areaaldata/objecttype/herkomstDefinitie'
            ],
            config: {
                // 'http://otl.noord-holland.nl/def/areaaldata/objecttype/herkomstDefinitie':{
                //     bjectBrowser: ['TagListBrowser'],
                //     position: 2
                // },
                // 'http://purl.org/dc/terms/accessRights':{
                //     objectBrowser: ['TagListBrowser'],
                //     position: 1
                // },
                // 'http://www.w3.org/1999/02/22-rdf-syntax-ns#type':{
                //     shortenURI: 1,
                //     position: 1
                //}
            }
        },
        //Configuration Manager: change the graph name if you use another name in your general.js config
        'http://ld-r.org/configurations': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource', 'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType',
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName'
            ],
            config: {
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type': {
                    objectBrowser: ['TagListBrowser'],
                    position: 1
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#dataset': {
                    shortenURI: 0,
                    position: 3
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#resource': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 4
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#property': {
                    shortenURI: 0,
                    objectIViewer: ['PrefixBasedView'],
                    position: 5
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#scope': {
                    objectIViewer: ['BasicOptionView'],
                    options: [
                        {label: 'Dataset', value: 'D'},
                        {label: 'Resource', value: 'R'},
                        {label: 'Property', value: 'P'},
                        {label: 'Dataset-Resource', value: 'DR'},
                        {label: 'Dataset-Property', value: 'DP'},
                        {label: 'Resource-Property', value: 'RP'},
                        {label: 'Dataset-Resource-Property', value: 'DRP'},
                    ],
                    position: 2
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#endpointType': {
                    position: 6
                },
                'https://github.com/ali1k/ld-reactor/blob/master/vocabulary/index.ttl#createdBy->[http://ld-r.org/users]http://xmlns.com/foaf/0.1/accountName': {
                    label: ['Creator'],
                    position: 7
                }
            }
        },
        //Example Faceted Browser for DBpedia universities
        'http://dbpedia.org/sparql': {
            list: [
                'http://www.w3.org/1999/02/22-rdf-syntax-ns#type', 'http://dbpedia.org/ontology/country', 'http://dbpedia.org/property/established'
            ],
            config: {
                'http://dbpedia.org/property/established': {
                    label: ['Established Year']
                },
                'http://dbpedia.org/ontology/country': {
                    objectBrowser: ['TagListBrowser']
                }
            }
        }
    }
};
