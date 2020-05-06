import useMediaHook from 'use-media';

export function useMedia() {
    const isMobile = useMediaHook({ maxWidth: 768 });
    const isTab = useMediaHook({ maxWidth: 1110 });

    return { isMobile, isTab };
}
