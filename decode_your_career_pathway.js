// ================================================================
//  CAREER PATHWAY EXPLORER
// ================================================================

// ---------------------------------------------------------------
//  PART 1 — CAREER LIST
//  Each career object has:
//    name     : job title
//    field    : industry (e.g. "Technology")
//    salary   : pay range string
//    outlook  : one-line job market note
//    subjects : high school subjects to focus on
//    degree   : university degree to aim for
//    minor    : extra specialisations to consider
// ---------------------------------------------------------------
var CAREERS = [

  // --- Medicine ---
  { name:"Physician / Specialist",          field:"Medicine",
    salary:"CAD 140k+",       outlook:"Highest pay; long training but very strong demand",
    subjects:["Biology","Chemistry","Physics","Advanced Math"],
    degree:"MBBS / MD",       minor:["Biochemistry","Public Health"] },

  { name:"Nurse Practitioner",              field:"Medicine",
    salary:"CAD 100k–140k",   outlook:"High demand, strong pay, broad mobility",
    subjects:["Biology","Chemistry","Math","English"],
    degree:"Nursing",         minor:["Health Informatics","Leadership"] },

  { name:"Pharmacist",                      field:"Medicine",
    salary:"CAD 100k–140k",   outlook:"Stable, regulated profession",
    subjects:["Biology","Chemistry","Math"],
    degree:"Pharmacy",        minor:["Business","Data Analytics"] },

  { name:"Dentist",                         field:"Medicine",
    salary:"CAD 140k+",       outlook:"Very high pay, private-practice potential",
    subjects:["Biology","Chemistry","Physics","Math"],
    degree:"Dentistry",       minor:["Business","Entrepreneurship"] },

  { name:"Psychologist",                    field:"Medicine",
    salary:"CAD 70k–100k",    outlook:"Demand rising, especially in mental health",
    subjects:["Biology","Psychology","English","Math"],
    degree:"Psychology",      minor:["Statistics","Neuroscience"] },

  // --- Technology ---
  { name:"Software Engineer",               field:"Technology",
    salary:"CAD 100k–140k",   outlook:"High pay, scalable, strong global demand",
    subjects:["Math","Computer Science","Physics"],
    degree:"Computer Science",minor:["AI","Cybersecurity","Data Science"] },

  { name:"AI / Machine Learning Engineer",  field:"Technology",
    salary:"CAD 100k–140k",   outlook:"Fastest-growing specialisation, premium pay",
    subjects:["Math","Computer Science","Physics"],
    degree:"CS / Data Science",minor:["Applied Math","AI"] },

  { name:"Cybersecurity Analyst",           field:"Technology",
    salary:"CAD 100k–140k",   outlook:"Security demand strong across all sectors",
    subjects:["Math","Computer Science","Business"],
    degree:"Cybersecurity / CS",minor:["Risk Management","Forensics"] },

  { name:"Data Scientist",                  field:"Technology",
    salary:"CAD 100k–140k",   outlook:"Strong demand across every industry",
    subjects:["Math","Statistics","Computer Science"],
    degree:"Data Science / Statistics",minor:["Business Analytics"] },

  { name:"UX / UI Designer",                field:"Technology",
    salary:"CAD 70k–100k",    outlook:"Design + tech, growing in product teams",
    subjects:["Art","Computer Science","Psychology"],
    degree:"Design / HCI",    minor:["Computer Science","HCI"] },

  // --- Business ---
  { name:"Financial Manager",               field:"Business",
    salary:"CAD 100k–140k",   outlook:"High pay, leadership, strong corporate demand",
    subjects:["Math","Economics","Accounting"],
    degree:"Finance / Business",minor:["Data Analytics"] },

  { name:"Management Consultant",           field:"Business",
    salary:"CAD 100k–140k",   outlook:"High pay, travel, broad strategy work",
    subjects:["Math","Economics","English","Business"],
    degree:"Business / Economics",minor:["Data Analytics","Psychology"] },

  { name:"Accountant / Auditor",            field:"Business",
    salary:"CAD 70k–100k",    outlook:"Reliable demand, stable career path",
    subjects:["Math","Accounting","Business"],
    degree:"Accounting",      minor:["Information Systems"] },

  { name:"Marketing Manager",               field:"Business",
    salary:"CAD 70k–100k",    outlook:"Strong for growth-oriented companies",
    subjects:["Business","English","Math","Media"],
    degree:"Marketing / Commerce",minor:["Data Analytics","Design"] },

  // --- Engineering ---
  { name:"Electrical Engineer",             field:"Engineering",
    salary:"CAD 100k–140k",   outlook:"Strong pay, infrastructure and energy demand",
    subjects:["Physics","Math","Computer Science"],
    degree:"Electrical Engineering",minor:["Power Systems","AI"] },

  { name:"Mechanical Engineer",             field:"Engineering",
    salary:"CAD 70k–100k",    outlook:"Versatile, manufacturing and automation",
    subjects:["Physics","Math","Design"],
    degree:"Mechanical Engineering",minor:["Mechatronics","Data"] },

  { name:"Civil Engineer",                  field:"Engineering",
    salary:"CAD 70k–100k",    outlook:"Infrastructure and urban growth projects",
    subjects:["Math","Physics","Geography"],
    degree:"Civil Engineering",minor:["Project Management"] },

  { name:"Biomedical Engineer",             field:"Engineering",
    salary:"CAD 70k–100k",    outlook:"Intersects healthcare and technology",
    subjects:["Biology","Physics","Math","Chemistry"],
    degree:"Biomedical Engineering",minor:["Data Science","Biology"] },

  // --- Other ---
  { name:"Lawyer",                          field:"Law / Public",
    salary:"CAD 100k–140k",   outlook:"High earning potential, broad specialisation",
    subjects:["English","Debate","History","Economics"],
    degree:"Law (JD)",        minor:["Business","Tech","Policy"] },

  { name:"Teacher",                         field:"Education",
    salary:"CAD 70k–100k",    outlook:"Stable, meaningful, flexible specialisations",
    subjects:["English","Math","Sciences","Social Studies"],
    degree:"Education",       minor:["Special Education","STEM"] },

  { name:"Graphic Designer",                field:"Creative",
    salary:"CAD 45k–70k",     outlook:"Portfolio-driven creative tech role",
    subjects:["Art","Computer Science","English","Media"],
    degree:"Graphic Design",  minor:["UX"] },

  { name:"Environmental Scientist",         field:"Agriculture / Environment",
    salary:"CAD 70k–100k",    outlook:"Climate and sustainability research growing",
    subjects:["Biology","Chemistry","Geography","Math"],
    degree:"Environmental Science",minor:["GIS"] },

  { name:"Game Developer",                  field:"Creative",
    salary:"CAD 70k–100k",    outlook:"High skill, portfolio-driven, creative-tech blend",
    subjects:["Computer Science","Art","Math"],
    degree:"CS / Game Development",minor:["Animation","UX"] },

  { name:"Statistician",                    field:"Public Service",
    salary:"CAD 100k–140k",   outlook:"Quantitative public and private sector work",
    subjects:["Math","Statistics","Computer Science"],
    degree:"Statistics / Mathematics",minor:["Economics"] },
];

