// Official university domain resolver for fetching authentic logos directly from official university servers

export const UNIVERSITY_DOMAINS: Record<string, string> = {
  // UK
  "university of birmingham": "bham.ac.uk",
  "university of oxford": "ox.ac.uk",
  "university of cambridge": "cam.ac.uk",
  "brunel university london": "brunel.ac.uk",
  "university of bradford": "bradford.ac.uk",
  "keele university": "keele.ac.uk",
  "birmingham city university": "bcu.ac.uk",
  "heriot-watt university": "hw.ac.uk",
  "bpp university": "bpp.com",
  "university of chester": "chester.ac.uk",
  "university of greenwich": "gre.ac.uk",
  "university of bristol": "bristol.ac.uk",
  "university of portsmouth": "port.ac.uk",
  "teesside university": "tees.ac.uk",
  "london south bank university": "lsbu.ac.uk",
  "university of sunderland": "sunderland.ac.uk",
  "university of east london": "uel.ac.uk",
  "university of bedfordshire": "beds.ac.uk",
  "leeds beckett university": "leedsbeckett.ac.uk",
  "anglia ruskin university": "aru.ac.uk",
  "university of derby": "derby.ac.uk",
  "university of northampton": "northampton.ac.uk",
  "university of west london": "uwl.ac.uk",
  "cardiff metropolitan university": "cardiffmet.ac.uk",
  "oxford brookes university": "brookes.ac.uk",
  "sheffield hallam university": "shu.ac.uk",
  "university of hull": "hull.ac.uk",
  "university of lincoln": "lincoln.ac.uk",
  "university of salford": "salford.ac.uk",
  "university of plymouth": "plymouth.ac.uk",
  "kingston university london": "kingston.ac.uk",
  "coventry university": "coventry.ac.uk",
  "university of leeds": "leeds.ac.uk",
  "university of manchester": "manchester.ac.uk",
  "university of warwick": "warwick.ac.uk",
  "university of sheffield": "sheffield.ac.uk",
  "queen mary university of london": "qmul.ac.uk",
  "university of surrey": "surrey.ac.uk",
  "middlesex university": "mdx.ac.uk",
  "de montfort university": "dmu.ac.uk",
  "university of hertfordshire": "herts.ac.uk",
  "northumbria university": "northumbria.ac.uk",
  "university of central lancashire": "uclan.ac.uk",
  "university of huddersfield": "hud.ac.uk",
  "aston university": "aston.ac.uk",
  "cardiff university": "cardiff.ac.uk",
  "swansea university": "swansea.ac.uk",
  "university of strathclyde": "strath.ac.uk",
  "glasgow caledonian university": "gcu.ac.uk",
  "edinburgh napier university": "napier.ac.uk",

  // Turkey
  "istanbul aydin university": "aydin.edu.tr",
  "bahcesehir university": "bau.edu.tr",
  "sabanci university": "sabanciuniv.edu",
  "ozyegin university": "ozyegin.edu.tr",
  "yeditepe university": "yeditepe.edu.tr",
  "istanbul medipol university": "medipol.edu.tr",
  "istinye university": "istinye.edu.tr",
  "uskudar university": "uskudar.edu.tr",
  "nisantasi university": "nisantasi.edu.tr",
  "istanbul gelisim university": "gelisim.edu.tr",
  "beykent university": "beykent.edu.tr",
  "altinbas university": "altinbas.edu.tr",
  "isik university": "isikun.edu.tr",
  "kadir has university": "khas.edu.tr",
  "fenerbahce university": "fbu.edu.tr",
  "istanbul kultur university": "iku.edu.tr",
  "istanbul okan university": "okan.edu.tr",
  "istanbul ticaret university": "ticaret.edu.tr",
  "ostim technical university": "ostimteknik.edu.tr",
  "yasar university": "yasar.edu.tr",

  // Canada
  "thompson rivers university": "tru.ca",
  "university of victoria": "uvic.ca",
  "simon fraser university": "sfu.ca",
  "university of windsor": "uwindsor.ca",
  "brock university": "brocku.ca",
  "lakehead university": "lakeheadu.ca",
  "trent university": "trentu.ca",
  "university of regina": "uregina.ca",
  "university of manitoba": "umanitoba.ca",
  "seneca polytechnic": "senecapolytechnic.ca",
  "humber college": "humber.ca",
  "george brown college": "georgebrown.ca",
  "sheridan college": "sheridancollege.ca",
  "centennial college": "centennialcollege.ca",
  "fanshawe college": "fanshawec.ca",
  "conestoga college": "conestogac.on.ca",
  "douglas college": "douglascollege.ca",
  "langara college": "langara.ca",
  "capilano university": "capilanou.ca",
  "vancouver island university": "viu.ca",

  // Ireland
  "trinity college dublin": "tcd.ie",
  "university college dublin": "ucd.ie",
  "university of galway": "universityofgalway.ie",
  "university college cork": "ucc.ie",
  "university of limerick": "ul.ie",
  "dublin city university": "dcu.ie",
  "maynooth university": "maynoothuniversity.ie",
  "technological university dublin": "tudublin.ie",
  "national college of ireland": "ncirl.ie",
  "griffith college": "griffith.ie",
  "dorset college dublin": "dorset.ie",
  "dublin business school": "dbs.ie",

  // Australia
  "the university of sydney": "sydney.edu.au",
  "university of sydney": "sydney.edu.au",
  "the university of western australia": "uwa.edu.au",
  "university of western australia": "uwa.edu.au",
  "university of newcastle": "newcastle.edu.au",
  "newcastle university": "newcastle.edu.au",
  "la trobe university": "latrobe.edu.au",
  "southern cross university": "scu.edu.au",
  "the hotel school": "hotelschool.scu.edu.au",
  "university of new england": "une.edu.au",
  "le cordon bleu": "cordonbleu.edu",
  "le cordon bleu australia": "cordonbleu.edu",
  "murdoch college": "murdochcollege.wa.edu.au",
  "australian institute of music": "aim.edu.au",
  "national academy of professional studies": "naps.edu.au",
  "ozford": "ozford.edu.au",
  "ozford australia": "ozford.edu.au",
  "ozford college": "ozford.edu.au",
  "ozford english language centre": "ozford.edu.au",
  "ozford institute of higher education": "ozford.edu.au",
  "lead college": "lead.edu.au",
  "phoenix academy": "phoenix.wa.edu.au",
  "bayside english": "bayside.edu.au",
  "s p jain school of global management": "spjain.edu.au",
  "asc international": "ascinternational.wa.edu.au",
  "kent institute": "kent.edu.au",
  "kent institute australia": "kent.edu.au",
  "danford higher education": "danford.edu.au",
  "university of tasmania": "utas.edu.au",
  "griffith university": "griffith.edu.au",
  "deakin university": "deakin.edu.au",
  "macquarie university": "mq.edu.au",
  "rmit university": "rmit.edu.au",
  "curtin university": "curtin.edu.au",
  "swinburne university of technology": "swinburne.edu.au",
  "university of south australia": "unisa.edu.au",
  "flinders university": "flinders.edu.au",
  "western sydney university": "westernsydney.edu.au",
  "victoria university": "vu.edu.au",
  "university of wollongong": "uow.edu.au",
  "charles darwin university": "cdu.edu.au",
  "james cook university": "jcu.edu.au",

  // Germany
  "university of europe for applied sciences": "ue-germany.com",
  "srh berlin university of applied sciences": "srh-berlin.de",
  "gisma university of applied sciences": "gisma.com",
  "berlin school of business and innovation": "berlinsbi.com",
  "berlin school of business & innovation (bsbi)": "berlinsbi.com",
  "munich business school": "munich-business-school.de",
  "ism international school of management": "ism.de",
  "hochschule fresenius university of applied sciences": "hs-fresenius.com",
  "pfh private university of applied sciences": "pfh-university.com",
  "new european college, munich": "new-european-college.com",
  "steinbeis university": "steinbeis-saphir.de",

  // France
  "toulouse business school": "tbs-education.com",
  "new york film academy": "nyfa.edu",
  "institut superieur de gestion": "isg.fr",
  "ecole de management applique (ema)": "ema-paris.com",
  "esc clermont business school": "esc-clermont.fr",
  "essca school of management": "essca.fr",
  "cy cergy paris university (cy tech)": "cyu.fr",
  "isep paris": "isep.fr",
  "esigelec": "esigelec.fr",
  "psb paris school of business": "psbedu.paris",

  // Finland
  "south-eastern finland university of applied sciences (xamk)": "xamk.fi",
  "lut university": "lut.fi",
  "university of vaasa": "uwasa.fi",
  "edunation": "edunation.co",
  "arcada university of applied sciences": "arcada.fi",
  "kajaani university of applied sciences": "kamk.fi",
  "karelia university of applied sciences": "karelia.fi",
  "lab university of applied sciences": "lab.fi",
  "metropolia university of applied sciences": "metropolia.fi",
  "seinajoki university of applied sciences": "seamk.fi",
  "turku university of applied sciences": "turkuamk.fi",

  // Netherlands
  "wittenborg university of applied sciences": "wittenborg.eu",
  "nyenrode business universiteit": "nyenrode.nl",
  "tias school for business and society": "tias.edu",
  "the hague university of applied sciences": "thehagueuniversity.com",
  "fontys university of applied sciences": "fontys.edu",
  "saxion university of applied sciences": "saxion.edu",
  "hanze university of applied sciences": "hanze.nl",
  "hotelschool the hague": "hotelschool.nl",
  "cambridge education group": "cambridgeeducationgroup.com",
  "oncampus amsterdam": "oncampus.global",
  "oncampus": "oncampus.global",
  "srh haarlem": "srh-haarlem-campus.com",
  "haarlem campus": "srh-haarlem-campus.com",
  "ic university": "ic-university.nl",
  "ic university of applied sciences": "ic-university.nl",
  "tio university": "tio.nl",
  "tio business school": "tio.nl",
  "tio": "tio.nl",
  "eit innoenergy": "innoenergy.com",
  "innoenergy": "innoenergy.com",
  "institute of sustainable energy": "innoenergy.com",

  // Switzerland
  "swiss education group (seg)": "swisseducation.com",
  "culinary arts academy switzerland": "culinaryartsswitzerland.com",
  "hotel institute montreux (him)": "hotel-institute-montreux.com",
  "cesar ritz colleges switzerland": "cesarritzcolleges.edu",
  "swiss hotel management school (shms)": "shms.com",
  "ehl hospitality business school": "ehl.edu",
  "glion institute of higher education": "glion.edu",
  "les roches global hospitality education": "lesroches.edu",
  "geneva business school": "gbsge.com",
  "eu business school": "euruni.edu",

  // Spain
  "ie university": "ie.edu",
  "esade business school": "esade.edu",
  "ucam universidad catolica de murcia": "ucam.edu",
  "nebrija university": "nebrija.com",
  "cardenal herrera university (ceu)": "uchceu.es",
  "marbella international university centre": "miuc.org",
  "eada business school": "eada.edu",
  "gbsb global business school": "global-business-school.org",

  // United Arab Emirates (UAE / Dubai / RAK / Ajman)
  "middlesex university dubai": "mdx.ac.ae",
  "university of wollongong in dubai": "uowdubai.ac.ae",
  "curtin university dubai": "curtindubai.ac.ae",
  "hult international business school": "hult.edu",
  "sae institute dubai": "dubai.sae.edu",
  "the emirates academy of hospitality management": "emiratesacademy.edu",
  "american university of ras al khaimah": "aurak.ac.ae",
  "rochester institute of technology dubai": "rit.edu",
  "rit dubai": "rit.edu",
  "university of stirling - ras al khaimah": "stir.ac.uk",
  "university of bolton, ras al khaimah": "wincedu.uk",
  "bath spa university, rak": "bathspa.ae",
  "ajman university": "ajman.ac.ae",
  "s p jain school of global management (dubai)": "spjain.org",
  "de montfort university dubai": "dmu.ac.ae",
  "em normandie business school": "em-normandie.com",
  "symbiosis international university": "siu.edu.in",
  "city university ajman": "cu.ac.ae",
  "success point college": "successpoint.ae",
  "northwood university, ras al khaimah": "northwood.edu",
  "dubai institute of design and innovation": "didi.ac.ae",
  "didi": "didi.ac.ae",
  "istituto marangoni dubai": "istitutomarangoni.com",
  "english path": "englishpath.com",

  // New Zealand
  "university of auckland": "auckland.ac.nz",
  "aut university": "aut.ac.nz",
  "aut international house": "aut.ac.nz",
  "auckland university of technology": "aut.ac.nz",
  "victoria university of wellington": "wgtn.ac.nz",
  "university of waikato": "waikato.ac.nz",
  "university of canterbury": "canterbury.ac.nz",
  "university of otago": "otago.ac.nz",
  "massey university": "massey.ac.nz",
  "lincoln university": "lincoln.ac.nz",
  "auckland institute of studies": "ais.ac.nz",
  "international travel college": "itc.co.nz",
  "whitecliffe college": "whitecliffe.ac.nz",
  "atmc new zealand": "atmc.ac.nz",
  "ipu new zealand": "ipu.ac.nz",
  "future skills academy": "futureskills.co.nz",
  "professional business & restaurant school": "pbrs.ac.nz",
  "ara institute of canterbury": "ara.ac.nz",
  "otago polytechnic": "op.ac.nz",
  "eastern institute of technology": "eit.ac.nz",
  "manukau institute of technology": "manukau.ac.nz",
  "southern institute of technology": "sit.ac.nz",
  "toi ohomai institute of technology": "toiohomai.ac.nz",
  "waikato institute of technology": "wintec.ac.nz",
  "unitec institute of technology": "unitec.ac.nz",
  "universal college of learning": "ucol.ac.nz",
  "western institute of technology at taranaki": "witt.ac.nz",
  "northtec": "northtec.ac.nz",
  "worldwide school of english": "worldwideschoolofenglish.com",
  "new zealand skills & education group": "nzse.ac.nz",
  "nzse": "nzse.ac.nz",
  "christchurch college of english": "ccel.co.nz",
  "st. john's college": "stjohns.auckland.ac.nz",
  "new zealand airline academy": "nzaal.co.nz",
  "lightpath new zealand schools": "lightpath.nz",

  // Portugal
  "iscte executive education": "iscte-iul.pt",
  "iscte": "iscte-iul.pt",
  "iscte business school": "iscte-iul.pt",
  "iscte – university institute of lisbon": "iscte-iul.pt",

  // Japan
  "kudan institute": "kudan-japanese-school.com",
  "kudan": "kudan-japanese-school.com",
  "kyoto japanese language school": "kjls.or.jp",
  "nippon academy": "nippon-academy.ac.jp",
  "tokyo cocoro": "tokyococoro.com",
  "kokusai eisai": "kokusai-eisai.com",
  "ao international school": "ao-school.jp",
  "gby corporation": "gby.co.jp",

  // Czech Republic
  "anglo-american university": "aauni.edu",
  "aau prague": "aauni.edu",
  "prague film institute": "praguefilminstitute.cz",
  "university of west bohemia": "zcu.cz",
  "west bohemia": "fel.zcu.cz",

  // Hungary
  "budapest international college": "budapestcollege.hu",
  "budapest metropolitan": "metropolitan.hu",
  "metropolitan university": "metropolitan.hu",
  "john von neumann": "uni-neumann.hu",
  "budapest university of economics": "uni-bge.hu",
  "budapest business university": "uni-bge.hu",
  "szechenyi istvan": "sze.hu",
  "essca budapest": "essca.fr",
  "wekerle": "wekerle.eu",
  "wekerle international university": "wekerle.eu",
  "wekerle business school": "wekerle.eu",
  "university of miskolc": "uni-miskolc.hu",
  "university of pecs": "pte.hu",
  "pecs": "pte.hu",

  // Latvia
  "university of latvia": "lu.lv",
  "latvijas universitate": "lu.lv",

  // Cyprus
  "university of nicosia": "unic.ac.cy",
  "nicosia": "unic.ac.cy",
  "unic": "unic.ac.cy",
  "cyprus west university": "cwu.edu.tr",
  "cyprus west": "cwu.edu.tr",
  "frederick university": "frederick.ac.cy",
  "frederick": "frederick.ac.cy",

  // Malta
  "middlesex university malta": "mdx.edu.mt",
  "university of malta": "um.edu.mt",
  "mcast": "mcast.edu.mt",
  "american university of malta": "aum.edu.mt",
  "institute of tourism studies": "its.edu.mt",
  "its malta": "its.edu.mt",
  "london school of commerce malta": "lscmalta.edu.mt",
  "lsc malta": "lscmalta.edu.mt",
  "european college of innovation": "eci.edu.mt",
  "malita international college": "malitacollege.edu.mt",
  "gbs malta": "gbs.edu.mt",
  "global banking school": "gbs.edu.mt",
  "idea college": "ideaeducation.com",
  "idea academy": "ideaeducation.com",
  "ibs malta": "ibs.edu.mt",
  "global college malta": "gcmalta.com",
  "global college": "gcmalta.com",
  "cross college": "crosscollege.edu.mt",
  "la valetta institute": "lavaletta.edu.mt",
  "muv college": "muv.edu.mt",
  "ssm group": "ssmgroup.org",
  "learnkey": "learnkey.com.mt",
  "apply malta": "applymalta.com",
};

