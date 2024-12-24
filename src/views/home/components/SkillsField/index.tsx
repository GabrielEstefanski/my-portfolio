import styled from "styled-components";
import FieldBox from "./Box";
import FadeInOnScroll from "../../../../components/AnimatedContainer";

const Section = styled.section`
  margin-top: -18rem;
  padding-bottom: 1rem;
  padding: 5rem 1.5rem;
`;

const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;

  @media screen and (min-width: 1408px) {
    max-width: 1344px;
  }
`;

export default function SkillsField() {
  return (
    <Section id="skills">
      <FadeInOnScroll threshold={0.1}>
        <Container>
          <FieldBox/>
        </Container>
      </FadeInOnScroll>
    </Section>
  );
}