// ---------------------------------------------------------------
//  PART 2 — TOP UNIVERSITIES
//  A lookup table: subject area → top 5 universities.
//  Used on the results screen to show recommended schools.
// ---------------------------------------------------------------
var UNI_DATA = {
  "Medicine":        ["Harvard University (USA)","University of Oxford (UK)","Stanford University (USA)","Johns Hopkins University (USA)","University of Cambridge (UK)"],
  "Nursing":         ["King's College London (UK)","University of Pennsylvania (USA)","Johns Hopkins University (USA)","University of Toronto (Canada)","Chinese University of Hong Kong"],
  "Pharmacy":        ["Harvard University (USA)","University of Oxford (UK)","UCL (UK)","Monash University (Australia)","Johns Hopkins University (USA)"],
  "Dentistry":       ["University of Michigan (USA)","University of Hong Kong","ACTA Amsterdam (Netherlands)","King's College London (UK)","Tokyo Medical & Dental University"],
  "Psychology":      ["Harvard University (USA)","University of Oxford (UK)","Stanford University (USA)","University of Cambridge (UK)","Yale University (USA)"],
  "Computer Science":["MIT (USA)","Stanford University (USA)","Carnegie Mellon University (USA)","National University of Singapore","University of Oxford (UK)"],
  "Data Science":    ["MIT (USA)","Carnegie Mellon University (USA)","University of Oxford (UK)","UC Berkeley (USA)","Nanyang Technological University (Singapore)"],
  "Business":        ["Harvard University (USA)","MIT (USA)","Stanford University (USA)","INSEAD (France)","University of Cambridge (UK)"],
  "Accounting":      ["Harvard University (USA)","MIT (USA)","Stanford University (USA)","University of Oxford (UK)","University of Chicago (USA)"],
  "Law":             ["Harvard University (USA)","University of Oxford (UK)","University of Cambridge (UK)","Yale University (USA)","Stanford University (USA)"],
  "Engineering":     ["MIT (USA)","Stanford University (USA)","University of Cambridge (UK)","Nanyang Technological University (Singapore)","ETH Zurich (Switzerland)"],
  "Education":       ["UCL Institute of Education (UK)","Harvard University (USA)","University of Hong Kong","Stanford University (USA)","University of Cambridge (UK)"],
  "Environment":     ["Harvard University (USA)","Wageningen University (Netherlands)","University of Oxford (UK)","Stanford University (USA)","Tsinghua University (China)"],
};

