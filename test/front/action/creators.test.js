import * as api from "action/api";
import { apiFailed, usersUpdated, usersFetch } from "front/action/creators";

afterEach(() => jest.clearAllMocks());

describe("front/action/creators", () => {
  describe("#apiFailed", () => {
    it("creates an API_FAILED action", () => {
      const action = apiFailed();

      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });

  describe("#usersUpdated", () => {
    it("creates an USERS_UPDATED action", () => {
      const users = [1, 2, 3];
      const action = usersUpdated(users);

      expect(action).toBeAnAction();
      expect(action).toMatchSnapshot();
    });
  });

  describe("#usersFetch", () => {
    it("creates a thunk", () => {
      expect(usersFetch()).toBeAThunk();
    });

    it("dispatches success actions", async () => {
      const apiFetch = jest.spyOn(api, "fetchUsers").mockReturnValueOnce(Promise.resolve("values"));
      const consoleError = jest.spyOn(console, "error");
      const dispatch = jest.fn();

      await usersFetch()(dispatch);

      expect(apiFetch).toHaveBeenCalledTimes(1);

      expect(consoleError).not.toHaveBeenCalled();

      expect(dispatch).toHaveBeenCalledTimes(3);
      expect(dispatch.mock.calls).toMatchSnapshot();
    });

    it("dispatches success actions", async () => {
      const apiFetch = jest.spyOn(api, "fetchUsers").mockReturnValueOnce(Promise.reject("reason"));
      const consoleError = jest.spyOn(console, "error").mockImplementation(() => {});
      const dispatch = jest.fn();

      await usersFetch()(dispatch);

      expect(apiFetch).toHaveBeenCalledTimes(1);

      expect(consoleError).toHaveBeenCalledTimes(1);
      expect(consoleError).toHaveBeenCalledWith("Fetch failed!", "reason");

      expect(dispatch).toHaveBeenCalledTimes(2);
      expect(dispatch.mock.calls).toMatchSnapshot();
    });
  });
});
