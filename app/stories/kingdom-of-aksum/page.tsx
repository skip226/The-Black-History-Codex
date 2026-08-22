import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Kingdom of Aksum | The Black History Codex",
  description: "How an African kingdom connected the Red Sea world through trade, coinage, monumental architecture, and an enduring Christian tradition.",
  openGraph: { title: "The Kingdom of Aksum", description: "An African power at the crossroads of three continents.", images: [{ url: "https://black-history-codex.kenshinsega.chatgpt.site/aksum-hero.png", width: 1536, height: 1024, alt: "Editorial illustration of Aksumite stelae in the Ethiopian highlands" }] },
  twitter: { card: "summary_large_image", title: "The Kingdom of Aksum", description: "An African power at the crossroads of three continents.", images: ["https://black-history-codex.kenshinsega.chatgpt.site/aksum-hero.png"] },
};

const facts = [
  ["Flourished", "1st–8th centuries CE"], ["Heartland", "Northern Ethiopia & Eritrea"],
  ["Trade gateway", "The Red Sea port of Adulis"], ["Written languages", "Geʿez, Greek & Sabaean"],
];
const milestones = [
  ["c. 1st century CE", "Aksum emerges as a major regional kingdom in the northern Ethiopian and Eritrean highlands."],
  ["c. 270 CE", "Aksum begins issuing its own coinage, including gold coins used in long-distance commerce."],
  ["4th century CE", "King Ezana adopts Christianity; crosses replace earlier religious symbols on some royal coins."],
  ["6th century CE", "At its height, Aksum projects influence across the Red Sea into southern Arabia."],
  ["7th–8th centuries CE", "Shifting trade routes and regional changes contribute to political decline, while Aksum’s cultural legacy continues."],
];

