import { starshipsActions } from "../actions";
import expectExport from "expect";

describe("starships actions:", () => {
  test("startFetching", () => {
    expectExport(starshipsActions.startFetching()).toMatchSnapshot();
  });
  test("stopFetching", () => {
    expectExport(starshipsActions.stopFetching()).toMatchInlineSnapshot(`
      Object {
        "type": "STARSHIPS_STOP_FETCHING",
      }
    `);
  });
  test("fill", () => {
    expectExport(starshipsActions.fill()).toMatchSnapshot();
  });
  test("fetchAsync", () => {
    expectExport(starshipsActions.fetchAsync()).toMatchSnapshot();
  });
});
