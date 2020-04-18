/// <reference types="cordova-plugin-camera" />

export class Player {
  number: number;
  avatarBase64Image: string;

  constructor(playerNumber: number) {
    this.number = playerNumber;
  }

  async takeAvatarPicture(): Promise<string> {
    const clientWidth =
      window.innerWidth && document.documentElement.clientWidth
        ? Math.min(window.innerWidth, document.documentElement.clientWidth)
        : window.innerWidth ||
          document.documentElement.clientWidth ||
          document.getElementsByTagName('body')[0].clientWidth;

    const scrollHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );

    return new Promise((resolve, reject) => {
      window.navigator.camera.getPicture(
        (base64Image) => {
          this.avatarBase64Image = base64Image;
          resolve(base64Image);
        },
        (errorMessage) => reject(errorMessage),
        {
          allowEdit: true,
          targetWidth: clientWidth / 4,
          targetHeight: scrollHeight / 4,
        }
      );
    });
  }
}
