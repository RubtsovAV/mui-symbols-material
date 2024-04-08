'use client';
import * as React from 'react';
import {SvgIcon, SvgIconProps} from '@mui/material';

/**
 * @source https://github.com/mui/material-ui/packages/mui-material/src/utils/createSvgIcon.js
 */
export default function createSvgIcon(path: React.ReactNode, displayName: string, defaultProps: Partial<SvgIconProps> = {}) {
  function Component(props: SvgIconProps, ref: React.ForwardedRef<SVGSVGElement>) {
    return (
      <SvgIcon data-testid={`${displayName}Icon`} ref={ref} {...defaultProps} {...props}>
        {path}
      </SvgIcon>
    );
  }

  //@ts-ignore
  if (process.env.NODE_ENV !== 'production') {
    // Need to set `displayName` on the inner component for React.memo.
    // React prior to 16.14 ignores `displayName` on the wrapper.
    Component.displayName = `${displayName}Icon`;
  }

  //@ts-ignore
  Component.muiName = SvgIcon.muiName;

  return React.memo(React.forwardRef(Component));
}