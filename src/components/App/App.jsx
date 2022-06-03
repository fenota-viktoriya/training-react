import { Container } from './App.styled';
import Counter from 'components/Counter/Counter';
import Dropdowns from 'components/Dropdown';
import Feedback from 'components/Feedback/Feedback';

export const App = () => {
  return (
    <Container>
      <Counter iValue={10} />
      <Dropdowns />
      <Feedback />
    </Container>
  );
};
