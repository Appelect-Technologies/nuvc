import React from "react";
// import ContentCard from "../home/ContentCard";
import Partner from "../home/Partner";
// import Credit from "../pages/Credit";

function Programs() {
  return (
    <div className="container-fluid programs my-4">
      <div className="card shadow-sm">
        <div className="card-body">
          <h4 className="card-title">
            <b>
              <span style={{ color: "red" }}>
                <em>उद्यमित कार्नर</em>
              </span>
            </b>{" "}
          </h4>
          <p className="card-text">
            उद्यमित विकास परिषद देश भर में उद्यमित विकास के सभी सरकारी, गैर
            सरकारी, अंतर्राष्ट्रीय संगठनों, औद्योगिक संगठनों के प्रयासों का
            समन्वय करने, कुशल जनशक्ति तक पहुँचाने और युवाओं को आत्मनिर्भर बनाने
            का कार्य करेगी और इस पहलों की पूर्ति के बीच की बाधाओं को दूर करने,
            व्यावसायिक और तकनीकी प्रशिक्षण करने, कौशल उन्नयन करने, नवीनतम
            रचनात्मकता बढाने और नवप्रवर्तन को बढ़ावा देने के दिशा में प्रखंड एवं
            जिला स्तर पर उद्यमित कार्नर संचालित करेगी |
          </p>
          <p className="card-text">
            इन पहलों पर उद्यमित विकास परिषद् विभिन्न सम्बंधित केंद्रीय
            मंत्रालयों, राज्य सरकारों, गैर सरकारी संगठनों, औद्योगिक
            प्रतिष्ठानों, व्यवसायिक प्रशिक्षण एवं शैक्षणिक प्रतिष्ठानों, ग्राम
            पंचायत स्तर के लोकल सरकारी संगठन और अंतर्राष्ट्रीय संगठनों के साथ
            बहु-स्तरीय सहयोग और प्रयासों को और अधिक प्रभावशाली कार्यान्वयन के
            लिए कार्य कर रही है | जिसे प्रखंड एवं जिला स्तर केंद्र पर बहाल कुशल
            और प्रशिक्षित परिषद् के द्वारा संचालित की जायेगी |
          </p>
          <p className="card-text">
            "उद्यमित भारत" एवं "उद्यमित विकास परिषद्" भारत सरकार के स्टार्ट अप
            इंडिया इनिशिएटिव , मेक इन इंडिया प्रोग्राम, आत्मनिर्भर भारत रोजगार
            अभियान को सशक्त बनाने के लिए एक पहल है जिसे देश के स्वावलंबन के लिए,
            आत्मनिर्भर भारत के लिए युवाओं को और अधिक रोजगारपरक और अपने रोज़गार को
            सफल बनाने के लिए स्टार्टअप मिशन के रूप में योगदान कर रही है
          </p>
        </div>
      </div>

      <Partner />
      {/* <a href="#">
        Read more <i class="fas fa-long-arrow-alt-right"></i>
      </a> */}
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

export default Programs;
