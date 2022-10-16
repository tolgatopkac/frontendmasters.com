import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipSelectContainer';

import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemForm } from './NewItemForm';
import { Summary } from './Summary';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';

const Calculator = () => {
  return (
    <Card>
      <NewItemFormContainer />
      <MenuItemsContainer />
      <TipSelectContainer />
      <Summary />
    </Card>
  );
};

export default Calculator;
