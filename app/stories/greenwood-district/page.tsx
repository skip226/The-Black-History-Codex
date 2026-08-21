import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Greenwood District | The Black History Codex",
  description: "How Black Tulsans built Greenwood, survived the 1921 Tulsa Race Massacre, and rebuilt despite violence and obstruction.",
  openGraph: { title: "The Greenwood District", description: "The community known as Black Wall Street—before, during, and after the 1921 Tulsa Race Massacre.", images: [{ url: "https://black-history-codex.kenshinsega.chatgpt.site/greenwood-hero.png", width: 1536, height: 1024, alt: "Editorial illustration of Tulsa’s Greenwood District around 1920" }] },
  twitter: { card: "summary_large_image", title: "The Greenwood District", description: "The community known as Black Wall Street—before, during, and after the 1921 Tulsa Race Massacre.", images: ["https://black-history-codex.kenshinsega.chatgpt.site/greenwood-hero.png"] },
};

const facts = [
  ["Community", "Greenwood, Tulsa"], ["Massacre", "May 31–June 1, 1921"],
  ["Destruction", "About 35 city blocks"], ["Estimated deaths", "50 to 300"],
];
const milestones = [
  ["1906", "O.W. Gurley purchases land in north Tulsa and helps establish Greenwood’s commercial district."],
  ["1910s", "Black-owned businesses, churches, schools, newspapers, theaters, and professional offices expand."],
  ["May 30, 1921", "Dick Rowland is arrested after an elevator encounter with Sarah Page is sensationalized as an assault."],
  ["May 31, 1921", "Armed white crowds gather at the courthouse; confrontation escalates into an attack on Greenwood."],
  ["June 1, 1921", "White attackers loot and burn the district; thousands of Black residents are displaced or interned."],
  ["1921–1922", "Residents resist efforts to block reconstruction and begin rebuilding homes and businesses."],
  ["2001", "The Oklahoma commission’s report documents the massacre and recommends reparative measures."],
  ["2025", "The U.S. Justice Department publishes its first full federal accounting; Tulsa’s graves investigation continues."],
];

