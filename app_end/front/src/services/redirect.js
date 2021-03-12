import { useHistory } from 'react-router-dom';

function RedirectRooms() {
  Redirect('rooms');
}

function RedirectChat(chatName) {
  Redirect(`chat/${chatName}`);
} 

function RedirectNickname() {
  Redirect('choose-nickname');
}

function RedirectWelcome() {
  Redirect('welcome');
}

function Redirect(loc) {
  const history = useHistory();
  history.push(`/${loc}`);
}

export {
  RedirectNickname,
  RedirectChat,
  RedirectRooms,
  RedirectWelcome
}
