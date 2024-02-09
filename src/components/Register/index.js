import {Component} from 'react'
import {
  HomeContainer,
  Logo,
  RegisterContainer,
  RegisterImage,
  FormContainer,
  Heading,
  Label,
  Input,
  RegisterNow,
  Select,
  Option,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

class Register extends Component {
  state = {tab: topicsList[0].displayText, inputName: ''}

  enterName = event => {
    this.setState({inputName: event.target.value})
  }

  changeTab = event => {
    this.setState({tab: event.target.value})
  }

  onRegisterForm = event => {
    event.preventDefault()

    const {history} = this.props
    history.replace('/')
  }

  render() {
    const {inputName, tab} = this.state

    return (
      <HomeContainer>
        <Logo
          src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
          alt="website logo"
        />
        <RegisterContainer>
          <RegisterImage
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <FormContainer onSubmit={this.onRegisterForm}>
            <Heading>Let us join</Heading>
            <Label htmlFor="Name">NAME</Label>
            <Input
              value={inputName}
              id="Name"
              type="text"
              placeholder="Your name"
              onChange={this.enterName}
            />
            <Label htmlFor="Topics">TOPICS</Label>
            <Select value={tab} onChange={this.changeTab}>
              {topicsList.map(each => (
                <Option key={each.id} value={each.id}>
                  {each.displayText}
                </Option>
              ))}
            </Select>
            <RegisterNow type="submit">Register Now</RegisterNow>
          </FormContainer>
        </RegisterContainer>
      </HomeContainer>
    )
  }
}

export default Register
