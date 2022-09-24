import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/reducers/contactsSlice';
import { Button, ContactName, Item, TelBtn, Wrapper } from './ContactElement.styled';

export const ContactElement = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Wrapper>
          <ContactName>{name}:</ContactName>
          <span>{phone}</span>
        <TelBtn as="a" href={`tel:${phone}`}>{' '}</TelBtn>
        <Button
          type="button"
          onClick={() => dispatch(deleteContact(id))}
        ></Button>
      </Wrapper>
    </Item>
  );
};

ContactElement.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default ContactElement;