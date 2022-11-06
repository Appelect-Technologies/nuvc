import React from "react";
const { useState, useEffect } = React;
const width = window.innerWidth;

const Maquree = ({ title, text }) => {
  const [pos, setPos] = useState(0);
  const [run, setRun] = useState(true);
  const scrollEff = () => {
    if (run) setPos((p) => (p < width ? p + 1 : -width));
  };

  useEffect(() => {
    const tm = setTimeout(scrollEff, 10);
    return () => clearTimeout(tm);
  }, [pos]);

  const onMouseEnter = (e) => {
    // console.log("mouse enter");
    setRun(false);
  };

  const onMouseLeave = (e) => {
    // console.log("mouse leave");
    setRun(true);
    setPos(pos + 1); // to trigger useEffect
  };

  const styles = {
    position: "relative",
    fontSize: "1em",
    right: pos + "px",
    color: "#0098ff",
  };

  //background: "#d51906"

  return (
    <h1 style={styles} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <mark>
        {title} {text}
      </mark>
    </h1>
  );
};

function Headlines() {
  return (
    <div class="alert" style={{ backgroundColor: "#a6c3d1", display: "flex" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#2e5162"
        class="bi bi-exclamation-diamond"
        viewBox="0 0 16 16"
        color="#2e5162"
      >
        <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
      </svg>
      <marquee behavior="scroll" direction="left">
        <h5 style={{ color: "#2e5162", fontWeight: "bold" }}>
          {" "}
          Syllabus is uploaded and live here <a href="/syllabus">Syllabus</a>
        </h5>
      </marquee>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="#2e5162"
        class="bi bi-exclamation-diamond"
        viewBox="0 0 16 16"
        color="#2e5162"
      >
        <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.482 1.482 0 0 1 0-2.098L6.95.435zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" />
        <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
      </svg>
    </div>
    // <div
    //   className="top-container"
    //   style={{ background: "#86c4ee", display: "flex" }}
    // >
    //   <marquee behavior="scroll" direction="left" scrollamount="2">
    //     <Maquree
    //       title=""
    //       text="Syllabus Will be Updated on Monday,24 October 2022"
    //     />
    //   </marquee>
    // </div>

    // <div className="top-container">
    //   <marquee
    //     behavior="scroll"
    //     direction="left"
    //     scrollamount="4"
    //     onMouseOver="this.stop();"
    //     onMouseOut="this.start();"
    //     style={{ background: "#d51906", color: "#ffffff" }}
    //   >
    //     <div className="top-left">
    //       युवा की डोर, उद्यमित की ओर आत्मनिर्भर युवा : आत्मनिर्भर भारत 5
    //       ट्रिलियन अर्थव्यवस्था की ओर नया भारत
    //       {/* <div className="text-right">
    //         स्वावलंबन अभियान (Mission Swavalamban)
    //       </div> */}
    //       {/* भारत सरकार <div className="text-right">GOVERNMENT OF INDIA</div> */}
    //     </div>
    //     <div className="top-right"></div>
    //   </marquee>
    // </div>
  );
}

export default Headlines;
