import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Montgomery Bus Boycott | The Black History Codex",
  description: "How Black Montgomery organized a 381-day mass boycott that challenged segregated buses through transportation, collective discipline, and legal action.",
  openGraph: { title: "The Montgomery Bus Boycott", description: "The 381-day movement powered by organizers, walkers, drivers, churches, workers, and four women plaintiffs.", images: [{ url: "https://black-history-codex.kenshinsega.chatgpt.site/montgomery-boycott-hero.png", width: 1536, height: 1024, alt: "Editorial illustration of Black Montgomery residents walking during the bus boycott" }] },
  twitter: { card: "summary_large_image", title: "The Montgomery Bus Boycott", description: "The 381-day movement powered by organizers, walkers, drivers, churches, workers, and four women plaintiffs.", images: ["https://black-history-codex.kenshinsega.chatgpt.site/montgomery-boycott-hero.png"] },
};

const facts = [
  ["Boycott", "December 5, 1955–December 20, 1956"], ["Duration", "381 days"],
  ["Organization", "Montgomery Improvement Association"], ["Legal victory", "Browder v. Gayle"],
];
const milestones = [
  ["1946", "The Women’s Political Council is founded in Montgomery and later makes bus treatment a central issue."],
  ["March 2, 1955", "Fifteen-year-old Claudette Colvin is arrested for refusing to surrender her bus seat."],
  ["October 21, 1955", "Eighteen-year-old Mary Louise Smith is arrested after refusing to give up her seat."],
  ["December 1, 1955", "Police arrest Rosa Parks on the Cleveland Avenue bus."],
  ["December 5, 1955", "A highly successful one-day boycott becomes a continuing campaign; the MIA is formed."],
  ["February 1, 1956", "Browder v. Gayle is filed in federal court by four Black women plaintiffs."],
  ["June 5, 1956", "A federal district court rules Alabama’s bus segregation laws unconstitutional."],
  ["November 13, 1956", "The U.S. Supreme Court affirms the lower court’s judgment."],
  ["December 20–21, 1956", "The order reaches Montgomery; the boycott ends and integrated service begins."],
];

