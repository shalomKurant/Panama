export const eventBuilder = {
    on(event: any, callback: (e: any) => void) {
        document.addEventListener(event, (e) => callback(e.detail));
    },
    dispatch(event: any, data: any) {
        document.dispatchEvent(new CustomEvent(event, { detail: data }));
    },
    remove(event: any, callback: (e: any) => void) {
        document.removeEventListener(event, callback);
    }
  };