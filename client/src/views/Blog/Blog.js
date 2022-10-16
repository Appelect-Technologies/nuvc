import React from "react";
import image89 from "../.././asstes/5-min.jpg";
import image90 from "../.././asstes/apply jobs-min.jpg";
import image91 from "../.././asstes/support.jpeg";
import nuvc from "../.././asstes/support2.jpeg";
import ContentCard from "../home/ContentCard";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Box, Button } from "@mui/material";
import "./blog.css";
// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "1200px",
//   height: "700px",
//   bgcolor: "background.paper",
//   color: "gray",
//   boxShadow: 24,
//   boderRadius: "10px",
//   p: 4,
// };
function Blog() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
                    alt="best free online courses"
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
                    alt="skill development courses free online"
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
        </ul>
      </div>
      <div className="nuvcblog">
        <div className="nuvccate">
          <img
            src="https://nuvc-public.s3.ap-south-1.amazonaws.com/nuvcblog.jpeg"
            alt="skill development courses after 12th"
          />
          <h2>
            शिक्षा मंत्रालय ने एक नई पहल की है। केंद्रीय मंत्री रमेश पोखरियाल
            निशंक के निर्देश पर शिक्षा मंत्रालय ने 15 से 23 अक्टूबर के बीच
            सप्ताह को बौद्धिक संपदा शिक्षा अभियान का फैसला लिया है।
          </h2>
          <div className="hrtag">
            <hr></hr>
          </div>

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
      <div className="headline">
        <h2>
          skill development, skill development in india, skill development
          courses by government
        </h2>
      </div>
      <br />
      <div className="blog1">
        <div className="blog3">
          <li>
            3. वर्ल्ड इकोनॉमिक फोरम (WEF) के अनुसार, दुनिया भर में 50 प्रतिशत
            कर्मचारियों को 2025 तक अपस्किल या रीस्किल करने की आवश्यकता है
            स्वचालन और नई प्रौद्योगिकियों द्वारा संचालित नई जिम्मेदारियों को
            अपनाने के लिए। 4. उनके निष्कर्ष यह भी बताते हैं कि कार्यबल स्वयं को
            उन्नत नहीं करता है; उन्हें काम के भविष्य के लिए तैयार होने में दशकों
            लग सकते हैं। इस प्रकार, युवा कार्यबल अपने नियोक्ताओं से अपस्किलिंग
            अवसरों की मांग कर रहा है। मिलेनियल्स आज स्पष्ट लक्ष्यों के साथ
            कार्यबल में प्रवेश कर रहे हैं। उनमें से अधिकांश के पास सफलता के लिए
            एक मैप किया गया मार्ग है और वे कैरियर के विकास के लिए अपनी क्षमता को
            बढ़ाने के लिए टूल की तलाश कर रहे हैं। 2. नियोक्ता कर्मचारियों को खुद
            को उन्नत करने के लिए अप्रतिबंधित पहुंच दे रहे हैं एक कंपनी शीर्ष
            प्रतिभा को खोने का जोखिम उठा सकती है यदि वह अपने कर्मचारियों को
            अपस्किलिंग अवसर या संसाधन प्रदान करने में विफल रहती है। आधुनिक
            नियोक्ता इस प्रवृत्ति से अवगत है और अब यह सुनिश्चित करने के लिए दौड़
            रहा है कि श्रमिकों के पास पर्याप्त अपस्किलिंग अवसर हैं। आज
            अपस्किलिंग केवल ऑन-द-जॉब प्रशिक्षण तक ही सीमित नहीं है। कंपनियां यह
            सुनिश्चित करने के लिए पेशेवर कौशल विकास और शिक्षा फर्मों तक पहुंच
            रही हैं कि उनके पास बोर्ड पर सर्वश्रेष्ठ प्रतिभा है। ये फर्म
            कर्मचारियों को आवश्यक शिक्षा और प्रशिक्षण प्रदान कर रही हैं, उन्हें
            अपने संबंधित क्षेत्रों की बारीकियों को समझने और उन्हें भविष्य के लिए
            तैयार करने में मदद करना। 3. रिमोट और ऑन-डिमांड लर्निंग/अपस्किलिंग
            कार्यालय से दूर काम करने वाले व्यक्तियों के साथ, दूरस्थ शिक्षा की
            मांग कई गुना बढ़ गई है। नियोक्ता निरंतर विकास और सीखने का वातावरण
            बनाकर अपने कार्यबल के कौशल का सम्मान कर रहे हैं। ऑन-डिमांड ई-लर्निंग
            गेमिफिकेशन और आर्टिफिशियल इंटेलिजेंस (एआई) के लाभों का उपयोग करके
            सीखने के अनुभव और परिणामों को बढ़ाने के नए अवसर भी प्रदान कर रहा है।
          </li>
          <br />
          <li>
            4. महामारी ने सामाजिक शिक्षा के मूल्य पर प्रकाश डाला है सामाजिक
            शिक्षा उन कंपनियों के लिए एक स्मार्ट और किफायती समाधान के रूप में
            विकसित हुई है जिनके पास मामूली बजट है लेकिन अपने कर्मचारियों को
            अपस्किलिंग अवसर प्रदान करना चाहते हैं। सामाजिक शिक्षा विभिन्न
            स्थानों के व्यक्तियों को सीखने और विकास को साझा करने और एक साथ बढ़ने
            के लिए लाती है। यह सामाजिक मंचों, ऑनलाइन चर्चाओं आदि के रूप में हो
            सकता है। यह प्रवृत्ति कर्मचारियों के बीच एकजुटता और एकता की भावना
            लाने में सक्षम रही है और यह सुनिश्चित करती है कि प्रत्येक व्यक्ति
            जानता है कि वे मूल्यवान हैं और लगे रहते हैं। 5. अपस्किलिंग लाभों की
            रीयल-टाइम निगरानी प्रदान करने के लिए लोगों का विश्लेषण अपस्किलिंग और
            रीस्किलिंग कर्मचारियों के प्रभाव की निगरानी करना हमेशा कठिन रहा है।
            इस संबंध में मेट्रिक्स की कमी प्रशिक्षण सामग्री या विधियों को अपनाने
            या सुधारने के दायरे को प्रभावित कर सकती है। इस समस्या से निपटने के
            लिए, ई-लर्निंग कंपनियां लोगों के विश्लेषण सॉफ्टवेयर का उपयोग कर रही
            हैं ताकि वास्तविक समय की निगरानी प्रदान की जा सके कि किसी संगठन, टीम
            या यहां तक कि किसी व्यक्ति के परिप्रेक्ष्य से दूरस्थ शिक्षा और विकास
            कितना सफल रहा है। निष्कर्ष महामारी के साथ हमारे संचार, काम करने और
            दूरस्थ सेटिंग्स में बढ़ने के तरीके को बदलने के साथ कर्मचारियों को
            अपस्किल करने की कभी अधिक आवश्यकता नहीं रही है। कर्मचारियों और
            नियोक्ताओं दोनों को तकनीकी व्यवधान और डिजिटल परिवर्तन द्वारा चिह्नित
            बदलते परिदृश्यों के लिए खुद को अनुकूलित करने की आवश्यकता है।
            प्रासंगिक अपस्किलिंग व्यक्तियों और कंपनियों दोनों के लिए महान मूल्य
            प्रदान कर सकती है। यह समृद्ध प्रतिभा को बनाए रखने और एक ऐसी कार्य
            संस्कृति बनाने में मदद कर सकता है जो सकारात्मक और विकासोन्मुखी हो।
          </li>
        </div>

        <div className="blog2">
          <li>
            <p class="carde">
              <img
                src="https://nuvc-public.s3.ap-south-1.amazonaws.com/support.jpeg"
                alt="government free online courses with certificates"
                class="card__image"
              />
              <div class="carde__overlay">
                <div class="carde__header">
                  <svg class="carde__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <img
                    class="carde__thumb"
                    src="https://i.imgur.com/7D7I6dI.png"
                    alt="Which course is best for skill development?"
                  />
                  <div class="carde__header-text">
                    <h3 class="carde__title">Skill India</h3>
                    {/* <span class="card__tagline">
                      Lorem ipsum dolor sit amet consectetur
                    </span> */}
                    <span class="carde__status">Click me</span>
                  </div>
                </div>
                <p class="carde__description">
                  2020 में कोविड-19 महामारी के दुनिया में आने के बाद कार्यस्थल
                  में सीखना और कौशल विकास अचानक रुक गया। अभूतपूर्व संकट ने सभी
                  क्षेत्रों में व्यवसायों को अस्तित्व मोड में धकेल दिया।
                </p>
                <li className="nav-item">
                  <Button onClick={handleOpen}>Learnmore</Button>
                </li>
              </div>
            </p>
          </li>
          <div>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="style">
                <img
                  src="https://nuvc-public.s3.ap-south-1.amazonaws.com/support2.jpeg"
                  alt="skill development courses list"
                  // style={{
                  //   width: "75vw",
                  //   height: "50vh",
                  //   marginTop: "-2.5%",
                  // }}
                />
                <Typography
                  id="modal-modal-title"
                  variant="h7"
                  component="h5"
                ></Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                  <li>
                    2020 में कोविड-19 महामारी के दुनिया में आने के बाद कार्यस्थल
                    में सीखना और कौशल विकास अचानक रुक गया। अभूतपूर्व संकट ने सभी
                    क्षेत्रों में व्यवसायों को अस्तित्व मोड में धकेल दिया।
                    उद्यमों को खुद का पुनर्गठन करना पड़ा ताकि कर्मचारियों को उस
                    समय जो भी राजस्व या लाभ उत्पन्न हुआ, उससे लाभ हो सके।
                    महामारी के बाद की दुनिया में ही संकट का यह दलदल और गहरा हुआ
                    है, और इसके साथ ही, अपस्किलिंग का महत्व, जो कर्मचारियों और
                    नियोक्ता दोनों के लिए फायदेमंद है। एक रिपोर्ट के अनुसार,
                    भारत में जॉब मार्केट नए जमाने की तकनीक के आगमन के साथ बदल
                    रहा है, 40 प्रतिशत भारतीय कर्मचारियों को रीस्किलिंग की
                    आवश्यकता होगी और 60 प्रतिशत को अपस्किलिंग की आवश्यकता होगी।
                    आज के अपस्किलिंग के कुछ रुझानों पर एक नज़र डालें: 1.
                    मिलेनियल्स पर ध्यान दें: युवा पीढ़ी खुद को बेहतर बनाने की
                    इच्छुक है 2. प्रौद्योगिकी बिजली की गति और तेजी से डिजिटल
                    परिवर्तन से आगे बढ़ रही है क्योंकि महामारी ने अधिक
                    तकनीक-प्रेमी कर्मचारियों की आवश्यकता पैदा कर दी है। महामारी
                    के बाद की दुनिया में आवश्यक कौशल में खुद को प्रशिक्षित करने
                    के लिए विशेष रूप से युवा पीढ़ी से उच्च उम्मीदें हैं। भारत
                    में सहस्राब्दियों का उच्च प्रतिशत है, जिसमें देश की आबादी का
                    34% से अधिक हिस्सा शामिल है।
                  </li>
                  <br />
                  <Link to="/learn" className="nav-link" href="#">
                    <button> COMMENTS</button>
                  </Link>
                </Typography>
              </Box>
            </Modal>
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
