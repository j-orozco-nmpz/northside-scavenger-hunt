var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoiamF2aW9yb3pjbyIsImEiOiJja2FoMW5sa3gwMHRmMnBrOWw4Nmx6bmZwIn0.Z-cIE66GcvabxdP0T_y93w',
    showMarkers: true,
    theme: 'dark',
    alignment: 'left',
    title: 'Northside Virtual Scavenger Hunt',
    subtitle: 'Historic sites, landmarks, public art, and other points-of-interest across North Minneapolis',
    byline: 'From the North Minneapolis Promise Zone',
    footer: 'Sources: City of Minneapolis Heritage Preservation Commission, City of Minneapolis Community Planning & Economic Development Public Arts Administration, Minneapolis Parks & Recreation Board Public Art in Parks, FindMASA.com',
    chapters: [
        {
            id: 'feature-1',
            title: '1. North Branch Library',
            image: './images/north-branch-library.jpg',
            description: 'At 1834 Emerson Ave N. The North branch library was first, established in the basement of North High School in 1890 after a request by the North Minneapolis Improvement Association. When the school needed the space, the library moved to rented quarters until a site valued at $6000 was donated by Samuel Gale and State Supreme Court Judge C.E. Vanderburgh in 1892. Located in the Near North neighborhood, the red brick library was designed by Frederick Corser and opened in 1894 as the city’s first branch library building.',
            location: {
                center: [-93.29378, 44.99862],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-2',
            title: '2. Fredrika Bremer Intermediate School',
            image: './images/fb-intermediate-school.jpg',
            description: 'At 1214 Lowry Ave N. The area north of Broadway Avenue experienced significant expansion and development during the 1880s, necessitating the construction of the Fredrika Bremer Elementary School in 1888. Bremer was the thirtieth school building erected by the Minneapolis Public School system since its beginning in 1851. At present, there are only two school buildings in Minneapolis which were constructed prior to the Bremer School. Both have undergone extensive modification, leaving Bremer as the oldest architecturally important school building in Minneapolis. The medieval, castle-like appearance of mass and architectural detailing found in the Bremer School, once popular features, are now rare in buildings of this nature.',
            location: {
                center: [-93.29495, 45.01359],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-3',
            title: '3. North Side Station',
            image: './images/north-side-station.jpg',
            description: 'At 2418 Washington Ave N. The Twin City Rapid Transit Company’s (TCRT) last carhouse, North Side Station, opened in 1914 in the Hawthorne neighborhood. It features a two-story wing that fronts on Washington Avenue North. The first floor provided separate offices for the foreman and clerk, locker rooms for the trainmen, as well as a storage room and paint shop. The second floor appears to have functioned as a “men’s club” of sorts; the facility provided a pool room, reading room, and sleeping rooms for use by employees. Behind this two-story portion of the building was the one-story carhouse used for maintenance of the streetcars.',
            location: {
                center: [-93.28100, 45.00481],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-4',
            title: '4. IOOF Hennepin Lodge No. 4',
            image: './images/ioof-lodge.jpg',
            description: 'At 404 West Broadway, constructed in 1897, is an example of an early Independent Order of Odd Fellows (I.O.O.F) hall. Begun in England as a fraternal organization dedicated to mutual assistance, the Order moved to the United States in 1819, and to what is now known as Minnesota in 1848. The Odd Fellows were a pioneering fraternal organization in terms of women’s rights, being the first national fraternity to permit female members beginning in 1851. The Odd Fellows were also pioneers in social welfare, establishing very early retirement homes and orphanages for members.',
            location: {
                center: [-93.28539, 44.99940],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-5',
            title: '5. Sharei Zedeck Synagogue',
            image: './images/sz-synagogue.jpg',
            description: 'At 1119 Morgan Ave N. The Sharei Zedeck Synagogue remains a tangible link to the once thriving Orthodox Jewish population in near north Minneapolis. It was one of four synagogues built on the near north side in the early park of the twentieth-century. The simplicity of Sharei Zedeck’s design was most likely influenced by financial hardships suffered during the Great Depression. The plain brick exterior is augmented by two massive stone arches which dominate the façade surrounding the double-leaf doors. The arches are decorated with menorahs arranged around a center brick pilaster. The framing of the building represents an early use of structural glued laminated timber arches which were widely used beginning in the 1950s. The synagogue was sold in 1969 to St. John’s Missionary Baptist Church, reflecting the transition of the near north neighborhood from a Jewish to an African-American community.',
            location: {
                center: [-93.30483, 44.98942],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-6',
            title: '6. Mikro Kodesh Synagogue',
            image: './images/mk-synagogue.jpg',
            description: 'At 1000 Oliver Ave N. Built in 1926 the Mikro Kodesh Synagogue provided a strong sense of place for what was identified in 1958 as the largest Orthodox congregation in the Upper Midwest. Minneapolis architect S.J. Bowler incorporated several motifs into the design of the impressive structure. Golden domes and semi-circular pediment echo Byzantine sources while the towers and arched windows are Romanesque. Other unique design features are the carved lions wearing crowns guarding the Hebrew scrolls and the fourteen remaining Stars of David (two have been replaced by Christian Crosses). Even though the Mikro Kodesh congregation no longer resides at the location, the building remains physical evidence of a once vibrant Jewish community in north Minneapolis.',
            location: {
                center: [-93.30664, 44.98817],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-7',
            title: '7. Sumner Branch Library',
            image: './images/sumner-branch-library.jpg',
            description: 'At 611 Emerson Ave N. The Sumner Library neighborhood branch played a crucial role in the accommodation of new immigrant populations in the early part of the twentieth century. Located on Olson Memorial Parkway, the Sumner Branch was especially helpful to the large influx of Jewish immigrants on the near north side of Minneapolis. A survey conducted during the early years of operation revealed that approximately 95 percent of library card holders were Jewish. As a result, the city’s entire Yiddish and Hebrew collections were placed at Sumner. The vision of Gratia Countryman, the first chief librarian in Minneapolis, to bring residents closer to educational resources was fully realized at the Sumner location. Of the thirteen branch libraries opened during Countryman’s tenure from 1904 to 1936, the Sumner Branch perhaps played the most active role in the community. English courses as well as numerous clubs and social services met at the library. Funded by the Carnegie Corporation, the Tudor Revival style used by architect Cecil Bayless Chapman distinguished the building in the working class neighborhood.',
            location: {
                center: [-93.29385, 44.98540],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-8',
            title: '8. Heart of the City',
            image: './images/heart-city.jpg',
            description: 'By Caprice Glaser. At 212 17th Ave N. This sculpture represents an animal tag, and is designed to capture the Animal Control Center’s purpose of ensuring animal health and safety. The tag takes the shape of Minneapolis. The paw prints mirror the pattern of the City’s lakes. The heart form, which appears in the middle of the artwork, conveys both the meaning that animals have in our lives and the role that the Center has in our community.',
            location: {
                center: [-93.2800413, 44.9962707],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-9',
            title: '9. Five Children Playing',
            image: './images/five-children.jpg',
            description: 'At 2117 W River Rd. These figures, found at the Minneapolis Park and Recreation Board Headquarters, were a way to celebrate the change in headquarter locations. The figures were paid for by Park Board employees.',
            location: {
                center: [-93.2801893, 45.0008462],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-10',
            title: '10. Hawthorne Gateway: Circle of Vision',
            image: './images/hawthorne-gateway.jpg',
            description: 'By Norman Andersen & Katherine Schaefer. At 621 N 29th Ave. Circle of Vision, located at Farview Park, is an interactive artwork whose shape is based on the tower that was formerly located on the park’s hill. The artwork features large copper animals adorning columns. Periscopes offer views of the downtown skyline, historic photos, and futuristic children’s drawings.',
            location: {
                center: [-93.2871612, 45.0064522],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-11',
            title: '11. Purple Raindrop',
            image: './images/purple-raindrop.jpg',
            description: 'By Esther Osayande. At 621 N 29th Ave. This artwork is both a sculpture and a bench that stands just over 15 feet tall. The sculpture honors Prince, and his signature song "Purple Rain", as well as his major contributions to the music industry. This sculpture is meant to encourage the local community and its growing arts community. This embodiment is meant to transmit a sensation of joy, delight, and happiness.',
            location: {
                center: [-93.2875589, 45.0063596],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-12',
            title: '12. Big Book',
            image: './images/big-book.jpg',
            description: 'By Christopheraaron Deanes. At 807 N 27th Ave. This sculpture is of a large book depicting short stories in front of Nellie Stone Johnson School. The Pages on the book will have a narrative and illustration that were written with the 6th & 7th grade students. The current narrative depicts a story on bullying that was created in collaboration with fifth grade students, many who attended Franklin Middle School.',
            location: {
                center: [-93.2904967, 45.0060718],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-13',
            title: '13. Camden Gateway: Saturn Park',
            image: './images/saturn-park.jpg',
            description: 'By Zoran Mojsilov. Near Lyndale Ave N & 41st Ave N. This collection of artworks is placed among grassy berms that echo the undulations of Midwestern landscape. Saturn, the featured sculpture, has concentric rings and seven stones caught in orbit which refer to the seven neighborhoods coexisting in the Camden community. Locals and visitors can trace a curvilinear path by walking Foot Bridge nestled between berms. Monolith stands as a marker in the middle of the park like a sentry. Miriam’s Bench is dedicated to the artist’s friend Bill’s mother. Broken Heart is a response to the breakup of Yugoslavia during the war. And, ending on a more restful note, Lazy Boy beckons people to sit and contemplate.',
            location: {
                center: [-93.2877594, 45.029628],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-14',
            title: '14. Lumberman',
            image: './images/lumber-man.jpg',
            description: 'By Rodger Brodin. At 4300 Webber Pkwy. Located near the former site of the C.A. Smith Lumber Company, the sculpture was inspired by the artist’s grandfather, a Swedish immigrant and sawmill worker at the company.',
            location: {
                center: [-93.2920708, 45.0339718],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-15',
            title: '15. Abraham Lincoln',
            image: './images/lincoln.jpg',
            description: 'By Max Bachman. At 2999 Victory Memorial Dr. In 1924, ten trees were planted to honor each of the Hennepin County posts of the Grand Army of the Republic. The trees formed a ring, known as the “Grand Army Circle”. Eventually, the trees were replaced by bronze stars and crosses, showing the name, rank, and company of each soldier. In 1929, surviving members of the Grand Army of the Republic raised money for an Abraham Lincoln statue in the memorial’s center. While the body of the statue is a replica of Augustus St. Gaudens’ Lincoln in Chicago, IL, the head was sculpted by Max Bachman. The statue honors all Hennepin County soldiers who have lost their lives in service of their country.',
            location: {
                center: [-93.3196788, 45.0355569],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-16',
            title: '16. Aqurbane',
            image: './images/aqurbane.jpg',
            description: 'By Christopher Harrison. Near Theodore Wirth Pkwy & N 26th Ave. The vision for Aqurbane was to create a local landmark that could be referenced to by the community and serve as a gateway from an urban landscape to nature. The various symbols found on the archway are meant to represent the diversity of both the local environment and the community. The unique shapes were inspired by the Mississippi River and its surrounding natural elements.',
            location: {
                center: [-93.3166368, 45.006163],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-17',
            title: '17. Blossoms of Hope',
            image: './images/blossoms-hope.jpg',
            description: 'By Marjorie Pitz. At 2125 W Broadway Ave. This artwork is a transit shelter that masquerades as a giant vase of flowers. It provides a fun place to wait for the bus, and announces itself from blocks away. The plaza provides room for people to gather and softens the busy intersection with green plantings.',
            location: {
                center: [-93.3080633, 45.0037396],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-18',
            title: '18. Theodore Wirth',
            image: './images/theodore-wirth.jpg',
            description: 'By Bill Rains. At 1301 Theodore Wirth Pkwy. Theodore Wirth was instrumental in designing the Minneapolis parks system. In 1904, he became Superintendent of Parks in Minneapolis. Over the course of his employment, he increased the park system from 1,810 acres to 5,241 acres. The statues of Theodore Wirth and five children were designed by Wirth’s grandson. The five children surrounding Wirth represent the diverse population of Minneapolis and his role in creating access for all residents, no matter their race or income.',
            location: {
                center: [-93.3230243, 44.9923161],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-19',
            title: '19. Harrison Gateway: Antoinette and James',
            image: './images/antoinette-james.jpg',
            description: 'By Jane Frees-Kluth. Near Penn Ave N & Hwy 55. This artwork is a gateway to the Harrison Neighborhood. Two pillars feature children; Antoinette and James; holding banners identifying the neighborhood. The pillars are decorated with portraits and symbols designed by the community.',
            location: {
                center: [-93.3083018, 44.9839829],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-20',
            title: '20. Remembering Rising series',
            image: './images/remembering-rising.png',
            description: 'By Seitu Jones. Around Heritage Park Apartments complex. These 11 pieces are integrated into the plazas, bridges, and trails, reminding residents of the history and forces that led to the creation of Heritage Park. The themes draw from the past which recalls the Sumner Field Homes and the wildlife once found in Bassett Creek that has returned in recent years. Sumner Field is a good place to start your visit.',
            location: {
                center: [-93.2922077, 44.9876163],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-21',
            title: '21. 324 West Broadway',
            image: './images/324-wbroadway.jpg',
            description: 'By Charles Caldwell. Photo by @danielson360.',
            location: {
                center: [-93.28459, 44.99940],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-22',
            title: '22. 1200 West Broadway',
            image: './images/1200-wbroadway.jpg',
            description: 'By Kayla Baribeau. Photo by @jxta_arts.',
            location: {
                center: [-93.29608, 44.99940],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'feature-23',
            title: '23. 1808 Emerson Avenue North',
            image: './images/1808-emerson.jpg',
            description: 'By Tats Cru. Photo by @wolfmanmn.',
            location: {
                center: [-93.29367, 44.99785],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },    ]
};
