const appMethods = require('../../public/js/app');

test('test', () => {
    // Arrange
    const testElement = document.createElement('p');

    // Act
    appMethods.toggleHide(testElement);

    // Assert
    expect(testElement.classList.contains('hide')).toBeTruthy();
})