export default function MontgomeryBoycottStory() {
  return <main className="article-page montgomery-page">
    <header className="article-header">
      <a className="brand" href="/" aria-label="The Black History Codex home"><span className="brand-mark">BHC</span><span><strong>The Black History</strong><em>Codex</em></span></a>
      <a className="back-link" href="/#explore">← Back to the collection</a>
    </header>
    <article>
      <section className="article-hero">
        <div className="article-kicker">Movements <span>•</span> Civil Rights Era <span>•</span> 1955–1956</div>
        <h1>The Montgomery<br/><em>Bus Boycott</em></h1>
        <p>For 381 days, a community turned the daily act of getting to work into a disciplined campaign against segregation.</p>
        <div className="article-hero-art montgomery-art" role="img" aria-label="Editorial illustration of Black Montgomery residents walking while an empty city bus passes during the boycott"><span>Original editorial illustration</span></div>
      </section>
      <section className="article-facts" aria-label="Key facts">{facts.map(([label,value])=><div key={label}><span>{label}</span><strong>{value}</strong></div>)}</section>
      <div className="article-layout">
        <aside className="article-nav"><p>In this entry</p><a href="#overview">01 — Overview</a><a href="#roots">02 — Before December</a><a href="#parks">03 — Rosa Parks</a><a href="#launch">04 — Launching the boycott</a><a href="#system">05 — A city within a city</a><a href="#pressure">06 — Repression and resolve</a><a href="#court">07 — Browder v. Gayle</a><a href="#legacy">08 — Meaning and legacy</a><a href="#sources">Sources</a></aside>
        <div className="article-body">
          <section id="overview"><p className="chapter-label">01 / OVERVIEW</p><h2>A movement, not a moment</h2>
            <p className="lead">The Montgomery Bus Boycott did not begin simply because one tired woman spontaneously stayed seated. Rosa Parks’ arrest became the catalyst for a campaign that Black women had prepared for years and that thousands of residents sustained for 381 days.</p>
            <p>The boycott depended on people who walked before dawn, shared cars, dispatched rides, raised money, repaired vehicles, hosted meetings, preached, negotiated, filed lawsuits, and continued despite arrest, harassment, job pressure, and bombing.</p>
            <p>Martin Luther King Jr. became its most visible spokesperson, but visibility is not the same as sole authorship. The movement grew from the organizing of the Women’s Political Council, E.D. Nixon and the NAACP, Black churches, labor networks, domestic workers, teachers, students, and ordinary bus riders.</p>
          </section>
          <blockquote className="article-quote">A single refusal became a mass movement because a community already knew how to organize.</blockquote>
          <section id="roots"><p className="chapter-label">02 / BEFORE DECEMBER</p><h2>Years of protest beneath the headline</h2>
            <p>Black riders made up most of Montgomery’s bus customers, yet they faced segregated seating, abusive treatment, and arbitrary power from white drivers. Riders could be forced to pay at the front, exit, and reboard through the rear—sometimes watching the bus leave with their fare.</p>
            <p>The Women’s Political Council, founded in 1946 by Black professional women, documented complaints and pressed officials for reform. Under Jo Ann Robinson’s leadership, the council warned Mayor W.A. Gayle in 1954 that Black organizations were discussing a citywide boycott.</p>
            <p>Resistance was already visible. On March 2, 1955, police arrested fifteen-year-old Claudette Colvin after she refused to surrender her seat. Mary Louise Smith, eighteen, was arrested for the same reason in October. Their courage became part of the legal foundation of the eventual victory.</p>
            <div className="insight-card"><span>Why earlier cases matter</span><p>Remembering Colvin and Smith corrects the idea that resistance began in December. It also shows how movements make strategic choices shaped by age, class, respectability politics, and public prejudice.</p></div>
          </section>
          <section id="parks"><p className="chapter-label">03 / ROSA PARKS</p><h2>Prepared, respected, and unwilling to move</h2>
            <p>Rosa Parks was a forty-two-year-old seamstress and seasoned activist. She had served as secretary of Montgomery’s NAACP branch, investigated racial violence, worked with youth, and attended an organizing workshop at the Highlander Folk School.</p>
            <p>On December 1, 1955, driver James Blake ordered Parks and three other Black passengers to vacate a row so a white passenger could sit. Parks refused. Police arrested her for violating Montgomery’s segregation ordinance.</p>
            <p>Her physical weariness was real, but the famous “tired seamstress” story becomes misleading when it erases her political experience. Parks later explained that she was tired of giving in—not merely tired from a day’s work.</p>
          </section>
          <section id="launch"><p className="chapter-label">04 / LAUNCHING THE BOYCOTT</p><h2>Leaflets moved faster than permission</h2>
            <p>Jo Ann Robinson and colleagues used Alabama State College equipment overnight to produce tens of thousands of leaflets calling for a one-day boycott on December 5, the date of Parks’ trial. Students and community networks carried them across the city.</p>
            <p>The buses ran nearly empty. That afternoon, leaders formed the Montgomery Improvement Association, or MIA, and elected twenty-six-year-old Dexter Avenue Baptist Church pastor Martin Luther King Jr. as president. Rosa Parks joined its executive board.</p>
            <p>Thousands packed Holt Street Baptist Church that evening and supported continuing the protest. Their initial demands were moderate: courteous treatment, first-come seating within segregated sections, and employment of Black drivers on predominantly Black routes. City and bus officials refused meaningful compromise.</p>
          </section>
          <section id="system"><p className="chapter-label">05 / TRANSPORTATION</p><h2>A city within a city</h2>
            <p>A boycott survives only if people can still live. Many participants walked miles to domestic jobs, hospitals, schools, shops, and factories. Others rode in church station wagons, private cars, taxis, or horse-drawn vehicles.</p>
            <p>The MIA developed a large volunteer carpool with dozens of dispatch points and roughly one hundred pickup stations. Drivers followed schedules, mechanics kept cars operating, dispatchers matched riders to routes, and donations from across the country helped pay for fuel and repairs.</p>
            <p>Women formed the majority of bus riders and carried much of the boycott’s daily burden. Domestic workers in particular risked exhaustion and lost employment, while some white employers drove workers or pressured officials because the transportation crisis disrupted household labor.</p>
          </section>
          <section id="pressure"><p className="chapter-label">06 / REPRESSION & RESOLVE</p><h2>The city attacked the infrastructure</h2>
            <p>Officials targeted the carpool through traffic tickets, insurance pressure, surveillance, and legal action. A grand jury indicted scores of boycott leaders under an old antiboycott law; King was convicted and fined.</p>
            <p>White supremacists bombed King’s home and later attacked churches and leaders’ homes. At mass meetings, organizers repeatedly chose to continue nonviolent resistance rather than answer terror with retaliation.</p>
            <p>The boycott was not effortless unity. Participants debated strategy, leadership, money, negotiations, and personal risk. Its strength came from maintaining enough cooperation across those differences to keep the buses empty.</p>
          </section>
          <section id="court"><p className="chapter-label">07 / BROWDER v. GAYLE</p><h2>Four women carried the constitutional case</h2>
            <p>Because Parks’ criminal case moved through Alabama courts, attorneys Fred Gray and Charles Langford pursued a direct federal challenge to bus segregation. Browder v. Gayle was filed on behalf of Aurelia Browder, Claudette Colvin, Susie McDonald, and Mary Louise Smith.</p>
            <p>On June 5, 1956, a three-judge federal panel ruled that segregated bus seating violated the Fourteenth Amendment. Montgomery and Alabama appealed, but the U.S. Supreme Court affirmed the judgment on November 13.</p>
            <p>The federal order reached Montgomery on December 20. After 381 days, the MIA ended the boycott, and integrated bus service began the next morning. The legal ruling and the economic protest had worked together: the case ended the law while collective action made the system impossible to ignore.</p>
          </section>
          <section id="legacy"><p className="chapter-label">08 / MEANING & LEGACY</p><h2>What 381 days demonstrated</h2>
            <ul className="significance-list">
              <li><strong>Preparation makes moments possible.</strong><span>Women organizers had researched, negotiated, and planned before Parks’ arrest.</span></li>
              <li><strong>Participation was the power.</strong><span>The boycott endured because thousands repeatedly chose inconvenience and risk over segregated service.</span></li>
              <li><strong>Logistics are movement work.</strong><span>Cars, schedules, phones, fuel, repairs, donations, and pickup points turned principle into sustained action.</span></li>
              <li><strong>Courts and protest reinforced each other.</strong><span>Browder v. Gayle supplied the constitutional judgment while the boycott maintained public pressure.</span></li>
              <li><strong>Victory did not end white resistance.</strong><span>Integrated buses brought new violence and intimidation, and the broader struggle against segregation continued.</span></li>
            </ul>
          </section>
          <section className="mini-timeline"><p className="chapter-label">A BRIEF TIMELINE</p>{milestones.map(([year,event])=><div key={year}><strong>{year}</strong><p>{event}</p></div>)}</section>
          <section className="sources" id="sources"><p className="chapter-label">SOURCES & FURTHER READING</p><h2>Continue exploring</h2>
            <p>This entry treats Parks as an experienced activist, names the women whose organizing and legal cases shaped the campaign, and presents transportation logistics as essential movement history.</p>
            <ol>
              <li><a href="https://www.loc.gov/exhibitions/rosa-parks-in-her-own-words/about-this-exhibition/the-bus-boycott/" target="_blank" rel="noreferrer"><strong>Library of Congress</strong><span>Rosa Parks: In Her Own Words—the bus boycott ↗</span></a></li>
              <li><a href="https://www.nps.gov/articles/montgomery-bus-boycott.htm" target="_blank" rel="noreferrer"><strong>National Park Service</strong><span>The boycott’s organizing, carpool, and chronology ↗</span></a></li>
              <li><a href="https://nmaahc.si.edu/explore/stories/jo-ann-robinson-heroine-montgomery-bus-boycott" target="_blank" rel="noreferrer"><strong>Smithsonian NMAAHC</strong><span>Jo Ann Robinson and the Women’s Political Council ↗</span></a></li>
              <li><a href="https://rediscovering-black-history.blogs.archives.gov/2015/12/01/60th-anniversary-of-the-montgomery-bus-boycott/" target="_blank" rel="noreferrer"><strong>National Archives</strong><span>Browder v. Gayle and its four women plaintiffs ↗</span></a></li>
              <li><a href="https://www.archives.gov/education/lessons/rosa-parks" target="_blank" rel="noreferrer"><strong>National Archives</strong><span>Rosa Parks’ arrest records and the federal ruling ↗</span></a></li>
              <li><a href="https://kinginstitute.stanford.edu/montgomery-bus-boycott" target="_blank" rel="noreferrer"><strong>Stanford King Institute</strong><span>The campaign’s roots, leadership, and mass participation ↗</span></a></li>
            </ol>
          </section>
          <nav className="story-pagination" aria-label="Story navigation"><a href="/stories/greenwood-district">← The Greenwood District</a><span>Next story<br/><strong>The Black Panther Party →</strong></span></nav>
        </div>
      </div>
    </article>
  </main>
}