export default function AksumStory() {
  return <main className="article-page">
    <header className="article-header">
      <a className="brand" href="/" aria-label="The Black History Codex home"><span className="brand-mark">BHC</span><span><strong>The Black History</strong><em>Codex</em></span></a>
      <a className="back-link" href="/#explore">← Back to the collection</a>
    </header>
    <article>
      <section className="article-hero">
        <div className="article-kicker">Civilizations <span>•</span> Ancient Africa <span>•</span> 1st–8th centuries CE</div>
        <h1>The Kingdom<br/>of <em>Aksum</em></h1>
        <p>An African power linked three continents through commerce, diplomacy, writing, monumental architecture, and faith.</p>
        <div className="article-hero-art aksum-art" role="img" aria-label="Editorial illustration of monumental Aksumite stelae in the Ethiopian highlands"><span>Original editorial illustration</span></div>
      </section>
      <section className="article-facts" aria-label="Key facts">{facts.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
      <div className="article-layout">
        <aside className="article-nav"><p>In this entry</p><a href="#overview">01 — Overview</a><a href="#trade">02 — A Red Sea power</a><a href="#monuments">03 — Stone and memory</a><a href="#faith">04 — A changing faith</a><a href="#legacy">05 — Why Aksum matters</a><a href="#sources">Sources</a></aside>
        <div className="article-body">
          <section id="overview"><p className="chapter-label">01 / OVERVIEW</p><h2>A kingdom at a global crossroads</h2>
            <p className="lead">Long before modern borders divided the Horn of Africa, Aksum rose in the highlands of what are now northern Ethiopia and Eritrea. From roughly the first through eighth centuries CE, it became one of the ancient world’s most consequential trading states.</p>
            <p>Aksum’s position connected inland African routes with the Red Sea. Its rulers controlled territory, agricultural wealth, and access to the port of Adulis. Goods moving through this network included ivory, gold, aromatics, animal products, textiles, glassware, metals, and ceramics.</p>
            <p>This was not an isolated kingdom at the edge of history. Aksum communicated and traded with the Mediterranean, Arabia, northeastern Africa, and the wider Indian Ocean world. Greek appeared on inscriptions and coins alongside the local literary language Geʿez and South Arabian scripts.</p>
          </section>
          <blockquote className="article-quote">Aksum belonged to an interconnected ancient world—and helped shape it.</blockquote>
          <section id="trade"><p className="chapter-label">02 / COMMERCE & POWER</p><h2>A Red Sea power with its own money</h2>
            <p>Beginning in the late third century, Aksumite rulers issued coins in gold, silver, and copper. Coinage helped facilitate commerce, projected royal authority, and left historians a durable record of rulers, titles, languages, and religious change.</p>
            <div className="insight-card"><span>Why coinage matters</span><p>Aksum was among the few states of its era to mint gold currency. Its coins circulated beyond the kingdom and advertised Aksumite sovereignty in a visual language international merchants could recognize.</p></div>
            <p>The kingdom’s commercial reach supported courtly power and urban life. At its height, Aksum also intervened across the Red Sea in southern Arabia—evidence that its ambitions extended well beyond its highland capital.</p>
          </section>
          <section id="monuments"><p className="chapter-label">03 / MONUMENTS</p><h2>Architecture carved from a single stone</h2>
            <p>Aksum’s best-known monuments are its towering stelae: single pieces of stone raised as markers for elite burial complexes. Their carved false doors, windows, and horizontal beams imitate multistory Aksumite buildings, turning architecture into enduring stone memory.</p>
            <p>The tallest standing example rises more than 23 meters. An even larger fallen stele measured about 33 meters—possibly the largest monolithic stele ancient builders ever attempted to erect. Royal tombs, palace remains, inscriptions, and churches reveal a sophisticated urban and ceremonial landscape.</p>
          </section>
          <section id="faith"><p className="chapter-label">04 / RELIGION</p><h2>King Ezana and a changing faith</h2>
            <p>During the fourth century, King Ezana adopted Christianity. The shift can be traced through material evidence: earlier royal coins displayed a disk-and-crescent symbol, while later issues carried the Christian cross. Ezana’s inscriptions also record royal power in Geʿez, Greek, and Sabaean.</p>
            <p>Aksum became one of the earliest major Christian states. Its religious tradition did not disappear with the kingdom’s political decline; it became foundational to Ethiopian Christianity and remains central to the sacred identity of the modern city of Aksum.</p>
          </section>
          <section id="legacy"><p className="chapter-label">05 / SIGNIFICANCE</p><h2>Why Aksum matters</h2>
            <ul className="significance-list">
              <li><strong>It expands the map of antiquity.</strong><span>African states were active participants in ancient global trade, diplomacy, technology, and religion.</span></li>
              <li><strong>It left its own evidence.</strong><span>Coins, multilingual inscriptions, monuments, and archaeology allow Aksumite history to be studied through more than outside accounts.</span></li>
              <li><strong>Its influence endured.</strong><span>Geʿez literature, Christian institutions, sacred geography, and ideas of Ethiopian kingship continued long after Aksum’s political peak.</span></li>
            </ul>
          </section>
          <section className="mini-timeline"><p className="chapter-label">A BRIEF TIMELINE</p>{milestones.map(([year,event])=><div key={year}><strong>{year}</strong><p>{event}</p></div>)}</section>
          <section className="sources" id="sources"><p className="chapter-label">SOURCES & FURTHER READING</p><h2>Continue exploring</h2>
            <p>This entry synthesizes museum and heritage scholarship. Dates are approximate, and interpretations may develop as archaeological research continues.</p>
            <ol>
              <li><a href="https://whc.unesco.org/en/list/15/" target="_blank" rel="noreferrer"><strong>UNESCO World Heritage Centre</strong><span>Aksum World Heritage listing and site history ↗</span></a></li>
              <li><a href="https://www.metmuseum.org/essays/foundations-of-aksumite-civilization-and-its-christian-legacy-1st-7th-century" target="_blank" rel="noreferrer"><strong>The Metropolitan Museum of Art</strong><span>Foundations of Aksumite Civilization and Its Christian Legacy ↗</span></a></li>
              <li><a href="https://www.metmuseum.org/essays/monumental-architecture-and-stelae-of-the-aksumite-empire" target="_blank" rel="noreferrer"><strong>The Metropolitan Museum of Art</strong><span>Monumental Architecture of the Aksumite Empire ↗</span></a></li>
              <li><a href="https://www.britishmuseum.org/blog/historical-city-travel-guide-aksum-6th-century-ad" target="_blank" rel="noreferrer"><strong>The British Museum</strong><span>Historical city guide: Aksum in the 6th century ↗</span></a></li>
              <li><a href="https://smarthistory.org/aksumite-coins/" target="_blank" rel="noreferrer"><strong>Smarthistory</strong><span>Aksumite coins and what they reveal ↗</span></a></li>
            </ol>
          </section>
          <nav className="story-pagination" aria-label="Story navigation"><a href="/#explore">← All entries</a><a className="next-story" href="/stories/mansa-musa-pilgrimage">Next story<br/><strong>Mansa Musa’s Pilgrimage →</strong></a></nav>
        </div>
      </div>
    </article>
  </main>
}