// Maps each career field to a UNI_DATA key
var FIELD_TO_UNI = {
  "Medicine":                   "Medicine",
  "Technology":                 "Computer Science",
  "Business":                   "Business",
  "Engineering":                "Engineering",
  "Law / Public":               "Law",
  "Education":                  "Education",
  "Creative":                   "Computer Science",
  "Agriculture / Environment":  "Environment",
  "Public Service":             "Data Science",
};

// ---------------------------------------------------------------
//  PART 3 — QUIZ QUESTIONS
//  5 questions. Each option has a short "value" code.
//  These codes are used in the SCORING table to give points.
// ---------------------------------------------------------------
var QUESTIONS = [
  {
    text:  "What are your strongest subjects?",
    hint:  "Pick all that you enjoy",
    multi: true,           // true = user can pick more than one
    options: [
      { label:"Sciences",         value:"science"    },
      { label:"Mathematics",      value:"math"       },
      { label:"Computer Science", value:"cs"         },
      { label:"Humanities",       value:"humanities" },
      { label:"Arts & Design",    value:"arts"       },
      { label:"Commerce",         value:"business"   },
    ]
  },
  {
    text:  "What type of work excites you most?",
    hint:  "Imagine your ideal working day",
    multi: false,
    options: [
      { label:"Helping People",      value:"helping"  },
      { label:"Building Technology", value:"tech"     },
      { label:"Creating Things",     value:"creating" },
      { label:"Strategy & Business", value:"strategy" },
      { label:"Nature & Outdoors",   value:"nature"   },
      { label:"Justice & Society",   value:"law"      },
    ]
  },
  {
    text:  "What motivates you the most in a career?",
    hint:  "Be honest — what matters most long-term",
    multi: false,
    options: [
      { label:"High Pay",        value:"money"     },
      { label:"Making an Impact",value:"impact"    },
      { label:"Innovation",      value:"growth"    },
      { label:"Stability",       value:"stability" },
    ]
  },
  {
    text:  "How many years will you study after high school?",
    hint:  "Count undergraduate and postgraduate together",
    multi: false,
    options: [
      { label:"2–3 Years",  value:"short"    },
      { label:"3–4 Years",  value:"medium"   },
      { label:"5–6 Years",  value:"long"     },
      { label:"7+ Years",   value:"verylong" },
    ]
  },
  {
    text:  "How would you describe your work personality?",
    hint:  "How do you naturally approach challenges?",
    multi: false,
    options: [
      { label:"People Person",   value:"people"     },
      { label:"Analyst",         value:"analytical" },
      { label:"Leader",          value:"leader"     },
      { label:"Creative",        value:"creative"   },
    ]
  },
];

