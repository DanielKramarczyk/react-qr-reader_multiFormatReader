import * as React from 'react';

import { styles } from './styles';
import { useQrReader } from './hooks';

import { QrReaderProps } from '../types';

export const QrReader: React.FC<QrReaderProps> = ({
  videoContainerStyle,
  containerStyle,
  videoStyle,
  constraints,
  ViewFinder,
  className,
  onResult,
  videoId,
}) => {
  useQrReader({
    constraints,
    onResult,
    videoId,
  });

  return (
    <section className={className} style={containerStyle}>
      <div
        style={{
          ...styles.container,
          ...videoContainerStyle,
        }}
      >
        {!!ViewFinder && <ViewFinder />}
        <video
          muted
          id={videoId}
          style={{
            ...styles.video,
            ...videoStyle,
            transform: constraints?.facingMode === 'user' && 'scaleX(-1)',
          }}
        />
      </div>
    </section>
  );
};

QrReader.displayName = 'QrReader';
QrReader.defaultProps = {
  constraints: {
    facingMode: 'environment',
  },
  videoId: 'video',
};
