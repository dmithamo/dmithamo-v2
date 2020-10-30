import React from 'react';
import styled from 'styled-components';

type PerfectCenterProps = {
  children: JSX.Element | JSX.Element[] | string;
};
const PerfectCenter: React.FC<PerfectCenterProps> = ({
  children,
}: PerfectCenterProps) => {
  return <StyledPerfectCenter>{children}</StyledPerfectCenter>;
};

const StyledPerfectCenter = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default PerfectCenter;
