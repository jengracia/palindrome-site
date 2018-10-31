module.exports = Phrase;

// Reverses a string
function reverse(string) {
  return Array.from(string).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;


  // Returns the letters in the content.
  this.letters = function letters() {
    return (this.content.match(/[a-z]/gi) || []).join("");
  }

  // Returns content processed for palindrome testing
  this.processedContent = function processedContent() {
    return this.letters().toLowerCase();
  }

  // Returns true if phrase is a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === reverse(this.processedContent());
  }
}
