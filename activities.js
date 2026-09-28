const activities = [
  {
    id: "garden-sketch",
    title: "A tiny garden sketch break",
    neighborhood: "east-village",
    place: "Creative Little Garden",
    address: "530 East 6th Street",
    category: "wander",
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
    address: "Start on East 7th Street",
    category: "browse",
    description:
      "Start at AuH2O and Tokio7 across the street, then wander up to East Village Vintage Collective. Your mission: find something you would wear, something you wish you could pull off, and something that belongs in a music video.",
    visitNote:
      "Pick one stop or explore all three. Check each shop’s hours before going; they are not all open every day. Buying is optional, and prices vary widely.",
    website:
      "https://www.google.com/maps/search/?api=1&query=AuH2O+84+East+7th+Street+New+York",
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
        name: "East Village Vintage Collective",
        address: "545 East 12th Street",
        website: "https://eastvillagevintagecollective.com/pages/contact"
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
    description:
      "Try a guided art-making event that brings together creative practice, conversation, and inspiration from artists. No prior art experience needed.",
    visitNote:
      "Choose an upcoming New York event and confirm its location, price, materials, and booking requirements. This is a scheduled activity, not a drop-in studio visit.",
    website: "https://www.artsclubstudios.com/"
  }
];