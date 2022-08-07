import { HeaderResponsive } from 'src/components/Header/Header';

export default function HomePage() {
  return (
    <>
      <HeaderResponsive
        links={[
          {
            label: 'Home',
            link: '/',
          },
          {
            label: 'About',
            link: '/about',
          },
        ]}
      />
    </>
  );
}
