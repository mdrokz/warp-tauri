import Modal from './Modal';

import { useState } from 'preact/hooks';


const Welcome = () => {
  const [dismissed, setDismissed] = useState(false);

  return (
    <>
      <Modal dismissed>
        <div>
          <h1>
            Welcome to Warp!
          </h1>
          <span>Fast and secure file transfer</span>
        </div>
      </Modal>
    </>
  );
}

export default Welcome;
