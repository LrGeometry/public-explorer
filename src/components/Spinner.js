import React from 'react';
import Spinner from "react-spinner-material";

const SpinnerComp = ({ size, spinnerColor, spinnerWidth, visibility }) => (
     <div className ="root">
        <Spinner
          size={size}
          spinnerColor={spinnerColor}
          spinnerWidth={spinnerWidth}
          visible={true}
        />
      </div>
);

export default SpinnerComp;
