import { Selector } from "testcafe";
import enJSON from "../../src/localization/en.json";

import getTestURL from "./test_url";
const testURL = getTestURL();

fixture("My fixture")
  .page `${testURL}`

test("Home title ", async (t) => {
  await t
    .expect(Selector("h2").innerText).eql(enJSON.home.title)
});