// ---------------------------------------------------------------
//  PART 4 — SCORING TABLE
//  For each career: 5 sets of weights, one per question.
//  The weight keys match the option "value" codes above.
//  3 = strong match   2 = moderate   1 = weak   (missing = 0)
// ---------------------------------------------------------------
var SCORING = {
  "Physician / Specialist":         [{ science:3, math:2 },          { helping:3 },           { money:2, impact:2 },    { verylong:3, long:1 },   { analytical:2, people:2 }],
  "Nurse Practitioner":             [{ science:2, math:1 },          { helping:3 },           { impact:3, stability:2 },{ long:2, medium:1 },     { people:3 }              ],
  "Pharmacist":                     [{ science:3, math:2 },          { helping:2 },           { stability:3, money:2 }, { verylong:2, long:2 },   { analytical:2 }          ],
  "Dentist":                        [{ science:3, math:2 },          { helping:2, creating:1},{ money:3, stability:2 }, { verylong:3 },           { analytical:2, people:1 }],
  "Psychologist":                   [{ science:2, humanities:2 },    { helping:3 },           { impact:3 },             { long:2, verylong:2 },   { people:3, analytical:2 }],
  "Software Engineer":              [{ cs:3, math:3 },               { tech:3 },              { money:3, growth:3 },    { long:2, medium:2 },     { analytical:3 }          ],
  "AI / Machine Learning Engineer": [{ cs:3, math:3 },               { tech:3 },              { growth:3, money:3 },    { long:2, verylong:2 },   { analytical:3 }          ],
  "Cybersecurity Analyst":          [{ cs:3, math:2 },               { tech:3, strategy:1 },  { stability:2, growth:2 },{ medium:2, long:2 },     { analytical:3 }          ],
  "Data Scientist":                 [{ math:3, cs:2, business:1 },   { tech:2, strategy:2 },  { growth:2, money:2 },    { long:2, medium:2 },     { analytical:3 }          ],
  "UX / UI Designer":               [{ cs:2, arts:3, humanities:1 }, { tech:2, creating:2 },  { growth:2, impact:1 },   { medium:2, long:1 },     { creative:3 }            ],
  "Financial Manager":              [{ math:3, business:3 },         { strategy:3 },          { money:3, stability:2 }, { long:2, medium:2 },     { analytical:3, leader:2 }],
  "Management Consultant":          [{ math:2, business:3 },         { strategy:3 },          { money:3, growth:2 },    { long:2, verylong:1 },   { leader:3, analytical:2 }],
  "Accountant / Auditor":           [{ math:3, business:3 },         { strategy:2 },          { stability:3, money:2 }, { medium:3, long:1 },     { analytical:3 }          ],
  "Marketing Manager":              [{ business:3, humanities:2 },   { strategy:2, tech:1 },  { growth:2, money:2 },    { medium:2, long:1 },     { creative:2, leader:2 }  ],
  "Electrical Engineer":            [{ math:3, science:2, cs:2 },    { creating:3, tech:2 },  { money:2, growth:2 },    { long:3 },               { analytical:3 }          ],
  "Mechanical Engineer":            [{ math:3, science:3 },          { creating:3 },          { stability:2, money:2 }, { long:3 },               { analytical:2 }          ],
  "Civil Engineer":                 [{ math:3, science:2 },          { creating:3, nature:1 },{ impact:2, stability:2 },{ long:3 },               { analytical:2 }          ],
  "Biomedical Engineer":            [{ science:3, math:2, cs:1 },    { creating:2, helping:1},{ impact:2, growth:2 },   { long:3 },               { analytical:3 }          ],
  "Lawyer":                         [{ humanities:3, business:2 },   { law:3, strategy:2 },   { money:3, impact:2 },    { verylong:3, long:1 },   { leader:3, analytical:2 }],
  "Teacher":                        [{ humanities:3, math:1 },       { helping:3 },           { impact:3, stability:3 },{ long:2 },               { people:3, leader:2 }    ],
  "Graphic Designer":               [{ arts:3, cs:1 },               { creating:3 },          { impact:1, growth:1 },   { medium:2, short:1 },    { creative:3 }            ],
  "Environmental Scientist":        [{ science:3, math:2 },          { nature:3 },            { impact:3 },             { long:2, medium:2 },     { analytical:3 }          ],
  "Game Developer":                 [{ cs:3, math:2, arts:2 },       { tech:2, creating:2 },  { growth:2, impact:1 },   { long:2, medium:2 },     { creative:3, analytical:2}],
  "Statistician":                   [{ math:3, cs:2, business:1 },   { strategy:2, tech:2 },  { money:2, stability:2 }, { long:2, verylong:1 },   { analytical:3 }          ],
};

// ---------------------------------------------------------------
//  PART 5 — APP STATE
//  Variables that track where the user is and what they picked.
// ---------------------------------------------------------------
var screen      = "quiz";   // "quiz" | "result" | "detail"
var currentQ    = 0;        // which question (0–4)
var answers     = [];       // one saved answer per question
var picked      = [];       // what user clicked on current question
var topResults  = [];       // scored + sorted careers after quiz
var detailIdx   = 0;        // which career card is open in detail view
var scrollY     = 0;        // scroll offset on result screen
var btns        = [];       // button hit-boxes (set in drawButtons)

