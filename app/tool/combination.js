import React from 'react';
import Color from 'color';
import TopStories from 'json!../data/nyt-top-stories.json'; // eslint-disable-line import/no-extraneous-dependencies

const OptionSwatch = ({color}) => {
  const swatchStyle = {
    backgroundColor: color.hexString(),
    color: 'rgba(255,255,255,.5)',
    fontSize: '11px'
  };
  if (color.light()) {
    swatchStyle.color = 'rgba(0,0,0,.5)';
  }
  return <span className="dib pa2 br2 mr1" style={swatchStyle}>{color.hexString()}</span>;
};

OptionSwatch.propTypes = {
  color: React.PropTypes.object.isRequired
};

const BaseSwatch = ({color}) => {
  const baseSwatchStyle = {
    fontSize: '11px',
    border: '1px solid rgba(0,0,0,.1)',
    color: 'rgba(0,0,0,.5)'
  };
  if (color.dark()) {
    baseSwatchStyle.border = '1px solid rgba(255,255,255,.3)';
    baseSwatchStyle.color = 'rgba(255,255,255,.5)';
  }
  return (
    <span className="border-box dib pa2 br2 mr1" style={baseSwatchStyle}>{color.hexString()}</span>
  );
};

BaseSwatch.propTypes = {
  color: React.PropTypes.object.isRequired
};

const ComboDisplay = props => {
  const {title, bodyColor, headingColor, baseColor, abstract} = props;
  return (
    <div className="fl w-100 w-100-m w-50-ns pa3 pa4-ns">
      <h2 style={{color: headingColor.rgbString()}} className="mb2 ma0">{title}</h2>
      <p style={{color: bodyColor.rgbString()}} className="mt2 mb2 f6 lh-copy">
        {abstract}
      </p>
      <div className="mt3">
        <BaseSwatch color={baseColor}/>
        <OptionSwatch color={headingColor}/>
        <OptionSwatch color={bodyColor}/>
      </div>
    </div>
  );
};

ComboDisplay.propTypes = {
  title: React.PropTypes.string.isRequired,
  abstract: React.PropTypes.string.isRequired,
  bodyColor: React.PropTypes.object,
  headingColor: React.PropTypes.object,
  baseColor: React.PropTypes.object
};

function getDefaultColorOption(baseColor, options) {
  if (options.length > 0) {
    return options[0];
  }

  if (baseColor.light()) {
    return Color('rgba(0,0,0,.4)');
  }

  return Color('rgba(255,255,255,.4)');
}

class Combination extends React.Component {
  constructor(props) {
    super(props);
    this.handleSetBodyColor = this.handleSetBodyColor.bind(this);
    this.handleSetHeadingColor = this.handleSetHeadingColor.bind(this);
    const story = TopStories.results[Math.floor(Math.random() * TopStories.results.length)];
    const {body, headings, base} = props.combos;
    const headingColor = getDefaultColorOption(base, headings);
    const bodyColor = getDefaultColorOption(base, body);

    this.state = {base, headings, body, story, bodyColor, headingColor};
  }

  handleSetHeadingColor(event) {
    const el = event.target;
    const c = Color(el.getAttribute('data-value'));
    this.setState({headingColor: c});
  }

  handleSetBodyColor(event) {
    const el = event.target;
    const c = Color(el.getAttribute('data-value'));
    this.setState({bodyColor: c});
  }

  render() {
    const style = {backgroundColor: this.state.base.rgbString()};

    let headingText = 'No accessible heading options found. Try adding more colors!';
    if (this.state.headings.length === 1) {
      headingText = 'One accessible heading option available';
    } else if (this.state.headings.length > 1) {
      headingText = this.state.headings.length + ' options found.';
    }

    let bodyText = <p className="pa0 ma0">No accessible paragraph options found. <br/>Try adding more colors!</p>;
    if (this.state.body.length === 1) {
      bodyText = 'One accessible paragraph2 option available';
    } else if (this.state.body.length) {
      bodyText = this.state.body.length + ' options found.';
    }

    return (
      <div className="db" style={style}>
        <ComboDisplay
          title={this.state.story.title}
          abstract={this.state.story.abstract}
          headingColor={this.state.headingColor}
          bodyColor={this.state.bodyColor}
          baseColor={this.state.base}
          />

        <div className="fl w-100 w-100-m w-50-ns pa3 pa4-ns">
          <span style={{color: this.state.headingColor.rgbString()}} className="db mb2 f6">{headingText}</span>
          <div className="mr5-ns">
            {this.state.headings.map(result => (
              <div className="fl db br1 mr1 mb1" key={result.hexString().replace('#', '')} style={{width: '30px', backgroundColor: result.rgbString()}}>
                <div className="aspect-ratio aspect-ratio--1x1">
                  <div className="aspect-ratio--object cover pointer dim" onClick={this.handleSetHeadingColor} data-value={result.rgbString()}/>
                </div>
              </div>
            ))}
          </div>
          <div className="cf"/>
          <span style={{color: this.state.bodyColor.rgbString()}} className="db mb2 f6 mt3">{bodyText}</span>
          {this.state.body.map(result => (
            <div className="fl db br1 mr1 mb1" key={result.hexString().replace('#', '')} style={{width: '30px', backgroundColor: result.rgbString()}}>
              <div className="aspect-ratio aspect-ratio--1x1">
                <div className="aspect-ratio--object cover pointer dim" onClick={this.handleSetBodyColor} data-value={result.rgbString()}/>
              </div>
            </div>
          ))}
          <div className="cf"/>
        </div>
        <div className="cf"/>
      </div>
    );
  }
}

Combination.propTypes = {
  combos: React.PropTypes.object.isRequired
};

export default Combination;
