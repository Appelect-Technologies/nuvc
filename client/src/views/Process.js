import React from "react";

function Process({ data }) {
  return (
    <div class="container py-2">
      <center>
        <h2>3 Simple steps to Go</h2>
      </center>
      <div class="row no-gutters">
        {data.map((item, i) => (
          <div className="col-12 col-lg-4 my-4 mx=2" key={i}>
            <div class="card shadow-sm">
              <h3 class="card-title text-center">{item.heading}</h3>
              <div class="card-body">
                {item.descriptions.map((text, i) => (
                  <p className="card-text" key={`text-${i + Math.random()}`}>
                    {i + 1}. {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

Process.defaultProps = {
  data: [
    {
      heading: "Apply",
      descriptions: [
        `हरेक जिला स्तर और ब्लॉक स्तर पर आवेदन मंगाए गए हैं ।`,
        `2. इच्छुक युवा वेबसाइट के होम पेज पर apply Online पे क्लिक करके
        उपलब्ध जॉब को |`,
        `क्लिक करें ।`,
        `फिर यूजर फॉर्म को अपने सर्टिफिकेट नाम के अनुसार भरें ।`,
        `आपके ईमेल id पर यूजरनेम और पासवर्ड आ जायेगी ।`,
        `फॉर्म भरने के बाद पेमेंट पेज आएगी | जहां अपने मोबाइल UPI, डेबिट
        कार्ड, एटीएम कार्ड, या नेट बैंकिंग ।`,
        `के माध्यम से पेमेंट कर सकते हैं ।`,
        `फिर आपके ईमेल id पर सफलता पूर्वक आवेदन का ईमेल आएगा ।`,
        `भविष्य में अपने ईमेल id या आवेदन id के माध्यम से लॉग इन कर सकते
        हैं ।`,
      ],
    },
    {
      heading: "Exam - Result",
      descriptions: [
        `आवेदन करने के बाद आपको रेगुलर वेबसाइट चेक करते रहना है ।`,
        `आवेदन करने के वक़्त आप एडमिट कार्ड डाउनलोड करने का समय देख लें ।`,
        `तय समय सीमा में आप वेबसाइट से एडमिट कार्ड डाउनलोड करें ।`,
        `और एग्जाम/असेसमेंट के तारीख को ध्यान रखें ।`,
        `परीक्षा / असेसमेंट ऑनलाइन मोड में ली जाएगी या एग्जाम सेण्टर आपके
        डिस्ट्रिक्ट में होगा ।`,
        `परीक्षा/ असेसमेंट के 1 महीने में ऑनलाइन रिजल्ट्स चेक करें ।`,
      ],
    },
    {
      heading: "Trainning",
      descriptions: [
        `सफल कैंडिडेट की वर्क से सम्बंधित ट्रेनिंग के साथ साथ
        Employabilty Skill Development, Personality Development,
        Communication Skill Development प्रारंभ की जायेगी ।`,
        `डोमेन ट्रेनिंग में उसके कार्य से सम्बंधित ट्रेनिंग होगी ।`,
        `ट्रेनिंग प्रोग्राम online/Offline दोनों मोड में की जाएगी ।`,
        `उसके बाद सभी सफल प्रशिक्षणार्थियों को कार्य स्थल पर कार्यरत की
        जायेगी ।`,
      ],
    },
  ],
};

export default Process;
