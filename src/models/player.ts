/// <reference types="cordova-plugin-camera" />

export class Player {
  number: number;
  nickName: string;
  avatarBase64Image: string;

  constructor(
    { playerNumber,
      nickName,
      avatarBase64Image
    }:
      { playerNumber?: number,
        nickName?: string,
        avatarBase64Image?: string
      })
  {
    this.number = playerNumber;
    this.nickName = nickName;
    this.avatarBase64Image = avatarBase64Image;
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

  public static fromLocalStorage(nickname: string): Player | null {
    const strPlayerInfos = localStorage.getItem(`player-${nickname}`);

    if (!strPlayerInfos) {
      return null;
    }

    try {
      const parsedPlayerInfos = JSON.parse(strPlayerInfos);

      return new Player({...parsedPlayerInfos})
    } catch (_) {
      return null;
    }
  }

  saveToLocalStorage() {
    localStorage.setItem(`player-${this.nickName}`, JSON.stringify({
      nickName: this.nickName,
      avatarBase64Image: this.avatarBase64Image
    }))
  }
}
