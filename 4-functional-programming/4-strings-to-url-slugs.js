// Only change code below this line
function urlSlug(title) {
  return title.trim().split(/\W+/).map(item => item.toLowerCase()).join('-');
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

/* TESTS
urlSlug("Winter Is Coming") should return the string winter-is-coming.

urlSlug(" Winter Is  Coming") should return the string winter-is-coming.

urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone") should return the string a-mind-needs-books-like-a-sword-needs-a-whetstone.

urlSlug("Hold The Door") should return the string hold-the-door
*/