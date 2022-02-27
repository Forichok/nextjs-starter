import { types, unprotect } from "mobx-state-tree";
import { initialUiStateStoreState, UiStateStore } from "./uiStateStore";

const rootStore = types
  .model({
    uiStateStore: UiStateStore,
  })
  .create({
    uiStateStore: UiStateStore.create(initialUiStateStoreState),
  });

unprotect(rootStore);

export default rootStore;
