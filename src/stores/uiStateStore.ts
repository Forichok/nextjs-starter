import { types } from 'mobx-state-tree';

const StatusDialog = types
  .model('StatusDialog', {
    message: types.string,
    title: types.string,
    isOpen: types.boolean,
  })
  .actions((self) => ({
    setData: (isOpen: boolean, title: string, message: string) => {
      self.isOpen = isOpen;
      self.title = title;
      self.message = message;
    },
  }));

export const UiStateStore = types
  .model('UiStateStore')
  .props({
    isLoading: types.boolean,
    statusDialogState: StatusDialog,
  })
  .actions((self) => ({
    setLoading: (isLoading: boolean) => {
      self.isLoading = isLoading;
    },
  }));

export const initialUiStateStoreState = {
  isLoading: false,
  statusDialogState: {
    isOpen: false,
    title: '',
    message: '',
  },
};