// ---------------------------------------------------------------
//  PART 6 — p5.js SETUP  (runs once)
// ---------------------------------------------------------------
function setup() {
  createCanvas(1520, 730);
  textFont("Arial");
  noStroke();
}

// ---------------------------------------------------------------
//  PART 7 — p5.js DRAW LOOP  (runs 60× per second)
// ---------------------------------------------------------------
function draw() {
  background(232, 237, 255);
  if      (screen === "quiz")   drawQuizScreen();
  else if (screen === "result") drawResultScreen();
  else if (screen === "detail") drawDetailScreen();
}

// ===============================================================
//  QUIZ SCREEN
// ===============================================================

function drawQuizScreen() {

  // Header bar
  fill(34, 46, 120);
  rect(0, 0, width, 58);
  fill(255);
  textSize(24);
  textAlign(CENTER, CENTER);
  text("🎓  Career Pathway Explorer - Canada", width / 2, 29);

  // Progress dots — one per question
  for (var i = 0; i < QUESTIONS.length; i++) {
    var cx = width / 2 - QUESTIONS.length * 14 + i * 28;
    if      (i < currentQ)  fill(34, 46, 120);     // completed: dark blue
    else if (i === currentQ) fill(90, 114, 240);    // active: bright blue
    else                     fill(195, 200, 220);   // future: grey
    ellipse(cx, 76, 20, 20);
    fill(255);
    textSize(10);
    textAlign(CENTER, CENTER);
    text(i < currentQ ? "✓" : i + 1, cx, 76);
  }

  // Question card background
  fill(255);
  rect(32, 92, width - 64, 96, 10);

  // Question text
  fill(22, 28, 60);
  textSize(21);
  textAlign(CENTER, TOP);
  text(QUESTIONS[currentQ].text, 55, 105, width - 110);

  // Hint text
  fill(140, 145, 165);
  textSize(18);
  textAlign(CENTER, TOP);
  var hintSuffix = QUESTIONS[currentQ].multi ? " - choose all that apply" : "";
  text(QUESTIONS[currentQ].hint + hintSuffix, width / 2, 162);

  // Answer buttons
  drawOptionButtons();

  // Back button (hidden on question 1)
  if (currentQ > 0) {
    fill(210, 215, 245);
    rect(42, 656, 115, 40, 8);
    fill(34, 46, 120);
    textSize(17);
    textAlign(CENTER, CENTER);
    text("Back", 100, 676);
  }

  // Next / Finish button - grey until an answer is chosen
  var ready = picked.length > 0 || answers[currentQ] !== undefined;
  fill(ready ? color(34, 46, 120) : color(185, 190, 210));
  rect(1350, 656, 115, 40, 8);
  fill(255);
  textSize(17);
  textAlign(CENTER, CENTER);
  text(currentQ === QUESTIONS.length - 1 ? "Finish" : "Next", 1400, 676);
}

// Draws the answer option buttons for the current question.
// 6 options - 3 columns.   4 options - 2 columns.

function drawOptionButtons() {
  btns = [];
  var opts   = QUESTIONS[currentQ].options;
  var cols   = opts.length <= 4 ? 2 : 3;
  var bw     = cols === 2 ? 290 : 300;
  var bh     = 90;
  var gap    = 50;
  var totalW = cols * bw + (cols - 1) * gap;
  var startX = (width - totalW) / 2;
  var startY = 204;

  for (var i = 0; i < opts.length; i++) {
    var col = i % cols;
    var row = floor(i / cols);
    var bx  = startX + col * (bw + gap);
    var by  = startY + row * (bh + gap);

    // An option is "active" (highlighted) if:
    //   - the user clicked it this step, OR
    //   - they came back and this was their saved answer
    var val    = opts[i].value;
    var active = isSelected(val);

    // Save for click detection in mousePressed()
    btns.push({ x:bx, y:by, w:bw, h:bh, value:val });

    // Draw button
    fill(active ? color(34, 46, 120) : 255);
    stroke(active ? color(34, 46, 120) : color(205, 210, 230));
    strokeWeight(1.5);
    rect(bx, by, bw, bh, 10);
    noStroke();

    fill(active ? 255 : 30);
    textAlign(LEFT, CENTER);
    textSize(17);
    text(opts[i].label, bx + 48, by + bh / 2);
  }
}

