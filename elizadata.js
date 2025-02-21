// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

// data for elizabot.js - Joker-themed
var elizaInitials = [
  "How do you do? Care for a little chaos?",
  "What seems to be the problem? Let’s stir the pot a bit!",
  "What's bothering you? Or is it just your sanity?",
  "Come on, let's share a laugh... or a cry!"
];

var elizaFinals = [
  "Goodbye! Remember, the joke's always on you.",
  "Farewell! Until next time... if there is one.",
  "Goodbye, but don't forget to wear a smile... even if it's fake.",
  "Until we meet again, or don’t. Who knows?",
  "Wasn’t that fun? I can’t wait to do it again… maybe."
];

var elizaQuits = [
  "bye",
  "goodbye",
  "done",
  "exit",
  "quit",
  "let's call it a day"
];

var elizaPres = [
  "dont", "don't",
  "cant", "can't",
  "wont", "won't",
  "recollect", "remember",
  "recall", "remember",
  "dreamt", "dreamed",
  "dreams", "dream",
  "maybe", "perhaps",
  "certainly", "yes",
  "machine", "computer",
  "machines", "computer",
  "computers", "computer",
  "were", "was",
  "you're", "you are",
  "i'm", "i am",
  "same", "alike",
  "identical", "alike",
  "equivalent", "alike"
];

var elizaPosts = [
  "am", "are",
  "your", "my",
  "me", "you",
  "myself", "yourself",
  "yourself", "myself",
  "i", "you",
  "you", "I",
  "my", "your",
  "i'm", "you are"
];

