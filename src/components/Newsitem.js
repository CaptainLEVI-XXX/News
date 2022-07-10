import React, { Component } from 'react'
import News from './News'
import Spinner from './Spinner';
import PropTypes from 'prop-types'



export default class Newsitem extends Component {
  static defaultProps = {
    pageSize:5,
    country:"in",
    category:"general"  }
  static propTypes={
    pageSize:PropTypes.number,
    country:PropTypes.string
    ,category:PropTypes.string
  }
  article=[
    {
    "source": {
    "id": null,
    "name": "The Tribune India"
    },
    "author": "The Tribune India",
    "title": "Punjab Police claim important leads in Sidhu Moosewala murder, detain 5 persons from Dehradun - The Tribune India",
    "description": "The Punjab Police on Monday said it has rounded up some people and got several important leads in the murder case of Sidhu Moosewala, even as CCTV footage has emerged on social media which shows the Punjabi singer&rsquo;s vehicle being followed just before he…",
    "url": "https://www.tribuneindia.com/news/punjab/sidhu-moosewala-killing-live-updates-family-refuses-to-allow-post-mortem-on-his-body-399474",
    "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_2105433721.jpg",
    "publishedAt": "2022-05-30T16:31:00Z",
    "content": "Tribune News Service\r\nChandigarh/Dehradun, May 29\r\nThe Punjab Police on Monday said it has rounded up some people and got several important leads in the murder case of Sidhu Moosewala, even as CCTV f… [+2970 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "India.com"
    },
    "author": "India.com Sports Desk",
    "title": "Highlights IPL 2022 Update : Gujarat Titans Holds Roadshow in Ahmedabad To Celebrate Victory With Fans - India.com",
    "description": "<B>Twitter Reactions, IPL 2022 Follow-Up LIVE Updates: Hardik Pandya was the talk of the town on Sunday night in Ahmedabad.</B>",
    "url": "https://www.india.com/sports/ipl-2022-road-show-highlights-updates-follow-up-gt-vs-rr-gt-to-hold-a-road-show-in-ahmedabad-to-celebrate-victory-with-fan-may-30-ipl-final-gujarat-beat-rajasthan-hardik-pandya-records-prize-money-cri-5422007/",
    "urlToImage": "https://static.india.com/wp-content/uploads/2022/05/IPL-2022-Follow-Up-LIVE-Updates.jpeg",
    "publishedAt": "2022-05-30T15:59:20Z",
    "content": "IPL 2022 Follow-Up  Updates ; Hardik Pandya was the talk of the town on Sunday night in Ahmedabad after he led Gujarat Titans to its maiden IPL triumph in it’s first year. The Titans outplayed Rajast… [+1525 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Tribune India"
    },
    "author": "The Tribune India",
    "title": "Sidhu Moosewala’s killing: Delhi court refuses to pass orders on jailed gangster Lawrence Bishnoi’s plea for increased security - The Tribune India",
    "description": "Apprehending a fake encounter, jailed gangster Lawrence Bishnoi&mdash;accused in the Punjabi singer and Congress leader Sidhu Moosewala murder case&mdash;on Monday moved a Delhi court seeking increased security.",
    "url": "https://www.tribuneindia.com/news/punjab/sidhu-moosewala-murder-gangster-lawrence-bishnoi-moves-delhi-court-seek-increased-security-399550",
    "urlToImage": "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/5/2022_5$largeimg_1761045445.jpg",
    "publishedAt": "2022-05-30T15:56:00Z",
    "content": "Tribune News Service\r\nNew Delhi, May 30\r\nApprehending a fake encounter, jailed gangster Lawrence Bishnoi—accused in the Punjabi singer and Congress leader Sidhu Moosewala murder case—on Monday moved … [+1660 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "PTI",
    "title": "Sunil Gavaskar feels Hardik Pandya has emerged as a contender for India captaincy - Times of India",
    "description": "Cricket News: Impressed by Hardik Pandya's \"leadership qualities\" in IPL 15, batting legend Sunil Gavaskar feels the star all-rounder has emerged as a strong conten",
    "url": "https://timesofindia.indiatimes.com/sports/cricket/ipl/top-stories/sunil-gavaskar-feels-hardik-pandya-has-emerged-as-a-contender-for-india-captaincy/articleshow/91896960.cms",
    "urlToImage": "https://static.toiimg.com/thumb/msid-91897038,width-1070,height-580,imgsize-55486,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
    "publishedAt": "2022-05-30T15:20:00Z",
    "content": "If India need a captain in a couple of years I wouldn't look past Hardik Pandya: Michael VaughanFormer England skipper Michael Vaughan has hailed Hardik Pandya as a future India captain after he led … [+47 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": null,
    "title": "Arvind Kejriwal's Minister Arrested By Enforcement Directorate - NDTV",
    "description": "Delhi Health Minister Satyendar Jain has been arrested by the Enforcement Directorate in an alleged money laundering case.",
    "url": "https://www.ndtv.com/india-news/delhi-minister-satyendar-jain-arrested-by-enforcement-directorate-in-alleged-money-laundering-case-3023052",
    "urlToImage": "https://c.ndtvimg.com/2022-01/2ft3pm08_arvind-kejriwal-satyendar-jain-pti_625x300_23_January_22.jpg",
    "publishedAt": "2022-05-30T15:08:00Z",
    "content": "Delhi Minister Satyendar Jain has been arrested by the Enforcement Directorate\r\nNew Delhi: Delhi Health Minister Satyendar Jain has been arrested by the Enforcement Directorate in an alleged money la… [+2709 chars]"
    },

    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "Oppo Reno 8 Pro launch in India with 50MP camera expected by June; check price - HT Tech",
    "description": "Oppo Reno 8 Pro launch in India is expected in the coming month with Snapdragon 7 Gen 1 and 50MP camera. How much does this Pro version cost you? Check details here.",
    "url": "https://tech.hindustantimes.com/mobile/news/oppo-reno-8-pro-launch-in-india-with-50mp-camera-expected-by-june-check-price-71653921672129.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/30/1600x900/6_1653542077705_1653922041037.jpg",
    "publishedAt": "2022-05-30T14:50:39Z",
    "content": "Oppo Reno 8 series just made its debut last week! Firstly, the Reno 8 series hit the Chinese market with three major devices: Reno 8, Reno 8 Pro, and Reno 8 Pro+. And as soon as it made its global ap… [+2245 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Indian Express"
    },
    "author": "Reuters",
    "title": "Unlikely monkeypox outbreak will lead to pandemic, says WHO - The Indian Express",
    "description": "The strain of monkeypox virus implicated in the outbreak is understood to kill a small fraction of those infected, but no deaths have been reported so far.",
    "url": "https://indianexpress.com/article/world/monkeypox-who-monkeypox-outbreak-7944246/",
    "urlToImage": "https://images.indianexpress.com/2022/05/monkeypox-1200-2.jpg",
    "publishedAt": "2022-05-30T14:48:50Z",
    "content": "The World Health Organisation does not believe the monkeypox outbreak outside Africa will lead to a pandemic, an official said on Monday, adding it remains unclear if infected people who are not disp… [+1839 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Tech",
    "title": "Shocking Earth problem revealed! Know the enemy within - HT Tech",
    "description": "A new research found evidence for possible rusting in the Earth’s core. What does it mean for Earth? Find out.",
    "url": "https://tech.hindustantimes.com/tech/news/shocking-earth-problem-revealed-know-the-enemy-within-71653921000539.html",
    "urlToImage": "https://images.hindustantimes.com/tech/img/2022/05/30/1600x900/Earth_NASA_1653921317568_1653921326906.jpg",
    "publishedAt": "2022-05-30T14:37:08Z",
    "content": "The common phenomenon that we usually find happening on the surface with most iron objects is now being reported for inside the Earth! Rust - the common process that destroys iron is now impacting th… [+2444 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "NDTV News"
    },
    "author": "Agence France-Presse",
    "title": "Rafael Nadal Loses Out As French Open Quarter-Final With Novak Djokovic Gets Night Session - NDTV Sports",
    "description": "Rafael Nadal, 13-time French Open winner, last week said: \"I don't like to play on clay during the night\"",
    "url": "https://sports.ndtv.com/french-open-2022/rafael-nadal-loses-out-as-french-open-quarter-final-with-novak-djokovic-gets-night-session-3023024",
    "urlToImage": "https://c.ndtvimg.com/2022-05/upck8phg_rafael-nadal-afp_625x300_30_May_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
    "publishedAt": "2022-05-30T14:21:38Z",
    "content": "Rafael Nadal's French Open quarter-final against long-time rival Novak Djokovic will take place in Tuesday's night session at Roland Garros despite the 13-time champion's desire to play in the day. O… [+1949 chars]"
    },
    

    {
    "source": {
    "id": null,
    "name": "India Today"
    },
    "author": null,
    "title": "Heavy rainfall, strong winds bring temperature down by 16°C in Delhi - India Today",
    "description": "Delhi-NCR witnessed heavy rainfall with strong winds on Monday evening. As a result, the temperature fell by around 16 degrees Celsius in 80 minutes in the city.",
    "url": "https://www.indiatoday.in/cities/delhi/story/delhi-news-delhi-witness-heavy-rainfall-strong-winds-thunderstorms-1956076-2022-05-30",
    "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202205/WhatsApp_Image_2022-05-30_at_4-647x363.jpeg?CNXNQPcYag4qD8UrFBiIGVsUddqsi1Dg",
    "publishedAt": "2022-05-30T13:51:12Z",
    "content": "Heavy rainfall and gusty winds brought the temperature down by about 16 degrees Celsius in the national capital on Monday evening. Delhi-NCR witnessed strong winds with a heavy downpour that uprooted… [+2367 chars]"
    },


    {
    "source": {
    "id": null,
    "name": "91mobiles"
    },
    "author": null,
    "title": "iQOO Neo 6 price, offers leaked ahead of India launch: this is how much you can get it for - 91mobiles",
    "description": "iQOO Neo 6 will be available at a Rs 3,000 discounted price via ICIC bank card and a Rs 1,000 Amazon coupon. Read on to iQOO Neo 6 India price and other details.",
    "url": "https://www.91mobiles.com/hub/iqoo-neo-6-launch-india-price-offers-leaked-ahead-india-launch/",
    "urlToImage": "https://www.91-cdn.com/hub/wp-content/uploads/2022/05/iQOO-Neo-6-3.jpg",
    "publishedAt": "2022-05-30T12:08:35Z",
    "content": "iQOO Neo 6 is set to debut tomorrow, i.e., May 31st. The device is tipped to be priced at around Rs 30,000. Tipster Mukul Sharma has revealed the launch offers for the upcoming iQOO Neo 6 5G.While th… [+2105 chars]"
    },
    {
    "source": {
    "id": "the-times-of-india",
    "name": "The Times of India"
    },
    "author": "Shubham Raj",
    "title": "LIC Q4 Results: Net profit declines 17% YoY to Rs 2,917 crore - Economic Times",
    "description": "Net premium income for the company stood at Rs 1,44,158.84 crore, up 17.88 per cent from Rs 1,22,290.64 crore in the corresponding quarter year ago. This is the first earnings statement from the insurance behemoth after getting listed on the bourses.",
    "url": "https://economictimes.indiatimes.com/markets/stocks/earnings/lic-q4-results-net-profit-declines-17-yoy-to-rs-2917-crore/articleshow/91892403.cms",
    "urlToImage": "https://img.etimg.com/thumb/msid-91892324,width-1070,height-580,imgsize-24456,overlay-etmarkets/photo.jpg",
    "publishedAt": "2022-05-30T11:44:00Z",
    "content": "NEW DELHI: Life Insurance Corporation () of India on Monday said its consolidated net profits for the quarter ended March stood at Rs 2,409.39 crore, down 17.41 per cent compared to Rs 2,917.33 crore… [+995 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT News Desk",
    "title": "Nepal plane crash: 21 bodies retrieved from site, says civil aviation authority - Hindustan Times",
    "description": "The Tara Air plane with 22 people on board had taken off at 9.55 am from the tourist destination of Pokhara. However, it lost contact with the air traffic control after 12 minutes. | World News",
    "url": "https://www.hindustantimes.com/world-news/nepal-plane-crash-21-bodies-retrieved-from-site-says-civil-aviation-authority-101653910225809.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/05/30/1600x900/Wreckage_of_the_crashed_Tara_Air_flight_1653910337284_1653910337457.jpg",
    "publishedAt": "2022-05-30T11:42:16Z",
    "content": "The Nepal Civil Aviation Authority on Monday said 21 bodies were recovered from the wreckage of the Tara Air flight which crashed in Mustang district on Sunday, ANI reported.\r\nThe Tara Air plane with… [+994 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Hindustan Times"
    },
    "author": "HT Entertainment Desk",
    "title": "Pregnant Sonam Kapoor flaunts growing belly in new selfie. See pic - Hindustan Times",
    "description": "Sonam Kapoor's baby bump made its Instagram debut in March, when she announced she was pregnant with her first child. On Monday, Sonam showed off her growing belly in a new photo.",
    "url": "https://www.hindustantimes.com/entertainment/bollywood/pregnant-sonam-kapoor-aces-pregnancy-fashion-flaunts-growing-belly-in-new-mirror-selfie-see-pic-101653905387625.html",
    "urlToImage": "https://images.hindustantimes.com/img/2022/05/30/1600x900/sonam_kapoor_1653905903050_1653905930415.png",
    "publishedAt": "2022-05-30T10:43:26Z",
    "content": "Sonam Kapoor shared a series of photos of herself and husband Anand Ahuja on Instagram, when the two announced they were expecting their first child together on March 21. Four hands. To raise you the… [+1819 chars]"
    }
    ];
  constructor(){
    super();
   
    this.state={
          article:this.article,
          loading:false,
          page:1,
        
    }
  }
  async componentDidMount(){
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=97dd0ff6c71349dc8d07466cf430b749&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({article:parsedData.articles,
                    totalResults:parsedData.totalResults,
                    loading:false});
  }
  handlePrevClick =async()=>{
          console.log("previous");
          let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=97dd0ff6c71349dc8d07466cf430b749&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
          this.setState({loading:true});
          let data= await fetch(url);
          let parsedData= await data.json();
          console.log(parsedData);
          this.setState({article:parsedData.articles,
                         page:this.state.page-1,
                        loading:false});
  }
  handleNextClick=async()=>{
    console.log("next");
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=97dd0ff6c71349dc8d07466cf430b749&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true});
    let data= await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({article:parsedData.articles,
                    page:this.state.page+1,
                  loading:false});
    
}
  render() {
    return (<div className="container my-3">
      <h2 className='text-center'>NewsNonkey:Top Headlines</h2>
      { this.state.loading && <Spinner/>}
      <div className="row" >
        { !this.state.loading && this.state.article.map((element)=>{
         return <div className="col-md-4" key={element.url}> 
          <News title={element.title?element.title.slice(0,30):" "} description={element.description?element.description.slice(0,88):" "}
          imageurl={element.urlToImage} newsurl={element.url}/>
         </div>
        })}
      </div>
      <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="button" className="btn btn-dark " onClick={this.handlePrevClick}>&larr;Previous</button>
       <button  disabled={this.state.page>=Math.ceil((this.state.totalResults/this.props.pageSize))}type="button" className="btn btn-dark " onClick={this.handleNextClick}>Next&rarr;</button>
       </div>
      </div>
    )
  }
}