import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Harriet Tubman Escapes | The Black History Codex",
  description: "How Harriet Tubman escaped slavery in 1849—and transformed her freedom into a lifelong struggle for the freedom of others.",
  openGraph: { title: "Harriet Tubman Escapes", description: "The 1849 journey that began Harriet Tubman’s life as a freedom fighter.", images: [{ url: "https://black-history-codex.kenshinsega.chatgpt.site/harriet-tubman-hero.png", width: 1536, height: 1024, alt: "Editorial illustration of freedom seekers moving through a Maryland woodland before dawn" }] },
  twitter: { card: "summary_large_image", title: "Harriet Tubman Escapes", description: "The 1849 journey that began Harriet Tubman’s life as a freedom fighter.", images: ["https://black-history-codex.kenshinsega.chatgpt.site/harriet-tubman-hero.png"] },
};

const facts = [
  ["Born", "Araminta Ross, c. 1822"], ["Escape", "Fall 1849"],
  ["Journey", "Maryland to Philadelphia"], ["Return missions", "About 13, 1850–1860"],
];
const milestones = [
  ["c. 1822", "Araminta Ross is born enslaved in Dorchester County on Maryland’s Eastern Shore."],
  ["c. 1835", "An overseer’s heavy metal weight strikes her head, causing lasting pain and sleeping spells."],
  ["1844", "She marries John Tubman, a free Black man, and takes the name Harriet Tubman."],
  ["September 1849", "Tubman initially leaves with brothers Ben and Henry; the brothers turn back."],
  ["Fall 1849", "She escapes again on her own and reaches freedom in Philadelphia."],
  ["1850–1860", "Tubman repeatedly returns to Maryland, guiding about 70 relatives and friends to freedom."],
  ["1863", "During the Civil War, Tubman helps lead the Combahee Ferry Raid, which frees more than 700 people."],
];

