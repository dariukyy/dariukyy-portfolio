import styled from "styled-components";
import NavItem from "./NavItem";
import { motion } from "framer-motion";
import { navLinks } from "../../data/navLinks";
import useMediaQuery from "../../hooks/useMediaQuery";

const NavList = styled.ul`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;
  /* align-items: */
`;

function MainNav() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      x: -100,
    },
    animate: (id: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.09 * id,
        type: `${!isMobile} ? 'tween': 'none'`,
      },
    }),
  };

  return (
    <NavList>
      {navLinks.map((link) => (
        <motion.li
          style={{ width: "100%", height: "auto" }}
          initial={fadeInAnimationVariants.initial}
          animate={fadeInAnimationVariants.animate(link.id)}
          custom={link.id}
        >
          <NavItem
            key={link.id}
            to={link.to}
            icon={link.icon}
            label={link.label}
          />
        </motion.li>
      ))}
    </NavList>
  );
}

export default MainNav;
