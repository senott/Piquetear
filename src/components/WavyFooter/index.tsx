/* eslint-disable react/jsx-props-no-spreading */
import React, { ReactNode } from 'react';
import { ViewProps } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { Container } from './styles';

interface WavyFooterProps extends ViewProps {
  children: ReactNode;
}

const WavyFooter: React.FC<WavyFooterProps> = ({ children }) => {
  return (
    <Container>
      <Svg
        title="Wavy footer"
        height="100%"
        width="100%"
        viewBox="0 0 1440 320"
        style={{ position: 'absolute', bottom: 120 }}
      >
        <Path
          fill="#003e1f"
          d="M0,192L30,192C60,192,120,192,180,186.7C240,181,300,171,360,144C420,117,480,75,540,90.7C600,107,660,181,720,181.3C780,181,840,107,900,106.7C960,107,1020,181,1080,181.3C1140,181,1200,107,1260,69.3C1320,32,1380,32,1410,32L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        />
      </Svg>
      {children}
    </Container>
  );
};

export default WavyFooter;
