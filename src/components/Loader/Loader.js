import { CircleLoader } from 'react-spinners';

function Loader() {
  const accentColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue('--accent-main');
  const loaderCSSOverride = {
    marginTop: '100px',
    marginLeft: 'auto',
    marginRight: 'auto',
  };
  return (
    <CircleLoader
      color={accentColor}
      size={150}
      cssOverride={loaderCSSOverride}
    />
  );
}

export default Loader;
