/// <reference types="react" />
interface AnimationOptions {
    delay: number;
    duration: number;
    function: string;
    intensity: number;
}
export declare function useAnimate(before: any, after: any): {
    ref: import("react").MutableRefObject<any>;
    style: any;
};
export declare function useFadeIn(opts?: AnimationOptions): {
    ref: import("react").MutableRefObject<any>;
    style: any;
};
export declare function useSlideDown(opts?: AnimationOptions): {
    ref: import("react").MutableRefObject<any>;
    style: any;
};
export declare function useSlideUp(opts?: AnimationOptions): {
    ref: import("react").MutableRefObject<any>;
    style: any;
};
export declare function useSlideRight(opts?: AnimationOptions): {
    ref: import("react").MutableRefObject<any>;
    style: any;
};
export declare function useSlideLeft(opts?: AnimationOptions): {
    ref: import("react").MutableRefObject<any>;
    style: any;
};
export {};