export default function GreenwoodStory() {
  return <main className="article-page greenwood-page">
    <header className="article-header">
      <a className="brand" href="/" aria-label="The Black History Codex home"><span className="brand-mark">BHC</span><span><strong>The Black History</strong><em>Codex</em></span></a>
      <a className="back-link" href="/#explore">← Back to the collection</a>
    </header>
    <article>
      <section className="article-hero">
        <div className="article-kicker">Communities <span>•</span> Reconstruction & Renaissance <span>•</span> 1921</div>
        <h1>The Greenwood<br/><em>District</em></h1>
        <p>Black Tulsans built a center of commerce and community, survived its destruction, and refused to let Greenwood disappear.</p>
        <div className="article-hero-art greenwood-art" role="img" aria-label="Editorial illustration of Black residents, businesses, and street life in Tulsa’s Greenwood District around 1920"><span>Original editorial illustration</span></div>
      </section>
      <section className="article-facts" aria-label="Key facts">{facts.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
      <div className="article-layout">
        <aside className="article-nav"><p>In this entry</p><a href="#overview">01 — Overview</a><a href="#built">02 — What Greenwood built</a><a href="#conditions">03 — Conditions for violence</a><a href="#massacre">04 — The massacre</a><a href="#aftermath">05 — Displacement and blame</a><a href="#rebuild">06 — Rebuilding</a><a href="#memory">07 — Memory and repair</a><a href="#sources">Sources</a></aside>
        <div className="article-body">
          <section id="overview"><p className="chapter-label">01 / OVERVIEW</p><h2>Begin with what existed</h2>
            <p className="lead">The story of Greenwood cannot begin with flames. Before white attackers devastated the district in 1921, Black Tulsans had built a dense community of homes, businesses, churches, schools, newspapers, entertainment, mutual aid, and professional life.</p>
            <p>Greenwood’s prosperity grew within segregation, not because segregation was beneficial. Racist laws and customs restricted where Black people could live, work, shop, and receive services. Residents responded by circulating money within their community and creating institutions that white Tulsa denied them.</p>
            <p>The phrase “Black Wall Street” captures Greenwood’s economic achievement, but it can flatten a complex neighborhood into a symbol of wealth. Greenwood included affluent entrepreneurs and professionals, wage workers, renters, domestic workers, children, elders, newcomers, and families building ordinary lives.</p>
          </section>
          <blockquote className="article-quote">Greenwood was not defined by how it burned. It was defined by what its people built—and rebuilt.</blockquote>
          <section id="built"><p className="chapter-label">02 / WHAT GREENWOOD BUILT</p><h2>An economy rooted in community</h2>
            <p>Black migrants came to Oklahoma seeking land, work, safety, and opportunity. In Tulsa, entrepreneurs including O.W. Gurley and J.B. Stradford developed property and businesses along Greenwood Avenue and nearby streets.</p>
            <p>By 1921, residents could find groceries, restaurants, hotels, barbershops, theaters, medical offices, law practices, newspapers, funeral homes, churches, schools, and fraternal organizations. Black professionals served customers excluded or mistreated elsewhere, while workers sustained the district through labor across Tulsa.</p>
            <p>Greenwood’s achievement should not be mistaken for universal comfort. Segregation constrained the community, unequal city services remained a reality, and many residents were working class. Its strength came from overlapping economic, family, religious, and civic relationships.</p>
            <div className="insight-card"><span>Beyond “Black Wall Street”</span><p>A business district is not only its balance sheets. Greenwood was also a place where people worshiped, learned, organized, raised children, rented rooms, cared for neighbors, and imagined futures.</p></div>
          </section>
          <section id="conditions"><p className="chapter-label">03 / CONDITIONS FOR VIOLENCE</p><h2>A rumor entered a prepared climate</h2>
            <p>In 1921, lynching and white mob violence were established instruments of racial control. Tulsa was sharply segregated, local newspapers trafficked in racist stereotypes, and white resentment targeted Black political, social, and economic independence.</p>
            <p>On May 30, nineteen-year-old Dick Rowland, a Black shoe shiner, encountered seventeen-year-old Sarah Page, a white elevator operator, in the Drexel Building. The surviving evidence does not establish an assault. Rowland was arrested the next day after sensational newspaper coverage inflamed the city.</p>
            <p>White men gathered outside the courthouse amid fears of a lynching. Black veterans and other residents, aware that authorities had failed to prevent an earlier Tulsa lynching, arrived armed to offer protection. After a confrontation and a gunshot, violence spread—but the destruction that followed was not an equal “race riot.” It was a coordinated assault on a Black district.</p>
          </section>
          <section id="massacre"><p className="chapter-label">04 / THE MASSACRE</p><h2>Greenwood was invaded</h2>
            <p>Through the night of May 31 and the morning of June 1, groups of armed white Tulsans moved into Greenwood. Attackers looted property, set homes and businesses on fire, and shot Black residents. Local authorities deputized and armed some white participants rather than protecting the district.</p>
            <p>Firefighters were threatened or prevented from controlling the fires. Survivors described airplanes overhead, and some reported attacks from the air; the precise extent of aircraft involvement remains debated in the historical record.</p>
            <p>By the time martial law took effect, approximately thirty-five city blocks had been ruined. More than one thousand homes and many businesses, churches, and institutions were destroyed. Credible death estimates range from about fifty to three hundred, reflecting missing records, hurried burials, and a long official failure to investigate.</p>
          </section>
          <section id="aftermath"><p className="chapter-label">05 / DISPLACEMENT & BLAME</p><h2>Victims were treated as prisoners</h2>
            <p>Thousands of Black residents were left homeless. More than six thousand were confined at locations including Convention Hall and the fairgrounds, and many could leave only when a white employer or citizen vouched for them.</p>
            <p>Officials and a grand jury shifted blame toward Black residents while white attackers largely escaped prosecution. Insurance companies rejected many claims, often invoking riot exclusions, and survivors received no meaningful compensation for destroyed property and stolen wealth.</p>
            <p>Relief organizations provided food, shelter, and medical care, but many families lived in tents for months. The disaster extended far beyond the visible ruins: deaths, injuries, displacement, lost records, interrupted education, stolen assets, and trauma shaped generations.</p>
          </section>
          <section id="rebuild"><p className="chapter-label">06 / REBUILDING</p><h2>Survival became resistance</h2>
            <p>Tulsa leaders attempted to prevent rebuilding by imposing a restrictive fire ordinance. Black attorney B.C. Franklin and other lawyers challenged the measure while residents repaired property, operated businesses from tents, and defended their ownership.</p>
            <p>Greenwood rebuilt with remarkable speed and again supported a thriving commercial district. This achievement was not evidence that the massacre’s harm had been erased. Reconstruction required residents to spend their own resources after government failed to protect them or provide restitution.</p>
            <p>Later policies brought new damage. Urban renewal and highway construction, especially Interstate 244, demolished homes and businesses and divided the neighborhood. Greenwood therefore faced not one isolated blow but repeated forms of dispossession.</p>
          </section>
          <section id="memory"><p className="chapter-label">07 / MEMORY & REPAIR</p><h2>The record is still being recovered</h2>
            <ul className="significance-list">
              <li><strong>Language matters.</strong><span>“Massacre” identifies organized racial violence more accurately than the long-used label “riot.”</span></li>
              <li><strong>Survivors preserved the truth.</strong><span>Families, Black newspapers, scholars, and community historians carried memories that institutions suppressed.</span></li>
              <li><strong>The death toll remains unresolved.</strong><span>Tulsa continues archaeological, forensic, and genealogical work to locate and identify possible victims.</span></li>
              <li><strong>Official acknowledgment came late.</strong><span>A 2001 state commission and a 2025 Justice Department review documented government failures and the scale of the attack.</span></li>
              <li><strong>Repair remains unfinished.</strong><span>Commemoration cannot by itself replace stolen property, lost opportunity, accountability, or survivor-centered justice.</span></li>
            </ul>
          </section>
          <section className="mini-timeline"><p className="chapter-label">A BRIEF TIMELINE</p>{milestones.map(([year,event])=><div key={year}><strong>{year}</strong><p>{event}</p></div>)}</section>
          <section className="sources" id="sources"><p className="chapter-label">SOURCES & FURTHER READING</p><h2>Continue exploring</h2>
            <p>This entry begins with Greenwood’s community life, uses casualty ranges rather than false precision, and distinguishes documented findings from unresolved questions.</p>
            <ol>
              <li><a href="https://www.okhistory.org/learn/trm" target="_blank" rel="noreferrer"><strong>Oklahoma Historical Society</strong><span>The Tulsa Race Massacre learning and document collection ↗</span></a></li>
              <li><a href="https://www.okhistory.org/publications/enc/entry?entry=GR024" target="_blank" rel="noreferrer"><strong>Oklahoma Historical Society</strong><span>Greenwood District history and development ↗</span></a></li>
              <li><a href="https://tulsahistory.org/exhibit/1921-tulsa-race-massacre/" target="_blank" rel="noreferrer"><strong>Museum of Tulsa History</strong><span>The 1921 Tulsa Race Massacre exhibit and archival resources ↗</span></a></li>
              <li><a href="https://www.justice.gov/hatecrimes/resource/review-and-evaluation-tulsa-race-massacre" target="_blank" rel="noreferrer"><strong>U.S. Department of Justice</strong><span>The federal review and evaluation published in 2025 ↗</span></a></li>
              <li><a href="https://www.cityoftulsa.org/1921GRAVES" target="_blank" rel="noreferrer"><strong>City of Tulsa</strong><span>The continuing graves investigation and identification work ↗</span></a></li>
              <li><a href="https://www.nps.gov/people/olivia-hooker.htm" target="_blank" rel="noreferrer"><strong>National Park Service</strong><span>Survivor Olivia Hooker’s life and testimony ↗</span></a></li>
            </ol>
          </section>
          <nav className="story-pagination" aria-label="Story navigation"><a href="/stories/harriet-tubman-escapes">← Harriet Tubman Escapes</a><span>Next story<br/><strong>The Montgomery Bus Boycott →</strong></span></nav>
        </div>
      </div>
    </article>
  </main>
}
