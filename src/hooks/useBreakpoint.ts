import { useMediaQuery } from '@mantine/hooks';

const useBreakpoint = () => {
  const isDesktop = useMediaQuery('(min-width: 1440px)');

  const isTablet = useMediaQuery(`(min-width: 768px) and (max-width: ${1440 - 1}px)`);

  return { isDesktop, isTablet };
};

export default useBreakpoint;
