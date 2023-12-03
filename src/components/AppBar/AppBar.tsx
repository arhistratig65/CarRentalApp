import {
  Header,
  StyledLink,
  Navigation,
  HeadContainer,
  StyledHomeLink,
} from './AppBar.styled';
import Icons from '../../images/sprite.svg';

export default function AppBar() {
  return (
    <Header>
      <HeadContainer>
        <StyledHomeLink to="/">
          UKRAINELUXURY
          <svg width={72} height={72}>
            <use href={Icons + '#icon-icon-logo'}></use>
          </svg>
        </StyledHomeLink>
        <Navigation>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/catalog">Catalog</StyledLink>
          <StyledLink to="/favorites">Favorites</StyledLink>
        </Navigation>
      </HeadContainer>
    </Header>
  );
}
