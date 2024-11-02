import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
        "status": "ok",
        "totalResults": 34,
        "articles": [
          {
            "source": { "id": null, "name": "Barron's" },
            "author": "Barron's",
            "title": "Boeing Stock Rises After Pay Offer to End Strike. Union Vote Due Next Week. - Barron's",
            "description": null,
            "url": "https://www.barrons.com/articles/boeing-strike-vote-stock-pay-e043d283",
            "urlToImage": null,
            "publishedAt": "2024-11-01T12:06:00Z",
            "content": null
          },
          {
            "source": { "id": "espn", "name": "ESPN" },
            "author": "David Schoenfield",
            "title": "Burnes to Mets? Adames to Braves? Best fits for top free agents not named Juan Soto - ESPN",
            "description": "Free agency starts at 5 p.m. ET on Nov. 4. Here are some pairings we'd love to see as this winter gets underway.",
            "url": "https://www.espn.com/mlb/insider/story/_/id/42117549/mlb-2024-25-best-fits-top-free-agents-burnes-alonso-adames-snell",
            "urlToImage": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2024%2F1031%2Fr1408720_1296x729_16%2D9.jpg",
            "publishedAt": "2024-11-01T11:51:50Z",
            "content": "We've barely had time to rest up from the 2024 MLB playoffs -- which ended with the Los Angeles Dodgershoisting the World Series trophy in the Bronx on Wednesday night -- but the offseason has arrive… [+545 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Dmitry Antonov",
            "title": "North Korea will back Russia until victory in Ukraine, foreign minister says - Reuters",
            "description": "North Korea will back Russia until it achieves victory in the Ukraine war, Foreign Minister Choe Son Hui said on Friday at talks in Moscow with Russian Foreign Minister Sergei Lavrov.",
            "url": "https://www.reuters.com/world/north-korean-foreign-minister-arrives-moscow-talks-2024-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/v2/4D5DBJ5WPRMEFBUV3IHP5UPPEE.jpg?auth=400053c37bd39da74752d4dc06970536ec70e1edfb7e666eb92aeb5f123553c1&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-11-01T11:32:58Z",
            "content": null
          },
          {
            "source": { "id": "the-washington-post", "name": "The Washington Post" },
            "author": "Matthew Cappucci",
            "title": "As daylight saving time ends this Sunday, it’s time to fall back - The Washington Post",
            "description": "Daylight saving time ends Sunday. While we’ll gain an hour of sleep, sunset will come an hour earlier. Here’s what to know about the time change.",
            "url": "https://www.washingtonpost.com/weather/2024/11/01/daylight-saving-ends-time-change-explained/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/H2SRPAVFGYI6NACC6TIRDSDC2E&w=1440",
            "publishedAt": "2024-11-01T11:32:28Z",
            "content": "Like it or not, its time to fall back again. Most of the United States and Canada is about to switch to standard time, moving clocks back an hour Sunday morning.\r\nThe official time change will come a… [+3123 chars]"
          },
          {
            "source": {
              "id": null,
              "name": "The Daily Galaxy --Great Discoveries Channel"
            },
            "author": null,
            "title": "Ozone Layer Healing Progresses as 2024 Antarctic Hole Ranks Among the Smallest in Decades - The Daily Galaxy --Great Discoveries Channel",
            "description": "The Antarctic ozone hole in 2024 measured the seventh smallest since recovery efforts began, highlighting progress made under the Montreal Protocol. Despite this improvement, the ozone layer remains far from fully restored, with scientists predicting full rec…",
            "url": "https://dailygalaxy.com/2024/11/ozone-layer-healing-2024-antarctic-hole/",
            "urlToImage": "https://dailygalaxy.com/wp-content/uploads/2024/10/Ozone-Layer-Healing-Progresses-as-2024-Antarctic-Hole-Ranks-Among-the-Smallest-in-Decades.jpg",
            "publishedAt": "2024-11-01T11:30:43Z",
            "content": "The ozone hole over Antarctica in 2024 measured the seventh smallest since global recovery efforts began in the early 1990s, signaling continued success in mitigating ozone depletion.\r\n According to … [+4572 chars]"
          },
          {
            "source": { "id": "associated-press", "name": "Associated Press" },
            "author": "HYUNG-JIN KIM, KIM TONG-HYUNG",
            "title": "North Korea boasts of ‘the world’s strongest’ missile, but experts say it’s too big to use in war - The Associated Press",
            "description": "North Korea is boasting that its new intercontinental ballistic missile is “the world’s strongest,” a claim seen as pure propaganda after experts assessed it as being too big to be useful in a war situation. The ICBM launched Thursday flew higher and for a lo…",
            "url": "https://apnews.com/article/north-korea-missile-launch-united-states-4173ce128b8336b2cb315a3bf62c6980",
            "urlToImage": "https://dims.apnews.com/dims4/default/7a18e99/2147483647/strip/true/crop/5000x2813+0+254/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fa4%2Fa6%2F6eecf7f3d3d1137b42c697b95f55%2F0a3b8378cc624747900df68325153ff6",
            "publishedAt": "2024-11-01T11:17:00Z",
            "content": "SEOUL, South Korea (AP) North Korea boasted Friday that the new intercontinental ballistic missile it just test-launched is the worlds strongest, a claim seen as pure propaganda after experts assesse… [+5799 chars]"
          },
          {
            "source": { "id": null, "name": "CNBC" },
            "author": "Spencer Kimball",
            "title": "Exxon earnings beat, increases fourth-quarter dividend - CNBC",
            "description": "Exxon's stock rose in early trading after beating earnings expectations.",
            "url": "https://www.cnbc.com/2024/11/01/exxon-xom-earnings-q3-2024.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107405697-1713966344506-gettyimages-1720749134-032a4887_xsrjjrhm.jpeg?v=1730454776&w=1920&h=1080",
            "publishedAt": "2024-11-01T10:45:32Z",
            "content": "Exxon Mobil beat third-quarter earnings expectations, as the oil major reached its highest liquids production level in more than four decades.\r\n\"This quarter is one of the best third quarters we've h… [+1102 chars]"
          },
          {
            "source": { "id": "reuters", "name": "Reuters" },
            "author": "Stella Qiu, Alun John",
            "title": "Markets start big month on cautious footing as US jobs data looms - Reuters",
            "description": "Markets started what could be a momentous month warily, with shares steady and Treasury yields near four-month highs ahead of U.S. jobs data, with volatility in British government bonds after this week's budget adding to the sense of nervousness.",
            "url": "https://www.reuters.com/markets/global-markets-wrapup-1-2024-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/v2/VYQYMB6E4JPTRMWAZMEOEJ5SZM.jpg?auth=1d33114f368dd918340c630770a0fb20f3b54e47e09430901ace99247554515e&height=1005&width=1920&quality=80&smart=true",
            "publishedAt": "2024-11-01T10:11:13Z",
            "content": null
          },
          {
            "source": { "id": null, "name": "BBC News" },
            "author": null,
            "title": "Dublin: Hoax Halloween parade see hundreds gather in streets - BBC.com",
            "description": "It's understood a rumour circulated online that a parade was due to take place on O'Connell Street.",
            "url": "https://www.bbc.com/news/articles/cjr4y1j91x7o",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/b74c/live/2f96e660-9832-11ef-b6b0-f17636916de7.jpg",
            "publishedAt": "2024-11-01T09:37:09Z",
            "content": "Hundreds lined O'Connell street for a parade that was not scheduled\r\nHundreds of people gathered in Dublin city centre on Thursday night for a Halloween parade which turned out to be a hoax.\r\nIt's un… [+911 chars]"
          },
          {
            "source": { "id": null, "name": "Salon" },
            "author": null,
            "title": "Bird flu detected in pigs for first time as confirmed human cases double in two weeks - Salon",
            "description": "Pigs can be infected with human and avian flu, upping chances for the virus to evolve and become infectious",
            "url": "https://www.salon.com/2024/11/01/bird-flu-detected-in-pigs-for-first-time-as-confirmed-human-cases-double-in-two-weeks/",
            "urlToImage": "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2024/10/pig_farm_1719491677.jpg",
            "publishedAt": "2024-11-01T09:20:00Z",
            "content": null
          },
          {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Alicia Wallace",
            "title": "Expect the unexpected in the jobs report - CNN",
            "description": "The final jobs report before Election Day presented a murky picture of the economy, with just 12,000 jobs added in October as hurricanes and striking workers muddied the data, according to Bureau of Labor Statistics data released Friday.",
            "url": "https://www.cnn.com/2024/11/01/economy/us-jobs-report-october-final/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2169811383.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-11-01T09:00:00Z",
            "content": "The final jobs report before Election Day presented a murky picture of the economy, with just 12,000 jobs added in October as hurricanes and striking workers muddied the data, according to Bureau of … [+1889 chars]"
          },
          {
            "source": { "id": null, "name": "WSB Atlanta" },
            "author": "WSBTV.com News Staff",
            "title": "Young Thug released from Fulton County Jail trial after pleading guilty in RICO trial - WSB Atlanta",
            "description": "In video captured by Channel 2 Action News, you can see Young Thug in the back seat of a Mercedes E 350 driven by one of his attorneys, Keith Adams.",
            "url": "https://www.wsbtv.com/news/local/fulton-county/young-thug-sentenced-ysl-rico-trial-after-pleading-guilty/CXWTWJ6LCNA23FIWL4SCKU5EXY/",
            "urlToImage": "https://cmg-cmg-tv-10010-prod.cdn.arcpublishing.com/resizer/SxSFCPL89-VLsiYKMMWcf3lURKg=/1440x810/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/cmg/2LQQTRQHMREGVPIRVOZF2XBXX4.jpeg",
            "publishedAt": "2024-11-01T08:51:20Z",
            "content": "ATLANTA — Jeffrey Williams, aka Young Thug, has been released from the Fulton County Jail.\r\nThe rappers attorney, Keith Adams, confirmed to Channel 2 investigative reporter Mark Winne that he and his… [+3163 chars]"
          },
          {
            "source": { "id": "associated-press", "name": "Associated Press" },
            "author": "WILL WEISSERT, COLLEEN LONG",
            "title": "Kamala Harris says Trump’s comment on women ‘is offensive to everybody’ - The Associated Press",
            "description": "Kamala Harris says Donald Trump’s comment that he would protect women whether they “like it or not” shows that the Republican presidential nominee does not understand women’s rights to make decisions about their own lives. Harris spoke Thursday in Wisconsin b…",
            "url": "https://apnews.com/article/harris-trump-election-f5903d49488ebc733d7ba5812b36f935",
            "urlToImage": "https://dims.apnews.com/dims4/default/7173098/2147483647/strip/true/crop/6026x3390+0+314/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F1c%2F1f%2F744b35dcbfe698c5aa8f948dd5e5%2F76e78126c974479f8cb1c79e2eb44d7b",
            "publishedAt": "2024-11-01T08:13:00Z",
            "content": "PHOENIX (AP) Kamala Harris said Thursday that Donald Trumps comment that he would protect women whether they like it or not shows that the Republican presidential nominee does not understand womens r… [+6094 chars]"
          },
          {
            "source": { "id": "axios", "name": "Axios" },
            "author": "Ina Fried",
            "title": "OpenAI's new search engine sets off sparks of change - Axios",
            "description": "The new ChatGPT search tool could speed a transition away from traditional search that many in the industry expect.",
            "url": "https://www.axios.com/2024/11/01/openai-search-business-chatgpt-disruption-google",
            "urlToImage": "https://images.axios.com/2CDAqkJm8gzAkUd2PLxvgwCSg7U=/0x0:1920x1080/1366x768/2024/10/31/1730402034081.jpg",
            "publishedAt": "2024-11-01T08:01:31Z",
            "content": "The addition of an ad-free search engine to ChatGPT will likely further shake up a search industry that has already seen the ground shift with the rise of generative AI.\r\nWhy it matters: Search is a … [+4082 chars]"
          },
          {
            "source": { "id": null, "name": "[Removed]" },
            "author": null,
            "title": "[Removed]",
            "description": "[Removed]",
            "url": "https://removed.com",
            "urlToImage": null,
            "publishedAt": "2024-11-01T07:58:00Z",
            "content": "[Removed]"
          },
          {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Oscar Holland",
            "title": "Look of the Week: Heidi Klum arrives at annual Halloween bash in elaborate E.T. costume - CNN",
            "description": "The most hotly anticipated costume of the spooky season is here — and the “Queen of Halloween” didn’t disappoint.",
            "url": "https://www.cnn.com/2024/11/01/style/heidi-klum-halloween-costume-et-lotw/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2182215988.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-11-01T07:42:00Z",
            "content": "Editors Note: Featuring the good, the bad and the ugly, Look of the Week is a regular series dedicated to unpacking the most talked about outfit of the last seven days.\r\nHeidi Klum phone home.\r\nThe m… [+3590 chars]"
          },
          {
            "source": { "id": null, "name": "Yahoo Entertainment" },
            "author": "Jori Epstein",
            "title": "With ‘season on the line,' Garrett Wilson and Davante Adams sparked Jets, Aaron Rodgers. Now what? - Yahoo Sports",
            "description": "Rodgers and his two star wideouts finally clicked in the second half of Thursday's win. But do the Jets have enough time to dig out of a hole this season?",
            "url": "https://sports.yahoo.com/with-season-on-the-line-garrett-wilson-and-davante-adams-sparked-jets-aaron-rodgers-now-what-071047957.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/n3NRS3IKqbZyjwU9IWxAtw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-10/2a68bcd0-981f-11ef-afff-61ba7ab851a3",
            "publishedAt": "2024-11-01T07:10:47Z",
            "content": "EAST RUTHERFORD, N.J. Facing third-and-19, down three points early in the fourth quarter, Aaron Rodgers made a decision.\r\nIf the weak-side safety dropped down, the New York Jets quarterback would giv… [+9059 chars]"
          },
          {
            "source": { "id": "cnn", "name": "CNN" },
            "author": "Eric Bradner",
            "title": "Trump says ‘war hawk’ Liz Cheney should be fired upon in escalation of violent rhetoric against his opponents - CNN",
            "description": "Donald Trump said former Rep. Liz Cheney is a “war hawk” who should be fired upon, as he raged against one of his most prominent intra-party critics while campaigning Thursday night in Arizona.",
            "url": "https://www.cnn.com/2024/11/01/politics/donald-trump-liz-cheney-war-hawk-battle/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2182209862.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-11-01T06:47:00Z",
            "content": "Donald Trump said former Rep. Liz Cheney is a war hawk who should be fired upon, as he raged against one of his most prominent intra-party critics while campaigning Thursday night in Arizona.\r\nShes a… [+3611 chars]"
          },
          {
            "source": { "id": null, "name": "BBC News" },
            "author": null,
            "title": "Spain floods: Nation mourns as death toll soars past 150 - BBC.com",
            "description": "At least 158 people have died in Spain's worst flooding disaster in decades as rescuers race to find victims.",
            "url": "https://www.bbc.com/news/articles/czxrnlld95zo",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/eb9f/live/31d87cf0-97b9-11ef-9260-19e6a950e830.jpg",
            "publishedAt": "2024-11-01T06:40:28Z",
            "content": "At least 158 people have died in Spain's worst flooding disaster in generations as rescuers battle odds to find survivors.\r\nOn Thursday more than 1,200 workers, aided by drones, were deployed to the … [+4121 chars]"
          },
          {
            "source": { "id": "al-jazeera-english", "name": "Al Jazeera English" },
            "author": "Al Jazeera",
            "title": "Transcript of Biden’s ‘garbage’ remarks altered by White House: AP - Al Jazeera English",
            "description": "The news agency says the email it obtained shows a White House transcript was altered despite stenographers’ objections.",
            "url": "https://www.aljazeera.com/news/2024/11/1/transcript-of-bidens-garbage-remarks-altered-by-white-house-ap",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2024/11/AP24304565275599-1730440518.jpg?resize=1920%2C1440",
            "publishedAt": "2024-11-01T06:13:22Z",
            "content": "An internal email obtained by The Associated Press news agency has revealed there was an internal disagreement at the White House over whom United States President Joe Biden referred to as garbage ea… [+4209 chars]"
          }
        ]
      }
      
  ];

  constructor(){
    super();
    console.log("hello")
    this.state={
      articles:  this.articles,
      loading:false
    }
  }

  async componentDidMount() {
    let url =
      " https://newsapi.org/v2/top-headlines?country=us&apiKey=b6b16f3f8e87436d8bba0dd8f0339769";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles:parsedData.articles})
  }
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) =>{
            return <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""}
                imageUrl={element.urlToImage} newsUrl={element.url} />

            </div>

          })}
        </div>
      </div>
    );
  }
}

export default News;
