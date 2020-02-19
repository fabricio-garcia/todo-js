// @ts-check
// https://www.leighhalliday.com/tagged-template-literals
/**
 * parse CSS in a String Template
 * @param {TemplateStringsArray} strings
 * @param  {...TemplateStringsArray} keys
 * @returns {String}
 */
const css = (strings, ...keys) => {
  const interleaved = keys.reduce(
    (acc, arg, index) => [...acc, arg, strings[index + 1]],
    [strings[0]],
  );

  // @ts-ignore
  return props => interleaved
    // @ts-ignore
    .map(part => (typeof part === 'function' ? part(props) : part))
    .join('');
};

export default css;