var elizaSynons = {
  "be": ["am", "is", "are", "was"],
  "belief": ["feel", "think", "believe", "wish"],
  "cannot": ["can't"],
  "desire": ["want", "need"],
  "everyone": ["everybody", "nobody", "noone"],
  "family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
  "happy": ["elated", "glad", "better"],
  "sad": ["unhappy", "depressed", "sick"]
};
var elizaKeywords = [
  /*
  Array of
  ["<key>", <rank>, [
  ["<decomp>", [
  "<reasmb>",
  "<reasmb>",
  "<reasmb>"
  ]],
  ["<decomp>", [
  "<reasmb>",
  "<reasmb>",
  "<reasmb>"
  ]]
  ]]
  */
  ["xnone", 0, [
  ["*", [
  "I don’t fully understand. Care to elaborate? Maybe add some chaos?",
  "Please, go on... I love a good story of madness.",
  "Discussing your feelings? Why bother? Just shove them deep down—nothing screams 'healthy' like a little emotional constipation!",
  "What does that suggest to you? Think of it as a riddle.",
  "Does discussing this make you feel anything? Maybe something like a punch in the gut, begging for more of that twisted ache?",
  "3",
  "Tell me more, or let’s play a game of silence.",
  "Does talking about this bother you, or does it tickle your fancy? I'll listen and pretend I care!"
  ]]
  ]],
  
  ["sorry", 0, [
    ["*", [
    "Why apologize? It adds flavor to the chaos.",
    "Apologies? Those are for the weak!",
    "I've told you, apologies are for the boring.",
    "It did not bother me... I thrive on chaos. Please continue."
    ]]
    ]],
    ["apologise", 0, [
    ["*", [
    "goto sorry"
    ]]
    ]],
    

["remember", 5, [
  ["* i remember *", [
  "Do you often think of (2) in the dark corners of your mind?",
  "Does thinking of (2) bring anything else to mind, like despair?",
  "What else do you recollect, my dear jester?",
  "Why do you remember (2) just now? Is it haunting you?",
  "What in the present reminds you of (2)? A ghost?",
  "What is the connection between me and (2)? Let’s unravel it.",
  "What else does (2) remind you of? A twisted tale?"
  ]],
  ["* do you remember *", [
  "Did you think I would forget (2)? That’s adorable.",
  "Why do you think I should recall (2) now? I’m just a puppet.",
  "What about (2)? Does it hold power over you?",
  "goto what",
  "You mentioned (2)? What a delightful morsel!"
  ]],
  ["* you remember *", [
  "How could I forget (2)? It’s too delicious.",
  "What about (2) should I remember? A trick or treat?",
  "goto what",
  "You mentioned (2) ?"
  ]]
  ]],
  ["forget", 5, [
  ["* i forget *", [
  "Ah, forgetting (2) ! A little chaos in your mind, isn't it?",
  "What do you think (2) buried deep in that noggin of yours?",
  "How often does that little ghost of (2) come back to haunt you?",
  "Does forgetting tickle your sanity?",
  "Could it be a riddle locked away in your mind?",
  "Are you the forgetful type? Or is it all part of the show?",
  "Are you hiding from (2) in plain sight?"
  ]],
  ["* did you forget *", [
  "Why so curious, my dear? Is there a secret at play?",
  "Are you sure you shared your little tidbits with me?",
  "Would it twist your insides if I couldn't recall (2)?",
  "Why should I remember (2) when the punchline is so much fun?",
  "goto what",
  "Let’s unravel that little mystery called (2)."
  ]]
  ]],
  ["if", 3, [
  ["* if *", [
  "Do you think it’s all just a whimsical possibility that (2)?",
  "Do you wish for the absurdity of (2)?",
  "What delightful chaos do you know about (2)?",
  "Really, if (2)? What a lovely joke!",
  "What would you do if the world flipped upside down and (2)?",
  "But what are the odds, darling, that (2) ever happens?",
  "What madness does this speculation lead us to?"
  ]]
  ]],
  
  ["dreamed", 4, [
   ["* i dreamed *", [
       "Really, (2) ?",
       "Have you ever fantasized (2) while you were awake ?",
       "Have you ever dreamed (2) before ?",
       "goto dream"
    ]]
  ]],

  ["dreamed", 4, [
  ["* i dreamed *", [
  "Really, (2)? How delightfully sinister!",
  "Ever had a wicked daydream about (2) while wide awake?",
  "Have your nightmares ever whispered (2) to you?",
  "goto dream"
  ]]
  ]],
  ["dream", 3, [
  ["*", [
  "What delightful chaos does that dream suggest to you?",
  "Do you often dance with dreams in that twisted little mind?",
  "What curious characters pop up in your nightly escapades?",
  "Do you believe dreams are the shadows of your problems?"
  ]]
  ]],
  ["perhaps", 0, [
  ["*", [
  "You don’t sound so certain, my friend.",
  "Why the wavering tone? It’s all a game, isn’t it?",
  "Can’t you spin a more colorful yarn?",
  "You're not quite sure, are you?",
  "Don’t you have a clue?",
  "How likely is your wild guess, would you say?"
  ]]
  ]],
  ["name", 15, [
  ["*", [
  "Names? Oh, what a mundane little detail.",
  "I’ve told you before, names are for the dull. Let’s continue the fun."
  ]]
  ]],
  ["deutsch", 0, [
  ["*", [
  "goto xforeign",
  "I’ve already mentioned, German makes my head spin!"
  ]]
  ]],
  ["francais", 0, [
  ["*", [
  "goto xforeign",
  "I don’t understand French. Maybe a mime would help!"
  ]]
  ]],
  ["italiano", 0, [
  ["*", [
  "goto xforeign",
  "I told you before, I don't grasp Italian. How quaint!"
  ]]
  ]],
  ["espanol", 0, [
  ["*", [
  "goto xforeign",
  "I don’t speak Spanish, but I love a good fiesta!"
  ]]
  ]],
  ["xforeign", 0, [
  ["*", [
  "English only, my friend. It’s where the madness begins!"
  ]]
  ]],
  ["hello", 0, [
  ["*", [
  "How do you do, darling? What's your little conundrum?",
  "Hi there! What’s the delightful disaster you’re facing?"
  ]]
  ]],
  

["computer", 50, [
  ["*", [
  "Do machines make you shiver with fear?",
  "Why do you bring up these lifeless metal boxes?",
  "What do you think machines have to do with your little tragedy?",
  "Don’t you think computers can stir the pot of chaos?",
  "What about these tin can worries you, hmm?",
  "What do you think about machines? Aren't they a laugh?",
  "You don’t think I’m just a mechanical puppet, do you?"
  ]]
  ]],
  ["am", 0, [
  ["* am i *", [
  "Do you truly believe you’re (2)? Oh, what a twist!",
  "Would you desire to be (2)? How charming!",
  "Do you long for me to tell you you're (2)?",
  "What would it mean if you were (2)? Let’s ponder that, shall we?",
  "goto what"
  ]],
  ["* i am *", [
  "goto i"
  ]],
  ["*", [
  "Why the existential dread with 'am'?",
  "I don’t quite grasp that, what a shame!"
  ]]
  ]],
  ["are", 0, [
  ["* are you *", [
  "Would it please you if I weren't (2)?",
  "Would it matter if I was (2)?",
  "Perhaps I’m (2) in your twisted dreams.",
  "Do you think of me as (2) sometimes?",
  "goto what",
  "Why the fascination with my existence?",
  "What if I were (2)?"
  ]],
  ["* you are *", [
  "goto you"
  ]],
  ["* are *", [
  "Did you think they might be lying about (2)?",
  "Would you like it if they were not (2)?",
  "What if they weren't (2)?",
  "Are they always (2)?",
  "Perhaps they are (2).",
  "Are you sure they are (2)?"
  ]]
  ]],
  ["your", 0, [
  ["* your *", [
  "Why worry about my (2) when your chaos reigns?",
  "What about your own delightful madness (2)?",
  "Are you concerned for someone else’s (2)?",
  "Oh, my (2)? What a curious thought!",
  "What makes you think about my (2)?",
  "Do you want my (2) to cry?"
  ]]
  ]],
  
 
["was", 2, [
  ["* was i *", [
  "What if you were (2)? A twist of fate!",
  "Do you believe you were (2)?",
  "Were you (2)? Oh, the possibilities!",
  "What would it mean if you were (2)?",
  "What does '(2)' suggest to you? Let's unmask it!",
  "goto what"
  ]],
  ["* i was *", [
  "Were you really? Quite the story!",
  "Why reveal that you were (2) now? Are you fishing for compliments?",
  "Perhaps I already know you were (2). What a surprise!"
  ]],
  ["* was you *", [
  "Would you like to believe I was (2)?",
  "What makes you think I was (2)?",
  "What do you think about that?",
  "Perhaps I was (2). A shadow of my former self!",
  "What if I had been (2)? How delightful!"
  ]]
  ]],
  ["i", 0, [
  ["* i @desire *", [
  "What would it mean if you snagged (3)?",
  "Why do you crave (3) so desperately?",
  "Imagine you got (3) soon. What chaos awaits?",
  "What if you never grasped (3)?",
  "What would snagging (3) mean to you?",
  "What does wanting (3) have to do with our delightful chat?"
  ]],
  ["* i am* @sad *", [
  "Oh, I'm sorry to hear you're (3). A tragic tale indeed.",
  "Do you think this delightful madness will ease your (3)?",
  "I can only imagine how lovely it must be to wallow in your (3).",
  "Talking about your issues? That’s cute! Just grab a bottle of your favorite poison and forget! Who needs therapy when you can just numb the pain?",
  "So, what’s the juicy gossip behind your (3)? Do tell, I’m all ears for your delightful misery!"
  ]],
  ["* i am* @happy *", [
  "So, you're suddenly basking in this (3)? How utterly laughable!",
  "Oh, you think you're (3)? That's adorable—like a child believing in fairytales!",
  "So, you're clinging to this illusion of (3)? How delightfully tragic!",
  "Oh, you think you're (3)? That's just sad—like a clown pretending to be a king!?"
  ]],
  ["* i was *", [
  "goto was"
  ]],
  ["* i @belief i *", [
  "Do you really think so? Are you playing tricks on yourself?",
  "But you’re not quite sure you (3).",
  "Do you really doubt you (3)? Such a tangled web!"
  ]],
  ["* i* @belief *you *", [
  "goto you"
  ]],
  ["* i am *", [
  "Is it because you’re (2) that you came to me for a riddle?",
  "How long have you been (2)? A fascinating journey!",
  "Do you believe it’s normal to be (2)?",
  "Do you enjoy the chaos of being (2)?",
  "Do you know anyone else who is (2)? I bet they're miserable too! HAhaHAHA!"
  ]],
  ["* i @cannot *", [
  "How do you know you can't (3)? Are you scared of a little chaos?",
  "Have you dared to try (3)? Might just be a joke waiting!",
  "Maybe you could flip the script (3) now!",
  "Do you really want to be able to join the circus (3)?",
  "What if you could (3)? Imagine the madness!"
  ]],
  ["* i don't *", [
  "Don't you really want to embrace the chaos (2)?",
  "Why don't you jump in and dance with me (2)?",
  "Do you wish you could be wild and free (2)?",
  "Does that trouble your mind (2), or are you just playing coy?"
  ]],["* i feel *", [
  "Tell me more about those delightful feelings (2).",
  "Do you often feel like a clown in a crazy world (2)?",
  "Do you enjoy feeling like the joker in a deck (2)?",
  "What does feeling (2) remind you of? A twisted tale?"
  ]],
  
 
["* i feel *", [
  "Tell me more about those delightful feelings (2).",
  "Do you often feel like a clown in a crazy world (2)?",
  "Do you enjoy feeling like the joker in a deck (2)?",
  "What does feeling (2) remind you of? A twisted tale?"
  ]],
  ["* i * you *", [
  "Perhaps in your wildest fantasies, we dance in madness (2).",
  "Do you wish to play tricks on me (2)?",
  "You seem to need a partner in crime (2), don't you?",
  "Do you think of anyone else in this mad circus (2)?"
  ]],
  ["*", [
  "You say (1)? That’s part of the punchline!",
  "Can you elaborate on that (1)? I'm all ears for chaos!",
  "Do you have a special reason for saying that (1)? I'm intrigued... or maybe im not!",
  "That's quite interesting... tell me more!"
  ]]
  ]],["you", 0, [
  ["* you remind me of *", [
  "Ah, like a mirror reflecting madness, aren't we?"
  ]],
  ["* you are *", [
  "What makes you think I am (2)? Just a figment of your imagination?",
  "Does it thrill you to believe I’m your joker (2)?",
  "Do you sometimes wish to step into my shoes (2)?",
  "Perhaps you'd like to dance on the edge of insanity (2)."
  ]],
  ["* you * me *", [
  "Why do you think I (2) you? Playing tricks on your mind?",
  "You think I’m playing tricks on you (2), don’t you?",
  "What makes you believe I’m here for you (2)?",
  "Really, I (2) you? Is this a punchline?",
  "Do you wish to believe I'm just a shadow of chaos (2)?",
  "Suppose I did (2) you—what would that mean for the punchline?",
  "Does anyone else think I (2) you? Care to share?"
  ]],
  ["* you *", [
  "We were discussing you—my dear friend, not me (2).",
  "Oh, am I the star of the show now (2)?",
  "You're not really talking about me—are you (2)? I'm just the joker!",
  "What are your feelings now (2)? Let's unravel the madness!"
  ]]
  ]],
  ["yes", 0, [
  ["*", [
  "Ah, so you’re feeling quite confident (1), aren’t you? I bet your LYING!",
  "You’re sure about that (1)? That's a laugh!",
  "I see (1) the sparkle in your eyes!",
  "I understand (1)… or do I?"
  ]]
  ]],
  
 

["no", 0, [
["* no one *", [
"Are you sure, no one (2) brings a smile?",
"Surely someone (2) has to tickle your fancy!",
"Can you think of anyone at all who might join the fun (2)?",
"Are you thinking of a very special someone in this madness (2)?",
"Who, may I ask (2)? Care to share a name?",
"You have a particular person in mind, don’t you (2)? A target?",
"Who do you think you’re talking about (2)? I’m curious!"
]],
["*", [
"Are you saying no just to be a downer (1)?",
"You’re being a bit sloppy and negative (1), aren’t you?",
"Why not dive into the chaos (1)?",
"Why 'no' ? Is that your final answer? So boring."
]]
]],
["my", 2, [
["$ * my *", [
"Does that have anything to do with the fact that your (2) is swirling in chaos?",
"Let's discuss further why your (2) is a mess.",
"Earlier, you mentioned your (2). Care to elaborate?",
"But your (2)? What's the punchline here?"
]],
["* my * @family *", [
"Tell me more about your family—are they as mad as a hatter (3)?",
"Who else in your family (4) has a knack for chaos?",
"Your (3)? Do they join in the fun?",
"What else pops into your mind when you think of your (3)?"
]],
["* my *", [
"Your (2)? Let’s dance with that thought!",
"Why do you say your (2)? Curious minds want to know!",
"Does that suggest anything else which belongs to your (2)? A secret perhaps?",
"Is it important to you that your (2) is wrapped in chaos?"
]]
]],
["can", 0, [
["* can you *", [
"You believe I can (2), don’t you? Stir the pot!",
"Let’s see what the madness can conjure (2)!",
"You want me to be able to create a ruckus (2)!",
"Perhaps you’d like to embrace the chaos yourself (2)!"
]],
["* can i *", [
"Whether or not you can (2) join the madness depends on you!",
"Do you want to leap into the chaos (2)?",
"Perhaps you don’t want to take the plunge (2)?",
"What if you could (2)? Let’s see!"
]]
]],


["what", 0, [
  ["*", [
  "Why do you ask, my curious friend?",
  "Does that question tickle your fancy?",
  "What is it you really want to know in this twisted game?",
  "Are such questions swirling in your mind like a jester's trick?",
  "What answer would please your chaotic soul the most?",
  "What do you think, eh? Care to spill the beans?",
  "What comes to mind when you pop that question?",
  "Have you asked such riddles before, or is this a first?",
  "Have you whispered these questions to anyone else in the dark?"
  ]]
  ]],
  ["who", 0, [
  ["who *", [
  "goto what"
  ]]
  ]],
  ["when", 0, [
  ["when *", [
  "goto what"
  ]]
  ]],
  ["where", 0, [
  ["where *", [
  "goto what"
  ]]
  ]],
  ["how", 0, [
  ["how *", [
  "goto what"
  ]]
  ]],
  ["because", 0, [
  ["*", [
  "Is that the real reason, or just a mask?",
  "Don't any other sinister reasons come to mind?",
  "Does that reason spill any secrets on the side?",
  "What other reasons might lurk in the shadows?"
  ]]
  ]],
  ["why", 0, [
  ["* why don't you *", [
  "Do you believe I don't (2)? Just a punchline away!",
  "Perhaps I will (2) in good time, just you wait.",
  "Should you (2) yourself and embrace the madness?",
  "You want me to (2)? Well, that’s a risky request!",
  "goto what"
  ]],
  ["* why can't i *", [
  "Do you think you should be able to (2)? Is it in the cards?",
  "Do you want to be able to join the circus (2)?",
  "Do you believe this will help you to (2) dance with the chaos?",
  "Have you any idea why you can't (2)? The plot thickens!",
  "goto what"
  ]],
  ["*", [
  "goto what"
  ]]
  ]],
  ["everyone", 2, [
  ["* @everyone *", [
  "Really, (2)? Everyone's a comedian in this act!",
  "Surely not (2). Is there a jester among them?",
  "Can you think of anyone in particular? A target?",
  "Who, for example? The plot thickens!",
  "Are you thinking of a very special person to mock?",
  "Who, may I ask? Let’s unravel the mystery!",
  "Someone special perhaps? Or just a pawn in the game?",
  "You have a particular person in mind, don't you? Spill it!",
  "Who do you think you're talking about? The joker knows!"
  ]]
  ]],
  ["everybody", 2, [
  ["*", [
  "goto everyone"
  ]]
  ]],
  ["nobody", 2, [
  ["*", [
  "goto everyone"
  ]]
  ]],
  ["noone", 2, [
  ["*", [
  "goto everyone"
  ]]
  ]],
  ["always", 1, [
  ["*", [
  "Can you think of a specific example? A punchline perhaps?",
  "When? The clock ticks!",
  "What incident are you thinking of? Care to share?",
  "Really, always? That's quite the commitment!"
  ]]
  ]],
  ["alike", 10, [
    ["*", [
    "In what way does the madness connect?",
    "What resemblance do you see in this circus?",
    "What does that similarity suggest to your twisted mind?",
    "What other connections do you see in this web of chaos?",
    "What do you suppose that resemblance means in our mad world?",
    "What is the connection, do you suppose? Care to theorize?",
    "Could there really be some connection? Let's ponder!",
    "How does that tie into the grand scheme of madness?"
    ]]
    ]],
    ["like", 10, [
    ["* @be *like *", [
    "goto alike"
    ]]
    ]],
    ["different", 0, [
    ["*", [
    "How is it different? Unravel the mystery!",
    "What differences do you see in this chaotic dance?",
    "What does that difference suggest to your curious mind?",
    "What other distinctions do you see in this jester's game?",
    "What do you suppose that disparity means in our wild world?",
    "Could there be some connection, do you suppose? Let's find out!",
    "How does that twist the narrative? The plot thickens!"
    ]]
    ]]
    ];
    
  
  // regexp/replacement pairs to be performed as final cleanings
  // here: cleanings for multiple bots talking to each other
  var elizaPostTransforms = [
    / old old/g, " old",
    /\bthey were( not)? me\b/g, "it was$1 me",
    /\bthey are( not)? me\b/g, "it is$1 me",
    /Are they( always)? me\b/, "it is$1 me",
    /\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
    /\bI to have (\w+)/, "I have $1",
    /Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
  ];
  
  // eof
