import { ListItem } from '../Components/Types';

const items: ListItem[] = [
    {
        content: [
          { text: 'When you use the following code before the name of a', emphasis: false },
          { text: 'function', emphasis: true },
          { text: 'you can', emphasis: false },
          { text: 'change', emphasis: true },
          { text: 'the name when you', emphasis: false},
          { text: 'import', emphasis: true },
          { text: 'the function into another file.', emphasis: false },
          { text: 'export default function', code: true },
        ],
      },
      {
        content: [
          { text: 'When', emphasis: false },
          { text: 'exporting', emphasis: true },
          { text: 'a', emphasis: false },
          { text: 'function', emphasis: true },
          { text: 'you can', emphasis: false },
          { text: 'change', emphasis: true },
          { text: 'the name of the', emphasis: false },
          { text: 'function', emphasis: true },
          { text: 'by using', emphasis: false },
          { text: 'curly brackets(braces)', emphasis: true },
          { text: 'in conjuction with the', emphasis: false },
          { text: 'as', emphasis: true },
          { text: 'keyword to specify the', emphasis: false },
          { text: 'new name', emphasis: true },
          { text: 'of the', emphasis: false },
          { text: 'function', emphasis: true },
          { text: 'after the', emphasis: false },
          { text: 'original name', emphasis: true },
          { text: 'and the', emphasis: false },
          { text: 'as', emphasis: true },
          { text: 'keyword inside of the', emphasis: false },
          { text: 'curly brackets', emphasis: true },
          { text: 'export { originalFunctionName as newFunctionName }  ', code: true },
        ],
      },
      {
        content: [
          { text: 'You can use the following', emphasis: false },
          { text: 'method', emphasis: true },
          { text: 'to', emphasis: false },
          { text: 'generate', emphasis: true },
          { text: 'a new', emphasis: false },
          { text: 'array', emphasis: true },
          { text: 'from the', emphasis: false },
          { text: 'objects', emphasis: true },
          { text: 'or', emphasis: false },
          { text: 'items', emphasis: true },
          { text: 'you defined in the original array', emphasis: false },
          { text: 'everytime', emphasis: true },
          { text: `the following method's`, emphasis: false },
          { text: 'callback', emphasis: false },
          { text: 'returns', emphasis: true },
          { text: 'true', emphasis: false },
          { text: '.map()', code: true },
        ],
      },
      {
        content: [
          { text: '', emphasis: true },
          { text: '', emphasis: false },
          { text: '', emphasis: true },
          { text: '', emphasis: false },
        ],
      },
      {
        content: [
          { text: '', emphasis: true },
          { text: '', emphasis: false },
          { text: '', emphasis: true },
          { text: '', emphasis: false },
        ],
      },
];

export default items;