export default function HarrietTubmanStory() {
  return <main className="article-page tubman-page">
    <header className="article-header">
      <a className="brand" href="/" aria-label="The Black History Codex home"><span className="brand-mark">BHC</span><span><strong>The Black History</strong><em>Codex</em></span></a>
      <a className="back-link" href="/#explore">← Back to the collection</a>
    </header>
    <article>
      <section className="article-hero">
        <div className="article-kicker">People <span>•</span> Resistance & Freedom <span>•</span> 1849</div>
        <h1>Harriet Tubman<br/><em>Escapes</em></h1>
        <p>She took freedom for herself—then returned again and again to help family and friends claim it too.</p>
        <div className="article-hero-art tubman-art" role="img" aria-label="Editorial illustration of Black freedom seekers moving through a Maryland woodland before dawn"><span>Original editorial illustration</span></div>
      </section>
      <section className="article-facts" aria-label="Key facts">{facts.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
      <div className="article-layout">
        <aside className="article-nav"><p>In this entry</p><a href="#overview">01 — Overview</a><a href="#eastern-shore">02 — The Eastern Shore</a><a href="#decision">03 — The decision</a><a href="#journey">04 — The journey</a><a href="#network">05 — A network, not a train</a><a href="#return">06 — Freedom shared</a><a href="#legacy">07 — A larger life</a><a href="#sources">Sources</a></aside>
        <div className="article-body">
          <section id="overview"><p className="chapter-label">01 / OVERVIEW</p><h2>Freedom was an action</h2>
            <p className="lead">In the fall of 1849, Harriet Tubman escaped from Maryland’s Eastern Shore and reached Philadelphia. Her journey was a profound act of self-emancipation—but it was not yet the story for which she would become famous.</p>
            <p>Tubman’s first escape and her later rescue missions are often compressed into one legend. The distinction matters. In 1849, she was a woman at risk of sale who made a dangerous journey to free herself. Only after reaching Philadelphia did she develop the contacts, experience, and resources that helped her return for others.</p>
            <p>Her achievement also belonged to a wider world of Black resistance: family knowledge, free Black communities, mariners, laborers, religious faith, abolitionists, safe-house operators, and other freedom seekers all helped create routes away from slavery.</p>
          </section>
          <blockquote className="article-quote">“I was free, and they should be free.”</blockquote>
          <section id="eastern-shore"><p className="chapter-label">02 / MARYLAND’S EASTERN SHORE</p><h2>The landscape that shaped her</h2>
            <p>Born Araminta Ross around 1822, Tubman grew up enslaved in Dorchester County. As a child she was hired out, separated from her family, and forced into domestic and outdoor labor. Three older sisters were sold away to the Deep South.</p>
            <p>As an adolescent, Tubman refused to help an overseer restrain another freedom seeker. The overseer threw a heavy metal weight that struck her head. She survived, but experienced pain, vivid dreams, and sudden sleeping spells for the rest of her life.</p>
            <p>Work in timber fields, marshes, waterways, and farms gave Tubman practical knowledge of the region. Black mariners carried news between the Eastern Shore, Baltimore, Delaware, and Pennsylvania. Free and enslaved Black people lived and worked near one another, creating relationships that could quietly move information.</p>
            <div className="insight-card"><span>Knowledge was a survival tool</span><p>Tubman could not rely on a printed map. She understood waterways, tides, forests, weather, night skies, roads, and human relationships—knowledge built through labor and community.</p></div>
          </section>
          <section id="decision"><p className="chapter-label">03 / THE DECISION</p><h2>The threat of being sold away</h2>
            <p>Edward Brodess, the man who enslaved Tubman, died in March 1849. His estate’s debts increased the danger that Tubman and members of her family would be sold. For an enslaved family that had already lost three daughters to sale, the threat was immediate and devastating.</p>
            <p>On September 17, Tubman left with her brothers Ben and Henry. A newspaper advertisement offered rewards for their capture. The brothers, frightened by the danger and family separation, forced the group to turn back.</p>
            <p>Tubman soon made a second attempt alone. The surviving record cannot reconstruct every stop or helper with certainty. Secrecy protected people at the time—and limits what historians can responsibly claim today.</p>
          </section>
          <section id="journey"><p className="chapter-label">04 / THE JOURNEY</p><h2>North through a dangerous borderland</h2>
            <p>Tubman traveled roughly one hundred miles through Maryland and Delaware toward Pennsylvania. She moved across a landscape patrolled by slave catchers and watched by people who could earn money by returning her to bondage.</p>
            <p>Her exact route remains uncertain, but she likely drew on the interconnected knowledge of free Black residents, sailors, workers, and trusted antislavery contacts. Reaching Pennsylvania placed her beyond Maryland’s slavery laws, though no Black freedom seeker was entirely safe from kidnapping or federal fugitive-slave enforcement.</p>
            <p>In Philadelphia, Tubman worked, built relationships with abolitionists, and encountered one of the nation’s most active free Black communities. Freedom brought possibility, but it also sharpened the pain of separation from everyone she loved.</p>
          </section>
          <section id="network"><p className="chapter-label">05 / THE UNDERGROUND RAILROAD</p><h2>A network, not a train</h2>
            <p>The Underground Railroad was not a single organization, marked route, or literal railroad. It was a changing collection of people, homes, transportation links, meeting places, knowledge, and acts of defiance.</p>
            <p>Black people were central to that system as freedom seekers and organizers. Free Black communities shared information, shelter, employment, and transportation. Some white abolitionists and religious communities also assisted, but popular versions that place white rescuers at the center erase Black initiative.</p>
            <p>Stories about coded quilts or a universal catalog of secret songs are compelling, but the evidence does not support treating them as a standard map used by all freedom seekers. Each escape depended on specific people, conditions, and choices.</p>
          </section>
          <section id="return"><p className="chapter-label">06 / FREEDOM SHARED</p><h2>She went back</h2>
            <p>In 1850, Tubman returned to help her niece Kessiah Bowley and Kessiah’s children escape after an auction. Over the following decade she made about thirteen journeys to the Eastern Shore and guided approximately seventy relatives and friends to freedom.</p>
            <p>Those missions required planning, money, trusted contacts, disguise, timing, and the courage of every person who left. Tubman became famous as a “conductor,” but the people traveling with her were not passive passengers. They accepted enormous risk to emancipate themselves.</p>
            <p>The Fugitive Slave Act of 1850 made capture more dangerous even in free states, pushing many freedom seekers toward Canada. Tubman adapted her routes while working to keep families together—including eventually helping her parents reach safety.</p>
          </section>
          <section id="legacy"><p className="chapter-label">07 / A LARGER LIFE</p><h2>More than the Underground Railroad</h2>
            <ul className="significance-list">
              <li><strong>She emancipated herself.</strong><span>Tubman’s public life began with her own refusal to remain someone else’s property.</span></li>
              <li><strong>She made freedom collective.</strong><span>Her return missions grew from family loyalty and collaboration with a broad antislavery network.</span></li>
              <li><strong>She served the Union.</strong><span>During the Civil War she worked as a nurse, cook, scout, intelligence operative, and leader in the Combahee Ferry Raid.</span></li>
              <li><strong>She fought after slavery.</strong><span>Tubman supported women’s suffrage and created a home where elderly Black people could receive care.</span></li>
              <li><strong>Her history exceeds legend.</strong><span>The documented record is powerful enough without inflated rescue totals or invented routes.</span></li>
            </ul>
          </section>
          <section className="mini-timeline"><p className="chapter-label">A BRIEF TIMELINE</p>{milestones.map(([year,event])=><div key={year}><strong>{year}</strong><p>{event}</p></div>)}</section>
          <section className="sources" id="sources"><p className="chapter-label">SOURCES & FURTHER READING</p><h2>Continue exploring</h2>
            <p>This entry separates Tubman’s 1849 escape from her later rescue missions and avoids treating uncertain routes, inflated totals, or folklore as settled fact.</p>
            <ol>
              <li><a href="https://www.nps.gov/hatu/learn/historyculture/htubman.htm" target="_blank" rel="noreferrer"><strong>National Park Service</strong><span>Harriet Tubman’s life, landscape, escape, and return missions ↗</span></a></li>
              <li><a href="https://www.nps.gov/articles/new-beginnings-harriet-tubman-jacob-jackson-eastern-shore.htm" target="_blank" rel="noreferrer"><strong>National Park Service</strong><span>The 1849 escape and Eastern Shore networks ↗</span></a></li>
              <li><a href="https://nmaahc.si.edu/explore/stories/harriet-tubman" target="_blank" rel="noreferrer"><strong>Smithsonian NMAAHC</strong><span>Harriet Tubman: Life, Liberty and Legacy ↗</span></a></li>
              <li><a href="https://www.archives.gov/research/african-americans/individuals/harriet-tubman" target="_blank" rel="noreferrer"><strong>National Archives</strong><span>Records documenting Tubman’s life and service ↗</span></a></li>
              <li><a href="https://www.nps.gov/articles/harriet-tubman-and-the-underground-railroad.htm" target="_blank" rel="noreferrer"><strong>National Park Service</strong><span>Tubman and the Underground Railroad network ↗</span></a></li>
              <li><a href="https://www.archives.gov/legislative/resources/education/tubman" target="_blank" rel="noreferrer"><strong>National Archives</strong><span>Tubman’s Civil War service and pension claim ↗</span></a></li>
            </ol>
          </section>
          <nav className="story-pagination" aria-label="Story navigation"><a href="/stories/haiti-declares-independence">← Haiti Declares Independence</a><span>Next story<br/><strong>The Greenwood District →</strong></span></nav>
        </div>
      </div>
    </article>
  </main>
}
