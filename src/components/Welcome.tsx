import Modal from './Modal';

import { useState } from 'preact/hooks';


const Welcome = () => {
  const [dismissed, setDismissed] = useState(false);
  const [step, setStep] = useState(0);
  const [disable, setDisable] = useState(false);

  return (
    <>
      <Modal dismissed={dismissed} normal={disable} onSubmit={() => {
        setStep(step + 1);
        setDisable(true);
      }} onCancel={() => setDismissed(true)}>
        {
          (() => {
            switch (step) {
              case 0: {
                return (<div className={"text-black text-center"}>
                  <h1 className={"py-2 font-bold"}>
                    Welcome to Warp!
                  </h1>
                  <span>Fast and secure file transfer</span>
                </div>)

              }

              case 1: {
                return (<div className={"text-black text-center"}>
                  <h1 className={"py-2 font-bold"}>
                    Introduction
                  </h1>
                  <span>
                    Warp makes file transfer simple. To get started, both parties need to install Warp on their devices.
                    After selecting a file to transmit, the sender needs to tell the receiver the displayed transmit code. this is preferably done via a secure communication channel.
                    When the receiver has entered the code, the file transfer can begin.
                    For more information on how to use Warp, open the Help pages from the menu.
                  </span>
                  <button onClick={() => setDismissed(true)} className={"my-2 bg-sky-400 rounded-lg"}>Get Started using warp</button>
                </div>)
              }

              default: return <div>an error occured</div>;

            }
          }).call(this)
        }
      </Modal>
    </>
  );
}

export default Welcome;
