import React from "react";

function ContentCard() {
  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded my-4" 
    style={{backgroundImage: "url('https://nuvc-public.s3.ap-south-1.amazonaws.com/Untitled+design+(16).png')",backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',backgroundAttachment: 'fixed',backgroundPosition: 'bottom'}}>
      <div className="card-header bg-white">
        <h2>
          <b>आपका स्वागत है</b>
          <span style={{ color: "#e22d35" }}> उद्यमित विकास परिषद् में</span>
        </h2>
      </div>
      <div className="card-body">
        {/* <h4>
          <b>आपका स्वागत है </b>उद्यमित विकास परिषद् में{" "}
        </h4> */}
        <p className="card-text">
          भारत दुनिया की सबसे अग्रणी अर्थव्यवस्थाओं में से एक है और वर्ष 2024-25
          तक 5 ट्रिलियन डॉलर की अर्थव्यवस्था बनने की ओर प्रयासरत है। हालाँकि देश
          में कई नागरिकों की जीवन गुणवत्ता, विकास की कहानी के एक पूर्णतः विपरीत
          पहलू को दिखाती है। ध्यातव्य है कि वर्ष 2018 में UNDP द्वारा जारी मानव
          विकास सूचकांक (HDI) में भारत को कुल 189 देशों में से 130वाँ स्थान
          प्राप्त हुआ था, जबकि वर्ष 2017 में भारत इस सूचकांक में 131वें स्थान पर
          था। भारत में जीवन गुणवत्ता विभिन्न अंतर-राज्यीय और अंतर-ज़िला विविधताओं
          पर निर्भर करती है।
        </p>
        <p className="card-text">
          सामाजिक न्याय एवं अधिकारिता मंत्रालय के इ-अनुदान से संबंद्ध नीति आयोग
          में सम्बद्ध गैर शासकीय सेक्शन 8 निकाय उद्यमित सेवा समिति फाउंडेशन
          आत्मनिर्भर भारत रोजगार अभियान और विभिन्न रोजगार अभियान के माध्यम से
          युवाओं को आत्मनिर्भर एवं स्वावलम्बी युवा बनाने के हरेक जिला स्तर पर
          सभी केंद्र/राज्य सरकार की योजनायों को समन्वयित करके युवाओ के लिए
          रोजगार एवं इन्क्यूबेशन केंद्र संचालित कर रही है | जिसमे सबसे पहले गृह
          मंत्रालय द्वारा चिन्हित आकंशी जिले में इसकी शुरुआत की जा रही है।
        </p>
        <p className="card-text">
          इच्छुक स्वावलंबी युवाओ को आत्मनिर्भर बनाने की दिशा में कार्यक्रम
          उद्यमित के प्रशिक्षण, उद्यमित क्लस्टर विकास, विपणन सहायता, ऋण या
          भागीदारी द्वारा वित्त सहयोग, उद्यमित के लिए बुनियादी एवं कानूनी ढाँचे
          सुदृढ़ करना, उद्यमित के प्रौद्योगिक उन्नयन, उद्यम एवं कौशल विकास,
          एम.एस.एम.ई नीति से सम्बंधित परामर्श, एम.एस.एम.ई सम्बंधित समाचार, खबर ,
          योजनायों का जानकारी के साथ साथ उद्यमित के जिला, राज्य और राष्ट्रीय
          स्तर पर पुरुस्कार प्रदान करने की व्यवस्था कर रही है।
        </p>
        <p className="card-text">
          <em>
            <b>
              <span style={{ color: "#e22d35" }}>
                उद्यमित अभियान का उद्येश्य " उद्यमित भारत" के उपलक्ष्य को
                प्राप्त करने के लिए रचनात्मक एवं नवप्रवार्तित विचारों के साथ बड़े
                पैमाने पर उद्यमित बनाना है ।
              </span>
            </b>
          </em>
        </p>

        <br />
        <br />

        {/* <div class='today_vaccination'>
          <i></i>
          <div class='vaccine-live-counts'>24,31,341</div>
        </div> */}
      </div>
      {/* <div className="card-body">
        <h5 className="card-title">Employability</h5>
        <p className="card-text">
          SEED Program’s primary mission is to accelerate the economic
          development in emerging economies and drive high-value job creation
          through entrepreneurship, innovation and skills development. SEED
          Program’s Employability empowers students to learn the on-demand
          skills by providing trainings and pre-placement job offers.
        </p>
        <a href="#">
          Read more <i class="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>

      <div className="card-body">
        <h5 className="card-title">Entrepreneurship</h5>
        <p className="card-text">
          In our Entrepreneurship Support Program, we support new entrepreneurs
          to start their businesses. In this way we are changing job seekers to
          job creators where more people will get jobs and unemployability will
          be vanished in upcoming time. Our Entrepreneurship Support Program
          will help new startups to grow and expand their business. We guide new
          entrepreneurs for fund raising and other important tasks that are
          required for the success of a business. The aim of our program is to
          spread the Entrepreneurship.
        </p>
        <a href="#">
          Read more <i class="fas fa-long-arrow-alt-right"></i>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">Scholarship</h5>
        <p className="card-text">
          Our Scholarship Program is mainly for students who are good in their
          studies and want to pursue higher studies. We support students by
          providing them scholarships for higher studies. We provide
          scholarships based on their performance level in education.
        </p>
        <a href="#">
          Read more <i class="fas fa-long-arrow-alt-right"></i>
        </a>
      </div> */}
    </div>
  );
}

export default ContentCard;
