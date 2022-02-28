import dynamic from 'next/dynamic';
import { NavButton } from '@/components/pages/TopBar';
import { Button } from '@/components/base/StyledComponents';
import { useState } from 'react';
import SignDialog from '@/dialogs/SignDialog';

const BasePage = dynamic(() => import('@/components/pages/BasePage'));

const navButtons: ReadonlyArray<NavButton> = [
  { title: 'Что доставляем?', link: '#what' },
  // { title: 'Сравнить предложение', link: '#compare' },
  { title: 'О компании', link: '#about' },
  { title: 'Контакты', link: '#contacts' },
];

const Home = () => {
  const [showSignDialog, setShowSignDialog] = useState(true);

  return (
    <BasePage navButtons={navButtons}>
      <Button onClick={() => setShowSignDialog(true)}></Button>
      <SignDialog
        isOpen={showSignDialog}
        title="Подписать"
        buttonTitle="Подписать"
      />
    </BasePage>
  );
};

export default Home;