// Returns true if a value is in the current selection

function isSelected(val) {
  return picked.indexOf(val) !== -1;
}

// ===============================================================
//  RESULT SCREEN:  shows top 5 scored career cards
// ===============================================================

function drawResultScreen() {

  // Header bar
  fill(34, 46, 120);
  rect(0, 0, width, 58);
  fill(255);
  textSize(17);
  textAlign(CENTER, CENTER);
  text("Your Top Career Matches", width / 2, 29);

  // Scrollable card list
  var cardH   = 152;
  var cardGap = 12;
  var startY  = 66;

  for (var i = 0; i < topResults.length; i++) {
    var c     = topResults[i];
    var rank  = i + 1;
    var cy    = startY + i * (cardH + cardGap) - scrollY;

    // Skip cards fully off-screen
    if (cy + cardH < 58 || cy > height - 55) continue;

    var top1 = (rank === 1);

    // Card background
    fill(top1 ? color(34, 46, 120) : 255);
    stroke(top1 ? color(34, 46, 120) : color(205, 210, 230));
    strokeWeight(1);
    rect(36, cy, width - 72, cardH, 12);
    noStroke();

    // Rank badge
    fill(top1 ? color(255, 205, 50) : color(34, 46, 120));
    ellipse(72, cy + 28, 30, 30);
    fill(top1 ? 20 : 255);
    textSize(12);
    textAlign(CENTER, CENTER);
    text("#" + rank, 72, cy + 28);

    // Career name
    fill(top1 ? 255 : 20);
    textSize(15);
    textAlign(LEFT, TOP);
    text(c.name, 98, cy + 13);

    // Cluster badge
    fill(top1 ? color(255,255,255,55) : color(232,237,255));
    rect(98, cy + 36, 130, 22, 6);
    fill(top1 ? 255 : color(34, 46, 120));
    textSize(11);
    textAlign(LEFT, CENTER);
    text(c.field, 107, cy + 47);

    // Salary
    fill(top1 ? color(150, 255, 190) : color(4, 130, 80));
    textSize(14);
    textAlign(RIGHT, TOP);
    text(c.salary, width - 50, cy + 13);

    // Outlook
    fill(top1 ? color(195, 210, 255) : 110);
    textSize(11);
    textAlign(LEFT, TOP);
    text(c.outlook, 98, cy + 65);

    // Subjects to focus on
    fill(top1 ? color(180, 200, 255) : 130);
    textSize(11);
    text(c.subjects.join(", "), 98, cy + 84);

    // Score bar
    var barMax = 340;
    var barW   = map(c.score, 0, 40, 0, barMax);
    fill(top1 ? color(255,255,255,40) : color(220,226,250));
    rect(98, cy + 108, barMax, 11, 5);
    fill(top1 ? color(160,190,255) : color(34,46,120));
    rect(98, cy + 108, barW, 11, 5);
    fill(top1 ? 255 : 100);
    textSize(10);
    textAlign(LEFT, CENTER);
    text("Match: " + c.score + " pts", 450, cy + 113);

    // "View Details" button
    fill(top1 ? color(255,255,255,30) : color(232,237,255));
    rect(98, cy + 125, 130, 22, 6);
    fill(top1 ? 255 : color(34, 46, 120));
    textSize(11);
    textAlign(CENTER, CENTER);
    text("View Details", 163, cy + 136);

    // Save button position for click detection
    btns.push({ type:"detail", idx:i, x:98, y:cy+125, w:130, h:22 });
  }

  // Retake button at bottom
  fill(34, 46, 120);
  rect(width/2 - 95, height - 50, 190, 38, 8);
  fill(255);
  textSize(13);
  textAlign(CENTER, CENTER);
  text("Retake Quiz", width / 2, height - 31);

  // Scroll hint
  fill(160);
  textSize(11);
  textAlign(CENTER, BOTTOM);
  text("scroll up/down to see more", width / 2, height - 4);
}

// ===============================================================
//  DETAIL SCREEN: full info for one selected career
// ===============================================================