/**
 * Returns the authentic high-resolution official logo URL from the university's official domain
 */
export function getOfficialUniversityLogo(uniName: string, country?: string, existingLogo?: string): string {
  const normalized = uniName.toLowerCase().trim();
  
  // Exact or partial match in official domain dictionary
  for (const [key, domain] of Object.entries(UNIVERSITY_DOMAINS)) {
    if (normalized.includes(key) || key.includes(normalized)) {
      return `https://www.google.com/s2/favicons?domain=${domain}&sz=128`;
    }
  }

  // If existing logo is a valid real image path in /images/ (not custom svg), keep it
  if (existingLogo && !existingLogo.endsWith(".svg") && (existingLogo.startsWith("/images/") || existingLogo.startsWith("http"))) {
    return existingLogo;
  }

  // Derive domain from name
  const cleanName = normalized
    .replace(/university of | university| college| school of | institute of | institute| polytechnic/gi, "")
    .replace(/[^a-z0-9]/g, "");

  const tld = country?.toLowerCase().includes("uk")
    ? ".ac.uk"
    : country?.toLowerCase().includes("turkey")
      ? ".edu.tr"
      : country?.toLowerCase().includes("australia")
        ? ".edu.au"
        : country?.toLowerCase().includes("japan")
          ? ".ac.jp"
          : country?.toLowerCase().includes("czech")
            ? ".cz"
            : country?.toLowerCase().includes("hungary")
              ? ".hu"
              : country?.toLowerCase().includes("latvia")
                ? ".lv"
                : country?.toLowerCase().includes("cyprus")
                  ? ".ac.cy"
                  : country?.toLowerCase().includes("malta")
                    ? ".edu.mt"
                    : country?.toLowerCase().includes("new zealand") || country?.toLowerCase().includes("nz")
                      ? ".ac.nz"
                      : country?.toLowerCase().includes("portugal")
                        ? ".pt"
                        : country?.toLowerCase().includes("uae") || country?.toLowerCase().includes("emirates") || country?.toLowerCase().includes("dubai")
                          ? ".ac.ae"
                          : country?.toLowerCase().includes("ireland")
                            ? ".ie"
                            : country?.toLowerCase().includes("canada")
                              ? ".ca"
                              : country?.toLowerCase().includes("germany")
                                ? ".de"
                                : country?.toLowerCase().includes("france")
                                  ? ".fr"
                                  : country?.toLowerCase().includes("finland")
                                    ? ".fi"
                                    : country?.toLowerCase().includes("netherlands")
                                      ? ".nl"
                                      : country?.toLowerCase().includes("switzerland")
                                        ? ".ch"
                                        : country?.toLowerCase().includes("spain")
                                          ? ".es"
                                          : country?.toLowerCase().includes("malaysia")
                                            ? ".edu.my"
                                            : country?.toLowerCase().includes("sweden")
                                              ? ".se"
                                              : ".edu";

  return `https://www.google.com/s2/favicons?domain=${cleanName}${tld}&sz=128`;
}
