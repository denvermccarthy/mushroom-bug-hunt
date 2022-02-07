// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderFriend } from '../render-utils.js';

const test = QUnit.test;

test('render friend test', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="friend"><p class="name">suzie</p><p class="emoji">😒</p></div>`;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderFriend({
        name: 'suzie',
        satisfaction: 1
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
