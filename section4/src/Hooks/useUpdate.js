import { useRef, useEffect } from 'react';

export default function useUpdate(cb) {
  const mount = useRef(false);

  useEffect(() => {
    if(!mount.current) {
      mount.current = true;
      return ;
    }
    cb();
  });
}