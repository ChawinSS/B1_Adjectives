const quizDataFromFile = [
  {
    "question": "abhängig",
    "correct": "dependent on",
    "choices": [
      "due",
      "dependent on",
      "public",
      "realistic"
    ]
  },
  {
    "question": "ähnlich",
    "correct": "similar",
    "choices": [
      "durable, non-perishable",
      "due",
      "decent, respectable, tidy, neat",
      "similar"
    ]
  },
  {
    "question": "ängstlich",
    "correct": "nervous, worried, timid",
    "choices": [
      "nervous, worried, timid",
      "hasty, hurry",
      "unusual",
      "quiet"
    ]
  },
  {
    "question": "ärgerlich",
    "correct": "annoying",
    "choices": [
      "annoying",
      "wonderful, marvellous",
      "grateful, thankful",
      "physical"
    ]
  },
  {
    "question": "ausländisch",
    "correct": "foreign",
    "choices": [
      "foreign",
      "written",
      "boring",
      "probably"
    ]
  },
  {
    "question": "ausschließlich",
    "correct": "exclusive",
    "choices": [
      "right",
      "suspicious",
      "brave",
      "exclusive"
    ]
  },
  {
    "question": "äußerlich",
    "correct": "external",
    "choices": [
      "secretly",
      "wonderful, marvellous",
      "external",
      "dirty"
    ]
  },
  {
    "question": "automatisch",
    "correct": "automatic",
    "choices": [
      "expected",
      "several",
      "automatic",
      "carefully"
    ]
  },
  {
    "question": "bar",
    "correct": "cash",
    "choices": [
      "suddenly",
      "valid",
      "cash",
      "employed"
    ]
  },
  {
    "question": "beruflich",
    "correct": "professional/ vocational",
    "choices": [
      "hasty, hurry",
      "dangerous",
      "professional/ vocational",
      "physical"
    ]
  },
  {
    "question": "berufstätig",
    "correct": "employed",
    "choices": [
      "employed",
      "female",
      "curious",
      "cheap"
    ]
  },
  {
    "question": "billig",
    "correct": "cheap",
    "choices": [
      "quiet",
      "responsible",
      "colourful",
      "cheap"
    ]
  },
  {
    "question": "dankbar",
    "correct": "grateful, thankful",
    "choices": [
      "grateful, thankful",
      "democratic",
      "frequent, frequently",
      "carefully"
    ]
  },
  {
    "question": "demokratisch",
    "correct": "democratic",
    "choices": [
      "terrible",
      "democratic",
      "hasty, hurry",
      "windy"
    ]
  },
  {
    "question": "deutlich",
    "correct": "clearly",
    "choices": [
      "unusual",
      "stately",
      "clearly",
      "low"
    ]
  },
  {
    "question": "durchschnittlich",
    "correct": "on average",
    "choices": [
      "critical",
      "on average",
      "democratic",
      "political"
    ]
  },
  {
    "question": "eigentlich",
    "correct": "actually, real, actual",
    "choices": [
      "sporting, sporty, athletic",
      "optimistic",
      "actually, real, actual",
      "public"
    ]
  },
  {
    "question": "eilig",
    "correct": "hasty, hurry",
    "choices": [
      "hasty, hurry",
      "nervous, worried, timid",
      "brave",
      "personal"
    ]
  },
  {
    "question": "eindeutig",
    "correct": "clearly",
    "choices": [
      "clearly",
      "usual, common",
      "boring",
      "oral"
    ]
  },
  {
    "question": "einig",
    "correct": "several",
    "choices": [
      "several",
      "nervous, worried, timid",
      "competent, responsibe",
      "wonderful, marvellous"
    ]
  },
  {
    "question": "einschließlich",
    "correct": "inclusive",
    "choices": [
      "inclusive",
      "in future",
      "actually, real, actual",
      "only, unique"
    ]
  },
  {
    "question": "einzig",
    "correct": "only, unique",
    "choices": [
      "cash",
      "only, unique",
      "odd",
      "grateful, thankful"
    ]
  },
  {
    "question": "elektrisch",
    "correct": "electrical",
    "choices": [
      "electrical",
      "single",
      "likeable",
      "windy"
    ]
  },
  {
    "question": "elektronisch",
    "correct": "electronic",
    "choices": [
      "stately",
      "unfriendly",
      "inclusive",
      "electronic"
    ]
  },
  {
    "question": "endgültig",
    "correct": "final, definite",
    "choices": [
      "quiet",
      "final, definite",
      "strange, funny, odd",
      "really"
    ]
  },
  {
    "question": "endlich",
    "correct": "finally",
    "choices": [
      "due",
      "finally",
      "polite",
      "female"
    ]
  },
  {
    "question": "erforderlich",
    "correct": "required",
    "choices": [
      "naturally",
      "required",
      "secretly",
      "electronic"
    ]
  },
  {
    "question": "ewig",
    "correct": "eternally",
    "choices": [
      "eternally",
      "foggy",
      "hopefully",
      "terrible, dreadful"
    ]
  },
  {
    "question": "fällig",
    "correct": "due",
    "choices": [
      "eternally",
      "due",
      "really",
      "northern"
    ]
  },
  {
    "question": "farbig",
    "correct": "colourful",
    "choices": [
      "in future",
      "hasty, hurry",
      "colourful",
      "single"
    ]
  },
  {
    "question": "fertig",
    "correct": "ready",
    "choices": [
      "useful",
      "ready",
      "left over, remaining",
      "foreign"
    ]
  },
  {
    "question": "fleißig",
    "correct": "diligent, industrious",
    "choices": [
      "diligent, industrious",
      "employed",
      "public",
      "sporting, sporty, athletic"
    ]
  },
  {
    "question": "frei",
    "correct": "free",
    "choices": [
      "free",
      "eternally",
      "on time",
      "additional"
    ]
  },
  {
    "question": "freiwillig",
    "correct": "voluntary",
    "choices": [
      "ready",
      "frequent, frequently",
      "suddenly",
      "voluntary"
    ]
  },
  {
    "question": "freundlich",
    "correct": "friendly",
    "choices": [
      "friendly",
      "cosy",
      "human, humane",
      "good value"
    ]
  },
  {
    "question": "frisch",
    "correct": "fresh",
    "choices": [
      "electronic",
      "due",
      "inclusive",
      "fresh"
    ]
  },
  {
    "question": "furchtbar",
    "correct": "terrible",
    "choices": [
      "several",
      "finally",
      "terrible",
      "colourful"
    ]
  },
  {
    "question": "gefährlich",
    "correct": "dangerous",
    "choices": [
      "single",
      "terrible",
      "friendly",
      "dangerous"
    ]
  },
  {
    "question": "gemütlich",
    "correct": "cosy",
    "choices": [
      "exclusive",
      "happy, happily",
      "dirty",
      "cosy"
    ]
  },
  {
    "question": "gewöhnlich",
    "correct": "usual, ordinary, common",
    "choices": [
      "self employed, independent",
      "voluntary",
      "usual, ordinary, common",
      "necessary"
    ]
  },
  {
    "question": "giftig",
    "correct": "toxic",
    "choices": [
      "decent, respectable, tidy, neat",
      "diligent, industrious",
      "toxic",
      "expected"
    ]
  },
  {
    "question": "gleichzeitig",
    "correct": "at the same time",
    "choices": [
      "foreign",
      "durable, non-perishable",
      "public",
      "at the same time"
    ]
  },
  {
    "question": "glücklich",
    "correct": "happy, happily",
    "choices": [
      "happy, happily",
      "in future",
      "on average",
      "automatic"
    ]
  },
  {
    "question": "gründlich",
    "correct": "thorough",
    "choices": [
      "on average",
      "likeable",
      "municipal",
      "thorough"
    ]
  },
  {
    "question": "gültig",
    "correct": "valid",
    "choices": [
      "temporary, provisional",
      "valid",
      "usual, common",
      "dependent on"
    ]
  },
  {
    "question": "günstig",
    "correct": "good value",
    "choices": [
      "fresh",
      "happy, happily",
      "physical",
      "good value"
    ]
  },
  {
    "question": "haltbar",
    "correct": "durable, non-perishable",
    "choices": [
      "electrical",
      "really",
      "political",
      "durable, non-perishable"
    ]
  },
  {
    "question": "hässlich",
    "correct": "horrible",
    "choices": [
      "horrible",
      "odd",
      "unfriendly",
      "curious"
    ]
  },
  {
    "question": "häufig",
    "correct": "frequent, frequently",
    "choices": [
      "probably",
      "fairly, rather",
      "frequent, frequently",
      "competent, responsibe"
    ]
  },
  {
    "question": "heimlich",
    "correct": "secretly",
    "choices": [
      "naturally",
      "insane, mad, incredibly",
      "secretly",
      "responsible"
    ]
  },
  {
    "question": "herzlich",
    "correct": "cordial",
    "choices": [
      "hungry",
      "guilty",
      "cordial",
      "ready"
    ]
  },
  {
    "question": "historisch",
    "correct": "historical",
    "choices": [
      "final, definite",
      "on average",
      "historical",
      "secretly"
    ]
  },
  {
    "question": "hoffentlich",
    "correct": "hopefully",
    "choices": [
      "hopefully",
      "dependent on",
      "final, definite",
      "female"
    ]
  },
  {
    "question": "höflich",
    "correct": "polite",
    "choices": [
      "really",
      "polite",
      "valid",
      "stately"
    ]
  },
  {
    "question": "hungrig",
    "correct": "hungry",
    "choices": [
      "frequent, frequently",
      "free",
      "recently, the other day",
      "hungry"
    ]
  },
  {
    "question": "komisch",
    "correct": "strange, funny, odd",
    "choices": [
      "locally",
      "strange, funny, odd",
      "public",
      "usual, ordinary, common"
    ]
  },
  {
    "question": "körperlich",
    "correct": "physical",
    "choices": [
      "valid",
      "physical",
      "written",
      "good value"
    ]
  },
  {
    "question": "kräftig",
    "correct": "strong",
    "choices": [
      "inclusive",
      "free",
      "foreign",
      "strong"
    ]
  },
  {
    "question": "kritisch",
    "correct": "critical",
    "choices": [
      "terrible",
      "dirty",
      "critical",
      "finally"
    ]
  },
  {
    "question": "künstlich",
    "correct": "artificial",
    "choices": [
      "clearly",
      "valid",
      "thorough",
      "artificial"
    ]
  },
  {
    "question": "langweilig",
    "correct": "boring",
    "choices": [
      "good value",
      "regularly",
      "boring",
      "necessary"
    ]
  },
  {
    "question": "ledig",
    "correct": "single",
    "choices": [
      "recently, the other day",
      "single",
      "political",
      "human, humane"
    ]
  },
  {
    "question": "lustig",
    "correct": "funny",
    "choices": [
      "funny",
      "required",
      "oral",
      "suddenly"
    ]
  },
  {
    "question": "männlich",
    "correct": "male",
    "choices": [
      "hungry",
      "right",
      "additional",
      "male"
    ]
  },
  {
    "question": "menschlich",
    "correct": "human, humane",
    "choices": [
      "human, humane",
      "technical",
      "thorough",
      "personal"
    ]
  },
  {
    "question": "merkwürdig",
    "correct": "odd",
    "choices": [
      "odd",
      "frequent, frequently",
      "low",
      "foreign"
    ]
  },
  {
    "question": "möglich",
    "correct": "possible",
    "choices": [
      "written",
      "artificial",
      "free",
      "possible"
    ]
  },
  {
    "question": "mündlich",
    "correct": "oral",
    "choices": [
      "oral",
      "toxic",
      "carefully",
      "foggy"
    ]
  },
  {
    "question": "mutig",
    "correct": "brave",
    "choices": [
      "sensible, reasonable",
      "brave",
      "on time, punctual",
      "deathly"
    ]
  },
  {
    "question": "nämlich",
    "correct": "namely",
    "choices": [
      "namely",
      "colourful",
      "municipal",
      "written"
    ]
  },
  {
    "question": "natürlich",
    "correct": "naturally",
    "choices": [
      "brave",
      "hasty, hurry",
      "required",
      "naturally"
    ]
  },
  {
    "question": "neblig",
    "correct": "foggy",
    "choices": [
      "foggy",
      "written",
      "due",
      "west"
    ]
  },
  {
    "question": "neugierig",
    "correct": "curious",
    "choices": [
      "possible",
      "required",
      "curious",
      "secretly"
    ]
  },
  {
    "question": "neulich",
    "correct": "recently, the other day",
    "choices": [
      "recently, the other day",
      "several",
      "written",
      "brave"
    ]
  },
  {
    "question": "niedrig",
    "correct": "low",
    "choices": [
      "insane, mad, incredibly",
      "self employed, independent",
      "clearly",
      "low"
    ]
  },
  {
    "question": "nördlich",
    "correct": "northern",
    "choices": [
      "boring",
      "northern",
      "secretly",
      "strong"
    ]
  },
  {
    "question": "notwendig",
    "correct": "important",
    "choices": [
      "typical",
      "ready",
      "inclusive",
      "important"
    ]
  },
  {
    "question": "nötig",
    "correct": "necessary",
    "choices": [
      "sad",
      "necessary",
      "at the same time",
      "external"
    ]
  },
  {
    "question": "nützlich",
    "correct": "useful",
    "choices": [
      "useful",
      "reliable",
      "naturally",
      "at the same time"
    ]
  },
  {
    "question": "öffentlich",
    "correct": "public",
    "choices": [
      "deathly",
      "final, definite",
      "hungry",
      "public"
    ]
  },
  {
    "question": "optimistisch",
    "correct": "optimistic",
    "choices": [
      "additional",
      "quiet",
      "at the same time",
      "optimistic"
    ]
  },
  {
    "question": "ordentlich",
    "correct": "decent, respectable, tidy, neat",
    "choices": [
      "understandable",
      "terrible",
      "decent, respectable, tidy, neat",
      "cosy"
    ]
  },
  {
    "question": "örtlich",
    "correct": "locally",
    "choices": [
      "municipal",
      "responsible",
      "locally",
      "left over, remaining"
    ]
  },
  {
    "question": "persönlich",
    "correct": "personal",
    "choices": [
      "usual, common",
      "hasty, hurry",
      "foggy",
      "personal"
    ]
  },
  {
    "question": "plötzlich",
    "correct": "suddenly",
    "choices": [
      "actually, real, actual",
      "cash",
      "cheap",
      "suddenly"
    ]
  },
  {
    "question": "politisch",
    "correct": "political",
    "choices": [
      "political",
      "finally",
      "brave",
      "personal"
    ]
  },
  {
    "question": "praktisch",
    "correct": "practical",
    "choices": [
      "guilty",
      "practical",
      "friendly",
      "written"
    ]
  },
  {
    "question": "pünktlich",
    "correct": "on time, punctual",
    "choices": [
      "frequent, frequently",
      "on time, punctual",
      "necessary",
      "namely"
    ]
  },
  {
    "question": "realistisch",
    "correct": "realistic",
    "choices": [
      "deathly",
      "realistic",
      "funny",
      "actually, real, actual"
    ]
  },
  {
    "question": "rechtlich",
    "correct": "legally",
    "choices": [
      "legally",
      "locally",
      "due",
      "useful"
    ]
  },
  {
    "question": "rechtzeitig",
    "correct": "on time",
    "choices": [
      "technical",
      "unbelievable",
      "electrical",
      "on time"
    ]
  },
  {
    "question": "regelmäßig",
    "correct": "regularly",
    "choices": [
      "west",
      "on time, punctual",
      "external",
      "regularly"
    ]
  },
  {
    "question": "richtig",
    "correct": "right",
    "choices": [
      "right",
      "different",
      "hopefully",
      "political"
    ]
  },
  {
    "question": "riesig",
    "correct": "enormous",
    "choices": [
      "wonderful, marvellous",
      "all",
      "enormous",
      "in future"
    ]
  },
  {
    "question": "ruhig",
    "correct": "quiet",
    "choices": [
      "quiet",
      "democratic",
      "diligent, industrious",
      "deathly"
    ]
  },
  {
    "question": "sämtlich",
    "correct": "all",
    "choices": [
      "odd",
      "reliable",
      "public",
      "all"
    ]
  },
  {
    "question": "schließlich",
    "correct": "finally",
    "choices": [
      "finally",
      "self employed, independent",
      "municipal",
      "artificial"
    ]
  },
  {
    "question": "schmutzig",
    "correct": "dirty",
    "choices": [
      "reliable",
      "colourful",
      "dirty",
      "valid"
    ]
  },
  {
    "question": "schrecklich",
    "correct": "terrible, dreadful",
    "choices": [
      "namely",
      "terrible, dreadful",
      "toxic",
      "enormous"
    ]
  },
  {
    "question": "schriftlich",
    "correct": "written",
    "choices": [
      "typical",
      "written",
      "valid",
      "quiet"
    ]
  },
  {
    "question": "schuldig",
    "correct": "guilty",
    "choices": [
      "guilty",
      "unbelievable",
      "different",
      "practical"
    ]
  },
  {
    "question": "schwierig",
    "correct": "difficult",
    "choices": [
      "friendly",
      "difficult",
      "boring",
      "technical"
    ]
  },
  {
    "question": "selbstständig",
    "correct": "self employed, independent",
    "choices": [
      "expected",
      "self employed, independent",
      "inclusive",
      "deathly"
    ]
  },
  {
    "question": "selbstverständlich",
    "correct": "of course, obviously",
    "choices": [
      "of course, obviously",
      "additional",
      "friendly",
      "eternally"
    ]
  },
  {
    "question": "sichtbar",
    "correct": "visible",
    "choices": [
      "insane, mad, incredibly",
      "toxic",
      "grateful, thankful",
      "visible"
    ]
  },
  {
    "question": "sonstig",
    "correct": "other",
    "choices": [
      "other",
      "northern",
      "additional",
      "low"
    ]
  },
  {
    "question": "sportlich",
    "correct": "sporting, sporty, athletic",
    "choices": [
      "unfriendly",
      "hungry",
      "sporting, sporty, athletic",
      "dirty"
    ]
  },
  {
    "question": "staatlich",
    "correct": "stately",
    "choices": [
      "stately",
      "human, humane",
      "cordial",
      "foreign"
    ]
  },
  {
    "question": "städtisch",
    "correct": "municipal",
    "choices": [
      "clearly",
      "personal",
      "artificial",
      "municipal"
    ]
  },
  {
    "question": "ständig",
    "correct": "permanent, constant",
    "choices": [
      "legally",
      "permanent, constant",
      "human, humane",
      "at the same time"
    ]
  },
  {
    "question": "südlich",
    "correct": "southern, south",
    "choices": [
      "stately",
      "enormous",
      "southern, south",
      "theoretical"
    ]
  },
  {
    "question": "sympathisch",
    "correct": "likeable",
    "choices": [
      "on average",
      "likeable",
      "hopefully",
      "foreign"
    ]
  },
  {
    "question": "technisch",
    "correct": "technical",
    "choices": [
      "technical",
      "funny",
      "useful",
      "probably"
    ]
  },
  {
    "question": "theoretisch",
    "correct": "theoretical",
    "choices": [
      "permanent, constant",
      "self employed, independent",
      "practical",
      "theoretical"
    ]
  },
  {
    "question": "tödlich",
    "correct": "deathly",
    "choices": [
      "really",
      "deathly",
      "southern, south",
      "human, humane"
    ]
  },
  {
    "question": "traurig",
    "correct": "sad",
    "choices": [
      "southern, south",
      "enormous",
      "inclusive",
      "sad"
    ]
  },
  {
    "question": "typisch",
    "correct": "typical",
    "choices": [
      "physical",
      "typical",
      "sensible, reasonable",
      "insane, mad, incredibly"
    ]
  },
  {
    "question": "üblich",
    "correct": "usual, common",
    "choices": [
      "artificial",
      "free",
      "usual, common",
      "grateful, thankful"
    ]
  },
  {
    "question": "übrig",
    "correct": "left over, remaining",
    "choices": [
      "wonderful, marvellous",
      "funny",
      "strange, funny, odd",
      "left over, remaining"
    ]
  },
  {
    "question": "unfreundlich",
    "correct": "unfriendly",
    "choices": [
      "unfriendly",
      "funny",
      "similar",
      "final, definite"
    ]
  },
  {
    "question": "ungewöhnlich",
    "correct": "unusual",
    "choices": [
      "unusual",
      "on time, punctual",
      "physical",
      "naturally"
    ]
  },
  {
    "question": "unglaublich",
    "correct": "unbelievable",
    "choices": [
      "ready",
      "unbelievable",
      "regularly",
      "sad"
    ]
  },
  {
    "question": "unheimlich",
    "correct": "weird, uncanny",
    "choices": [
      "artificial",
      "other",
      "grateful, thankful",
      "weird, uncanny"
    ]
  },
  {
    "question": "unterschiedlich",
    "correct": "different",
    "choices": [
      "different",
      "due",
      "locally",
      "enormous"
    ]
  },
  {
    "question": "ursprünglich",
    "correct": "original, originally",
    "choices": [
      "locally",
      "on time",
      "hopefully",
      "original, originally"
    ]
  },
  {
    "question": "vegetarisch",
    "correct": "vegetarian",
    "choices": [
      "strange, funny, odd",
      "diligent, industrious",
      "vegetarian",
      "boring"
    ]
  },
  {
    "question": "verantwortlich",
    "correct": "responsible",
    "choices": [
      "good value",
      "unbelievable",
      "on time, punctual",
      "responsible"
    ]
  },
  {
    "question": "verdächtig",
    "correct": "suspicious",
    "choices": [
      "typical",
      "exclusive",
      "odd",
      "suspicious"
    ]
  },
  {
    "question": "vernünftig",
    "correct": "sensible, reasonable",
    "choices": [
      "sensible, reasonable",
      "curious",
      "permanent, constant",
      "at the same time"
    ]
  },
  {
    "question": "verständlich",
    "correct": "understandable",
    "choices": [
      "understandable",
      "artificial",
      "carefully",
      "critical"
    ]
  },
  {
    "question": "voraussichtlich",
    "correct": "expected",
    "choices": [
      "expected",
      "artificial",
      "cash",
      "namely"
    ]
  },
  {
    "question": "vorläufig",
    "correct": "temporary, provisional",
    "choices": [
      "ready",
      "external",
      "secretly",
      "temporary, provisional"
    ]
  },
  {
    "question": "vorsichtig",
    "correct": "carefully",
    "choices": [
      "left over, remaining",
      "hopefully",
      "male",
      "carefully"
    ]
  },
  {
    "question": "wahnsinnig",
    "correct": "insane, mad, incredibly",
    "choices": [
      "boring",
      "of course, obviously",
      "public",
      "insane, mad, incredibly"
    ]
  },
  {
    "question": "wahrscheinlich",
    "correct": "probably",
    "choices": [
      "female",
      "probably",
      "insane, mad, incredibly",
      "theoretical"
    ]
  },
  {
    "question": "weiblich",
    "correct": "female",
    "choices": [
      "female",
      "legally",
      "foggy",
      "eternally"
    ]
  },
  {
    "question": "westlich",
    "correct": "west",
    "choices": [
      "durable, non-perishable",
      "difficult",
      "other",
      "west"
    ]
  },
  {
    "question": "wichtig",
    "correct": "important",
    "choices": [
      "eternally",
      "in future",
      "important",
      "nervous, worried, timid"
    ]
  },
  {
    "question": "windig",
    "correct": "windy",
    "choices": [
      "southern, south",
      "windy",
      "clearly",
      "permanent, constant"
    ]
  },
  {
    "question": "wirklich",
    "correct": "really",
    "choices": [
      "usual, ordinary, common",
      "cordial",
      "really",
      "sad"
    ]
  },
  {
    "question": "wunderbar",
    "correct": "wonderful, marvellous",
    "choices": [
      "municipal",
      "fresh",
      "suspicious",
      "wonderful, marvellous"
    ]
  },
  {
    "question": "ziemlich",
    "correct": "fairly, rather",
    "choices": [
      "inclusive",
      "fairly, rather",
      "required",
      "recently, the other day"
    ]
  },
  {
    "question": "zukünftig",
    "correct": "in future",
    "choices": [
      "in future",
      "personal",
      "other",
      "possible"
    ]
  },
  {
    "question": "zusätzlich",
    "correct": "additional",
    "choices": [
      "additional",
      "finally",
      "understandable",
      "suspicious"
    ]
  },
  {
    "question": "zuständig",
    "correct": "competent, responsibe",
    "choices": [
      "suspicious",
      "competent, responsibe",
      "automatic",
      "probably"
    ]
  },
  {
    "question": "zuverlässig",
    "correct": "reliable",
    "choices": [
      "diligent, industrious",
      "terrible, dreadful",
      "reliable",
      "annoying"
    ]
  }
];