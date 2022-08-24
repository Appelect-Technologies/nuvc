import React from 'react'
const { useState, useEffect } = React
const width = window.innerWidth

const Maquree = ({ title, text }) => {
  const [pos, setPos] = useState(0)
  const [run, setRun] = useState(true)
  const scrollEff = () => {
    if (run) setPos((p) => (p < width ? p + 1 : -width))
  }

  useEffect(() => {
    const tm = setTimeout(scrollEff, 10)
    return () => clearTimeout(tm)
  }, [pos])

  const onMouseEnter = (e) => {
    // console.log("mouse enter");
    setRun(false)
  }

  const onMouseLeave = (e) => {
    // console.log("mouse leave");
    setRun(true)
    setPos(pos + 1) // to trigger useEffect
  }

  const styles = {
    position: 'relative',
    fontSize: '1em',
    right: pos + 'px',
    color: '#ffeb3b',
  }

  //background: "#d51906"

  return (
    <h1 style={styles} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <mark>
        {title} {text}
      </mark>
    </h1>
  )
}

function Headlines() {
  return (
    <div
      className='top-container'
      style={{ background: 'red', display: 'flex' }}
    >
      <marquee behavior='scroll' direction='left' scrollamount='2'>
        <Maquree
          title='उद्यमित'
          text='युवा की डोर, उद्यमित की ओर आत्मनिर्भर युवा : आत्मनिर्भर भारत 5 ट्रिलियन अर्थव्यवस्था की ओर नया भारत'
        />
      </marquee>
    </div>

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
  )
}

export default Headlines
