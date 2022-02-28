import {Component} from 'react'

import LanguageItem from '../LanguageItem'

import {
  AppContainer,
  MainHeading,
  LanguageListContainer,
  ImageEl,
} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
  },
]

class LanguageGreeting extends Component {
  state = {
    activeButtonId: languageGreetingsList[0].id,
  }

  updateActiveId = id => {
    this.setState({activeButtonId: id})
  }

  render() {
    const {activeButtonId} = this.state
    const activeButtonImageId = languageGreetingsList.find(
      each => each.id === activeButtonId,
    )
    const {imageUrl} = activeButtonImageId

    return (
      <AppContainer>
        <MainHeading>Multilingual Greetings</MainHeading>
        <LanguageListContainer>
          {languageGreetingsList.map(each => (
            <LanguageItem
              key={each.id}
              languageDetails={each}
              updateActiveId={this.updateActiveId}
              isActive={each.id === activeButtonId}
            />
          ))}
        </LanguageListContainer>
        <ImageEl src={imageUrl} alt="greeting" />
      </AppContainer>
    )
  }
}

export default LanguageGreeting
