import { WebCapture } from "./index";

test('basic', () => {
  const webCapture = new WebCapture();
  webCapture.registerCapture({click:true});
  expect(webCapture.click).toBe(true);
  
});

