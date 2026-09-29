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
    }
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
}

];