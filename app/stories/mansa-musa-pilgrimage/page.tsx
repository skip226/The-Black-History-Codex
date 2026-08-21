import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mansa Musa’s Pilgrimage | The Black History Codex",
  description: "How the ruler of Mali’s 1324 pilgrimage revealed West Africa’s wealth, power, scholarship, and connections to the wider medieval world.",
  openGraph: { title: "Mansa Musa’s Pilgrimage", description: "The journey that placed the Mali Empire on the medieval world’s map.", images: [{ url: "https://black-history-codex.kenshinsega.chatgpt.site/mansa-musa-hero.png", width: 1536, height: 1024, alt: "Editorial illustration of a 14th-century West African caravan crossing the Sahara" }] },
  twitter: { card: "summary_large_image", title: "Mansa Musa’s Pilgrimage", description: "The journey that placed the Mali Empire on the medieval world’s map.", images: ["https://black-history-codex.kenshinsega.chatgpt.site/mansa-musa-hero.png"] },
};

const facts = [
  ["Journey", "The hajj to Mecca"], ["Departure", "1324 CE"],
  ["Realm", "The Mali Empire"], ["Route", "West Africa to Cairo and Mecca"],
];
const milestones = [
  ["c. 1312", "Musa becomes mansa, or ruler, of the Mali Empire; the date remains approximate."],
  ["1324", "The royal caravan leaves Mali for the pilgrimage to Mecca."],
  ["July 1324", "Musa reaches Cairo, where his court, diplomacy, and distribution of gold draw intense attention."],
  ["1324–1325", "The caravan continues through the Red Sea region to the holy cities of Mecca and Medina."],
  ["After 1325", "Musa returns to Mali with new relationships, scholars, and artisans; his fame circulates across Africa, the Islamic world, and Europe."],
  ["1375", "The Catalan Atlas depicts Musa holding gold, evidence of Mali’s lasting place in Mediterranean geographic imagination."],
];

