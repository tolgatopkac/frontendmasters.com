import { MenuItems } from '../components/MenuItems';
import { connect } from 'react-redux';

const mapStateProps = (state) => {
  return {
    items: state.items
  };
};

export const MenuItemsContainer = connect(mapStateProps)(MenuItems);
