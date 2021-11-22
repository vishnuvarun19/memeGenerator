import {Component} from 'react'
import {
  InputElement,
  FormElement,
  ContainerElement,
  LabelElement,
  SelectElement,
  OptionElement,
  ButtonElement,
  Heading,
  Image,
  ParaElement,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    ImageUrl: '',
    TopText: '',
    ImageTopText: '',
    BottomText: '',
    ImageBottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    ImageFontSize: '',
  }

  renderImageElement = () => {
    const {ImageUrl, ImageTopText, ImageBottomText, ImageFontSize} = this.state
    return (
      <Image ImageUrl={ImageUrl} data-testid="meme">
        <ParaElement fontSize={ImageFontSize}>{ImageTopText}</ParaElement>
        <ParaElement fontSize={ImageFontSize}>{ImageBottomText}</ParaElement>
      </Image>
    )
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {imageUrl, TopText, BottomText, fontSize} = this.state

    this.setState({
      ImageUrl: imageUrl,
      ImageBottomText: BottomText,
      ImageTopText: TopText,
      ImageFontSize: fontSize,
      imageUrl: '',
      TopText: '',
      BottomText: '',
      fontSize: '',
    })
  }

  onChangeFontSize = event => {
    this.setState({fontSize: event.target.value})
  }

  onChangeImageUrl = event => {
    this.setState({imageUrl: event.target.value})
  }

  onChangeTopText = event => {
    this.setState({TopText: event.target.value})
  }

  onChangeBottomText = event => {
    this.setState({BottomText: event.target.value})
  }

  render() {
    const {fontSize, imageUrl, TopText, BottomText} = this.state

    return (
      <ContainerElement>
        <FormElement onSubmit={this.onSubmitForm}>
          <Heading>Meme Generator</Heading>

          <LabelElement htmlFor="ImageUrl">Image URL</LabelElement>
          <InputElement
            id="imageUrl"
            value={imageUrl}
            onChange={this.onChangeImageUrl}
            placeholder="Enter the Image URL"
          />

          <LabelElement htmlFor="TopText">Top Text</LabelElement>
          <InputElement
            id="TopText"
            value={TopText}
            onChange={this.onChangeTopText}
            placeholder="Enter the Top Text"
          />

          <LabelElement htmlFor="bottomText">Bottom Text</LabelElement>
          <InputElement
            id="bottomText"
            value={BottomText}
            onChange={this.onChangeBottomText}
            placeholder="Enter the Bottom Text"
          />

          <LabelElement htmlFor="FontSize">Font Size</LabelElement>
          <SelectElement
            id="FontSize"
            value={fontSize}
            onChange={this.onChangeFontSize}
          >
            {fontSizesOptionsList.map(eachItem => (
              <OptionElement key={eachItem.id} value={eachItem.optionId}>
                {eachItem.displayText}
              </OptionElement>
            ))}
          </SelectElement>
          <ButtonElement type="submit">Generate</ButtonElement>
        </FormElement>
        {this.renderImageElement()}
      </ContainerElement>
    )
  }
}
export default MemeGenerator