export default function MansaMusaStory() {
  return <main className="article-page mansa-page">
    <header className="article-header">
      <a className="brand" href="/" aria-label="The Black History Codex home"><span className="brand-mark">BHC</span><span><strong>The Black History</strong><em>Codex</em></span></a>
      <a className="back-link" href="/#explore">← Back to the collection</a>
    </header>
    <article>
      <section className="article-hero">
        <div className="article-kicker">Leaders <span>•</span> Medieval Africa <span>•</span> 1324 CE</div>
        <h1>Mansa Musa’s<br/><em>Pilgrimage</em></h1>
        <p>A journey of faith and statecraft that revealed the Mali Empire’s power to a connected medieval world.</p>
        <div className="article-hero-art mansa-art" role="img" aria-label="Editorial illustration of a fourteenth-century West African caravan crossing the Sahara"><span>Original editorial illustration</span></div>
      </section>
      <section className="article-facts" aria-label="Key facts">{facts.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
      <div className="article-layout">
        <aside className="article-nav"><p>In this entry</p><a href="#overview">01 — Overview</a><a href="#mali">02 — The empire behind him</a><a href="#cairo">03 — Cairo remembers</a><a href="#knowledge">04 — More than gold</a><a href="#legacy">05 — Image and legacy</a><a href="#sources">Sources</a></aside>
        <div className="article-body">
          <section id="overview"><p className="chapter-label">01 / OVERVIEW</p><h2>The journey that announced an empire</h2>
            <p className="lead">In 1324, Mansa Musa, ruler of the Mali Empire, began the hajj—the pilgrimage to Mecca required of Muslims who are able to undertake it. His route carried a West African royal court across the Sahara, through Cairo, and onward to Arabia.</p>
            <p>The pilgrimage was an act of faith, but it was also a moving expression of political authority. Musa traveled with a vast entourage and substantial supplies. Medieval accounts describe courtiers, officials, soldiers, merchants, attendants, enslaved people, and pack animals carrying gold and provisions.</p>
            <p>The most dramatic numbers were recorded after the event and vary between sources. Rather than treating every figure as exact, historians read the accounts as evidence of what witnesses found unmistakable: the caravan’s extraordinary scale and Mali’s command of wealth, people, and long-distance networks.</p>
          </section>
          <blockquote className="article-quote">The world did not discover Mali in 1324. It was forced to recognize a power that was already there.</blockquote>
          <section id="mali"><p className="chapter-label">02 / THE MALI EMPIRE</p><h2>The power behind the procession</h2>
            <p>Mali’s strength rested on productive farming regions, tribute, military authority, and its position within trans-Saharan commerce. Gold from regions south of the Sahara moved north, while salt, textiles, metal goods, horses, books, and other commodities moved through interconnected markets.</p>
            <p>The empire was neither a simple “kingdom of gold” nor an isolated wonder. It governed diverse communities and participated in a complex economy that also included systems of enslavement. Musa’s caravan reflected both the brilliance and the hierarchy of the society he ruled.</p>
            <div className="insight-card"><span>What “mansa” means</span><p>Mansa was a Mandé title for a sovereign ruler. “Mansa Musa” therefore combines a title with his personal name—not a modern first-and-last-name construction.</p></div>
          </section>
          <section id="cairo"><p className="chapter-label">03 / CAIRO</p><h2>A royal encounter remembered for generations</h2>
            <p>When Musa reached Cairo, he entered one of the medieval world’s great cities and met representatives of the Mamluk sultan. The writer al-Umari arrived in Cairo years later and collected recollections from people who had witnessed the visit.</p>
            <p>Those accounts emphasize Musa’s dignity, generosity, and distribution of gold. They also claim that so much gold entered Cairo’s market that its relative value fell for years. The precise economic effect is difficult to calculate, but the story shows how strongly the visit impressed contemporaries.</p>
            <p>Musa’s willingness to spend, give, borrow, and exchange wealth made the pilgrimage both a devotional journey and an international diplomatic event. News of Mali traveled along the same networks that carried merchants, scholars, pilgrims, and maps.</p>
          </section>
          <section id="knowledge"><p className="chapter-label">04 / FAITH & KNOWLEDGE</p><h2>More than a caravan of gold</h2>
            <p>Popular retellings often reduce the pilgrimage to spectacle. Its deeper importance lies in connection. Musa strengthened relationships across the Islamic world and is associated with bringing scholars, jurists, and skilled artisans back toward Mali.</p>
            <p>Tradition connects his return with building projects in Timbuktu, including the Djinguereber Mosque. Timbuktu’s greatest period as an intellectual center developed over later centuries, but Musa’s reign helped tie Mali more visibly to networks of Islamic scholarship and architecture.</p>
            <p>Books and learned people were valuable forms of capital. The circulation of knowledge helped West African cities become places where commerce, manuscript culture, religious study, and local intellectual traditions met.</p>
          </section>
          <section id="legacy"><p className="chapter-label">05 / LEGACY</p><h2>From Cairo’s memories to Europe’s maps</h2>
            <p>More than fifty years after the pilgrimage, the 1375 Catalan Atlas portrayed Musa seated with a golden object. The image was made in Majorca for a European audience; it is not a realistic portrait. It shows how stories of Mali’s gold and sovereignty had entered Mediterranean geographic knowledge.</p>
            <ul className="significance-list">
              <li><strong>It made power visible.</strong><span>The pilgrimage communicated Mali’s scale to audiences across North Africa and the Middle East.</span></li>
              <li><strong>It deepened connections.</strong><span>Religious, diplomatic, commercial, and scholarly relationships moved in both directions across the Sahara.</span></li>
              <li><strong>It reshaped the map.</strong><span>Later cartographers placed a Black African ruler and his gold at the center of their representation of West Africa.</span></li>
              <li><strong>It requires careful reading.</strong><span>Celebrating achievement should not erase enslaved people in the caravan or turn medieval reports into unquestioned statistics.</span></li>
            </ul>
          </section>
          <section className="mini-timeline"><p className="chapter-label">A BRIEF TIMELINE</p>{milestones.map(([year,event])=><div key={year}><strong>{year}</strong><p>{event}</p></div>)}</section>
          <section className="sources" id="sources"><p className="chapter-label">SOURCES & FURTHER READING</p><h2>Continue exploring</h2>
            <p>This entry distinguishes contemporary evidence, later testimony, and modern interpretation. Reported caravan sizes and economic effects should be treated as historical claims rather than exact measurements.</p>
            <ol>
              <li><a href="https://www.bu.edu/africa/outreach/teachingresources/history/ancient-to-medieval-history/k_o_mali/" target="_blank" rel="noreferrer"><strong>Boston University African Studies Center</strong><span>Kingdom of Mali and translated primary-source testimony from al-Umari ↗</span></a></li>
              <li><a href="https://folklife-media.si.edu/docs/festival/program-book-articles/FESTBK2003_17.pdf" target="_blank" rel="noreferrer"><strong>Smithsonian Folklife Festival</strong><span>Mali: From Timbuktu to Washington ↗</span></a></li>
              <li><a href="https://caravans.library.northwestern.edu/works/26/" target="_blank" rel="noreferrer"><strong>Northwestern University Libraries</strong><span>The Catalan Atlas and medieval trans-Saharan exchange ↗</span></a></li>
              <li><a href="https://whc.unesco.org/en/list/119/" target="_blank" rel="noreferrer"><strong>UNESCO World Heritage Centre</strong><span>Timbuktu’s intellectual, spiritual, and commercial heritage ↗</span></a></li>
              <li><a href="https://sova.si.edu/record/eepa.1973-001/ref7667" target="_blank" rel="noreferrer"><strong>Smithsonian Institution Archives</strong><span>Djinguereber Mosque collection record and historical context ↗</span></a></li>
            </ol>
          </section>
          <nav className="story-pagination" aria-label="Story navigation"><a href="/stories/kingdom-of-aksum">← Kingdom of Aksum</a><span>Next story<br/><strong>Haiti Declares Independence →</strong></span></nav>
        </div>
      </div>
    </article>
  </main>
}
