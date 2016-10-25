import Color from 'color'

var ColorUtil = {
  getAccessibleCombos(palette, rating){
    console.log('getAccessibleCombos', palette, rating)
    let options = [];
    let i = 0;
    palette.map((result, index) => {
      options.push({
        base: result,
        headings: this.findHeadings(result, palette, rating),
        body: this.findBody(result, palette, rating)
      })
    })
    return options;
  },
  findHeadings(base, palette, rating){
    let results = [];
    palette.map((c) => {
      if(rating == 'AAA' && c.contrast(base) >= 4.5){
        results.push(c);
      }else if(rating == 'AA' && c.contrast(base) >= 3){
        results.push(c);
      }
    })
    return results
  },
  findBody(base, palette, rating){
    let results = [];
    palette.map((c) => {
      if(rating == 'AAA' && base.contrast(c) >= 7){
        results.push(c);
      }else if(rating == 'AA' && base.contrast(c) >= 4.5){
        results.push(c);
      }
    })
    return results
  }
}

export {
  ColorUtil
}
