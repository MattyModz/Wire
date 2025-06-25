import { motion, AnimatePresence } from "framer-motion";
import React from "react";
const info = [
  "ian Hewitt",
  "Olivia McMurray",
  "Anne Worsley",
  "Catherine Marie",
  "Mel Emmo",
];

const Body = [
  "Great guy and fantastic job ! 👍 thank you Mike - will use again",
  "Fantastic service, would highly recommend. That good were going to have more work done 👌",
  "Mike, is punctual, courteous and his attention to detail is first class.",
  "Brilliant, prompt service. Will look no further from now on, highly recommended!",
  "Great job, came out next day and very professional thanks",
];
const variants = {
  visible: {
    opacity: 1,
    x: 2,
    transition: {
      // duration: 1
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      // duration: 0
    },
  },
};

export class Review extends React.Component {
  state = { isVisible: true, current: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { current } = this.state;
      this.setState({ current: current === info.length - 1 ? 0 : current + 1 });
    }, 4000);
  }
  s;
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { current } = this.state;

    return (
      <div className="font-inter mb-5 max-w-2xl">
        <AnimatePresence initial={false} exitBeforeEnter>
          <motion.div
            className="animated-text w-full"
            initial="hidden"
            animate={this.state.isVisible ? "visible" : "hidden"}
            exit="hidden"
            variants={variants}
            key={current}
          >
            <div className="flex flex-col w-full h-full    ">
              <div className="md:text-l  font-bold font-interr bg-blue-50 text-xl p-4 rounded-xl ">
                <div>
                  {" "}
                  <span className="text-yellow-300  ">★★★★★</span>
                </div>
                {Body[current]}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    );
  }
}
