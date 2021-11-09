import {useEffect, useRef} from 'react';

interface AnimationOptions {
  delay: number;
  duration: number;
  function: string;
  intensity: number;
}

const beforeMount = {opacity: 0, transform: 'translateY(10px)', transition: 'all .2s'} as any;
const afterMount = {opacity: 1, transform: 'translateY(0)', transition: 'all .2s'} as any;

export function useAnimate (before, after) {
  before = before || beforeMount;
  after = after || afterMount;

  const ref = useRef(null);
  const style = ref.current ? after : before;
  return {ref, style};
}

function getOpts (opts): AnimationOptions {
  opts = opts || {};
  opts.delay = opts.delay || 0;  
  opts.function = opts.function || 'ease-in-out';  
  opts.duration = opts.duration || 0.2;  
  opts.intensity = opts.intensity || 1;  
  return opts;
}

function getTransition (opts: AnimationOptions): string {
  return `all ${opts.duration}s ${opts.delay}s`;
}

export function useFadeIn (opts?: AnimationOptions) {
  opts = getOpts(opts);

  return useAnimate({
    opacity: 0,  
    transition: getTransition(opts)
  }, {
    opacity: 1,  
    transition: getTransition(opts)
  });  
}

export function useSlideDown (opts?: AnimationOptions) {
  opts = getOpts(opts);

  return useAnimate({
    opacity: 0,  
    transform: `translateY(${10 * opts.intensity}px)`,
    transition: getTransition(opts)
  }, {
    opacity: 1,  
    transform: `translateY(${0 * opts.intensity}px)`,
    transition: getTransition(opts)
  });  
}

export function useSlideUp (opts?: AnimationOptions) {
  opts = getOpts(opts);

  return useAnimate({
    opacity: 0,  
    transform: `translateY(${-10 * opts.intensity}px)`,
    transition: getTransition(opts)
  }, {
    opacity: 1,  
    transform: `translateY(${0 * opts.intensity}px)`,
    transition: getTransition(opts)
  });  
}

export function useSlideRight (opts?: AnimationOptions) {
  opts = getOpts(opts);

  return useAnimate({
    opacity: 0,  
    transform: `translateX(${-10 * opts.intensity}px)`,
    transition: getTransition(opts)
  }, {
    opacity: 1,  
    transform: `translateX(${0 * opts.intensity}px)`,
    transition: getTransition(opts)
  });  
}

export function useSlideLeft (opts?: AnimationOptions) {
  opts = getOpts(opts);

  return useAnimate({
    opacity: 0,  
    transform: `translateX(${10 * opts.intensity}px)`,
    transition: getTransition(opts)
  }, {
    opacity: 1,  
    transform: `translateX(${0 * opts.intensity}px)`,
    transition: getTransition(opts)
  });  
}