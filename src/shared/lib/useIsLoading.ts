import type { Ref } from 'vue';
import { ref } from 'vue';

interface IUseIsLoading {
  isLoading: Ref<boolean>;
  startLoading(): void;
  finishLoading(): void;
}

export function useIsLoading(init = false): IUseIsLoading {
  const isLoading = ref(init);

  const startLoading = () => {
    isLoading.value = true;
  };

  const finishLoading = () => {
    isLoading.value = false;
  };

  return {
    isLoading,
    startLoading,
    finishLoading,
  };
}
