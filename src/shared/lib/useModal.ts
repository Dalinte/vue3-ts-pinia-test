import type { Ref } from 'vue';
import { ref } from 'vue';

interface IUseModal {
  isShow: Ref<boolean>;
  closeModal(): void;
}

export function useModal(init = false): IUseModal {
  const isShow = ref(init);

  const closeModal = () => {
    isShow.value = false;
  };

  return {
    isShow,
    closeModal,
  };
}