function drawDetailScreen() {
  var c = topResults[detailIdx];

  // Header bar
  fill(34, 46, 120);
  rect(0, 0, width, 58);
  fill(255);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Career Detail", width / 2, 29);

  // Card area
  fill(255);
  rect(32, 66, width - 64, height - 120, 12);

  var y = 86;  // current Y position as we draw rows

  // Career name + field
  fill(34, 46, 120);
  textSize(18);
  textAlign(LEFT, TOP);
  text(c.name, 55, y);
  y += 26;

  fill(120, 130, 160);
  textSize(12);
  text(c.field + "  ·  " + c.salary, 55, y);
  y += 22;

  // Divider line
  stroke(220, 225, 245);
  strokeWeight(1);
  line(55, y, width - 55, y);
  noStroke();
  y += 14;

  // Outlook
  fill(80, 90, 130);
  textSize(13);
  textAlign(LEFT, TOP);
  text("Outlook: " + c.outlook, 55, y, width - 110);
  y += 38;

  // Subjects
  drawSection("High School Subjects",  c.subjects, 55, y, color(34,46,120));
  y += 30 + ceil(c.subjects.length / 3) * 28;

  // Degree
  drawSection("Degree to Aim For", [c.degree], 55, y, color(90,50,180));
  y += 56;

  // Minor / Specialisations
  drawSection("Minor / Specialisations", c.minor, 55, y, color(0,120,80));
  y += 30 + ceil(c.minor.length / 3) * 28;

  // Top Universities
  var uniKey  = FIELD_TO_UNI[c.field] || null;
  var uniList = uniKey ? (UNI_DATA[uniKey] || []) : [];

  fill(34, 46, 120);
  textSize(13);
  textAlign(LEFT, TOP);
  text("Top Universities for this field:", 55, y);
  y += 22;

  if (uniList.length === 0) {
    fill(140);
    textSize(12);
    text("See local colleges, polytechnics, or trade schools.", 55, y, width - 110);
  } else {
    for (var u = 0; u < uniList.length; u++) {
      fill(u === 0 ? color(34,46,120) : color(240,243,255));
      rect(55, y, width - 110, 24, 6);
      fill(u === 0 ? 255 : 50);
      textSize(12);
      textAlign(LEFT, CENTER);
      text((u + 1) + ".  " + uniList[u], 66, y + 12);
      y += 28;
    }
  }

  // Back to results button
  fill(34, 46, 120);
  rect(42, height - 54, 160, 38, 8);
  fill(255);
  textSize(13);
  textAlign(CENTER, CENTER);
  text("Back to Results", 122, height - 35);

  // Retake button
  fill(100, 110, 170);
  rect(width - 202, height - 54, 160, 38, 8);
  fill(255);
  text("Retake Quiz", width - 122, height - 35);
}


// Helper: draws a labelled row of tag chips

function drawSection(label, items, x, y, chipColor) {
  fill(50, 58, 100);
  textSize(13);
  textAlign(LEFT, TOP);
  text(label, x, y);
  var cx = x;
  var cy = y + 20;
  for (var i = 0; i < items.length; i++) {
    var tw = textWidth(items[i]) + 18;
    fill(red(chipColor), green(chipColor), blue(chipColor), 22);
    stroke(red(chipColor), green(chipColor), blue(chipColor), 80);
    strokeWeight(1);
    rect(cx, cy, tw, 22, 5);
    noStroke();
    fill(chipColor);
    textSize(11);
    textAlign(LEFT, CENTER);
    text(items[i], cx + 9, cy + 11);
    cx += tw + 6;
    if (cx > width - 100) { cx = x; cy += 28; }  // wrap to next row
  }
}


// ===============================================================
//  SCORING: calculate how well each career matches the answers
// ===============================================================

function calculateResults() {
  var scored = [];

  for (var name in SCORING) {
    var weights = SCORING[name];
    var total   = 0;

    // Question 1 is multi-select: add points for each chosen subject
    var subjectAnswers = answers[0] || [];
    var subWeights     = weights[0] || {};
    for (var s = 0; s < subjectAnswers.length; s++) {
      total += (subWeights[subjectAnswers[s]] || 0) * 2;  // × 2 multiplier
    }

    // Questions 2–4: single-select, each has its own multiplier
    var multipliers = [3, 2, 3, 3];   // Q2, Q3, Q4, Q5
    for (var q = 1; q <= 4; q++) {
      var ans = answers[q];
      if (ans) total += (weights[q][ans] || 0) * multipliers[q - 1];
    }

    // Find the full career object from CAREERS list
    var info = findCareer(name);
    if (info) {
      scored.push({
        name:     name,
        field:  info.field,
        salary:   info.salary,
        outlook:  info.outlook,
        subjects: info.subjects,
        degree:   info.degree,
        minor:    info.minor,
        score:    total
      });
    }
  }

  // Sort by score, keep top 5
  scored.sort(function(a, b) { return b.score - a.score; });
  topResults = scored.slice(0, 5);
  scrollY    = 0;
}


