function findHeadings(base, palette, rating) {
  return palette.map(color => {
    if (rating === 'AAA' && color.contrast(base) >= 4.5) {
      return color;
    }

    if (rating === 'AA' && color.contrast(base) >= 3) {
      return color;
    }
    return null;
  }).filter(color => color !== null);
}

function findBody(base, palette, rating) {
  return palette.map(color => {
    if (rating === 'AAA' && base.contrast(color) >= 7) {
      return color;
    }

    if (rating === 'AA' && base.contrast(color) >= 4.5) {
      return color;
    }
    return null;
  }).filter(color => color !== null);
}

export function getAccessibleCombos(palette, rating) {
  return palette.map(result => {
    const headings = findHeadings(result, palette, rating);
    const body = findBody(result, palette, rating);
    return {base: result, headings, body};
  });
}
