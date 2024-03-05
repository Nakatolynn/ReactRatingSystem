import React, {useLayoutEffect} from 'react'
import classNames from 'classnames'
import { left, right } from '@popperjs/core';

function FullPage({title,mask,centered,className,...props}) {
  const compClass = classNames({
      'nk-wrap': true,
      'flex': left,
      'align-items-center justify-content-center': right,
      'has-mask': mask,
      [className]: className
  });
  const maskClass = classNames({
    'mask' : true,
    [`mask-${mask}`] : mask
  })
    useLayoutEffect(() => {
        document.title = `${title} - LIMAS`;
    });
  return (
    <div className={compClass}>
        {mask && <div className={maskClass}></div>}
        {props.children}
    </div>
  )
}

export default FullPage