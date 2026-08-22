import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haiti Declares Independence | The Black History Codex",
  description: "How the Haitian Revolution overthrew slavery and colonial rule to create an independent nation in 1804.",
  openGraph: { title: "Haiti Declares Independence", description: "The revolution that defeated slavery and colonial rule in Saint-Domingue.", images: [{ url: "https://black-history-codex.kenshinsega.chatgpt.site/haiti-independence-hero.png", width: 1536, height: 1024, alt: "Editorial illustration of Haitian revolutionaries at dawn" }] },
  twitter: { card: "summary_large_image", title: "Haiti Declares Independence", description: "The revolution that defeated slavery and colonial rule in Saint-Domingue.", images: ["https://black-history-codex.kenshinsega.chatgpt.site/haiti-independence-hero.png"] },
};

const facts = [
  ["Revolution", "1791–1804"], ["Colony", "French Saint-Domingue"],
  ["Independence", "January 1, 1804"], ["Outcome", "Emancipation and sovereign Haiti"],
];
const milestones = [
  ["August 1791", "A mass uprising begins in northern Saint-Domingue, building on generations of resistance to slavery."],
  ["February 1794", "The French National Convention abolishes slavery in France’s colonies."],
  ["1801", "Toussaint Louverture promulgates a constitution for Saint-Domingue while formally retaining ties to France."],
  ["1802", "Napoleon sends a major expedition; Toussaint is captured, deported, and imprisoned in France."],
  ["November 18, 1803", "The revolutionary army defeats French forces at the Battle of Vertières."],
  ["January 1, 1804", "Jean-Jacques Dessalines declares Haiti independent at Gonaïves."],
];

