const activities = [
  {
    id: "garden-sketch",
    title: "A tiny garden sketch break",
    neighborhood: "east-village",
    place: "Creative Little Garden",
    address: "530 East 6th Street",
    category: "wander",
    energy: ["low"],
    description:
      "Bring a notebook and sketch three small details you notice. No drawing skills required.",
    visitNote:
      "Visit only when the garden gates are open. Check the garden website before heading over.",
    website: "https://www.creativelittlegarden.com/visiting"
  },
  {
    id: "bookshop-discovery",
    title: "Find a book you weren’t looking for",
    neighborhood: "williamsburg",
    place: "McNally Jackson",
    address: "76 North 4th Street, Unit G",
    category: "browse",
    energy: ["low"],
    description:
      "Explore a section you normally skip. Find one book you would give a friend and one you would keep.",
    visitNote:
      "Check current store hours. Any purchases are optional and priced separately.",
    website: "https://mcnallyjackson.com/store/2"
  },
  {
    id: "mother-of-junk",
    title: "Find the weirdest thing in the store",
    neighborhood: "williamsburg",
    place: "Mother of Junk",
    address: "567 Driggs Avenue",
    category: "browse",
    energy: ["low"],
    description:
      "Browse secondhand odds and ends with a small mission: find something beautiful, something baffling, and something your grandmother definitely owned. Buying is optional.",
    visitNote:
      "Check current hours before visiting. Inventory and prices vary.",
    website:
      "https://www.google.com/maps/search/?api=1&query=Mother+of+Junk+567+Driggs+Avenue+Brooklyn+NY"
  },
  {
    id: "nook-notebook",
    title: "Take your notebook on a coffee date",
    neighborhood: "bushwick",
    place: "Nook",
    address: "45 Irving Avenue",
    category: "create",
    energy: ["low", "medium"],
    description:
      "Order something, put your phone away, and give yourself a small assignment: write a page, sketch your cup, or start the poem you keep thinking about.",
    visitNote:
      "Budget for a drink and check current hours. Seating depends on availability; this is a self-guided activity, not an organized workshop.",
    website: "https://www.nookbk.com/"
  },
  {
    id: "boyfriend-coop",
    title: "Make an afternoon of a coffee",
    neighborhood: "bushwick",
    place: "Boyfriend Co-op",
    address: "1157 Myrtle Avenue",
    category: "hangout",
    energy: ["low", "medium"],
    description:
      "Visit this queer coffee and cocktail cooperative with a book, a friend, or a notebook. Give yourself something to do that isn’t scrolling.",
    visitNote:
      "Budget for food or a drink. Check current hours and event listings; special events may have separate tickets or entry requirements.",
    website: "https://www.boyfriend.coop/"
  },
  {
    id: "brooklyn-loft-drawing",
    title: "Give figure drawing a try",
    neighborhood: "bushwick",
    place: "The Brooklyn Loft",
    address: "476 Jefferson Street",
    category: "create",
    energy: ["medium", "high"],
    description:
      "Choose a figure-drawing session and spend some time drawing from a live model. Explore the schedule for themed sessions and other creative workshops.",
    visitNote:
      "Check the specific event for booking, price, materials, age requirements, and location. Sessions may feature clothed or nude models; this is a scheduled activity, not a walk-in visit.",
    website: "https://thebkloft.com/"
  },
  {
    id: "chyelle",
    active: true,
    title: "Browse furniture. Leave with an idea.",
    neighborhood: "bushwick",
    place: "Chyelle",
    address: "199 Cook Street, #103",
    category: "browse",
    energy: ["low", "medium"],
    description:
      "Explore vintage furniture and home goods, and imagine furnishing a room entirely unlike your own. For something hands-on, look out for creative classes hosted in the space.",
    visitNote:
      "Check current store hours before visiting. Classes are scheduled separately; confirm upcoming dates, tickets, and materials with the organizer. Purchases are optional.",
    website:
      "https://www.google.com/maps/search/?api=1&query=Chyelle+199+Cook+Street+Brooklyn+NY"
  },
  {
  id: "east-village-vintage",
  active: true,
  title: "Try on a different decade",
  neighborhood: "east-village",
  place: "East Village vintage & secondhand trail",
  address: "Start wherever looks good",
  category: "browse",
  energy: ["medium"],
  description:
    "Give yourself an afternoon to dig through vintage, thrift, and secondhand shops. Pick a few stops, try on something unexpected, and see what you find.",
  visitNote:
    "Pick one stop or make a trail of it. Check individual store hours before going; inventory, prices, and opening days vary.",
  website:
    "https://www.google.com/maps/search/?api=1&query=vintage+shops+East+Village+NYC",
  stops: [
    {
      name: "AuH2O",
      address: "84 East 7th Street",
      website: "https://www.auh2oshop.com/"
    },
    {
      name: "Tokio7",
      address: "83 East 7th Street",
      website: "https://tokio7ny.com/"
    },
    {
      name: "9th St. Vintage",
      address: "346 East 9th Street",
      website: "https://www.9thstvintage.com/"
    },
    {
      name: "East Village Vintage Collective",
      address: "545 East 12th Street",
      website: "https://eastvillagevintagecollective.com/"
    },
    {
      name: "Mag New York City",
      address: "66 Avenue A",
      website:
        "https://www.google.com/maps/search/?api=1&query=Mag+New+York+City+66+Avenue+A+New+York"
    },
    {
      name: "East Village Thrift Shop",
      address: "186 Second Avenue",
      website:
        "https://www.google.com/maps/search/?api=1&query=East+Village+Thrift+Shop+186+Second+Avenue+New+York"
    },
    {
      name: "3rd & B'zaar",
      address: "191 East 3rd Street",
      website: "https://3rdandbzaar.com/"
    },
    {
      name: "Flamingos Vintage Pound",
      address: "4 St Marks Pl",
      website:
        "https://maps.app.goo.gl/Gqw5a31bRzSH3gqEA"
    }
  ]
},
  {
    id: "drawing-room-williamsburg",
    active: true,
    title: "Give yourself an afternoon to make something",
    neighborhood: "williamsburg",
    place: "Drawing Room Williamsburg: Creative Living",
    address: "101 North 10th Street, #206",
    category: "create",
    energy: ["low", "medium"],
    description:
      "Bring an unfinished project or start with a blank page. Get a day pass for creative time in a shared studio, or explore the workshop calendar for a guided activity.",
    visitNote:
      "Check current day-pass prices and open hours before visiting. Basic drawing supplies are included; additional materials may cost extra. Workshops require separate booking. This is a shoes-off space, so bring socks or indoor slippers.",
    website: "https://www.nycdrawingroom.com/visit"
  },
  {
    id: "recess-grove",
    active: true,
    title: "Trade your screen for a friendship bracelet",
    neighborhood: "williamsburg",
    place: "Recess Grove",
    address: "327 Grand Street",
    category: "create",
    energy: ["low", "medium"],
    description:
      "Order a drink and settle into the counter with origami, friendship bracelets, coloring supplies, or a game. Want more room to experiment? Explore a studio session or creative workshop.",
    visitNote:
      "The laptop-free counter accepts walk-ins and offers complimentary creative supplies. Budget separately for food and drinks. Studio sessions and classes have separate fees; check current hours, availability, and booking details.",
    website: "https://www.recessgrove.com/visit"
  },
  {
    id: "orpheum-theatre",
    active: true,
    title: "Make a night of an Off-Broadway show",
    neighborhood: "east-village",
    place: "Orpheum Theatre",
    address: "126 Second Avenue",
    category: "watch",
    energy: ["low", "medium"],
    description:
      "See what’s playing at this East Village theatre and plan an evening around a live performance. Go with a friend, make it a date, or take yourself out.",
    visitNote:
      "Check the current production, performance dates, ticket prices, and availability before making plans. Shows change, and performances are not guaranteed every day.",
    website:
      "https://www.broadway.com/venues/theaters/orpheum-theatre/"
  },
  {
    id: "artsclub-east-village",
    active: true,
    title: "Learn about art, then make your own",
    neighborhood: "east-village",
    place: "ArtsClub",
    address: "311 East 3rd Street",
    category: "create",
    energy: ["medium", "high"],
    description:
      "Try a guided art-making event that brings together creative practice, conversation, and inspiration from artists. No prior art experience needed.",
    visitNote:
      "Choose an upcoming New York event and confirm its location, price, materials, and booking requirements. This is a scheduled activity, not a drop-in studio visit.",
    website: "https://www.artsclubstudios.com/"
  },
  {
    id: "tiny-cupboard",
    active: true,
    title: "Let someone else be funny for a while",
    neighborhood: "bushwick",
    place: "The Tiny Cupboard Comedy Club & Game Bar",
    address: "10 Cooper Street",
    category: "watch",
    energy: ["medium"],
    description:
      "Catch a stand-up show, then stick around for games and drinks. Pick a comedian you’ve never heard of and see if you leave with a new favorite.",
    visitNote:
      "Check the current show calendar, ticket prices, age requirements, and game bar hours before visiting. Shows require tickets and schedules vary.",
    website: "https://www.thetinycupboard.com/"
  },
  {
    id: "syndicated",
    active: true,
    title: "See a movie with dinner attached",
    neighborhood: "bushwick",
    place: "Syndicated Bar Theater Kitchen",
    address: "40 Bogart Street",
    category: "watch",
    energy: ["low", "medium"],
    description:
      "Pick whatever sounds interesting on the movie calendar, order something to eat or drink, and settle in for a film somewhere more fun than your couch.",
    visitNote:
      "Check the current film schedule, showtimes, ticket prices, and age requirements before visiting. Food and drinks are priced separately.",
    website: "https://syndicatedbk.com/"
  },
  /* =========================================================
   NEW ACTIVITIES
   ========================================================= */


/* ---------------------------------------------------------
   EAST VILLAGE — MOVIE
   --------------------------------------------------------- */

{
  id: "village-east-movie",
  active: true,
  title: "See a movie somewhere with a little history",
  neighborhood: "east-village",
  place: "Village East by Angelika",
  address: "181–189 Second Avenue",
  category: "watch",
  energy: ["low", "medium"],
  description:
    "See what's playing at this historic East Village movie theater and make a night of it. Pick whatever sounds interesting, grab a seat, and let someone else decide what happens for the next two hours.",
  visitNote:
    "Check current showtimes, ticket prices, and screening details before visiting.",
  website:
    "https://www.angelikafilmcenter.com/villageeast"
},


/* ---------------------------------------------------------
   WILLIAMSBURG — MOVIE
   --------------------------------------------------------- */

{
  id: "nitehawk-williamsburg",
  active: true,
  title: "Have dinner and a movie at the same time",
  neighborhood: "williamsburg",
  place: "Nitehawk Cinema Williamsburg",
  address: "136 Metropolitan Avenue",
  category: "watch",
  energy: ["low", "medium"],
  description:
    "Pick a movie, settle into your seat, and order food and drinks without having to choose between dinner and a film. Check the calendar for new releases, old favorites, and stranger screenings.",
  visitNote:
    "Check current showtimes, ticket availability, age requirements, and menu details before visiting. Food and drinks are priced separately.",
  website:
    "https://nitehawkcinema.com/williamsburg/"
},


/* ---------------------------------------------------------
   WILLIAMSBURG — ARTISTS & FLEAS
   --------------------------------------------------------- */

{
  id: "artists-and-fleas-williamsburg",
  active: true,
  title: "See what the makers brought this weekend",
  neighborhood: "williamsburg",
  place: "Artists & Fleas",
  address: "70 North 7th Street",
  category: "browse",
  energy: ["low", "medium"],
  description:
    "Wander through a rotating market of independent makers, vintage sellers, artists, designers, and collectors. Give yourself permission to look at absolutely everything and buy absolutely nothing.",
  visitNote:
    "The Williamsburg market currently operates on weekends. Check current hours and vendor information before visiting.",
  website:
    "https://www.artistsandfleas.com/williamsburg/"
},


/* ---------------------------------------------------------
   WILLIAMSBURG — VINTAGE TRAIL
   --------------------------------------------------------- */

{
  id: "williamsburg-vintage",
  active: true,
  title: "Go vintage hunting in Williamsburg",
  neighborhood: "williamsburg",
  place: "Williamsburg vintage & secondhand trail",
  address: "Start wherever looks good",
  category: "browse",
  energy: ["medium"],
  description:
    "Give yourself a few racks to dig through. Mix big secondhand stores with smaller curated vintage shops and see whether you find something worth carrying home.",
  visitNote:
    "Choose a couple of stops or make an afternoon of it. Check current hours before visiting; inventory and prices vary.",
  website:
    "https://www.google.com/maps/search/?api=1&query=vintage+shops+Williamsburg+Brooklyn",
  stops: [
    {
      name: "Monk Vintage",
      address: "500 Driggs Avenue",
      website:
        "https://www.google.com/maps/search/?api=1&query=Monk+Vintage+500+Driggs+Avenue+Brooklyn"
    },
    {
      name: "Other People's Clothes",
      address: "150 Marcy Avenue",
      website:
        "https://www.otherpeoplesclothes.shop/opc-williamsburg"
    },
    {
      name: "Brooklyn Woke Vintage",
      address: "158 Bedford Avenue",
      website:
        "https://www.google.com/maps/search/?api=1&query=Brooklyn+Woke+Vintage+158+Bedford+Avenue+Brooklyn"
    },
    {
      name: "2nd STREET Williamsburg",
      address: "187 Kent Avenue",
      website:
        "https://2ndstreetusa.com/find-a-store"
    },
    {
      name: "Awoke Vintage",
      address: "132 North 5th Street",
      website:
        "https://www.awokevintage.com/pages/visit-us"
    }
  ]
},


/* ---------------------------------------------------------
   BUSHWICK — VINTAGE TRAIL
   --------------------------------------------------------- */

{
  id: "bushwick-vintage",
  active: true,
  title: "Go vintage hunting in Bushwick",
  neighborhood: "bushwick",
  place: "Bushwick vintage & secondhand trail",
  address: "Start wherever looks good",
  category: "browse",
  energy: ["medium"],
  description:
    "Spend an afternoon digging through everything from big thrift-store racks to smaller curated vintage shops. Your only assignment is to find one thing you'd never have searched for online.",
  visitNote:
    "Choose a few stops rather than trying to do everything. Check current hours before visiting; inventory and prices change constantly.",
  website:
    "https://www.google.com/maps/search/?api=1&query=vintage+shops+Bushwick+Brooklyn",
  stops: [
    {
      name: "28 Scott Vintage",
      address: "108 Thames Street",
      website:
        "https://www.28scott.com/"
    },
    {
      name: "Harmonk",
      address: "Bushwick",
      website:
        "https://www.google.com/maps/search/?api=1&query=Harmonk+Vintage+Bushwick+Brooklyn"
    },
    {
      name: "fronk.",
      address: "87 George Street, #118",
      website:
        "https://www.google.com/maps/search/?api=1&query=fronk+87+George+Street+Brooklyn"
    },
    {
      name: "Select Vintage",
      address: "191 Wilson Avenue",
      website:
        "https://www.google.com/maps/search/?api=1&query=Select+Vintage+191+Wilson+Avenue+Brooklyn"
    },
    {
      name: "Urban Jungle",
      address: "118 Knickerbocker Avenue",
      website:
        "https://www.google.com/maps/search/?api=1&query=Urban+Jungle+118+Knickerbocker+Avenue+Brooklyn"
    },
  ]
},


/* ---------------------------------------------------------
   BUSHWICK — FLEA MARKET
   --------------------------------------------------------- */

{
  id: "bushwick-flea",
  active: true,
  title: "Go to the flea market with no shopping list",
  neighborhood: "bushwick",
  place: "Bushwick Flea",
  address: "52 Wyckoff Avenue",
  category: "browse",
  energy: ["medium"],
  description:
    "Browse whatever happens to be there: vintage clothes, objects, art, furniture, records, and things you absolutely did not know you needed five minutes ago.",
  visitNote:
    "Market schedules and vendors can change, so confirm that the flea market is running before making a dedicated trip.",
  website:
    "https://www.google.com/maps/search/?api=1&query=Bushwick+Flea+52+Wyckoff+Avenue+Brooklyn"
},


/* ---------------------------------------------------------
   EAST VILLAGE — SELL YOUR CLOTHES
   --------------------------------------------------------- */

{
  id: "east-village-sell-clothes",
  active: true,
  title: "Sell the clothes you keep saying you'll sell",
  neighborhood: "east-village",
  place: "East Village resale shops",
  address: "Second Avenue + East 11th Street",
  category: "browse",
  energy: ["medium"],
  description:
    "Fill a bag with the clothes you've been meaning to get rid of and see whether you can turn them into cash or store credit. Anything they don't take can finally move on to its next destination.",
  visitNote:
    "Buying policies, accepted items, wait times, ID requirements, and payout options vary. Check each shop's current selling instructions before bringing a bag.",
  website:
    "https://www.google.com/maps/search/?api=1&query=clothing+resale+East+Village+NYC",
  stops: [
    {
      name: "Crossroads Trading",
      address: "122 Second Avenue",
      website:
        "https://crossroadstrading.com/location/new-york-2nd-ave/"
    },
    {
      name: "Buffalo Exchange",
      address: "332 East 11th Street",
      website:
        "https://buffaloexchange.com/location/east-village-new-york/"
    }
  ]
},


/* ---------------------------------------------------------
   EAST VILLAGE — WEIRD LITTLE SHOPS
   --------------------------------------------------------- */

{
  id: "east-village-little-shops",
  active: true,
  title: "Go look at extremely specific little things",
  neighborhood: "east-village",
  place: "East Village odd little shop trail",
  address: "Start around East 9th–11th Streets",
  category: "browse",
  energy: ["medium"],
  description:
    "Forget practical shopping. Browse stationery, rubber stamps, art, gifts, vintage objects, books, and whatever else catches your eye in a handful of very specific East Village shops.",
  visitNote:
    "Pick whichever stops sound interesting and check current hours before visiting. Buying anything is entirely optional.",
  website:
    "https://www.google.com/maps/search/?api=1&query=independent+shops+East+Village+NYC",
  stops: [
    {
      name: "Spooksvilla + Friends",
      address: "309 East 9th Street",
      website:
        "https://www.shopspooksvilla.com/"
    },
    {
      name: "niconeco zakkaya",
      address: "263 East 10th Street",
      website:
        "https://www.niconeco.com/"
    },
    {
      name: "Casey Rubber Stamps",
      address: "322 East 11th Street",
      website:
        "https://www.caseyrubberstamps.com/"
    },
    {
      name: "Theo's Haberdashery",
      address: "East Village",
      website:
        "https://theoshaberdashery.com/"
    },
    {
      name: "Village Works",
      address: "12 St. Marks Place",
      website:
        "https://www.google.com/maps/search/?api=1&query=Village+Works+12+St+Marks+Place+New+York"
    }
  ]
},


/* ---------------------------------------------------------
   EAST VILLAGE — RECORD SHOPPING
   --------------------------------------------------------- */

{
  id: "east-village-records",
  active: true,
  title: "Spend an afternoon flipping through records",
  neighborhood: "east-village",
  place: "East Village record shop trail",
  address: "Start wherever your taste takes you",
  category: "browse",
  energy: ["medium"],
  description:
    "Go crate digging with no particular record in mind. Flip through new releases, used vinyl, rare pressings, and things you've never heard of until something makes you stop.",
  visitNote:
    "Inventory changes constantly, which is the point. Pick a few stops and check current hours before visiting.",
  website:
    "https://www.google.com/maps/search/?api=1&query=record+stores+East+Village+NYC",
  stops: [
    {
      name: "A-1 Record Shop",
      address: "439 East 6th Street",
      website:
        "https://www.a-1recordshop.com/"
    },
    {
      name: "Limited to One",
      address: "221 East 10th Street, Basement West",
      website:
        "https://www.limitedtooneshop.com/"
    },
    {
      name: "Stranded Records",
      address: "218 East 5th Street",
      website:
        "https://www.strandedrecords.com/"
    },
    {
      name: "Ergot Records",
      address: "East Village",
      website:
        "https://www.google.com/maps/search/?api=1&query=Ergot+Records+New+York"
    },
    {
      name: "Academy Records",
      address: "415 East 12th Street",
      website:
        "https://www.google.com/maps/search/?api=1&query=Academy+Records+415+East+12th+Street+New+York"
    },
    {
      name: "Manhattan 45",
      address: "East Village",
      website:
        "https://www.google.com/maps/search/?api=1&query=Manhattan+45+Records+New+York"
    }
  ]
},


/* ---------------------------------------------------------
   WILLIAMSBURG — RECORD SHOPPING
   --------------------------------------------------------- */

{
  id: "williamsburg-records",
  active: true,
  title: "Go record shopping in Williamsburg",
  neighborhood: "williamsburg",
  place: "Williamsburg record shop trail",
  address: "Start wherever your taste takes you",
  category: "browse",
  energy: ["medium"],
  description:
    "Spend an afternoon flipping through records instead of scrolling through playlists. Pick a few shops, browse slowly, and leave with a recommendation or something you didn't know you wanted.",
  visitNote:
    "Check current store hours before visiting. Inventory changes constantly and purchases are optional.",
  website:
    "https://www.google.com/maps/search/?api=1&query=record+stores+Williamsburg+Brooklyn",
  stops: [
    {
      name: "Earwax Records",
      address: "167 North 9th Street",
      website:
        "https://earwaxrecords.squarespace.com/"
    },
    {
      name: "Human Head Records",
      address: "289 Meserole Street",
      website:
        "https://www.humanheadnyc.co/"
    },
    {
      name: "Superior Elevation Records",
      address: "616 Grand Street",
      website:
        "https://www.superiorelevation.com/"
    }
  ]
},


/* ---------------------------------------------------------
   BUSHWICK — RECORD SHOPPING
   --------------------------------------------------------- */

{
  id: "bushwick-records",
  active: true,
  title: "Go crate digging in Bushwick",
  neighborhood: "bushwick",
  place: "Bushwick record shop trail",
  address: "Start wherever your taste takes you",
  category: "browse",
  energy: ["medium"],
  description:
    "Pick a couple of record stores and spend some time actually flipping through music. Look for something familiar, something strange, and one album whose cover alone almost convinces you to buy it.",
  visitNote:
    "Check current hours before visiting. Some shops keep small-business schedules, and inventory changes constantly.",
  website:
    "https://www.google.com/maps/search/?api=1&query=record+stores+Bushwick+Brooklyn",
  stops: [
    {
      name: "Secondhand Records",
      address: "23 Lawton Street",
      website:
        "https://www.instagram.com/secondhandrecordsnyc/"
    },
    {
      name: "Vinyl Fantasy",
      address: "194 Knickerbocker Avenue",
      website:
        "https://vinylfantasybk.com/"
    },
    {
      name: "Rebel Rouser",
      address: "867 Broadway",
      website:
        "https://www.instagram.com/rebelrousernyc/"
    }
  ]
},
 /* =========================================================
   MORE WANDERING, ART & MUSEUM IDEAS
   ========================================================= */


/* ---------------------------------------------------------
   EAST VILLAGE — RADICAL HISTORY
   --------------------------------------------------------- */

{
  id: "morus",
  active: true,
  title: "Take a walk through the radical history of the East Village",
  neighborhood: "east-village",
  place: "Museum of Reclaimed Urban Space",
  address: "155 Avenue C",
  category: "wander",
  energy: ["medium", "high"],
  description:
    "Start at this tiny museum of grassroots activism, then explore the neighborhood through the history of community gardens, squats, public space, and the people who fought to shape it.",
  visitNote:
    "You can visit the museum itself or check the schedule for a guided neighborhood walking tour. Tours are scheduled separately, so confirm current dates, times, and prices before going.",
  website:
    "https://morusnyc.org/"
},


/* ---------------------------------------------------------
   EAST VILLAGE — EXPERIMENTAL FILM
   --------------------------------------------------------- */

{
  id: "anthology-film-archives",
  active: true,
  title: "See something you probably wouldn't find at a multiplex",
  neighborhood: "east-village",
  place: "Anthology Film Archives",
  address: "32 Second Avenue",
  category: "watch",
  energy: ["low", "medium"],
  description:
    "Check the calendar and pick a screening that sounds interesting, strange, beautiful, or completely unfamiliar. This is the place to try experimental, independent, avant-garde, and repertory cinema.",
  visitNote:
    "Screenings change frequently. Check the current film calendar, showtime, and ticket information before visiting.",
  website:
    "https://www.anthologyfilmarchives.org/"
},


/* ---------------------------------------------------------
   WILLIAMSBURG — TINY NYC MUSEUM
   --------------------------------------------------------- */

{
  id: "city-reliquary",
  active: true,
  title: "Look at a museum full of extremely New York things",
  neighborhood: "williamsburg",
  place: "The City Reliquary",
  address: "370 Metropolitan Avenue",
  category: "wander",
  energy: ["low", "medium"],
  description:
    "Explore a tiny neighborhood museum packed with New York artifacts, ephemera, oddities, and pieces of everyday city history that somebody decided were worth keeping.",
  visitNote:
    "Check current museum hours and admission information before visiting. It's small, so this pairs well with wandering around Williamsburg afterward.",
  website:
    "https://www.cityreliquary.org/"
},


/* ---------------------------------------------------------
   WILLIAMSBURG — ART & HISTORY
   Currently closed — retained for future reopening
   --------------------------------------------------------- */

{
  id: "wah-center",
  active: false,
  title: "Wander through art in an old Williamsburg landmark",
  neighborhood: "williamsburg",
  place: "Williamsburg Art & Historical Center",
  address: "135 Broadway",
  category: "wander",
  energy: ["low", "medium"],
  description:
    "Explore exhibitions and events inside the landmark former Kings County Savings Bank building at the foot of the Williamsburg Bridge.",
  visitNote:
    "The WAH Center is currently closed until further notice following significant water damage. Keep this activity inactive until the center announces that it has reopened.",
  website:
    "https://www.wahcenter.net/"
},


/* ---------------------------------------------------------
   BUSHWICK — BONE MUSEUM
   --------------------------------------------------------- */

{
  id: "bone-museum",
  active: true,
  title: "Go look at a frankly unreasonable number of bones",
  neighborhood: "bushwick",
  place: "The Bone Museum",
  address: "255 McKibbin Street",
  category: "wander",
  energy: ["low", "medium"],
  description:
    "Spend some time learning what human skeletons can tell us about anatomy, pathology, trauma, medicine, and history. Weird enough to feel like an outing; educational enough to justify it.",
  visitNote:
    "Check current opening hours, admission information, and visitor policies before going.",
  website:
    "https://www.thebonemuseum.org/"
},


/* ---------------------------------------------------------
   BUSHWICK — STREET ART
   --------------------------------------------------------- */

{
  id: "bushwick-collective",
  active: true,
  title: "Go mural hunting",
  neighborhood: "bushwick",
  place: "The Bushwick Collective",
  address: "Start around Troutman Street & St. Nicholas Avenue",
  category: "wander",
  energy: ["medium", "high"],
  description:
    "Walk around the Bushwick Collective and see how many murals you can find. Don't worry about following a perfect route — turn whenever something interesting catches your eye.",
  visitNote:
    "The murals are outdoors and spread across multiple blocks. Wear comfortable shoes, be respectful of residents and businesses, and remember that the artwork changes over time.",
  website:
    "https://thebushwickcollective.com/"
},


/* ---------------------------------------------------------
   BUSHWICK — LIVING GALLERY
   --------------------------------------------------------- */

{
  id: "living-gallery",
  active: true,
  title: "See what someone's making in Bushwick",
  neighborhood: "bushwick",
  place: "The Living Gallery",
  address: "1094 Broadway",
  category: "wander",
  energy: ["medium"],
  description:
    "Drop into a community art space built around emerging artists, exhibitions, events, classes, performances, and whatever creative thing happens to be going on that week.",
  visitNote:
    "This isn't a conventional museum with all-day daily hours. Check the current exhibition, class, or event schedule before making a dedicated trip.",
  website:
    "http://www.the-living-gallery.com/"
},


/* ---------------------------------------------------------
   WILLIAMSBURG — DOMINO PARK
   --------------------------------------------------------- */

{
  id: "domino-park",
  active: true,
  title: "Do absolutely nothing productive by the water",
  neighborhood: "williamsburg",
  place: "Domino Park",
  address: "15 River Street",
  category: "wander",
  energy: ["low", "medium"],
  description:
    "Get there before sunset and give yourself no real agenda. Walk the waterfront, sketch the skyline, take photos, people-watch, or find somewhere to sit and stay until the lights start coming on.",
  visitNote:
    "The park is outdoors and open daily. Check the weather before going; sunset timing changes throughout the year.",
  website:
    "https://www.dominopark.com/"
},


/* ---------------------------------------------------------
   BUSHWICK — MARIA HERNANDEZ PARK
   --------------------------------------------------------- */

{
  id: "maria-hernandez-park",
  active: true,
  title: "Spend an hour at Bushwick's neighborhood living room",
  neighborhood: "bushwick",
  place: "Maria Hernandez Park",
  address: "Knickerbocker Avenue & Starr Street",
  category: "wander",
  energy: ["low", "medium", "high"],
  description:
    "Walk a lap and then pick your activity: shoot around on the basketball courts, people-watch from a bench, sketch, read, bring something to eat, or see what's happening around the park.",
  visitNote:
    "This is an outdoor public park, so weather and court availability matter. Bring your own basketball, sketchbook, book, or whatever else you want to do.",
  website:
    "https://www.google.com/maps/search/?api=1&query=Maria+Hernandez+Park+Brooklyn+NY"
},


/* ---------------------------------------------------------
   PARK SLOPE — PROSPECT PARK
   --------------------------------------------------------- */

{
  id: "prospect-park",
  active: true,
  title: "Do everything or nothing in some quasi-nature",
  neighborhood: "park-slope",
  place: "Prospect Park",
  address: "Brooklyn, NY",
  category: "wander",
  energy: ["low", "medium"],
  description:
    "There's no way to do Prospect Park wrong. Bring a volleyball, a sketchbook, a bike, or your walking shoes and give your afternoon to the park. Bonuses: Botanical Gardens, dog beach, and waterfalls!",
  visitNote:
    "The park is outdoors and open daily. Off-leash hours 6-9am and 9pm-1am. Check the weather before going.",
  website:
    "https://www.prospectpark.org/"
},

/* ---------------------------------------------------------
   PARK SLOPE — BROWNSTONES AT SUNSET/DUSK
   --------------------------------------------------------- */

{
  id: "brownstones",
  active: true,
  title: "Walk through streets of brownstones at sunset or dusk",
  neighborhood: "park-slope",
  place: "Park Slope Streets",
  address: "Park Slope, NY",
  category: "wander",
  energy: ["low"],
  description:
    "Whip out that digicam or use nature's gifts (your eyes) and watch the sun set or rise as you walk through the Park Slope brownstones. Extra vibes in October and December with holiday decorations.",
  visitNote:
    "Check the weather. These are people's houses... Don't be creepy!!",
  website:
    "https://maps.app.goo.gl/jFShdKVXGRf8CQr38"
},

/* ---------------------------------------------------------
   PARK SLOPE — LIVE MUSIC
   --------------------------------------------------------- */

{
  id: "live-music",
  active: true,
  title: "Enjoy live music at Barbès",
  neighborhood: "park-slope",
  place: "Barbès",
  address: "376 9th St",
  category: "watch",
  energy: ["low", "medium"],
  description:
    "Live music and dancing at Barbès, a Diet Coke (not sponsored), your journal, and a dream are all you need.",
  visitNote:
    "5pm-2am during the week, 2pm-3am on the weekends.",
  website:
    "https://www.barbesbrooklyn.com/"
},

/* ---------------------------------------------------------
   PARK SLOPE — UNION HALL
   --------------------------------------------------------- */

{
  id: "comedy-shows-ps",
  active: true,
  title: "See a comedy show, enjoy live music, or play some bocce ball at Union Hall",
  neighborhood: "park-slope",
  place: "Union Hall",
  address: "702 Union St",
  category: "watch",
  energy: ["high", "medium"],
  description:
    "Browse Union Hall's calendar to see what live show (music or comedy) you should catch next! Not game to think ahead? Show up anytime for some bocce ball or enjoy a drink in their outdoor garden seating.",
  visitNote:
    "Check hours before visiting.",
  website:
    "https://unionhallny.com/food-drink"
},


/* ---------------------------------------------------------
   PARK SLOPE — WEIRD SHOPS
   --------------------------------------------------------- */
{
  id: "park-slope-shopping",
  active: true,
  title: "Explore the oddities of Park Slope",
  neighborhood: "park-slope",
  place: "Park Slope Shops",
  address: "Start at the shop nearest your closest Subway stop!",
  category: "browse",
  energy: ["medium"],
  description:
    "Find something you'd love to see in your house and something that would send you running home if you saw it in your most recent hookup's bedroom.",
  visitNote:
    "Check current hours before visiting.",
  website:
    "https://www.google.com/maps/search/?api=1&query=weird+shops+Park+Slope+Brooklyn",
  stops: [
    {
      name: "Annie's Blue Ribbon General Store",
      address: "232 5th Ave",
      website:
        "http://blueribbongeneralstore.com/"
    },
    {
      name: "Leroy's Place",
      address: "353 7th Ave",
      website:
        "http://www.leroysplace.com/"
    },
    {
      name: "From Here to Sunday",
      address: "567 Union St",
      website:
        "http://heretosunday.com/"
    },
    {
      name: "Sterling Place",
      address: "352 7th Ave",
      website:
      "http://www.sterlingplace.com/"
    }
  ]
},

/* ---------------------------------------------------------
   PARK SLOPE — WEIRD SHOPS
   --------------------------------------------------------- */
{
  id: "park-slope-bookstores",
  active: true,
  title: "Find a book at one of Park Slope's iconic bookstores",
  neighborhood: "park-slope",
  place: "Park Slope Bookstores",
  address: "Wherever you want, mama",
  category: "browse",
  energy: ["medium"],
  description:
    "Find something you could binge read, or something you would recommend to your parent to improve their emotional intelligence. Grab a crossword book and sit around waiting for someone to recruit you to the CIA.",
  visitNote:
    "Check current hours before visiting.",
  website:
    "https://www.google.com/maps/search/?api=1&query=bookstore+Park+Slope+Brooklyn",
  stops: [
    {
      name: "Community Bookstore",
      address: "143 7th Ave",
      website:
        "https://www.communitybookstore.net/"
    },
    {
      name: "Troubled Sleep",
      address: "129 6th Ave",
      website:
        "https://www.instagram.com/troubledsleepbooks"
    },
    {
      name: "The Ripped Bodice",
      address: "218 5th Ave",
      website:
        "https://therippedbodice.com/"
    }
  ]
},

/* ---------------------------------------------------------
   PARK SLOPE — SIP AND PLAY
   --------------------------------------------------------- */

{
  id: "board-game-cafe",
  active: true,
  title: "Play a board game and drink a boba or a beer",
  neighborhood: "park-slope",
  place: "Sip & Play",
  address: "471 5th Ave",
  category: "hangout",
  energy: ["medium"],
  description:
    "Enjoy a board game or a card game, alone or with friends, and grab a drink or a snack. Be kind to their games, enjoy yourself, and play some Backgammon for me.",
  visitNote:
    "$10 a person for 3 hours of gameplay.",
  website:
    "https://www.sipnplaynyc.com/"
},

/* ---------------------------------------------------------
   ANYWHERE - ADD NEIGHBORHOOD SPECIFIC ACTIVITIES ABOVE THESE ALWAYS PLS
   --------------------------------------------------------- */
   
   /* ---------------------------------------------------------
   COLOR HUNT
   --------------------------------------------------------- */

{
  id: "color-hunt",
  active: true,
  title: "Go on a color hunt",
  neighborhood: "anywhere",
  place: "Anywhere in the city",
  address: "Start wherever you are",
  category: "wander",
  energy: ["low", "medium"],
  description:
    "Pick one very specific color — not just blue, but cobalt blue; not just yellow, but butter yellow. Walk until you've photographed 10 things that match it.",
  visitNote:
    "No screenshots and no counting things you brought with you. The point is to start noticing what's already around you.",
  website:
    "https://www.google.com/maps"
},


/* ---------------------------------------------------------
   ALPHABET HUNT
   --------------------------------------------------------- */

{
  id: "alphabet-hunt",
  active: true,
  title: "Find the alphabet hiding in the city",
  neighborhood: "anywhere",
  place: "Anywhere in the city",
  address: "Start wherever you are",
  category: "wander",
  energy: ["low", "medium"],
  description:
    "Find all 26 letters hiding in architecture, shadows, plants, railings, cracks, fire escapes, and random objects. Photograph each one. Q is going to be annoying.",
  visitNote:
    "No written letters, signs, storefront names, license plates, or typography allowed. You're looking for shapes that happen to resemble letters.",
  website:
    "https://www.google.com/maps"
},


/* ---------------------------------------------------------
   PHOTO SCAVENGER HUNT
   --------------------------------------------------------- */

{
  id: "photo-scavenger-hunt",
  active: true,
  title: "Give your walk a scavenger hunt",
  neighborhood: "anywhere",
  place: "Anywhere in the city",
  address: "Start wherever you are",
  category: "wander",
  energy: ["low", "medium"],
  description:
    "Walk until you've photographed seven things: something older than you, something smaller than your hand, something that shouldn't be outside, something handmade, something abandoned, something heart-shaped, and something you don't understand.",
  visitNote:
    "There is no correct route and no time limit. Don't move, damage, or trespass onto anything for the sake of completing the list.",
  website:
    "https://www.google.com/maps"
},

];