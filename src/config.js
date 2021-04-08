var config = {
    style: 'mapbox://styles/mapbox/outdoors-v11',
    accessToken: 'pk.eyJ1IjoiamFzb25hZDEyMyIsImEiOiJja2p1am5oZTEyYWZ4MnlxbHg4MWd4dDNlIn0.5eYHIg8hvmECM-pIGMwWyw',
    showMarkers: false,
    markerColor: '#db1a57',
    theme: 'light',
    use3dTerrain: false,
    title: 'Late 2018 Migrant Caravan',
    subtitle: 'In late 2018, a caravan travelled from Central America through Mexico with the goal of escaping harsh conditions in their country and seeking better opportunities. This is their story.',
    byline: 'UBC GEOB 472 W2020/21',
    footer: 'Data points based on maps from ' + '<a href ="https://cis.org/Migrant-Caravan-Map">CIS</a>' + ' and ' + '<a href="https://www.mercurynews.com/2018/11/14/map-migrant-caravan-tijuana/">Mercury News.</a>' +
    '<p> Descriptions, dates, and caravan sizes attributed to sources linked at points. </p>' +
    '<p> Images attributed to linked sources. </p>',
    chapters: [
        {
            id: 'SanPedroSula',
            alignment: 'right',
            hidden: false,
            title: 'San Pedro Sula',
            image: 'https://www.wtca.org/system/images/W%40siZiIsIjIwMjAvMDEvMzAvMTUvMzQvMzUvMjAzL%40NBTl%3EQRURST%40%3ETVUxBX%21%3ELLmpwZyJdLFsicCIsInRodW%40iIiwiMzAweDM%5EMiMiXV%21/SAN-PEDRO-SULA-OK.jpg',
            description:
                '<p> Date: October 13 </p>' +
                '<p> Caravan size: 1300 </p>' +
                'This is the starting point for many in the late 2018 migrant caravan.' +
                '<p> <a href="https://rosanjose.iom.int/SITE/en/migrant-caravans">Source</a> </p>',
            location: {
                center: [ -88.024553,
                    15.506226],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Ocotepeque',
            alignment: 'left',
            hidden: false,
            title: 'Ocotepeque',
            image: 'https://i.pinimg.com/originals/3b/a7/f2/3ba7f21585dd2ba03cf75331c38d065b.jpg',
            description:
                '<p> Date: October 14 </p>' +
                '<p> Caravan size: 1500 </p>' +
                '"Hundreds more Hondurans have joined a caravan of migrants moving toward the country’s border with Guatemala in a desperate attempt to flee poverty and seek new lives in the United States."' +
                '<p> <a href="https://apnews.com/article/200195140809441bbb214f4dcaef1cb4">Source</a> </p>',
            location: {
                center: [ -89.184867,
                    14.435785],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Esquipulas',
            alignment: 'right',
            hidden: false,
            title: 'Esquipulas',
            image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/37/e8/f6/photo6jpg.jpg?w=1000&h=600&s=1',
            description:
                '<p> Date: October 16 </p>' +
                '<p> Caravan size: 1000 </p>' +
                '"The migrant caravan included more than 1,000 people and is expected to continue to expand as it moves north across Guatemala and Mexico"' +
                '<p> <a href="https://www.washingtonpost.com/world/the_americas/caravan-of-more-than-1000-migrants-moves-north-triggering-outrage-from-trump/2018/10/16/67f951f8-d143-11e8-a4db-184311d27129_story.html">Source</a> </p>',
            location: {
                center: [ -89.351446,
                    14.564786],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'GuatemalaCity',
            alignment: 'left',
            hidden: false,
            title: 'Guatemala City',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Guatemala_City_-_Guatemala.jpg',
            description:
                '<p> Date: October 17 </p>' +
                '<p> Caravan size: 2000 </p>' +
                '"More than 2,000 people fleeing poverty and violence have joined the convoy of migrants travelling en masse through Central America, walking along the roadside with strollers and wheelchairs or hitching rides on pickup trucks and buses."' +
                '<p> <a href="https://www.theguardian.com/world/2018/oct/18/one-step-time-desperate-families-migrant-caravan-us-border-america">Source</a> </p>',
            location: {
                center: [ -90.509332,
                    14.639198],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Tecun Uman',
            alignment: 'right',
            hidden: false,
            title: 'Tecun Uman',
            image: '',
            description:
                '<p> Date: October 19 </p>' +
                '<p> Caravan size: 3000 </p>' +
                '"Hundreds of people in a caravan of migrants that crossed from Honduras into Guatemala staged a dramatic bid to breach the Mexican border on Friday, as local governments began preparing to disperse the convoy under pressure from Washington."' +
                '<p> <a href="https://www.theguardian.com/world/2018/oct/19/mexico-caravan-migrants-prepares-us-border-crossing-latest">Source</a> </p>',
            location: {
                center: [ -92.14197,
                    14.674354],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Tapachula',
            alignment: 'left',
            hidden: false,
            title: 'Tapachula',
            image: '',
            description:
                '<p> Date: October 19 </p>' +
                '<p> Caravan size: 7000 </p>' +
                '"In open defiance of the Mexican and American governments, thousands of Central American undocumented migrants, most of a caravan that has been heading toward the United States for more than a week, resumed their journey on Sunday in southern Mexico."' +
                '<p> <a href="https://www.nytimes.com/2018/10/20/world/americas/migrants-caravan-mexico.html/">Source</a> </p>',
            location: {
                center: [ -92.270223,
                    14.915747],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Mapastepec',
            alignment: 'left',
            hidden: false,
            title: 'Mapastepec',
            image: '',
            description:
                '<p> Date: October 25 </p>' +
                '<p> Caravan size: 5000 </p>' +
                '"Southern Mexico’s Chiapas state is home to some of the country’s most impoverished communities. Yet towns suddenly faced with an influx of thousands of people bedding down in overflowing plazas and parks have organized to offer them shelter, medical treatment and donations as best they can."' +
                '<p> <a href="https://www.theglobeandmail.com/world/article-sickness-fear-harassment-in-mexico-whittle-away-at-migrant-caravan/">Source</a> </p>',
            location: {
                center: [ -92.903265,
                    15.445342],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Pijijiapan',
            alignment: 'left',
            hidden: false,
            title: 'Pijijiapan',
            image: '',
            description:
                '<p> Date: October 25 </p>' +
                '<p> Caravan size: 5000 </p>' +
                '"Arriving in Pijijiapan, thousands camped under plastic tarps in front of a church. Volunteer doctors treated dozens for dehydration, injured feet and other ailments. "' +
                '<p> <a href="https://www.theglobeandmail.com/world/article-sickness-fear-harassment-in-mexico-whittle-away-at-migrant-caravan/">Source</a> </p>',
            location: {
                center: [ -93.20985,
                    15.686137],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Arriaga',
            alignment: 'right',
            hidden: false,
            title: 'Arriaga',
            image: '',
            description:
                '<p> Date: October 26 </p>' +
                '<p> Caravan size: 6000 </p>' +
                '"With their arrival in Arriaga, on the 15th day of their journey, they had reached a literal and figurative crossroads. The town has historically been a place of big decisions for migrants making the northward trek from Central America."' +
                '<p> <a href="https://www.nytimes.com/2018/10/26/world/americas/migrants-caravan-honduras-mexico.html">Source</a> </p>',
            location: {
                center: [ -92.903265,
                    15.445342],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Niltepec',
            alignment: 'left',
            hidden: false,
            title: 'Niltepec',
            image: '',
            description:
                '<p> Date: October 29 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"Hondurans in the group spoke of fleeing the same conditions: poverty and gang violence in one of the world\'s deadliest countries by homicide rates."' +
                '<p> <a href="https://www.ctvnews.ca/world/migrant-caravan-demands-transport-as-second-group-enters-mexico-1.4155051">Source</a> </p>',
            location: {
                center: [ -92.903265,
                    15.445342],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Juchitan de Zaragoza',
            alignment: 'left',
            hidden: false,
            title: 'Juchitan',
            image: '',
            description:
                '<p> Date: November 1 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"The primary caravan officials have been tracking was last reported to be near the city of Juchitan, Mexico, on Nov. 1, according to the Associated Press. That is in the southern Mexican state of Oaxaca, about 800 miles from the nearest crossing into the U.S. border."' +
                '<p> <a href="https://www.marketwatch.com/story/this-map-shows-how-far-the-migrant-caravan-is-from-the-us-border-2018-10-26/">Source</a> </p>',
            location: {
                center: [ -95.022722,
                    16.433984],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Donaji',
            alignment: 'left',
            hidden: false,
            title: 'Donaji',
            image: '',
            description:
                '<p> Date: November 24 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"As President Donald Trump ramped up his anti-migrant rhetoric ahead of Tuesday\'s midterm elections, exhausted Central Americans walking across Mexico in hopes of reaching the United States said they were mostly perplexed and turned off by his threats, which they perceive as exaggerated."' +
                '<p> <a href="https://www.cp24.com/world/we-are-not-killers-migrants-in-caravan-respond-to-trump-1.4161942">Source</a> </p>',
            location: {
                center: [ -95.052346,
                    17.227006],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Isla',
            alignment: 'left',
            hidden: false,
            title: 'Isla',
            image: '',
            description:
                '<p> Date: November 4 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"Thousands of wary Central American migrants resumed their push toward the United States on Sunday, a day after arguments over the path ahead saw some travelers splinter away from the main caravan, which is entering a treacherous part of its journey through Mexico."' +
                '<p> <a href="https://www.nbcnews.com/news/latino/migrant-caravan-embarks-route-death-through-mexico-n931041">Source</a> </p>',
            location: {
                center: [ -95.528554,
                    18.027452],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Cordoba',
            alignment: 'left',
            hidden: false,
            title: 'Cordoba',
            image: '',
            description:
                '<p> Date: November 4 </p>' +
                '<p> Caravan size: 4000 </p>' +
                '"Thousands of bone-tired Central Americans set their sights on Mexico City on Sunday after making a grueling journey through a part of Mexico that has been particularly treacherous for migrants seeking to get to the United States."' +
                '<p> <a href="https://www.680news.com/2018/11/04/tired-and-angry-migrant-caravan-splinters-in-mexican-state/">Source</a> </p>',
            location: {
                center: [ -96.936461,
                    18.893956],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Mexico City',
            alignment: 'left',
            hidden: false,
            title: 'Mexico City',
            image: '',
            description:
                '<p> Date: November 5 </p>' +
                '<p> Caravan size: 5000 </p>' +
                '"Mexico City, the first major metropolis the migrants have reached since leaving Honduras, is expected to be the place where the caravan may divide and some may decide to stay."' +
                '<p> <a href="https://www.bbc.com/news/world-latin-america-46092995">Source</a> </p>',
            location: {
                center: [ -99.138933,
                    19.437377],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'Queretaro',
            alignment: 'left',
            hidden: false,
            title: 'Queretaro',
            image: '',
            description:
                '<p> Date: October 25 </p>' +
                '<p> Caravan size: 5000 </p>' +
                '' +
                '<p> <a href="https://www.theglobeandmail.com/world/article-sickness-fear-harassment-in-mexico-whittle-away-at-migrant-caravan/">Source</a> </p>',
            location: {
                center: [ -92.903265,
                    15.445342],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },

        {
            id: 'Tijuana',
            alignment: 'left',
            hidden: false,
            title: 'Tijuana',
            image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Zona_Rio_Tijuana.jpg',
            description:
                '<p> Date: November 14 </p>' +
                '<p> Caravan size: 5000 </p>' +
                'This is the final destination for many migrants in the caravan. Many others continued from Tijuana into the US' +
            '<p> <a href="https://www.bbc.com/news/world-latin-america-4620703">Source</a> </p>',
            location: {
                center: [ -116.964319,
                    32.500371],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },


    ]
};
