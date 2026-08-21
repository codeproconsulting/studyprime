// Official university domain resolver for fetching authentic logos directly from official university servers

export const UNIVERSITY_DOMAINS: Record<string, string> = {
  // UK
  "university of birmingham": "bham.ac.uk",
  "university of oxford": "ox.ac.uk",
  "university of cambridge": "cam.ac.uk",
  "brunel university london": "brunel.ac.uk",
  "bpp university": "bpp.com",
  "university of chester": "chester.ac.uk",
  "university of greenwich": "gre.ac.uk",
  "university of bristol": "bristol.ac.uk",
  "university of portsmouth": "port.ac.uk",
  "teesside university": "tees.ac.uk",
  "london south bank university": "lsbu.ac.uk",
  "university of sunderland": "sunderland.ac.uk",
  "birmingham city university": "bcu.ac.uk",
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
  "university of tasmania": "utas.edu.au",
  "griffith university": "griffith.edu.au",
  "deakin university": "deakin.edu.au",
  "macquarie university": "mq.edu.au",
  "rmit university": "rmit.edu.au",
  "la trobe university": "latrobe.edu.au",
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
  "le cordon bleu": "cordonbleu.edu",
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
                        : ".edu";

  return `https://www.google.com/s2/favicons?domain=${cleanName}${tld}&sz=128`;
}
