import throttle from "lodash/throttle";
import { onMounted, onUnmounted, ref } from "vue";
function useScroll() {
  const isReachBottom = ref(false);

  const clientHight = ref(0);
  const scrollTop = ref(0);
  const scrollHeight = ref(0);

  const scrollListenerHandler = throttle(() => {
    clientHight.value = document.documentElement.clientHeight;
    scrollTop.value = document.documentElement.scrollTop;
    scrollHeight.value = document.documentElement.scrollHeight;
    // console.log(clientHight.value + scrollTop.value, scrollHeight.value);
    if (clientHight.value + scrollTop.value >= scrollHeight.value) {
      isReachBottom.value = true;
    }
  }, 100);

  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler);
  });

  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler);
  });

  return {
    isReachBottom,
    clientHight,
    scrollHeight,
    scrollTop,
  };
}

export default useScroll;
