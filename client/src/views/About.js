import React from "react";

function About() {
  return (
    <div>
      <img
        src={
          "https://nuvc-public.s3.ap-south-1.amazonaws.com/ABOUT+US+PAGES+FOR+WEBSITE+IIi+PART-01.png"
        }
        style={{ width: "98.9vw", height: "19vw" }}
        alt={"india development review"}
      />

      <div className="container">
        <div
          className="shadow-lg p-3 mb-5 bg-white rounded my-4"
          style={{
            backgroundImage:
              "url('https://nuvc-public.s3.ap-south-1.amazonaws.com/Untitled+design+(17).png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
          alt={"skill development"}
        >
          <div className="card-header   ">
            <b style={{ color: "red" }}>
              <h1> उद्यमित कार्नर </h1>
            </b>
          </div>

          <div className="card-body">
            <p className="card-text">
              भारत सरकार के कॉर्पोरेट कार्य मंत्रालय में अधिनियम 8 के अंतर्गत
              गैर शासकीय निकाय नवचार उद्यमिता विकास परिषद फाउंडेशन की महत्वकांक्षी
              कार्यक्रम है | जिसके द्वारा हमारे राष्ट्र की Start-Up india, Make
              In India कार्यक्रम को मजबूत बनाने का कार्य करती है
            </p>
            <p className="card-text">
              भारत राष्ट्र की आत्मनिर्भरता, युवाओं के आत्मनिर्भर पर निर्भर करती
              है और उद्यमित भारत निश्चित रूप से इन युवा भारतीय के लिए
              आत्मनिर्भरता के आगे बढ़कर उन्हें रोज़गार सृज़न का केंद्र बनाएगी जिस
              से हमारे एक युवा उद्यमी कम से कम 5 कुशल व्यक्ति को रोज़गार प्रदान
              करेगी | युवाओं को अधिक से अधिक् अवसर प्रदान करेगी और भारत को एक
              उद्यमित समाज के रूप में विकसित करेगा जहा सभी के समृद्धि होगी |
              उद्यमित युवा अब केवल घरुलू बाज़ार या भारतीय बाज़ार तक ही सिमित नही
              रहेंगे, बल्कि अंतर राष्ट्रीय बाज़ार में अवसरों को बढ़ावा देने के लिए
              दुनिया भर के देशों के सक्रिय भागीदारी लेंगे |
            </p>
            <p className="card-text">
              नवचार उद्यमिता विकास परिषद फाउंडेशन ने उद्यमित विकास परिषद् और उद्यमी
              कार्नर कार्यक्रम की शुरुआत की है जिसका उद्येश्य संभावित उद्यमियों
              और प्रारंभिक चरण के उद्यमित को प्रोत्साहन देना, प्रशिक्षण देना,
              प्रारम्भिक व्यवसायिक वित्त पोषण (fund raising, Loan) में सहायता
              प्रदान करना, सरकार द्वारा संचालित विभिन्न कार्यक्रम का जानकारी
              देना, विभिन्न सरकारी योजनाओं से उद्यमित को लाभावन्वित करना, कानूनी
              या निबंधन से सम्बंधित सलाह देना, पेटेंट/ कॉपीराइट / ट्रेडमार्क /
              GI टैग लेने में मदद करना, रोज़गार बढाने / मार्केटिंग में प्रशिक्षण
              एवं मदद करना तथा उपर्युक्त व्यवस्था के लिए टेक्नोलॉजी पर आधारित
              ऑनलाइन प्लेटफार्म देना इत्यादि है |
            </p>
            <p className="card-text">
            नवचार उद्यमिता विकास परिषद ऑनलाइन एप प्लेटफार्म विकसित कर रही हैं जहा
              ग्राम / प्रखंड / जिला स्तर के निवेशक (investor) वहा मौजूद लोकल
              उद्यमित (Local Entrepreneur) को एक दुसरे से जोड़ेगी |
            </p>
            <p className="card-text">
              Investor and Entrepreneur दोनों के लिए एक विश्वशनीय ऑनलाइन AI
              Based Plateform देगी | हरेक Entrepreneur को एक Trust Score दिया
              जायेगा जो entrepreneur के Knowledge, Skill, logical Thinking,
              Innovative strategy, Decision Making पर आधारित assessment के
              द्वारा प्रदान की जायेगी |
            </p>
            <p className="card-text">
              भारत राष्ट्र में 65% युवा कामकाजी आयु वर्ग के हैं | यदि राष्ट्र को
              5 ट्रिलियन अर्थव्यवस्था को प्राप्त करनी है तो युवाओं को उद्यमित
              विकास के माध्यम से ही होगा ताकि वे न केवल खुद को आत्मनिर्भर करेंगे
              बल्कि देश को भी आत्मनिर्भर बनायेंगे | देश के आर्थिक विकास में
              योगदान करेंगे |
            </p>
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

export default About;
