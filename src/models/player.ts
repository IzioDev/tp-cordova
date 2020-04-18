/// <reference types="cordova-plugin-camera" />

export class Player {
  number: number;
  avatarBase64Image: string;

  constructor(playerNumber: number) {
    this.number = playerNumber;
  }

  async takeAvatarPicture(): Promise<string> {
    return new Promise((resolve, reject) => {
      window.navigator.camera.getPicture(
        (base64Image) => {
          this.avatarBase64Image = base64Image;
          resolve(base64Image);
        },
        (errorMessage) => reject(errorMessage),
        {
          allowEdit: true,
        }
      );
    });
  }
}
