type RunFn = () => Promise<void>;

const Util = {
    delayRun: async (runFn: RunFn, delayMilliSecond: number): Promise<void> => {
        const p = new Promise<void>((resolve, reject) => {
          setTimeout(async () => {
            try{
              await runFn();
              resolve();
            }
            catch(e){
              reject(e);
            }
  
          }, delayMilliSecond);
        });
  
        return p;
    },
    sleep: (time: number) => new Promise(resolve => setTimeout(resolve, time))
}

export default Util;