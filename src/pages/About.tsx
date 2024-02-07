import AboutComponent from "../scenes/about/AboutComponent";

function About() {
  return <AboutComponent />;
}

export default About;

// import styled from "styled-components";
// import Option from "../scenes/about/Option";
// import { ReactNode, useState } from "react";
// import { device } from "../utils/breakpoints";
// import { AboutItem, aboutData } from "../data/about";
// import { motion } from "framer-motion";

// const StyledAbout = styled.div`
//   width: 80%;
//   height: 100%;
//   z-index: 2;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   gap: 2.4rem;
// `;

// const Box = styled.div`
//   background-color: var(--color-grey-100);
//   border: 1px solid var(--color-grey-200);
//   border-radius: var(--border-radius-md);
//   box-shadow: var(--shadow-lg);
//   padding: 2.4rem 3.2rem 3.2rem;
//   max-width: 60rem;
//   height: auto;
//   letter-spacing: 0.9px;
//   line-height: 2;
//   font-weight: 500;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: flex-start;
//   position: relative;
//   overflow: hidden;
//   z-index: 2;

//   &::before {
//     content: "";
//     position: absolute;
//     bottom: -11rem;
//     right: -2rem;
//     z-index: -1;
//     background-color: var(--color-brand-500);
//     width: 15rem;
//     height: 15rem;
//     border-radius: 50%;
//   }

//   @media ${device.mobile} {
//     width: 100%;
//     letter-spacing: 0.6px;
//     line-height: 1.7;
//     font-size: 1.3rem;
//     padding: 1.2rem 2rem 2rem;
//   }
// `;

// const OptionsContainer = styled.ul`
//   border: 1px solid var(--color-grey-100);
//   background-color: var(--color-grey-100);
//   box-shadow: var(--shadow-lg);
//   border-radius: var(--border-radius-sm);
//   padding: 0.8rem;
//   display: flex;
//   gap: 3rem;
//   justify-content: space-around;

//   @media ${device.mobile} {
//     gap: 0.5rem;
//     justify-content: space-between;
//   }
// `;

// type MotionDivProps = {
//   children: ReactNode;
// };

// const MotionDiv = ({ children }: MotionDivProps) => (
//   <motion.div
//     initial={{ opacity: 0, x: 300 }}
//     animate={{ opacity: 1, x: 0 }}
//     transition={{ duration: 0.3 }}
//   >
//     {children}
//   </motion.div>
// );

// type OptionItemProps = {
//   active: number;
//   setActive: (id: number) => void;
//   item: AboutItem;
// };

// const OptionItem = ({ item, active, setActive }: OptionItemProps) => (
//   <li>
//     <Option
//       onClick={() => setActive(item.id)}
//       active={active}
//       key={item.id}
//       item={item}
//     >
//       {item.option}
//     </Option>
//   </li>
// );

// function About() {
//   const [active, setActive] = useState(aboutData[0].id);
//   const activeItem = aboutData.find((item) => item.id === active);

//   return (
//     <StyledAbout>
//       <MotionDiv>
//         <OptionsContainer>
//           {aboutData.map((item) => (
//             <OptionItem item={item} active={active} setActive={setActive} />
//           ))}
//         </OptionsContainer>
//       </MotionDiv>
//       <Box>{activeItem?.description}</Box>
//     </StyledAbout>
//   );
// }

// export default About;
