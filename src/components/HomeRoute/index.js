import {Link} from 'react-router-dom'
import {
  HomeContainer,
  Logo,
  Welcome,
  Caption,
  Button,
  Meetup,
} from './styledComponents'

const HomeRoute = props => (
  <HomeContainer>
    <Logo
      src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
      alt="website logo"
    />
    <Welcome>Welcome to Meetup</Welcome>
    <Caption>Please register for the topic</Caption>
    <Link to="/register">
      <Button type="button">Register</Button>
    </Link>
    <Meetup
      src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
      alt="meetup"
    />
  </HomeContainer>
)

export default HomeRoute