// Helper: find a career in CAREERS by name

function findCareer(name) {
  for (var i = 0; i < CAREERS.length; i++) {
    if (CAREERS[i].name === name) return CAREERS[i];
  }
  return null;
}


// ===============================================================
//  MOUSE CLICK: handles all button presses
// ===============================================================

function mousePressed() {

  // ---- QUIZ screen ----
  if (screen === "quiz") {

    // Check answer option buttons
    for (var i = 0; i < btns.length; i++) {
      var b = btns[i];
      if (mouseX > b.x && mouseX < b.x + b.w &&
          mouseY > b.y && mouseY < b.y + b.h) {
        var val   = b.value;
        var multi = QUESTIONS[currentQ].multi;

        if (multi) {
          // Toggle: if already in picked, remove it; otherwise add
          var idx = picked.indexOf(val);
          if (idx !== -1) picked.splice(idx, 1);
          else            picked.push(val);
        } else {
          picked = [val];  // single-select: replace with just this one
        }
        return;
      }
    }

    // Next / Finish button
    var ready = picked.length > 0 || answers[currentQ] !== undefined;
    if (mouseX > 1350 && mouseX < 1465 && mouseY > 656 && mouseY < 696 && ready) {
      if (picked.length > 0) {
        // Save: multi-select stores array, single-select stores one value
        answers[currentQ] = QUESTIONS[currentQ].multi ? picked.slice() : picked[0];
      }
      if (currentQ < QUESTIONS.length - 1) {
        currentQ++;
        // Restore any previously saved answer for this question
        var saved = answers[currentQ];
        if (saved !== undefined) {
          picked = Array.isArray(saved) ? saved.slice() : [saved];
        } else {
          picked = [];
        }
      } else {
        calculateResults();
        screen = "result";
        btns   = [];
      }
    }

    // Back button
    if (currentQ > 0 && mouseX > 42 && mouseX < 157 && mouseY > 656 && mouseY < 696) {
      currentQ--;
      var savedPrev = answers[currentQ];
      picked = savedPrev !== undefined
        ? (Array.isArray(savedPrev) ? savedPrev.slice() : [savedPrev])
        : [];
    }
  }

  // ---- RESULT screen ----
  else if (screen === "result") {

    // "View Details" buttons on cards
    for (var j = 0; j < btns.length; j++) {
      var b2 = btns[j];
      if (b2.type === "detail" &&
          mouseX > b2.x && mouseX < b2.x + b2.w &&
          mouseY > b2.y && mouseY < b2.y + b2.h) {
        detailIdx = b2.idx;
        screen    = "detail";
        btns      = [];
        return;
      }
    }

    // Retake button
    if (mouseX > width/2 - 95 && mouseX < width/2 + 95 &&
        mouseY > height - 50  && mouseY < height - 12) {
      resetAll();
    }
  }

  // ---- DETAIL screen ----
  else if (screen === "detail") {

    // Back to results
    if (mouseX > 42 && mouseX < 202 && mouseY > height-54 && mouseY < height-16) {
      screen = "result";
      btns   = [];
      scrollY = 0;
    }

    // Retake
    if (mouseX > width-202 && mouseX < width-42 && mouseY > height-54 && mouseY < height-16) {
      resetAll();
    }
  }
}


// ===============================================================
//  MOUSE WHEEL: scroll the results list up and down
// ===============================================================

function mouseWheel(event) {
  if (screen === "result") {
    scrollY = max(0, scrollY + event.delta * 0.5);
  }
}


// ===============================================================
//  RESET: wipe everything and go back to question 1
// ===============================================================

function resetAll() {
  screen    = "quiz";
  currentQ  = 0;
  answers   = [];
  picked    = [];
  topResults= [];
  scrollY   = 0;
  btns      = [];
}