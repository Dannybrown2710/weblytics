import SyntheticClick from "./index";

test('it should capture all click events', () => {
  const syntheticClick = new SyntheticClick();
  const btn = document.createElement('button');
  btn.id = 'demo';
  btn.innerHTML = "Demo button";
  btn.click();
  expect(syntheticClick.getEvents()).toContain({'demo':1});
});

