import { useEffect } from 'react'

import NProgress from 'nprogress'
import "nprogress/nprogress.css"
/* eslint-disable-next-line */

export function TopProgressBar() {
  useEffect(() => {
    NProgress.start();

    return () => {
      NProgress.done();
    };
  });

  return null;
}

export default TopProgressBar;
