import Color from 'color'

var ColorUtil = {
  getAccessibleCombos(palette, rating){
    var options = [];
    var i = 0;
    palette.map((result, index) => {
      var headings = this.findHeadings(result, palette, rating)
      var body = this.findBody(result, palette, rating)
      options.push({
        base: result,
        headings: headings,
        body: body
      })
    })
    return options;
  },
  findHeadings(base, palette, rating){
    var results = [];
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
    var results = [];
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
