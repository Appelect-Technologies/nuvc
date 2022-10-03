import React from "react";
import blog from "./blog.css";
import image89 from "../.././asstes/5-min.jpg";
import image90 from "../.././asstes/apply jobs-min.jpg";
import nuvc from "../.././asstes/nuvcblog.jpeg";
import ContentCard from "../home/ContentCard";
import { Link } from "react-router-dom";
function Blog() {
  return (
    <div>
      <section class="blog-content">
        <div class="row">
          <div class="blog-left">
            <img src={image89} alt="image" />
            <h2>Our Certificate & online program For 2022</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              distinctio nemo provident autem rem est cum accusantium deserunt
              dolorem sapiente?
            </p>
            <br />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
              dolorum doloribus voluptas reiciendis natus fugiat asperiores in
              nobis dolorem. Modi velit nam est, provident odio iste molestiae
              amet dolorum minima fugiat laboriosam enim debitis nesciunt culpa
              corrupti iure consequatur recusandae.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
              tempora officiis numquam saepe id corporis quisquam ullam.
              Voluptas, recusandae! Molestias, quaerat cumque. Totam qui
              similique cupiditate quod consequatur magnam provident nesciunt
              neque aspernatur beatae? Soluta quod maiores ut quae assumenda!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates nobis quia consectetur, distinctio nesciunt illum neque
              fuga omnis quo ut!
            </p>

            {/* <div class="comment-box">
              <h3>leave a Comment</h3>
              <form class="comment-form">
                <input type="text" placeholder="Enter Your Name" />
                <input type="email" placeholder="Enter Your E-mail" />
                <textarea rows="5" placeholder="Your Comment"></textarea>
                <button type="submit" class="hero-btn red-btn">
                  POST COMMENT
                </button>
              </form>
            </div> */}
          </div>
          <div class="blog-right">
            <h3>Post Categories</h3>
            <div>
              <span>Business Analytic</span>
              <span>21</span>
            </div>
            <div>
              <span>Data Science</span>
              <span>50</span>
            </div>{" "}
            <div>
              <span>Machine Leanring</span>
              <span>40</span>
            </div>{" "}
            <div>
              <span>Computer Science</span>
              <span>35</span>
            </div>{" "}
            <div>
              <span>Auto CAD</span>
              <span>15</span>
            </div>
            <div>
              <span>Journlisam</span>
              <span>20</span>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div>
          <ContentCard />
        </div>
      </div>
      <div>
        <div className="h1">
          <h1>Our Blogs</h1>
        </div>
        <ul class="cards">
          <li>
            <a href="" class="carde">
              <img src={image89} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">skill india</h3>
                    <span class="carde__status">1 hour ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image90} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">kim Cattrall</h3>
                    <span class="carde__status">3 hours ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image89} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">Jessica Parker</h3>
                    {/* <span class="card__tagline">
                      Lorem ipsum dolor sit amet consectetur
                    </span> */}
                    <span class="carde__status">1 hour ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          {/* <li>
            <a href="" class="carde">
              <img src={image91} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">kim Cattrall</h3>
                    <span class="carde__status">3 hours ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li> */}
        </ul>
      </div>

      <div>
        <ul class="cards">
          <li>
            <a href="" class="carde">
              <img src={image89} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">Jessica Parker</h3>
                    <span class="carde__status">1 hour ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image90} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">kim Cattrall</h3>
                    <span class="carde__status">3 hours ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          <li>
            <a href="" class="carde">
              <img src={image89} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">Jessica Parker</h3>
                    {/* <span class="card__tagline">
                      Lorem ipsum dolor sit amet consectetur
                    </span> */}
                    <span class="carde__status">1 hour ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li>
          {/* <li>
            <a href="" class="carde">
              <img src={image91} alt="image" class="card__image" />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/sjLMNDM.png"
                    alt=""
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">kim Cattrall</h3>
                    <span class="carde__status">3 hours ago</span>
                  </div>
                </div>
                <p class="carde__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Asperiores, blanditiis?
                </p>
                <li className="nav-item">
                  <Link to="/learn" className="nav-link" href="#">
                    <button>Learnmore</button>
                  </Link>
                </li>
              </div>
            </a>
          </li> */}
        </ul>
      </div>
      <div className="nuvcblog">
        <div className="nuvccate">
          <img src={nuvc} alt="image" />
          <h2>
            शिक्षा मंत्रालय ने एक नई पहल की है। केंद्रीय मंत्री रमेश पोखरियाल
            निशंक के निर्देश पर शिक्षा मंत्रालय ने 15 से 23 अक्टूबर के बीच
            सप्ताह को बौद्धिक संपदा शिक्षा अभियान का फैसला लिया है।
          </h2>
          <div className="hrtag">
            <hr></hr>
          </div>
          {/* <h5>
            नई दिल्ली, 14 अक्टूबर (आईएएनएस)। शिक्षा मंत्रालय ने एक नई पहल की है।
            केंद्रीय मंत्री रमेश पोखरियाल निशंक के निर्देश पर शिक्षा मंत्रालय ने
            15 से 23 अक्टूबर के बीच सप्ताह को बौद्धिक संपदा शिक्षा अभियान का
            फैसला लिया है। इस मौके पर नवाचार संस्थान परिषद, इंस्टीट्यूट ऑफ
            इनोवेशन काउंसिल के वार्षिक प्रदर्शन की रेटिंग जारी करेगा। संस्थान
            आईआईसी 3.0 की लॉन्चिंग भी करेगा। गौरतलब है कि 15 अक्टूबर को महान
            वैज्ञानिक और मिसाइलमैन के नाम से मशहूर पूर्व राष्ट्रपति डॉ. एपीजे
            अब्दुल कमाल की जयंती है।
            <br /> भारत रत्न डॉ. कलाम नव प्रवर्तन के प्रबल पक्षधर थे। इस अवसर पर
            महर्षि भारद्वाज बौद्धिक सम्पदा शिक्षा अभियान को लॉन्च किया जाएगा।
            केंद्रीय शिक्षा मंत्रालय का नवप्रवर्तन प्रकोष्ठ बौद्धिक संपदा के
            अधिकार के लिए ये पहल कर रहा है। बौद्धिक संपदा से मतलब किसी व्यक्ति
            की अपनी सृजनात्मकता से विशेष अवधि के लिए अधिकार कायम करना है। अखिल
            भारतीय तकनीकी शिक्षा परिषद (एआईसीटीआई) के अध्यक्ष प्रोफेसर अनिल डी
            सहस्त्रबुद्धे ने कहा, एआईसीटीई और एमआईसी स्टार्ट अप संस्कृति को
            बढ़ावा दे रही है। <br /> जिससे समाज के लोगों के लिए नए अवसर सृजित
            होंगे। इन संस्थानों से रोजगार चाहने वालों के लिए नए नौकरियों का सृजन
            करने वाले निकलेंगे। एआईसीटीई के उपाध्यक्ष डॉ. एम. पी. पुनिया ने कहा,
            उच्च शिक्षा संस्थान में पढ़ने वाले छात्र-छात्राओं को नवाचार के
            आंदोलन में सबसे आगे रहने की जरुरत है। आज सबसे ज्यादा जरुरी है कि
            भारतीय उच्च शिक्षा संस्थान पूरी दुनिया में उच्च स्तर की अनुसंधान और
            नवाचार के लिए उत्कृष्टता केंद्र के रुप में उभरें। शिक्षा मंत्रालय के
            नव प्रवर्तन प्रकोष्ठ के मुख्य नवप्रवर्तन अधिकारी, डॉ. अभय जेरे ने
            बताया कि, बौद्धिक संपदा अधिकार के तहत उच्च शिक्षण संस्थाओं को आगे
            आना पड़ेगा। उन्हें छात्रों को नवोन्मेष और उद्यमिता का माहौल मुहैया
            कराना पड़ेगा। <br /> इसी के साथ उन्हें पेटेंट दायर करने की शिक्षा भी
            देनी होगी। केंद्रीय शिक्षा मंत्रालय में इनोवेशन सेल के निदेशक डॉ.
            मोहित गंभीर ने कहा, भारत में नए आविष्कारों के लिए पेटेंट दाखिल करने
            वालों की संख्या काफी कम है। इसके अलावा सही जानकारी के आभाव में बड़ी
            संख्या में आवेदन ठीक ढंग से दायर नहीं किए जा सके हैं। इसमें सुधार
            करने के लिए युवाओं को पेटेंट प्रक्रिया की पूर्ण जानकारी देने की
            जरूरत है। डॉ. गंभीर आईआईसी 2.0 की उपलब्धियों पर नजर डालते हुए सालाना
            रिपोर्ट पेश करेंगे। <br /> इस अवसर पर आईआईसी 2.0 के टॉप परफॉमर्स की
            घोषणा की जाएगी। इसके अलावा उच्च शिक्षण संस्थानों के इंस्टिट्यूट
            इनोवेशन सेल के लिए मेंटर-मेंटी प्रोग्राम का भी ऐलान किया जाएगा एवं
            आईआईसी 3.0 की वेबसाइट भी लॉन्च की जाएगी। देशभर से विश्वविद्यालयों के
            कुलपति, कालेजों के निदेशक, अध्यापक गण एवं विद्यार्थी भी इस कार्यक्रम
            में हिस्सा लेंगे। जीसीबी/एएनएम
          </h5> */}
          <div className="litag">
            <li>
              {" "}
              नई दिल्ली, 14 अक्टूबर (आईएएनएस)। शिक्षा मंत्रालय ने एक नई पहल की
              है। केंद्रीय मंत्री रमेश पोखरियाल निशंक के निर्देश पर शिक्षा
              मंत्रालय ने 15 से 23 अक्टूबर के बीच सप्ताह को बौद्धिक संपदा शिक्षा
              अभियान का फैसला लिया है। इस मौके पर नवाचार संस्थान परिषद,
              इंस्टीट्यूट ऑफ इनोवेशन काउंसिल के वार्षिक प्रदर्शन की रेटिंग जारी
              करेगा। संस्थान आईआईसी 3.0 की लॉन्चिंग भी करेगा। गौरतलब है कि 15
              अक्टूबर को महान वैज्ञानिक और मिसाइलमैन के नाम से मशहूर पूर्व
              राष्ट्रपति डॉ. एपीजे अब्दुल कमाल की जयंती है।
            </li>
            <br />
            <li>
              भारत रत्न डॉ. कलाम नव प्रवर्तन के प्रबल पक्षधर थे। इस अवसर पर
              महर्षि भारद्वाज बौद्धिक सम्पदा शिक्षा अभियान को लॉन्च किया जाएगा।
              केंद्रीय शिक्षा मंत्रालय का नवप्रवर्तन प्रकोष्ठ बौद्धिक संपदा के
              अधिकार के लिए ये पहल कर रहा है। बौद्धिक संपदा से मतलब किसी व्यक्ति
              की अपनी सृजनात्मकता से विशेष अवधि के लिए अधिकार कायम करना है। अखिल
              भारतीय तकनीकी शिक्षा परिषद (एआईसीटीआई) के अध्यक्ष प्रोफेसर अनिल डी
              सहस्त्रबुद्धे ने कहा, एआईसीटीई और एमआईसी स्टार्ट अप संस्कृति को
              बढ़ावा दे रही है।
            </li>
            <br />
            <li>
              जिससे समाज के लोगों के लिए नए अवसर सृजित होंगे। इन संस्थानों से
              रोजगार चाहने वालों के लिए नए नौकरियों का सृजन करने वाले निकलेंगे।
              एआईसीटीई के उपाध्यक्ष डॉ. एम. पी. पुनिया ने कहा, उच्च शिक्षा
              संस्थान में पढ़ने वाले छात्र-छात्राओं को नवाचार के आंदोलन में सबसे
              आगे रहने की जरुरत है। आज सबसे ज्यादा जरुरी है कि भारतीय उच्च
              शिक्षा संस्थान पूरी दुनिया में उच्च स्तर की अनुसंधान और नवाचार के
              लिए उत्कृष्टता केंद्र के रुप में उभरें। शिक्षा मंत्रालय के नव
              प्रवर्तन प्रकोष्ठ के मुख्य नवप्रवर्तन अधिकारी, डॉ. अभय जेरे ने
              बताया कि, बौद्धिक संपदा अधिकार के तहत उच्च शिक्षण संस्थाओं को आगे
              आना पड़ेगा। उन्हें छात्रों को नवोन्मेष और उद्यमिता का माहौल मुहैया
              कराना पड़ेगा।
            </li>
            <br />
            <li>
              {" "}
              इसी के साथ उन्हें पेटेंट दायर करने की शिक्षा भी देनी होगी।
              केंद्रीय शिक्षा मंत्रालय में इनोवेशन सेल के निदेशक डॉ. मोहित गंभीर
              ने कहा, भारत में नए आविष्कारों के लिए पेटेंट दाखिल करने वालों की
              संख्या काफी कम है। इसके अलावा सही जानकारी के आभाव में बड़ी संख्या
              में आवेदन ठीक ढंग से दायर नहीं किए जा सके हैं। इसमें सुधार करने के
              लिए युवाओं को पेटेंट प्रक्रिया की पूर्ण जानकारी देने की जरूरत है।
              डॉ. गंभीर आईआईसी 2.0 की उपलब्धियों पर नजर डालते हुए सालाना रिपोर्ट
              पेश करेंगे।
            </li>
            <br />
            <li>
              इस अवसर पर आईआईसी 2.0 के टॉप परफॉमर्स की घोषणा की जाएगी। इसके
              अलावा उच्च शिक्षण संस्थानों के इंस्टिट्यूट इनोवेशन सेल के लिए
              मेंटर-मेंटी प्रोग्राम का भी ऐलान किया जाएगा एवं आईआईसी 3.0 की
              वेबसाइट भी लॉन्च की जाएगी। देशभर से विश्वविद्यालयों के कुलपति,
              कालेजों के निदेशक, अध्यापक गण एवं विद्यार्थी भी इस कार्यक्रम में
              हिस्सा लेंगे। जीसीबी/एएनएम
            </li>
          </div>
        </div>
      </div>
      <div
        style={{
          width: "60px",
          height: "60px",
          position: "fixed",
          right: "10px",
          bottom: "10px",
        }}
      >
        <a href="https://wa.me/919599581858">
          <img
            src="https://nuvc-public.s3.ap-south-1.amazonaws.com/WhatsApp.svg.webp"
            alt=""
            style={{ width: "60px", height: "60px" }}
          />
        </a>
      </div>
    </div>
  );
}

export default Blog;
