import {ListItem, ButtonEl} from './styledComponents'

const LanguageItem = props => {
  const {languageDetails, updateActiveId, isActive} = props

  const {id, buttonText} = languageDetails

  const buttonBackgroundColor = isActive ? ' #db1c48' : '#ffffff'

  const buttonTextColor = isActive ? '#ffffff' : '#db1c48'

  const onClickButtonEl = () => {
    updateActiveId(id)
  }

  return (
    <ListItem>
      <ButtonEl
        type="button"
        onClick={onClickButtonEl}
        bgColor={buttonBackgroundColor}
        color={buttonTextColor}
      >
        {buttonText}
      </ButtonEl>
    </ListItem>
  )
}

export default LanguageItem