export default function HaitiIndependenceStory() {
  return <main className="article-page haiti-page">
    <header className="article-header">
      <a className="brand" href="/" aria-label="The Black History Codex home"><span className="brand-mark">BHC</span><span><strong>The Black History</strong><em>Codex</em></span></a>
      <a className="back-link" href="/#explore">← Back to the collection</a>
    </header>
    <article>
      <section className="article-hero">
        <div className="article-kicker">Revolutions <span>•</span> Resistance & Freedom <span>•</span> 1804</div>
        <h1>Haiti Declares<br/><em>Independence</em></h1>
        <p>The only successful revolution led by enslaved people created a sovereign nation and transformed the Atlantic world.</p>
        <div className="article-hero-art haiti-art" role="img" aria-label="Editorial illustration of Haitian revolutionaries standing together at dawn beneath a blue-and-red banner"><span>Original editorial illustration</span></div>
      </section>
      <section className="article-facts" aria-label="Key facts">{facts.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
      <div className="article-layout">
        <aside className="article-nav"><p>In this entry</p><a href="#overview">01 — Overview</a><a href="#colony">02 — The colony</a><a href="#uprising">03 — Revolution begins</a><a href="#war">04 — A shifting war</a><a href="#independence">05 — Independence</a><a href="#legacy">06 — Global legacy</a><a href="#sources">Sources</a></aside>
        <div className="article-body">
          <section id="overview"><p className="chapter-label">01 / OVERVIEW</p><h2>A revolution made by many</h2>
            <p className="lead">Haiti’s independence was not granted by an empire. It was won through a thirteen-year revolution in which enslaved people overthrew slavery, defeated colonial armies, and created a new state.</p>
            <p>The struggle included African-born and Creole people, women and men, field laborers and skilled workers, maroons, free people of color, soldiers, officers, and political leaders. Toussaint Louverture, Jean-Jacques Dessalines, Henry Christophe, and other commanders mattered—but no single hero made the revolution.</p>
            <p>Its course was neither simple nor inevitable. Local rebellion intersected with the French Revolution and wars among France, Spain, and Britain. Alliances changed, leaders disagreed, and freedom had to be defended against repeated attempts to restore colonial control.</p>
          </section>
          <blockquote className="article-quote">The revolution did more than change a flag. It destroyed a slave colony and created a sovereign state.</blockquote>
          <section id="colony"><p className="chapter-label">02 / SAINT-DOMINGUE</p><h2>Enormous wealth, built on terror</h2>
            <p>On the eve of revolution, French Saint-Domingue was among the world’s most profitable colonies. Plantations exported vast quantities of sugar and coffee, enriching merchants and the French empire.</p>
            <p>That wealth depended on brutal coerced labor. Enslaved people formed the overwhelming majority of the population, and many had been born in Africa. Violence, disease, and exhausting work produced high mortality, so slave traders continually forced more captives across the Atlantic.</p>
            <p>Colonial society also included free people of color, many of whom owned property yet faced racial discrimination, and a smaller white population divided by wealth and political interest. These unequal groups entered the revolutionary crisis with different demands.</p>
            <div className="insight-card"><span>Resistance before 1791</span><p>Revolution did not begin from silence. Enslaved people preserved knowledge, created communities, slowed work, escaped, organized, and joined maroon settlements. The uprising grew from this longer history of refusal.</p></div>
          </section>
          <section id="uprising"><p className="chapter-label">03 / THE 1791 UPRISING</p><h2>Freedom becomes a mass demand</h2>
            <p>In August 1791, coordinated revolt erupted across the northern plain. Enslaved workers attacked the plantation system that confined them, and the conflict rapidly spread. The uprising’s participants brought military experience, political goals, spiritual traditions, and knowledge of the land.</p>
            <p>Women served as organizers, fighters, nurses, intelligence gatherers, and community leaders. Their participation is often less visible in surviving records, but the revolution depended on labor and resistance far beyond the battlefield.</p>
            <p>By 1793, civil war and foreign invasion pushed French commissioners toward emancipation. In February 1794, revolutionary France abolished slavery in its colonies. Toussaint Louverture then allied with France and became the most powerful leader in Saint-Domingue, helping defeat Spanish and British forces.</p>
          </section>
          <section id="war"><p className="chapter-label">04 / A SHIFTING WAR</p><h2>Liberty, authority, and betrayal</h2>
            <p>Louverture worked to rebuild production and consolidate power. His 1801 constitution made him governor for life and outlawed slavery, although it stopped short of declaring independence and imposed compulsory labor policies that many former slaves resisted.</p>
            <p>Napoleon Bonaparte responded with a large military expedition in 1802. French officers seized Toussaint under false assurances, deported him, and imprisoned him in the Jura Mountains, where he died in 1803.</p>
            <p>French actions elsewhere in the Caribbean, together with reports of restored slavery, made the danger unmistakable. Under Dessalines and other generals, forces that had once fought one another united against France. Disease devastated the French army, but Haitian military organization and determination were decisive.</p>
          </section>
          <section id="independence"><p className="chapter-label">05 / INDEPENDENCE</p><h2>A colonial name is cast aside</h2>
            <p>After victory at Vertières on November 18, 1803, the remaining French forces withdrew. On January 1, 1804, Dessalines and other generals proclaimed independence at Gonaïves.</p>
            <p>The new state adopted the name Haiti, from the Indigenous Taíno name Ayiti, rejecting “Saint-Domingue,” the name imposed by French colonial rule. Haiti became the second independent country in the Americas and the first modern nation created by a successful revolt of enslaved people.</p>
            <p>Independence did not end conflict or inequality. The war had destroyed lives and infrastructure, while slaveholding powers treated the new nation as a threat. The United States withheld formal recognition until 1862.</p>
          </section>
          <section id="legacy"><p className="chapter-label">06 / GLOBAL LEGACY</p><h2>Freedom that changed the Atlantic world</h2>
            <ul className="significance-list">
              <li><strong>It abolished slavery.</strong><span>Revolutionaries converted emancipation from an imperial promise into a defended political reality.</span></li>
              <li><strong>It defeated empire.</strong><span>Formerly enslaved people overcame forces sent by one of Europe’s most powerful states.</span></li>
              <li><strong>It expanded possibility.</strong><span>Haiti inspired enslaved and free Black communities while terrifying governments invested in slavery.</span></li>
              <li><strong>It reshaped the Americas.</strong><span>War, migration, diplomacy, and France’s collapsing imperial ambitions altered societies far beyond the island.</span></li>
              <li><strong>It remains collective history.</strong><span>Remembering only famous generals obscures the thousands whose resistance made independence possible.</span></li>
            </ul>
          </section>
          <section className="mini-timeline"><p className="chapter-label">A BRIEF TIMELINE</p>{milestones.map(([year,event])=><div key={year}><strong>{year}</strong><p>{event}</p></div>)}</section>
          <section className="sources" id="sources"><p className="chapter-label">SOURCES & FURTHER READING</p><h2>Continue exploring</h2>
            <p>This entry centers the revolution’s collective character while distinguishing its changing alliances, military leadership, and international setting.</p>
            <ol>
              <li><a href="https://guides.loc.gov/haiti-reimagined" target="_blank" rel="noreferrer"><strong>Library of Congress</strong><span>Haiti Reimagined: an overview and research guide ↗</span></a></li>
              <li><a href="https://guides.loc.gov/women-in-the-french-revolution/women-haitian-revolution" target="_blank" rel="noreferrer"><strong>Library of Congress</strong><span>Women in the Haitian Revolution ↗</span></a></li>
              <li><a href="https://nmaahc.si.edu/latinx/toussaint-louverture" target="_blank" rel="noreferrer"><strong>Smithsonian NMAAHC</strong><span>Toussaint Louverture and the wider revolution ↗</span></a></li>
              <li><a href="https://history.state.gov/milestones/1784-1800/haitian-rev" target="_blank" rel="noreferrer"><strong>U.S. Office of the Historian</strong><span>The Haitian Revolution and its diplomatic context ↗</span></a></li>
              <li><a href="https://americanhistory.si.edu/explore/exhibitions/american-democracy/online/great-leap/great-debates/revolutionary-world" target="_blank" rel="noreferrer"><strong>Smithsonian National Museum of American History</strong><span>Haiti in a revolutionary Atlantic world ↗</span></a></li>
            </ol>
          </section>
          <nav className="story-pagination" aria-label="Story navigation"><a href="/stories/mansa-musa-pilgrimage">← Mansa Musa’s Pilgrimage</a><a className="next-story" href="/stories/harriet-tubman-escapes">Next story<br/><strong>Harriet Tubman Escapes →</strong></a></nav>
        </div>
      </div>
    </article>
  </main>
}
