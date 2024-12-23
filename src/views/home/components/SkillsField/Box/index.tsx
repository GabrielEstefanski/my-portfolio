import React from "react";
import styled from "styled-components";
import Column from "../../Column";
import ProgrammingColumn from "../../Columns/ProgrammingColumn";
import TechSkillsColumn from "../../Columns/TechSkillsColumn";
import SoftSkillsColumn from "../../Columns/SoftSkillsColumn";

const Box = styled.div`
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8;
  color: #141c3a;
  display: block;
  padding: 1.25rem;
`;

const ContentCentered = styled.div`
  margin-left: 0;
  margin-right: 0;
  justify-content: center;
  margin-bottom: -0.75rem;
`;

const Columns = styled.div`
  margin-left: 0;
  margin-right: 0;

  @media screen and (min-width: 769px) {
    display: flex;
  }
`;

export default function FieldBox () {
  return (
    <Box>
      <ContentCentered>
          <Columns>
            <Column>
              <ProgrammingColumn/>
            </Column>
            <Column>
              <TechSkillsColumn/>
            </Column>
            <Column>
              <SoftSkillsColumn/>
            </Column>
          </Columns>
      </ContentCentered>
    </Box>
  );
}
